import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'FDE Research',
  description: 'Evidence from real Forward Deployed Engineer job descriptions.',
  base: '/forward-deployed-engineer-research/',
  lang: 'en-US',
  themeConfig: {
    search: { provider: 'local' },
    nav: [{text: 'Overview', link: '/'}, {text: 'Jobs', link: '/jobs/'}, {text: 'Skills', link: '/skills'}],
    sidebar: [
      {text: 'Understand the role', items: [{text: 'Overview', link: '/'}, {text: 'What the work involves', link: '/work'}]},
      {text: 'Review real jobs', items: [{text: 'Compare all postings', link: '/jobs/'}, {text: 'Internships', link: '/internships'}, {text: 'Full-time & new graduate', link: '/full-time'}]},
      {text: 'Assess requirements', items: [{text: 'Skills & evidence', link: '/skills'}, {text: 'Sources & method', link: '/sources'}]}
    ],
    outline: {level: [2, 3]},
    socialLinks: [{icon: 'github', link: 'https://github.com/mayumizurita/forward-deployed-engineer-research'}],
    footer: {message: 'Independent research • Reviewed November 12, 2026 • Verify availability with the employer.'}
  }
})
