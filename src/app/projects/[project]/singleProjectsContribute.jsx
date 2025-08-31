import Button from "../../../components/ui/Button";

export default function SingleProjectsContribute({
  contributeAs,
  setContributeAs,
}) {
  return (
    <section id="how-to-contribute" className={`project-contribute-container`}>
      <div
        className={`project-main-heading-container heading-underline underline-alt`}
      >
        <h2 className={`project-heading`}>How to Contribute</h2>
      </div>
      <p className={`project-paragraph`}>
        Open Fresno is run by volunteers. We are always looking for help.
        Explore the various ways you can make a difference.
      </p>
      <h4 className={`project-info-label`}>Get Involved As</h4>
      <div className={`project-button-container`}>
        <Button
          className={`btn ${contributeAs === "developer" ? "btn-gold" : "btn-alt-gold"}`}
          onClick={() => setContributeAs("developer")}
          textContent={"Developer"}
        />
        <Button
          className={`btn ${contributeAs === "designer" ? "btn-gold" : "btn-alt-gold"}`}
          onClick={() => setContributeAs("designer")}
          textContent={"Designer"}
        />
        <Button
          className={`btn ${contributeAs === "other" ? "btn-gold" : "btn-alt-gold"}`}
          onClick={() => setContributeAs("other")}
          textContent={"Other"}
        />
      </div>
    </section>
  );
}
