const Heading3 = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase();

  return <h3 id={idText}>{children}</h3>;
};

const MDXComponents = {
  h3: Heading3,
};

export default MDXComponents;
