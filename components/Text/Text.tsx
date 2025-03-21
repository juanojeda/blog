import React from 'react';
import typography from "@/components/typography/_typography.module.css";

type ValidTags = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextElements = Extract<React.HTMLElementType, ValidTags>;

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElements;
  level?: TextElements | 'b1' | 'b2' | 'b3';
}

const Text = ({as = 'p', level = as, ...props}: TextProps) => {
  const Tag = as;

  const baseClass = level.match(/h[1-6]/) ? 'heading' : 'body';
  const classes = [typography[baseClass], typography[level] || typography.b1, props.className];
  const className = classes.join(' ');
  
  return (
    <Tag className={className} {...props} />
  );
};

export default Text;