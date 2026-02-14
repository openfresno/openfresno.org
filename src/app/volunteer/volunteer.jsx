import {
  User,
  Users,
  Code,
  PenTool,
  Database,
  Heart,
  BookOpen,
  Briefcase,
  Megaphone,
  Network,
  Award,
  HelpCircle,
  Layers,
  Server,
  Layout,
  Monitor,
  Cpu,
  Globe,
  Search,
  Image,
  ClipboardCheck,
  Zap,
  Target,
  BarChart,
  Box,
  Cloud,
} from "lucide-react";

/**
 * Volunteer Form Configuration
 *
 * Defines the structure of the volunteer application wizard.
 * Each object in the array represents a sequential section (step) of the form.
 *
 * Structure:
 * @property {string} section - The title of the form section (e.g., "Contact Information").
 * @property {Array<Object>} fields - An array of field definition objects for this section.
 *
 * Field Object Structure:
 * @property {string} id - Unique identifier for the field (used as the form data key).
 * @property {string} type - Input type: "text", "email", "radio", "checkbox_single", "checkbox_group", "select", "textarea".
 * @property {string} label - The question or prompt displayed to the user.
 * @property {boolean} required - If true, validation prompts the user to complete this field.
 * @property {Array<string|Object>} [options] - Options for multi-choice inputs.
 *    - Can be an array of strings (simple text options).
 *    - Can be an array of objects: { label: string, value: string, icon: Component }.
 */
