import NextLink from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { isInternalHref, toAppHref } from "@/utils/links";

type Props = Omit<MuiLinkProps, "href"> & { href: string };

export default function SiteLink({ href, children, ...props }: Props) {
  const mapped = toAppHref(href);
  if (isInternalHref(mapped)) {
    return (
      <MuiLink component={NextLink} href={mapped} underline="hover" {...props}>
        {children}
      </MuiLink>
    );
  }
  const external = mapped.startsWith("http");
  return (
    <MuiLink
      href={mapped}
      underline="hover"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </MuiLink>
  );
}
