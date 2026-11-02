export type Project = {
  slug: string
  title: string
  role: string
  year: string
  summary: string
  tags: string[]
  image: string
  imageAlt: string
  href: string
}

const placeholderSummary =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'

const placeholderTags = ['Tag one', 'Tag two', 'Tag three']

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    role: 'Role Title',
    year: 'Year',
    summary: placeholderSummary,
    tags: placeholderTags,
    image: '/projects/brew.png',
    imageAlt: 'Illustration of a vintage espresso machine with steam rising beside a cup of coffee',
    href: '#',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    role: 'Role Title',
    year: 'Year',
    summary: placeholderSummary,
    tags: placeholderTags,
    image: '/projects/wayfind.png',
    imageAlt: 'Illustration of a smartphone showing a map route with a bus and location pin beside it',
    href: '#',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    role: 'Role Title',
    year: 'Year',
    summary: placeholderSummary,
    tags: placeholderTags,
    image: '/projects/plot.png',
    imageAlt: 'Illustration of two raised garden beds with sprouting plants and a watering can',
    href: '#',
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    role: 'Role Title',
    year: 'Year',
    summary: placeholderSummary,
    tags: placeholderTags,
    image: '/projects/ledger.png',
    imageAlt: 'Illustration of a laptop displaying a dashboard with charts next to a potted plant',
    href: '#',
  },
]
