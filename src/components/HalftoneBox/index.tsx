"use client";
import { Box } from '@mui/material';
import { styled } from '@mui/system';

type HalftoneBoxProps = {
  width?: string | number;
  height?: string | number;
  fade?: string;
}

const HalftoneBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
  name: 'HalftoneBox',
  slot: 'Root',
})<HalftoneBoxProps>(({ theme, width = "100%", height = "100%", fade }) => ({
  height,
  width,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    display: 'block',
    width,
    height,
    left: 0,
    backgroundImage:
      `radial-gradient(circle, ${theme.palette.primary.light} 1px, transparent 0), radial-gradient(circle, ${theme.palette.primary.light} 1px, transparent 0)`,
    backgroundPosition: '1px 1px, 5px 5px',
    backgroundRepeat: 'repeat',
    backgroundSize: '8px 8px, 8px 8px',
    zIndex: -1,
    maskImage: fade ? `linear-gradient(to bottom, white, transparent ${fade})` : 'none',
  }

}))

export default HalftoneBox;