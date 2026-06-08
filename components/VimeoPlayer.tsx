"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type VimeoPlayerProps = {
  embedUrl: string;
  title: string;
};

type VimeoMessage = {
  event?: string;
};

export default function VimeoPlayer({ embedUrl, title }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playerOrigin = useMemo(() => {
    try {
      return new URL(embedUrl).origin;
    } catch {
      return "https://player.vimeo.com";
    }
  }, [embedUrl]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== playerOrigin) {
        return;
      }

      const data = parseVimeoMessage(event.data);

      if (data.event === "play") {
        setIsPlaying(true);
      }

      if (data.event === "pause" || data.event === "ended") {
        setIsPlaying(false);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [playerOrigin]);

  function sendVimeoCommand(method: "play" | "pause") {
    iframeRef.current?.contentWindow?.postMessage({ method }, playerOrigin);
  }

  function registerVimeoEvents() {
    const contentWindow = iframeRef.current?.contentWindow;

    if (!contentWindow) {
      return;
    }

    ["play", "pause", "ended"].forEach((eventName) => {
      contentWindow.postMessage(
        { method: "addEventListener", value: eventName },
        playerOrigin
      );
    });
  }

  function handleToggle() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    sendVimeoCommand(nextIsPlaying ? "play" : "pause");
  }

  return (
    <div className="group/player relative h-full w-full bg-brand-ink">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        onLoad={registerVimeoEvents}
        className="h-full w-full"
      />

      <button
        type="button"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={handleToggle}
        className={`absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-orange text-sm font-bold uppercase tracking-normal text-white shadow-premium transition duration-200 hover:scale-105 hover:bg-[#ef650d] focus:scale-105 focus:outline-none focus:ring-4 focus:ring-white/70 ${
          isPlaying
            ? "opacity-0 group-hover/player:opacity-100 focus:opacity-100 active:opacity-100"
            : "opacity-100"
        }`}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

function parseVimeoMessage(data: unknown): VimeoMessage {
  if (typeof data === "string") {
    try {
      return JSON.parse(data) as VimeoMessage;
    } catch {
      return {};
    }
  }

  if (typeof data === "object" && data !== null) {
    return data as VimeoMessage;
  }

  return {};
}
