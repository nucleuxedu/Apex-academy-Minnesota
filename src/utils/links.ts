const INTERNAL: Record<string, string> = {
  "/": "/",
  "/academics": "/academics",
  "/academics/": "/academics",
  "/student-life": "/student-life",
  "/student-life/": "/student-life",
  "/get-started": "/get-started",
  "/get-started/": "/get-started",
  "/international-students": "/international-students",
  "/international-students/": "/international-students",
  "/get-started-international": "/get-started-international",
  "/get-started-international/": "/get-started-international",
  "/tuition": "/tuition",
  "/tuition/": "/tuition",
  "/about": "/about",
  "/about/": "/about",
  "/contact-us": "/contact-us",
  "/contact-us/": "/contact-us",
  "/donate": "/donate",
  "/donate/": "/donate",
  "/privacy-policy": "/privacy-policy",
  "/privacy-policy/": "/privacy-policy",
  "/athletics": "/athletics",
  "/athletics/": "/athletics",
  "/the-arts": "/the-arts",
  "/the-arts/": "/the-arts",
  "/science": "/science",
  "/science/": "/science",
  "/calendar": "/calendar",
  "/calendar/": "/calendar",
  "/core-values": "/core-values",
  "/core-values/": "/core-values",
  "/statement-of-faith": "/statement-of-faith",
  "/statement-of-faith/": "/statement-of-faith",
  "/testimonials": "/testimonials",
  "/testimonials/": "/testimonials",
  "/orchestra-and-more": "/orchestra-and-more",
  "/orchestra-and-more/": "/orchestra-and-more",
  "/orchestra-and-more-lessons": "/orchestra-and-more-lessons",
  "/orchestra-and-more-lessons/": "/orchestra-and-more-lessons",
  "/theatre-arts": "/theatre-arts",
  "/theatre-arts/": "/theatre-arts",
  "/theatre": "/theatre-arts",
  "/theatre/": "/theatre-arts",
  "/christmas-at-veritas": "/christmas-at-veritas",
  "/christmas-at-veritas/": "/christmas-at-veritas",
  "/sights-and-sounds": "/sights-and-sounds",
  "/sights-and-sounds/": "/sights-and-sounds",
  "/global-pay": "/global-pay",
  "/global-pay/": "/global-pay",
  "/international-student-cost": "/international-student-cost",
  "/international-student-cost/": "/international-student-cost",
  "/class-size": "/class-size",
  "/class-size/": "/class-size",
  "/christianformation": "/christianformation",
  "/christianformation/": "/christianformation",
  "/christian-formation": "/christianformation",
  "/christian-formation/": "/christianformation",
  "/academic-placement": "/academic-placement",
  "/academic-placement/": "/academic-placement",
  "/academic-placemen": "/academic-placement",
  "/academic-placemen/": "/academic-placement",
  "/academic-acceleration": "/academic-placement",
  "/academic-acceleration/": "/academic-placement",
  "/intentional-teaching": "/intentional-teaching",
  "/intentional-teaching/": "/intentional-teaching",
  "/caring-teachers": "/intentional-teaching",
  "/caring-teachers/": "/intentional-teaching",
  "/program/#gram": "/academics#grammar",
  "/program/#logic": "/academics#logic",
  "/program/#rhet": "/academics#rhetoric",
};

export function toAppHref(href: string): string {
  if (!href) return href;
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return href;

  try {
    const url = href.startsWith("http")
      ? new URL(href)
      : new URL(href, "https://veritasclassical.org");
    if (url.hostname.replace(/^www\./, "") !== "veritasclassical.org") return href;
    const key = `${url.pathname}${url.hash}`;
    if (INTERNAL[key]) return INTERNAL[key];
    if (INTERNAL[url.pathname]) {
      return `${INTERNAL[url.pathname]}${url.hash}`;
    }
    if (url.pathname === "/" || url.pathname === "") return `/${url.hash}`;
    return href;
  } catch {
    return href;
  }
}

export function isInternalHref(href: string): boolean {
  const mapped = toAppHref(href);
  return mapped.startsWith("/") && !mapped.startsWith("//");
}
