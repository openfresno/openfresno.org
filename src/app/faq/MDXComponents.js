const MDXComponents = {
  h3: ({ children }) => {
    const idText = children.replace(/ /g, "_").toLowerCase();
    return <h3 id={idText} className="text-xl font-bold mb-6">{children}</h3>;
  },
  h4: ({children})=>{return(
    <>
    <hr className="mx-auto max-w-[calc(var(--screen-xxl)_+_80px)] border-0 h-px bg-(--neutral-400)"></hr>
    <h4 className="text-lg font-semibold mr-5 my-5">{children}</h4>
    </>
  )},
};

export default MDXComponents;
