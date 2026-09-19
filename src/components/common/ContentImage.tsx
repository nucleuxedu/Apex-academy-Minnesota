import Box from "@mui/material/Box";

type Props = {
  src: string;
  alt?: string;
  title?: string;
  width?: number | string;
  sx?: object;
};

export default function ContentImage({ src, alt = "", title, width, sx }: Props) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt || title || ""}
      title={title}
      sx={{
        display: "block",
        width: "100%",
        maxWidth: width || "100%",
        height: "auto",
        borderRadius: 1,
        ...sx,
      }}
    />
  );
}
