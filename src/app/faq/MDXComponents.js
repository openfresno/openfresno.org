const MDXComponents = {
  h3: ({ children }) => {
    const idText = children.replace(/ /g, "_").toLowerCase();
    return (
      <h3 id={idText} className="mb-6 text-xl font-bold">
        {children}
      </h3>
    );
  },
  h4: ({ children }) => {
    return (
      <>
        <hr className="mx-auto h-px max-w-[calc(var(--screen-xxl)+80px)] border-0 bg-(--neutral-400)"></hr>
        <h4 className="my-5 mr-5 px-4 text-lg font-semibold">{children}</h4>
      </>
    );
  },
};

export default MDXComponents;
