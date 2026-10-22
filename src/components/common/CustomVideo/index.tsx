import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

import { containerStyles, videoStyles } from "./style";

interface CustomVideoProps {
  src: string;
  poster?: string;
  height?: string | number;
  borderRadius?: string | number;
  sx?: SxProps<Theme>;
}

const CustomVideo = ({ src, poster, height = "500px", borderRadius = 0, sx }: CustomVideoProps) => {
  return (
    <Box
      sx={[
        containerStyles,
        {
          height,
          borderRadius,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box
        component="video"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        aria-label="Harvest Fresh promotional video"
        sx={videoStyles}
      />
    </Box>
  );
};

export default CustomVideo;
