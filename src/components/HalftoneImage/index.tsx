"use client";
import React from "react";
import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "@mui/material/styles";
import HalftoneBox from "../HalftoneBox";
// import { Box } from '@mui/material';
import theme from "@/app/theme";

interface HalftoneImageProps {
  src: StaticImageData | string;
  alt: string;
  width?: string;
  height?: string;
  color?: keyof typeof theme.palette;
}

const ImageWrapper = styled(HalftoneBox)<{
  color?: keyof typeof theme.palette;
  width: string | number;
  height: string | number;
}>`
  background-color: ${(props) =>
    props.color ? theme.palette[props.color].main : theme.palette.primary.main};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &::before {
    transition: opacity 0.3s ease-in-out;
    z-index: 0;
  }

  &:hover::before {
    opacity: 0;
  }
`;

const ImageBg = styled(Image)`
  filter: grayscale(100%);
  mix-blend-mode: screen;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  }
`;

const HalftoneImage: React.FC<HalftoneImageProps> = ({
  src,
  width = "100%",
  height = "100%",
  color,
}) => {
  const theme = useTheme();

  return (
    <ImageWrapper color={color} width={width} height={height}>
      <ImageBg src={src} alt="Halftone" />
    </ImageWrapper>
  );
};

export default HalftoneImage;
