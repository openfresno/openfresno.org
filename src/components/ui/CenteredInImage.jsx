export default function CenteredInImage({
  src="/img/about/rectangle.png",
  alt="rectangle",
  float="left",
  children=(<></>)
}){
  return(
  <div className={`w-fit relative ${float==="center"?"mx-auto":`float-${float}`}`}>
    <img src={src} alt={alt} />
    {/*used to place the text over the image*/}
    <div className={`w-full h-full absolute bottom-0`}>
      {/*used to vertically center the text over the image*/}
      <div className={`w-full h-full flex justify-center items-center `}>
        {/*used to horizontally center the text over the image*/}
        {children}
      </div>
    </div>
  </div>
  );
}
