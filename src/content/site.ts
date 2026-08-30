export const site = {
  name: 'Chris Dedman-Rollet',
  shortName: 'Chris Dedman',
  url: 'https://chrisdedman.vercel.app',
  title: 'Chris Dedman | Software Engineer',
  description:
    'Software engineer working on kernels, developer tooling, and full-stack systems. Currently at Profound; M.S. Computer Science at CSULB.',
  image: '/website.jpeg',
  email: 'chrisdedman@proton.me',
  location: 'Los Angeles, California',
} as const;

export const nav = [
  { href: '/about', label: 'about' },
  { href: '/work', label: 'work' },
  { href: 'https://astradedman.vercel.app/', label: 'writing', external: true },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/chrisdedman', handle: 'chrisdedman' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chris-dedman-rollet/',
    handle: 'chris-dedman-rollet',
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/astranebula.bsky.social',
    handle: 'astranebula',
  },
  { label: 'Matrix', href: 'https://matrix.to/#/@astranebula:matrix.org', handle: '@astranebula' },
  {
    label: 'Discord',
    href: 'https://discord.gg/code-society-823178343943897088',
    handle: 'code society',
  },
];
