"use client";

export default function GlobalError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-ink text-white">
        <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
          <h1 className="text-3xl font-semibold">Something went wrong.</h1>
          <p className="mt-3 max-w-md text-white/70">
            Please try again, or return to the consultation page.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 bg-brand-orange px-5 py-3 text-sm font-semibold text-white"
          >
            Try Again
          </button>
        </main>
      </body>
    </html>
  );
}
