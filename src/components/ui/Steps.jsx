/**
 * Numbered steps for instructions.
 * @returns {JSX.Element}
 */
export default function Steps({ children, sectionType, steps }) {
  return (
    <>
      <div className={`steps-steps-container`}>
        {steps.map((item, index) => (
          <div className={`steps-step-container`} key={index}>
            <img
              src={`/img/${item.id}.png`}
              alt={`Step ${item.id}`}
              className={`step-image`}
            />
            <div className={`step-container`}>
              <h3 className={`step-header`}>{item.title}</h3>
              <div
                className={`step-paragraph`}
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
