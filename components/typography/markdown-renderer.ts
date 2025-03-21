function heading ({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);

  return `
    <h${depth} class="heading h${depth}">
      ${text}
    </h${depth}>`;
}

export const renderer = {
  heading
};
