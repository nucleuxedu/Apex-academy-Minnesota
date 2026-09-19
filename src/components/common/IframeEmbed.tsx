import Box from "@mui/material/Box";

type Props = {
  src: string;
  title?: string;
  height?: number | string;
};

export default function IframeEmbed({ src, title, height = 420 }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 1,
        my: 2,
      }}
    >
      <Box
        component="iframe"
        title={title || "Embedded content"}
        src={src}
        allow="autoplay; fullscreen"
        allowFullScreen
        sx={{
          width: "100%",
          height,
          border: 0,
          display: "block",
        }}
      />
    </Box>
  );
}
