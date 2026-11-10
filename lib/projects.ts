// All portfolio content lives here. Each project is one "stop" on the homepage
// journey and gets its own case study page at /work/[slug].
//
// Case studies follow the structure of the original Framer site: a colored
// header band, an overview with Time Frame / Role / Skills / Tools, then
// sections built from the blocks below.
//
// Text in `p`, `callouts`, `cards` and `list` blocks can use **double asterisks**
// for bold. `image` and `gallery` blocks render placeholder boxes: swap one for a
// real picture by adding `src` (a path in /public) and `alt`.

export type CoverIcon = 'phone' | 'growth' | 'pointer' | 'lightbulb' | 'interviews' | 'accessibility'
export type CoverTone = 'ember' | 'slate' | 'moss' | 'plum'

export type ImageSlot = {
  /** What the image should show; displayed inside the placeholder. */
  label: string
  /** Real image path in /public. When set, the picture replaces the placeholder. */
  src?: string
  alt?: string
  shape?: 'wide' | 'landscape' | 'square' | 'tall'
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'stats'; items: { value: string; label: string }[]; caption?: string }
  /** Process steps shown as connected boxes in a row. */
  | { type: 'flow'; items: string[]; note?: string }
  /** Titled cards in a grid. */
  | { type: 'cards'; items: { title: string; text: string }[] }
  /** Full-width stacked boxes, e.g. goals or methodology rules. */
  | { type: 'callouts'; items: string[] }
  /** Side-by-side titled lists, e.g. experienced vs. inexperienced users. */
  | { type: 'columns'; items: { title: string; items: string[] }[] }
  | ({ type: 'image' } & ImageSlot)
  | { type: 'gallery'; items: ImageSlot[] }
  /** Small italic disclaimer text. */
  | { type: 'note'; text: string }

export type Section = {
  heading: string
  blocks: Block[]
}

export type Project = {
  slug: string
  /** Project name used on the homepage journey. */
  title: string
  org: string
  role: string
  year: string
  timeline: string
  /** Short date stamp shown on the homepage journey. */
  stamp: string
  summary: string
  tags: string[]
  tools?: string[]
  skills: string[]
  cover: { icon: CoverIcon; tone: CoverTone }
  /** Homepage image: a logo or related graphic PNG in /public/projects, e.g. '/projects/cognite.png'. */
  image?: string
  imageAlt?: string
  /**
   * 'logo' (default): a logo with a transparent background (SVG or PNG).
   * 'tile': a square app-icon style image, shown smaller with rounded corners.
   */
  imageStyle?: 'logo' | 'tile'
  /** Name used in the homepage placeholder and default alt text. Defaults to `org`. */
  logoName?: string
  /** Big title and subtitle in the case study's colored header band. */
  band: { title: string; subtitle?: string }
  overview: string
  /** Shown at the top of the case study when the full write-up is still in progress. */
  draftNote?: string
  sections: Section[]
}

