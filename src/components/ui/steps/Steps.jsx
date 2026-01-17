import CircledNumber from "@/components/ui/CircledNumber";
import { SectionType } from "@/utility/constants/theme";

/**
 * Displays a sequence of numbered instructional steps.
 * @param {Object} props
 * @param {SectionType} [props.sectionType] - Style variant for theming.
 * @param {Array<{id: string|number, title: string, body: string}>} props.steps - Step data.
 * @returns {JSX.Element}
 */
export default function Steps({ sectionType = SectionType.light, steps }) {
  return (
    <div className="flex flex-col gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4 sm:gap-8">
          <CircledNumber number={step.id} sectionType={sectionType} />
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <div>{step.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
