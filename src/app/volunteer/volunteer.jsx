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
          { label: "Yes, I am 16 or older.", value: "yes_16_plus" },
          { label: "No, I am younger than 16.", value: "under_16" }
        ]
      },
      {
        id: "code_of_conduct",
        type: "checkbox_single",
        label: "I agree to the Code of Conduct.",
        required: true
      }
    ]
  },

  {
    section: "Contact Information",
    fields: [
      {
        id: "first_name",
        type: "text",
        label: "First Name",
        required: true
      },
      {
        id: "last_name",
        type: "text",
        label: "Last Name",
        required: true
      },
      {
        id: "pronouns",
        type: "radio",
        label: "What are your pronouns?",
        required: true,
        options: [
          { label: "They / Them / Their", value: "they" },
          { label: "She / Her / Hers", value: "she" },
          { label: "He / Him / His", value: "he" },
          { label: "Other", value: "other" }
        ]
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        required: true
      },
      {
        id: "slack_id",
        type: "text",
        label: "Slack ID",
        required: false
      },
      {
        id: "github_username",
        type: "text",
        label: "GitHub Username",
        required: false
      }
    ]
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
          "Learning and practicing new skills",
          "Getting new experience on resume",
          "Meeting new people",
          "Contributing to a good cause",
          "Increasing awareness of the city",
          "Learning about technology and open data",
          "Networking and job opportunities",
          "Learning about civic tech projects",
          "Finding mentors",
          "Other"
        ]
      },
      {
        id: "involvement_level",
        type: "checkbox_group",
        label: "How deeply would you like to be involved?",
        required: true,
        options: [
          "Volunteer as part of a project team",
          "Lead a project team",
          "Become a Core Team member",
          "Other"
        ]
      }
    ]
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
          "Front-End Engineering",
          "Back-End Engineering",
          "Data Science",
          "UI/UX",
          "Project Management",
          "Marketing",
          "Recruitment",
          "Fundraising",
          "Event Management",
          "Writing",
          "Other"
        ]
      }
    ]
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
          "Software Engineering - Front-End",
          "Software Engineering - Back-End",
          "Software Engineering - Full Stack",
          "Software Engineering - Data Science",
          "Software Engineering - DevOps / Infrastructure",
          "UI Design",
          "UX Research",
          "Graphic Design",
          "Product Management",
          "Project Management",
          "Business Analysis / Marketing / Recruitment",
          "Subject Matter Expert - Government",
          "Subject Matter Expert - Community Organizing",
          "Other"
        ]
      },
      {
        id: "skill_improvement",
        type: "checkbox_group",
        label: "Which skills do you want to improve?",
        required: true,
        options: [
          "Software Engineering - Front-End",
          "Software Engineering - Back-End",
          "Software Engineering - Full Stack",
          "Software Engineering - Data Science",
          "Software Engineering - DevOps / Infrastructure",
          "UI Design",
          "UX Research",
          "Graphic Design",
          "Product Management",
          "Project Management",
          "Business Analysis / Marketing / Recruitment",
          "Subject Matter Expert - Government",
          "Subject Matter Expert - Community Organizing",
          "Other"
        ]
      },
      {
        id: "tech_stack",
        type: "checkbox_group",
        label: "Tech Skills",
        required: false,
        options: [
          "React",
          "CSS / SASS",
          "Node.js",
          "Python (APIs)",
          "Python (Web Scraping)",
          "GraphQL",
          "SQL",
          "NoSQL",
          "AWS Infrastructure",
          "Other"
        ]
      }
    ]
  },

  {
    section: "Miscellaneous",
    fields: [
      {
        id: "connection_source",
        type: "select",
        label: "How did you hear about us?",
        required: false,
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
          "HandsOn Sacramento"
        ]
      },
      {
        id: "extra_information",
        type: "textarea",
        label: "Any extra information?",
        required: false
      }
    ]
  }
];