// Written oldest to newest; the site shows them newest first (see `projects` below).
const projectsChronological: Project[] = [
  {
    slug: 'instagram-stories',
    title: 'Instagram Stories',
    org: 'Course project',
    logoName: 'Instagram',
    role: 'Design Student',
    year: '2024',
    timeline: 'Jan – Mar 2024',
    stamp: 'Jan — Mar 2024',
    summary:
      'A UX case study of the usability issues people hit when posting to Instagram Stories, and a redesign focused on preventing user error.',
    tags: ['User research', 'Usability testing', 'UI redesign'],
    tools: ['Figma'],
    skills: ['User Research', 'Usability Testing', 'UX Design'],
    image: '/projects/instagram.png',
    imageAlt: 'Instagram logo',
    imageStyle: 'tile',
    cover: { icon: 'phone', tone: 'plum' },
    band: { title: 'Stories', subtitle: 'An Instagram case study' },
    overview:
      'I was part of a team of design students who decided to redesign the UI of one of Instagram’s products. We explored the app to choose a feature to analyze, **conducted user research**, and **ideated and iterated** upon a redesign of Instagram Stories.',
    sections: [
      {
        heading: 'Problem Statement',
        blocks: [
          {
            type: 'p',
            text: 'Social media lets people share and connect through content, ideas, interests and information. With around 500 million daily active users, Instagram remains an extremely popular place to post, share and interact. However, many users noticed that the app has **frequent updates** that change existing features or add new ones, leaving them little time to adapt. My team and I set out to **uncover the most common errors** users encounter and create a redesign that provides a more pleasant experience.',
          },
        ],
      },
      {
        heading: 'Brainstorming',
        blocks: [
          {
            type: 'p',
            text: 'Covering the entire app would be too complex for our **8-week** time frame, so we ran user research to discover which feature people had the most trouble with. Our interview questions focused on three parts of Instagram: **posts, stories and reels**. We looked specifically at the posting side of each feature, not viewing, since posting is the core experience of a social media app.',
          },
        ],
      },
      {
        heading: 'User Research',
        blocks: [
          {
            type: 'p',
            text: 'Following interviews with college-aged students about their usage and understanding of Instagram Stories, we found:',
          },
          {
            type: 'stats',
            items: [
              { value: '~27%', label: 'mistakenly posted stories to the wrong account' },
              { value: '~40%', label: 'struggled with posting posts to their stories' },
              { value: '~40%', label: 'struggled to find story features (stickers, clocks, locations)' },
              { value: '~61%', label: 'had difficulty adding multiple photos with the photo sticker' },
            ],
          },
        ],
      },
      {
        heading: 'Wireframes',
        blocks: [
          { type: 'p', text: 'With **simplicity and consistency** in mind, our redesign included:' },
          {
            type: 'list',
            items: [
              'Undo and redo buttons',
              'A drop-down menu containing collage and add-photo features',
              'A secondary screen containing posting options',
              'Organized and categorized stickers and icons',
            ],
          },
          {
            type: 'gallery',
            items: [
              { label: 'Wireframe: story editor', shape: 'tall' },
              { label: 'Wireframe: add-photo menu', shape: 'tall' },
              { label: 'Wireframe: posting options', shape: 'tall' },
            ],
          },
        ],
      },
      {
        heading: 'Final Redesign',
        blocks: [
          {
            type: 'gallery',
            items: [
              { label: 'Final screen: story editor', shape: 'tall' },
              { label: 'Final screen: collage menu', shape: 'tall' },
              { label: 'Final screen: posting options', shape: 'tall' },
            ],
          },
        ],
      },
      {
        heading: 'Reflection',
        blocks: [
          {
            type: 'p',
            text: 'If I could revisit this project, I would run a **second round of usability testing** on the redesign itself and feed those findings into the next iteration, continuing until the Stories experience was streamlined and achieved our goal of preventing user error.',
          },
          {
            type: 'p',
            text: 'This was one of the first times I got to conduct user research and usability testing, and it **solidified my interest in UX research**. It also taught me how to design as a team, using every member’s strengths to produce the best final product possible.',
          },
        ],
      },
    ],
  },
  {
    slug: 'amg-invest',
    title: 'AMG Invest',
    org: 'AMG Invest',
    role: 'UI/UX Consultant Intern',
    year: '2024 – 25',
    timeline: 'Aug 2024 – Apr 2025',
    stamp: 'Aug 2024 — Apr 2025',
    summary:
      'Created the brand identity for a fintech company, leading the visual assets that align its core values with what clients expect.',
    tags: ['Brand development', 'Logo design', 'Heuristic evaluation'],
    tools: ['Adobe Illustrator', 'Figma'],
    skills: ['Brand Development', 'Logo Creation', 'UX Research'],
    image: '/projects/amg-invest-logo.png',
    imageAlt: 'AMG Invest logo',
    cover: { icon: 'growth', tone: 'moss' },
    band: { title: 'AMG Invest', subtitle: 'Brand identity' },
    overview:
      'AMG Invest originally brought me on to redesign their website to prioritize usability and marketability. However, it quickly became clear that the company **did not have a unique identity**. The focus of the project then shifted towards **brand development**, and I took on the responsibility of creating the company’s new logo.',
    sections: [
      {
        heading: 'Industry Research',
        blocks: [
          {
            type: 'p',
            text: 'Before even picking up a pencil, I had to research the company’s target audience in order to create a brand that would connect with them. As a sophomore cognitive science and design student, my knowledge of financial tech was limited, so I researched **competitors, industry leaders, and the ideals and priorities** of the fintech industry. After a few days and hundreds of Google searches, I was ready to begin designing.',
          },
        ],
      },
      {
        heading: 'Goals',
        blocks: [
          {
            type: 'callouts',
            items: [
              'Communicate the company’s place in the fintech industry',
              'Build company brand and identity',
              'Present a visual representation of company ideals',
            ],
          },
        ],
      },
      {
        heading: 'Design Strategy',
        blocks: [
          {
            type: 'p',
            text: 'To **depict the industry and efficiency of the company**, I used the visual of an **upwards arrow** to indicate increasing investments. Keeping that in mind, I explored a **variety of aesthetics**, from minimalist designs to geometric patterns to letter-centric logos.',
          },
        ],
      },
      {
        heading: 'Initial Sketches',
        blocks: [
          {
            type: 'gallery',
            items: [
              { label: 'Hand sketches: first round', shape: 'square' },
              { label: 'Sketch concepts 1–6', shape: 'square' },
            ],
          },
          { type: 'image', label: 'Annotated sketch board', shape: 'wide' },
        ],
      },
      {
        heading: 'Iterations & Prototypes',
        blocks: [
          {
            type: 'p',
            text: 'After discussing these sketches with company leadership and getting a better sense of what they were looking for, I created a few **hi-fi mockups in Adobe Illustrator**. These helped me see what the logos could look like outside of messy sketches, kept the project grounded, and created a starting point for the next round of iteration.',
          },
          {
            type: 'gallery',
            items: [
              { label: 'Hi-fi mockup: minimalist', shape: 'landscape' },
              { label: 'Hi-fi mockup: geometric', shape: 'landscape' },
              { label: 'Hi-fi mockup: letter-centric', shape: 'landscape' },
            ],
          },
        ],
      },
      {
        heading: 'Thoughts',
        blocks: [
          {
            type: 'p',
            text: 'After seeing the hi-fi logos, **geometric logos were the most appealing**. Geometric patterns allow for a clean, minimal look while still allowing individuality through color gradation. I wanted to keep using **triangles to signify upward growth**, something AMG Invest prioritizes, while making the company name more central. From this, the final logo was created.',
          },
        ],
      },
      {
        heading: 'Final Design',
        blocks: [
          {
            type: 'p',
            text: 'The final logo is a **geometric design with a gradient** that visualizes investments rising. It gives the brand personality while maintaining an overall smooth and simple aesthetic.',
          },
          { type: 'image', label: 'Final AMG Invest logo', shape: 'wide' },
        ],
      },
      {
        heading: 'Reflection',
        blocks: [
          {
            type: 'p',
            text: 'This project opened my eyes to the importance of **balancing aesthetics with usability**. Most of my research centered on the industry itself, which let me approach the project with a sense of familiarity with the target audience. While intimidating, it challenged my creative thinking and technical skills and taught me lessons about UI/UX I couldn’t have learned in a classroom.',
          },
        ],
      },
    ],
  },
  {
    slug: 'cognite-atlas-ai',
    title: 'Atlas AI Usability Testing',
    org: 'Cognite',
    role: 'Product Design Intern',
    year: '2025',
    timeline: 'Jun – Jul 2025',
    stamp: 'Jun — Jul 2025',
    summary:
      'Ran a full-scale usability test of Atlas AI, an agent builder for an industrial data and AI platform. The findings directly informed 3 high-impact feature redesigns.',
    tags: ['Usability testing', 'Heuristic evaluation', 'Research planning'],
    tools: ['Dovetail', 'Figma', 'Miro'],
    skills: ['Usability Testing', 'User Research', 'Heuristic Evaluation'],
    image: '/projects/cognite.svg',
    imageAlt: 'Cognite logo',
    cover: { icon: 'pointer', tone: 'slate' },
    band: { title: 'Cognite', subtitle: 'Atlas AI Usability Testing' },
    overview:
      'As a product design intern at Cognite, I was responsible for running a **full-scale usability test** on one of Cognite’s products: Atlas AI. I **identified core usability issues**, leading to **key feature modifications** in upcoming product updates.',
    sections: [
      {
        heading: 'Task',
        blocks: [
          {
            type: 'p',
            text: 'My team decided to take advantage of the fact that I was a new face at Cognite, completely unfamiliar with their product: **Cognite Data Fusion**, aka CDF. Within CDF, clients can use an AI agent builder called **Atlas AI**. My unfamiliarity was ironically a strength that let me assess the product with a blank slate, and I was tasked with running a **full-scale usability test** on Atlas AI. After exploring CDF for a few days, I came up with a plan for executing the testing.',
          },
          {
            type: 'stats',
            items: [
              { value: '10+', label: 'usability sessions with internal and external stakeholders' },
              { value: '3', label: 'high-impact feature redesigns informed by the findings' },
            ],
          },
        ],
      },
      {
        heading: 'The Process',
        blocks: [
          {
            type: 'flow',
            items: [
              'Build a Base Understanding',
              'Conduct Heuristic Evaluation*',
              'Formulate Research Plan',
              'Run Usability Testing',
            ],
            note: '*Due to confidentiality agreements, I am limited in how much I can share about this process.',
          },
        ],
      },
      {
        heading: 'Build Base Understanding',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                title: 'Product Familiarity',
                text: 'I spent about 3 days fully exploring CDF and understanding everything I could, in order to know the intentions behind the design.',
              },
              {
                title: 'Company Standards',
                text: 'Every company has its own design system. Fully understanding the values and baselines of Cognite’s design system was vital to running this test.',
              },
              {
                title: 'Target Audience',
                text: 'I watched recordings of concept validations for other Cognite products to better understand the client base Atlas AI targets.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Research Questions',
        blocks: [
          {
            type: 'list',
            items: [
              'What’s the user’s mental model?',
              'Where does the product fall short of that mental model?',
              'How do experienced users approach the product compared to inexperienced users?',
            ],
          },
        ],
      },
      {
        heading: 'User Background',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Experienced',
                items: ['“Super users” of Atlas AI', 'Strong understanding of agent-based models'],
              },
              {
                title: 'Inexperienced',
                items: [
                  'Had never used CDF, Atlas AI, or other Cognite products',
                  'Often familiar with AI systems, but not agent builders',
                  'Computer science background',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: 'Key Performance Indicators',
        blocks: [
          {
            type: 'columns',
            items: [
              {
                title: 'Qualitative',
                items: [
                  'Complaints: unique issues and consistent issues',
                  'Personal complaints: hindered usability but didn’t prevent completing the task',
                ],
              },
              {
                title: 'Quantitative',
                items: [
                  'Time indicators: time to complete the task, or to say they couldn’t continue',
                  'Failure/success rate: participants who couldn’t complete the task vs. those who did',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: 'Methodology',
        blocks: [
          {
            type: 'callouts',
            items: [
              'Users are given a task',
              'Researchers can minimally assist users only if absolutely necessary',
              'Users vocalize their thoughts as they perform the task',
              'Researchers document the user’s click path, thought process, and success or failure at the main parts of the task',
            ],
          },
        ],
      },
      {
        heading: 'Impact',
        blocks: [
          {
            type: 'p',
            text: 'While I can’t share the results of these tests here, I can share the **impact of the testing itself**. The materials and templates I created were saved as a **base for usability testing going forward** at Cognite, setting the stage for testing other products.',
          },
          {
            type: 'p',
            text: 'The results were **immediately internalized by our engineering team**, who began addressing the issues the testing uncovered. The design team used the outcome to **adjust its design process** for the upcoming release, and the **product management team** saw the value of consistent, in-depth testing: going forward, they plan to make usability testing a continuous process at Cognite.',
          },
        ],
      },
    ],
  },
  {
    slug: 'cognite-future-ideation',
    title: 'Future Product Ideation',
    org: 'Cognite',
    role: 'Product Design Intern',
    year: '2025',
    timeline: 'Jul – Sep 2025',
    stamp: 'Jul — Sep 2025',
    summary:
      'Laid the research foundation for redesigning an existing product around an AI-driven system, from customer research to personas, workflows and lo-fi concepts.',
    tags: ['Personas', 'Workflows', 'Lo-fi design'],
    tools: ['Dovetail', 'Figma', 'Miro', 'Cursor'],
    skills: ['User Personas', 'Wireframing', 'Lo-Fi Design'],
    image: '/projects/cognite.svg',
    imageAlt: 'Cognite logo',
    cover: { icon: 'lightbulb', tone: 'ember' },
    band: { title: 'Cognite', subtitle: 'Future Product Ideation' },
    overview:
      'In the second half of my internship at Cognite, I contributed to an **end-to-end redesign** of an existing product’s interface to integrate an **AI-driven system**. My role focused on establishing foundational UX assets: **user personas, workflows, and lo-fi UI designs**.',
    sections: [
      {
        heading: 'Task',
        blocks: [
          {
            type: 'p',
            text: 'The Cognite design team began exploring how to evolve the product into an **AI-focused user experience**. I was tasked with building and internalizing the context behind the product by creating **user personas and use-case workflows** through in-depth research with Cognite’s customers. Following this research, the design team began building out storyboards and wireframes.',
          },
          {
            type: 'stats',
            items: [
              {
                value: '30%',
                label: 'faster wireframe-to-prototype transition after bringing generative AI tools into the workflow',
              },
            ],
            caption: 'Using Cursor, Gemini and Figma Make across the internship.',
          },
        ],
      },
      {
        heading: 'Use Cases & User Persona Synthesis',
        blocks: [
          {
            type: 'gallery',
            items: [
              { label: 'User persona', shape: 'landscape' },
              { label: 'User persona', shape: 'landscape' },
            ],
          },
          { type: 'image', label: 'Use-case workflow', shape: 'wide' },
        ],
      },
      {
        heading: 'Concept Exploration (Lo-Fi Design)',
        blocks: [
          {
            type: 'gallery',
            items: [
              { label: 'Lo-fi concept', shape: 'landscape' },
              { label: 'Lo-fi concept', shape: 'landscape' },
              { label: 'Lo-fi concept', shape: 'landscape' },
              { label: 'Lo-fi concept', shape: 'landscape' },
            ],
          },
        ],
      },
      {
        heading: 'Impact & Reflection',
        blocks: [
          {
            type: 'p',
            text: 'While my internship ended before the team began a high-fidelity prototype, I helped **build the framework** for this project through my research and contributions to the wireframes and lo-fi designs. The personas and use cases I synthesized also **streamlined the research process** for future product ideation.',
          },
          {
            type: 'p',
            text: 'Learning how to **integrate AI into an existing system** is vital as technology keeps growing. I’m grateful I got to explore the impact and limitations of AI, and I can’t wait to use what I learned on future projects.',
          },
        ],
      },
    ],
  },
  {
    slug: 'epam-enterprise-ai',
    title: 'Enterprise AI Adoption',
    org: 'EPAM Systems',
    role: 'UX Research Associate',
    year: '2026',
    timeline: 'Apr – Jul 2026',
    stamp: 'Apr — Jul 2026',
    summary:
      'Led an end-to-end research initiative on how energy enterprises adopt AI, interviewing senior executives about trust, friction and human agency.',
    tags: ['Executive interviews', 'Synthesis', 'Evaluation framework'],
    skills: ['User Interviews', 'Qualitative Synthesis', 'Research Strategy'],
    image: '/projects/epam.svg',
    imageAlt: 'EPAM Systems logo',
    cover: { icon: 'interviews', tone: 'plum' },
    band: { title: 'EPAM Systems', subtitle: 'Enterprise AI Adoption Research' },
    overview:
      'As a UX Research Associate at EPAM Systems, I **spearheaded an end-to-end research initiative** investigating how enterprises across the **energy sector** adopt AI and integrate it into their workflows.',
    draftNote: 'Full case study coming soon',
    sections: [
      {
        heading: 'Task',
        blocks: [
          {
            type: 'stats',
            items: [
              { value: '~10', label: 'in-depth interviews with senior executives' },
              { value: '7', label: 'energy enterprises represented' },
            ],
          },
        ],
      },
      {
        heading: 'The Process',
        blocks: [
          {
            type: 'flow',
            items: ['Interview Executives', 'Synthesize Findings', 'Build an Evaluation Framework'],
          },
        ],
      },
      {
        heading: 'Research Focus',
        blocks: [
          {
            type: 'p',
            text: 'The interviews evaluated three areas of how energy enterprises work with AI:',
          },
          { type: 'callouts', items: ['Human-AI interaction', 'Friction points', 'Operational trust'] },
        ],
      },
      {
        heading: 'Synthesis',
        blocks: [
          {
            type: 'p',
            text: 'I synthesized the interviews to identify **key limitations in enterprise AI tooling** and in **human agency**.',
          },
          { type: 'image', label: 'Affinity map or synthesis board', shape: 'wide' },
        ],
      },
      {
        heading: 'Impact',
        blocks: [
          {
            type: 'p',
            text: 'I formulated an **enterprise AI evaluation framework** to standardize long-term UX assessment.',
          },
          { type: 'image', label: 'Evaluation framework', shape: 'wide' },
        ],
      },
    ],
  },
  {
    slug: 'oli-torus-accessibility',
    title: 'Torus Accessibility',
    org: 'OLI · Torus',
    role: 'UX Accessibility Intern',
    year: '2026',
    timeline: 'Aug 2026 – Present',
    stamp: 'Aug 2026 — Now',
    summary:
      'Auditing instructor workflows on an online learning platform for WCAG compliance, then turning the findings into accessible keyboard flows and a modular filtering system.',
    tags: ['WCAG audit', 'Keyboard flows', 'Interaction design'],
    skills: ['Accessibility Evaluation', 'Interaction Design', 'Cross-functional Collaboration'],
    image: '/projects/oli-torus.svg',
    imageAlt: 'OLI Torus logo',
    cover: { icon: 'accessibility', tone: 'slate' },
    band: { title: 'OLI Torus', subtitle: 'Instructor Accessibility Audit' },
    overview:
      'As a UX Accessibility Intern on OLI’s Torus platform, I **evaluated instructor workflows** to find and remediate accessibility barriers, then turned the audit into **actionable, WCAG-compliant designs**.',
    draftNote: 'In progress · Full case study coming soon',
    sections: [
      {
        heading: 'Task',
        blocks: [
          {
            type: 'stats',
            items: [
              { value: '8', label: 'core instructor pages evaluated' },
              { value: '10+', label: 'critical WCAG violations identified' },
            ],
          },
        ],
      },
      {
        heading: 'The Process',
        blocks: [
          {
            type: 'flow',
            items: ['Audit Instructor Workflows', 'Identify WCAG Violations', 'Translate Findings', 'Design Solutions'],
          },
        ],
      },
      {
        heading: 'Audit',
        blocks: [
          {
            type: 'p',
            text: 'I evaluated instructor workflows across **8 core pages**, identifying **10+ critical WCAG violations** to remediate.',
          },
          { type: 'image', label: 'Audit findings', shape: 'wide' },
        ],
      },
      {
        heading: 'Design Solutions',
        blocks: [
          {
            type: 'p',
            text: 'Working with **PMs and engineering leads**, I translated the audit findings into actionable design, including **WCAG-compliant keyboard flows** and a **modular filtering system** to improve instructor task efficiency.',
          },
          {
            type: 'gallery',
            items: [
              { label: 'Keyboard flow', shape: 'landscape' },
              { label: 'Modular filtering system', shape: 'landscape' },
            ],
          },
        ],
      },
    ],
  },
]

/** Most recent first: the order of the homepage journey and the case study prev/next links. */
export const projects: Project[] = [...projectsChronological].reverse()

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