export const volunteer = [
  {
    section: "Agreements",
    fields: [
      {
        id: "age_confirmation",
        type: "radio",
        label: "Are you 16 years or older?",
        required: true,
        options: [
          { label: "Yes, I am 16 or older.", value: "yes_16_plus", icon: User },
          { label: "No, I am younger than 16.", value: "under_16", icon: User },
        ],
      },
      {
        id: "code_of_conduct",
        type: "checkbox_single",
        label: "I agree to the Code of Conduct.",
        required: true,
      },
    ],
  },

  {
    section: "Contact Information",
    fields: [
      {
        id: "first_name",
        type: "text",
        label: "First Name",
        required: true,
      },
      {
        id: "last_name",
        type: "text",
        label: "Last Name",
        required: true,
      },
      {
        id: "pronouns",
        type: "radio",
        label: "What are your pronouns?",
        required: true,
        options: [
          { label: "They / Them", value: "they", icon: Users },
          { label: "She / Her", value: "she", icon: User },
          { label: "He / Him", value: "he", icon: User },
          { label: "Other", value: "other", icon: HelpCircle },
        ],
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        required: true,
      },
      {
        id: "slack_id",
        type: "text",
        label: "Slack ID",
        required: false,
      },
      {
        id: "github_username",
        type: "text",
        label: "GitHub Username",
        required: false,
      },
    ],
  },

  {
    section: "Interests",
    fields: [
      {
        id: "interest",
        type: "checkbox_group",
        label: "What excites or interests you most?",
        required: true,
        options: [
          { label: "Methods & Skills", value: "skills", icon: BookOpen },
          { label: "Resume Scaling", value: "resume", icon: Briefcase },
          { label: "Meeting People", value: "people", icon: Users },
          { label: "Contribute to Cause", value: "cause", icon: Heart },
          { label: "City Awareness", value: "awareness", icon: Megaphone },
          { label: "Open Data / Tech", value: "tech", icon: Database },
          { label: "Networking", value: "networking", icon: Network },
          { label: "Civic Projects", value: "civic", icon: Globe },
          { label: "Mentorship", value: "mentors", icon: Award },
          { label: "Other", value: "other", icon: HelpCircle },
        ],
      },
      {
        id: "involvement_level",
        type: "checkbox_group",
        label: "How deeply would you like to be involved?",
        required: true,
        options: [
          { label: "Project Volunteer", value: "volunteer", icon: User },
          { label: "Project Lead", value: "lead", icon: Target },
          { label: "Core Team", value: "core", icon: Zap },
          { label: "Other", value: "other", icon: HelpCircle },
        ],
      },
    ],
  },

  {
    section: "Core Team",
    fields: [
      {
        id: "leadership_interest",
        type: "checkbox_group",
        label: "Leadership area(s) of interest",
        required: false,
        options: [
          { label: "Front-End", value: "frontend", icon: Layout },
          { label: "Back-End", value: "backend", icon: Server },
          { label: "Data Science", value: "data", icon: BarChart },
          { label: "UI / UX", value: "design", icon: PenTool },
          { label: "Management", value: "pm", icon: ClipboardCheck },
          { label: "Marketing", value: "marketing", icon: Megaphone },
          { label: "People Ops", value: "recruitment", icon: Users },
          { label: "Fundraising", value: "fundraising", icon: Target },
          { label: "Other", value: "other", icon: HelpCircle },
        ],
      },
    ],
  },

  {
    section: "Skills",
    fields: [
      {
        id: "skill_contribution",
        type: "checkbox_group",
        label: "What are your skill sets?",
        required: true,
        options: [
          { label: "Front-End Dev", value: "fe", icon: Layout },
          { label: "Back-End Dev", value: "be", icon: Server },
          { label: "Full Stack", value: "fs", icon: Layers },
          { label: "Data Science", value: "ds", icon: Database },
          { label: "DevOps", value: "devops", icon: Cpu },
          { label: "UI Design", value: "ui", icon: PenTool },
          { label: "UX Research", value: "ux", icon: Search },
          { label: "Graphic Design", value: "graphics", icon: Image },
          { label: "Product Mgmt", value: "product", icon: Box },
          { label: "Project Mgmt", value: "project", icon: ClipboardCheck },
          { label: "Business/Mktg", value: "business", icon: Briefcase },
          { label: "Govt Expert", value: "govt", icon: Globe },
          { label: "Organizer", value: "organizer", icon: Users },
          { label: "Other", value: "other", icon: HelpCircle },
        ],
      },
      {
        id: "skill_improvement",
        type: "checkbox_group",
        label: "Which skills do you want to improve?",
        required: true,
        options: [
          { label: "Front-End Dev", value: "fe", icon: Layout },
          { label: "Back-End Dev", value: "be", icon: Server },
          { label: "Full Stack", value: "fs", icon: Layers },
          { label: "Data Science", value: "ds", icon: Database },
          { label: "DevOps", value: "devops", icon: Cpu },
          { label: "UI Design", value: "ui", icon: PenTool },
          { label: "UX Research", value: "ux", icon: Search },
          { label: "Graphic Design", value: "graphics", icon: Image },
          { label: "Product Mgmt", value: "product", icon: Box },
          { label: "Project Mgmt", value: "project", icon: ClipboardCheck },
          { label: "Business/Mktg", value: "business", icon: Briefcase },
          { label: "Govt Expert", value: "govt", icon: Globe },
          { label: "Organizer", value: "organizer", icon: Users },
          { label: "Other", value: "other", icon: HelpCircle },
        ],
      },
      {
        id: "tech_stack",
        type: "checkbox_group",
        label: "Tech Skills",
        required: false,
        options: [
          { label: "React", value: "react", icon: Code },
          { label: "CSS / SASS", value: "css", icon: PenTool },
          { label: "Node.js", value: "node", icon: Server },
          { label: "Python", value: "python", icon: Code },
          { label: "GraphQL", value: "graphql", icon: Network },
          { label: "SQL", value: "sql", icon: Database },
          { label: "NoSQL", value: "nosql", icon: Database },
          { label: "AWS", value: "aws", icon: Cloud },
          { label: "Other", value: "other", icon: HelpCircle },
        ],
      },
    ],
  },

  {
    section: "Miscellaneous",
    fields: [
      {
        id: "connection_source",
        type: "select",
        label: "How did you hear about us?",
        required: true,
        options: [
          "OpenSacramento Website",
          "Email Newsletters",
          "Word of Mouth / Friend",
          "Google",
          "MeetUp",
          "Bluesky",
          "LinkedIn",
          "Mastodon",
          "X (Twitter)",
          "Facebook",
          "Instagram",
          "VolunteerMatch",
          "HandsOn Sacramento",
        ],
      },
      {
        id: "extra_information",
        type: "textarea",
        label: "Any extra information?",
        required: false,
      },
    ],
  },
];
