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

export const projects: Project[] = [
  {
    slug: 'brew',
    title: 'Brew',
    role: 'Lead UX Designer',
    year: '2025',
    summary:
      'Redesigning mobile ordering for an independent café chain. Field research during the morning rush revealed that regulars wanted speed, not choice, so we built a one-tap “usual” that cut average order time by 40%.',
    tags: ['Mobile', 'User research', 'Service design'],
    image: '/projects/brew.png',
    imageAlt: 'Flat illustration of a vintage espresso machine with steam rising beside a cup of coffee',
    href: '#',
  },
  {
    slug: 'wayfind',
    title: 'Wayfind',
    role: 'Product Designer',
    year: '2024',
    summary:
      'A transit companion for first-time riders. Through diary studies with newcomers to the city, I mapped the anxious moments of a commute and designed calm, glanceable guidance for every transfer.',
    tags: ['Journey mapping', 'Accessibility', 'iOS'],
    image: '/projects/wayfind.png',
    imageAlt: 'Flat illustration of a smartphone showing a map route with a bus and location pin beside it',
    href: '#',
  },
  {
    slug: 'plot',
    title: 'Plot',
    role: 'UX Researcher & Designer',
    year: '2024',
    summary:
      'Helping neighbors share community garden beds. Co-design workshops with gardeners shaped a booking flow built around seasons rather than calendars, and doubled bed utilization in the pilot.',
    tags: ['Co-design', 'Web app', 'Civic tech'],
    image: '/projects/plot.png',
    imageAlt: 'Flat illustration of two raised garden beds with sprouting plants and a watering can',
    href: '#',
  },
  {
    slug: 'ledger',
    title: 'Ledger',
    role: 'UX Designer',
    year: '2023',
    summary:
      'A finance dashboard for small business owners who dread spreadsheets. I simplified twelve reports into three plain-language questions owners actually ask, validated through usability testing.',
    tags: ['Dashboard', 'Information architecture', 'Usability testing'],
    image: '/projects/ledger.png',
    imageAlt: 'Flat illustration of a laptop displaying a dashboard with charts next to a potted plant',
    href: '#',
  },
]
