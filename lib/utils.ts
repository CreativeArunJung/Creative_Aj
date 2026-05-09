export const siteConfig = {
  brandName: "Meta Growth Expert",
  calendarUrl: "https://calendly.com/YOUR_CALENDLY_LINK",
  whatsappUrl: "https://wa.me/9779807985364",
  email: "creativearunjung@gmail.com",
  formSubmitEndpoint: "https://formsubmit.co/ajax/creativearunjung@gmail.com"
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
