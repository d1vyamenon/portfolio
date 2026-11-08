// All portfolio content lives here. Each project is one "stop" on the homepage
// journey and gets its own case study page at /work/[slug].
//
// To add a real cover image later, drop it in /public/projects and set `image`
// (and `imageAlt`). Until then a drawn cover in the project's `tone` is shown.

export type CoverIcon = 'phone' | 'growth' | 'pointer' | 'lightbulb' | 'interviews' | 'accessibility'
export type CoverTone = 'ember' | 'slate' | 'moss' | 'plum'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'stats'; items: { value: string; label: string }[]; caption?: string }
  | { type: 'note'; text: string }

export type Section = {
  heading: string
  blocks: Block[]
}

export type Project = {
  slug: string
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
  image?: string
  imageAlt?: string
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
    role: 'Design student, team project',
    year: '2024',
    timeline: 'Jan – Mar 2024 · 8 weeks',
    summary:
      'A UX case study of the usability issues people hit when posting to Instagram Stories, and a redesign focused on preventing user error.',
    tags: ['User research', 'Usability testing', 'UI redesign'],
    tools: ['Figma'],
    skills: ['User research', 'Usability testing', 'UX design'],
    stamp: 'Jan — Mar 2024',
    cover: { icon: 'phone', tone: 'plum' },
    sections: [
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'Instagram ships frequent updates that change existing features or add new ones, and users rarely get time to adapt. Our team set out to find the errors people run into most often and design a smoother experience around them.',
          },
        ],
      },
      {
        heading: 'Narrowing the scope',
        blocks: [
          {
            type: 'p',
            text: 'Studying the whole app wasn’t realistic in eight weeks, so we interviewed users about posting to their feed, Stories and Reels, focusing on creating content rather than viewing it. Stories caused the most trouble, so it became our focus.',
          },
        ],
      },
      {
        heading: 'What we found',
        blocks: [
          {
            type: 'stats',
            items: [
              { value: '~27%', label: 'posted a Story to the wrong account' },
              { value: '~40%', label: 'struggled to share a regular post to their Story' },
              { value: '~40%', label: 'had trouble finding stickers, clocks and locations' },
              { value: '~61%', label: 'had difficulty adding multiple photos with the photo sticker' },
            ],
            caption: 'From interviews with college-aged Instagram users.',
          },
        ],
      },
      {
        heading: 'The redesign',
        blocks: [
          {
            type: 'p',
            text: 'Simplicity and consistency guided every change. Each one maps back to an error we saw in research:',
          },
          {
            type: 'steps',
            items: [
              { title: 'Undo and redo', text: 'Mistakes become recoverable instead of starting over.' },
              {
                title: 'Collage and add-photo dropdown',
                text: 'A single menu for adding multiple photos, replacing the hard-to-use photo sticker flow.',
              },
              {
                title: 'Secondary posting screen',
                text: 'A confirmation step showing where a Story is going, to stop posts landing on the wrong account.',
              },
              {
                title: 'Categorized stickers and icons',
                text: 'Features like clocks and locations grouped so they’re easy to find.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Reflection',
        blocks: [
          {
            type: 'p',
            text: 'This was my first hands-on experience with user research and usability testing, and it’s what pulled me toward UX research. It also taught me how to design as a team, building on each person’s strengths. The next step would be a second round of usability testing to validate that the redesign actually reduces these errors.',
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
    summary:
      'Created the brand identity for a fintech company, leading the visual assets that align its core values with what clients expect.',
    tags: ['Brand development', 'Logo design', 'Heuristic evaluation'],
    tools: ['Adobe Illustrator', 'Figma'],
    skills: ['Brand development', 'Logo creation', 'UX research'],
    stamp: 'Aug 2024 — Apr 2025',
    cover: { icon: 'growth', tone: 'slate' },
    sections: [
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'AMG Invest first brought me on to redesign its website for usability and marketability. I ran heuristic evaluations of the existing platform to find usability bottlenecks, but early on it became clear the company didn’t have a unique identity to design around. The scope shifted to brand development, starting with a new logo.',
          },
        ],
      },
      {
        heading: 'Process',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Industry research',
                text: 'I was new to fintech, so I spent several days studying competitors, industry leaders and what the sector values before designing anything.',
              },
              {
                title: 'Goals',
                text: 'Communicate the company’s place in fintech, build its identity, and give its ideals a visual form.',
              },
              {
                title: 'Design strategy',
                text: 'An upward arrow to express growth and rising investments, explored across minimalist, geometric and letter-centric styles.',
              },
              { title: 'Initial sketches', text: 'A first round of hand sketches exploring the upward-arrow concept.' },
              {
                title: 'Iterations',
                text: 'I met with leadership to clarify what they wanted, then built several high-fidelity mockups in Illustrator to ground the next round.',
              },
              {
                title: 'Evaluation',
                text: 'Geometric forms won: clean and minimal, with color gradation adding individuality.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Final design',
        blocks: [
          {
            type: 'p',
            text: 'A geometric logo with a gradient. Triangles carry the sense of upward growth the company prioritizes, and the company name sits at the center of the composition. The result gives the brand personality while staying smooth and simple.',
          },
        ],
      },
      {
        heading: 'Reflection',
        blocks: [
          {
            type: 'p',
            text: 'This project taught me to balance aesthetics with usability, and showed how much industry research helps you understand an audience you’re new to. It built creative and technical skills I couldn’t have picked up in a classroom.',
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
    summary:
      'Ran a full-scale usability test of Atlas AI, an agent builder for an industrial data and AI platform. The findings directly informed 3 high-impact feature redesigns.',
    tags: ['Usability testing', 'Heuristic evaluation', 'Research planning'],
    tools: ['Dovetail', 'Figma', 'Miro'],
    skills: ['Usability testing', 'User research', 'Heuristic evaluation'],
    stamp: 'Jun — Jul 2025',
    cover: { icon: 'pointer', tone: 'moss' },
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'p',
            text: 'Atlas AI is an AI agent builder inside Cognite Data Fusion (CDF). As someone new to Cognite, I came to the product without prior familiarity, which turned out to be an advantage when testing it.',
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
        heading: 'Research questions',
        blocks: [
          {
            type: 'list',
            items: [
              'What mental model do users bring to the product?',
              'Where does the product fall short of that mental model?',
              'How do experienced users approach it differently from inexperienced ones?',
            ],
          },
        ],
      },
      {
        heading: 'Process',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Build a base understanding',
                text: 'I learned Cognite’s design system, watched concept validations for other products to understand the client base, and spent about three days exploring CDF.',
              },
              { title: 'Write the research plan', text: 'Details are confidential.' },
              { title: 'Heuristic evaluation', text: 'Details are confidential.' },
              { title: 'Usability testing', text: 'Details are confidential.' },
            ],
          },
        ],
      },
      {
        heading: 'Method',
        blocks: [
          {
            type: 'list',
            items: [
              'Task-based: each participant worked through a realistic task.',
              'Observation: we recorded click paths, reasoning, and success or failure on each part of the task.',
              'Think-aloud: participants talked through their thinking as they worked.',
              'Minimal assistance: we stepped in only when absolutely necessary.',
            ],
          },
          {
            type: 'p',
            text: 'Participants fell into two groups. Inexperienced users had never used CDF or Atlas AI; many knew AI tools and had computer science backgrounds but hadn’t used agent builders. Experienced users were Atlas AI “super users” with a strong grasp of agent-based models.',
          },
        ],
      },
      {
        heading: 'Analysis',
        blocks: [
          {
            type: 'note',
            text: 'Specific findings are confidential. Here’s how I organized them.',
          },
          {
            type: 'list',
            items: [
              'Qualitative: unique issues (one participant), consistent issues (across participants), and personal complaints that hindered usability without stopping the task.',
              'Quantitative: time to complete a task (or to say they couldn’t continue), and the task success-to-failure rate.',
            ],
          },
        ],
      },
      {
        heading: 'Impact',
        blocks: [
          {
            type: 'list',
            items: [
              'Engineering started addressing the issues right away, leading to key feature changes in upcoming releases.',
              'The design team adjusted its process for the next release based on the results.',
              'Product management saw the value of in-depth testing and plans to make it a continuous practice at Cognite.',
              'The materials and templates I created became the base for future usability tests across Cognite products.',
            ],
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
    summary:
      'Laid the research foundation for redesigning an existing product around an AI-driven system, from customer research to personas, workflows and lo-fi concepts.',
    tags: ['Personas', 'Workflows', 'Lo-fi design'],
    tools: ['Dovetail', 'Figma', 'Miro', 'Cursor'],
    skills: ['User personas', 'Wireframing', 'Lo-fi design'],
    stamp: 'Jul — Sep 2025',
    cover: { icon: 'lightbulb', tone: 'ember' },
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'p',
            text: 'In the second half of my internship, the design team began an end-to-end redesign of an existing product to evolve it into an AI-focused experience. My work focused on the foundational UX assets: user personas, workflows and lo-fi designs.',
          },
          {
            type: 'stats',
            items: [
              {
                value: '30%',
                label: 'faster wireframe-to-prototype transition after I brought generative AI tools into the workflow',
              },
            ],
            caption: 'Using Cursor, Gemini and Figma Make across the internship.',
          },
        ],
      },
      {
        heading: 'Process',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Research', text: 'In-depth user research with Cognite’s customers to build context for the product.' },
              { title: 'Synthesis', text: 'User personas and use-case workflows built from that research.' },
              {
                title: 'Storyboards and wireframes',
                text: 'Contributed to the team’s storyboards and wireframes after the initial research.',
              },
              { title: 'Lo-fi concepts', text: 'Contributed to low-fidelity concept explorations.' },
            ],
          },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          {
            type: 'p',
            text: 'My research and lo-fi work helped set the framework for the project, and the personas and use cases I synthesized were built to streamline research for future product ideation. My internship ended before the team moved into high-fidelity prototyping.',
          },
        ],
      },
      {
        heading: 'Reflection',
        blocks: [
          {
            type: 'p',
            text: 'I learned how to integrate AI into an existing system, and got a close look at both the impact and the limits of AI in an industrial product. I’m carrying those lessons into my next projects.',
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
    summary:
      'Led an end-to-end research initiative on how energy enterprises adopt AI, interviewing senior executives about trust, friction and human agency.',
    tags: ['Executive interviews', 'Synthesis', 'Evaluation framework'],
    skills: ['User interviews', 'Qualitative synthesis', 'Research strategy'],
    stamp: 'Apr — Jul 2026',
    cover: { icon: 'interviews', tone: 'plum' },
    draftNote: 'Full case study coming soon.',
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'p',
            text: 'I spearheaded an end-to-end user research initiative investigating how enterprises across the energy sector adopt AI and integrate it into their workflows.',
          },
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
        heading: 'What I did',
        blocks: [
          {
            type: 'list',
            items: [
              'Conducted qualitative interviews to evaluate human-AI interaction, friction points and operational trust.',
              'Synthesized the findings, identifying key limitations in enterprise AI tooling and in human agency.',
              'Formulated an enterprise AI evaluation framework to standardize long-term UX assessment.',
            ],
          },
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
    summary:
      'Auditing instructor workflows on an online learning platform for WCAG compliance, then turning the findings into accessible keyboard flows and a modular filtering system.',
    tags: ['WCAG audit', 'Keyboard flows', 'Interaction design'],
    skills: ['Accessibility evaluation', 'Interaction design', 'Cross-functional collaboration'],
    stamp: 'Aug 2026 — Now',
    cover: { icon: 'accessibility', tone: 'slate' },
    draftNote: 'In progress. Full case study coming soon.',
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'p',
            text: 'I evaluated instructor workflows on Torus, an online learning platform, to find and remove accessibility barriers.',
          },
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
        heading: 'What I did',
        blocks: [
          {
            type: 'list',
            items: [
              'Translated accessibility audit findings into actionable design, working with PMs and engineering leads.',
              'Created WCAG-compliant keyboard flows.',
              'Designed a modular filtering system to improve instructor task efficiency.',
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
