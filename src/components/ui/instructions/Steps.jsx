import CircledNumber from "@/components/ui/CircledNumber";
import { SectionType } from "@/utility/constants/theme";
import React from "react";

/**
 * `Steps` is a presentational component that displays a sequence of numbered
 * instructional steps, each with an image, title, and descriptive body text.
 *
 * It is commonly used for onboarding flows, tutorials, or process explanations
 * where users need to follow a series of steps in order.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - Optional additional content that can
 *   be rendered alongside the steps (not currently used in the layout).
 * @param {SectionType} props.sectionType - A style variant applied to the section container
 *   (e.g., `"light"` or `"dark"`), used for theming consistency.
 * @param {Array<{id: string|number, title: string, body: string}>} props.steps - An array
 *   of step objects. Each step must include:
 *   - `id`: A unique identifier used for the step image filename.
 *   - `title`: The heading text for the step.
 *   - `body`: The step description, rendered as HTML via `dangerouslySetInnerHTML`.
 *
 * @returns {JSX.Element} A structured list of steps with images, titles, and descriptions.
 *
 * @example
 * ```tsx
 <Steps
 sectionType="light"
 steps={[
 { id: 1, title: "Sign Up", body: "Create your free account to get started." },
 { id: 2, title: "Customize", body: "Set up your profile and preferences." },
 { id: 3, title: "Explore", body: "Browse tutorials and join the community." }
 ]}
 />
 * ```
 */
export default function Steps({
  children,
  sectionType = SectionType.light,
  steps,
}) {
  return (
    <div className={`steps-steps-container`}>
      {children ? <div className="steps-step-container">{children}</div> : ""}
      {steps.map((item, index) => (
        <div className={`steps-step-container`} key={index}>
          <CircledNumber number={item.id} sectionType={sectionType} />
          <div className={`step-container`}>
            <h3 className={`text-2xl font-semibold`}>{item.title}</h3>
            <div className={`step-paragraph`}>{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
