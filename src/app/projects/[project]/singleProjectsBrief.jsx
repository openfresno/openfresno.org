import { SectionType } from "@/utility/constants/theme";

import { titleCase } from "@/utility/string";

export default function SingleProjectsBrief({
  data,
  sectionType = SectionType.light
}) {
  return (
    <section className={`py-12 app-color--${sectionType}`}>
      <div className={`page-container flex flex-col`}>
        <h2 className={`sub-heading-main`}>Project Brief</h2>
        <div className={`my-2 h-1 w-10 app-fill--${SectionType.invert(sectionType)}`}/>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`}/>
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Status</div>
          <div className={`grow-2 basis-0`}>
            {titleCase(data.meta.project_status)}
          </div>
        </div>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Description</div>
          <div className={`grow-2 basis-0`}>{data.meta.description}</div>
        </div>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Comments</div>
          <div className={`grow-2 basis-0`}>{data.meta.comments}</div>
        </div>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Communications</div>
          <div className={`grow-2 basis-0`}>{data.meta.communications}</div>
        </div>
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Channels</div>
          <div className={`grow-2 basis-0`}>{data.meta.channels}</div>
        </div>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Project Partner</div>
          <div className={`grow-2 basis-0`}>{data.meta.project_partner}</div>
        </div>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Project Lead</div>
          <div className={`grow-2 basis-0`}>{data.meta.project_lead}</div>
        </div>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Technical Lead</div>
          <div className={`grow-2 basis-0`}>{data.meta.technical_lead}</div>
        </div>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>Lead Designer</div>
          <div className={`grow-2 basis-0`}>{data.meta.lead_designer}</div>
        </div>
      </div>
    </section>
  );
}
