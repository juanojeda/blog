"use client";
import { Box } from '@mui/material';
import React from 'react';

const WordScroller = ({ defaultWord, otherWords, timeoutMs }: { defaultWord: string; otherWords: string[], timeoutMs: number }) => {
  const wordsArr = [defaultWord, ...otherWords];
  const [currentWord, setCurrentWord] = React.useState(defaultWord);

  const index = React.useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % wordsArr.length;
      setCurrentWord(wordsArr[index.current]);
    }, timeoutMs);

    return () => clearInterval(interval);
  }, [wordsArr]);

  return <Box sx={{ fontStyle: "italic" }}>{currentWord}</Box>
}

export default WordScroller;