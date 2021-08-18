/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Instructor Fulton Course site',
  tagline: 'Fall 2021',
  url: 'https://cs-uic.pages.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'instructorc', // Usually your GitHub org/user name.
  projectName: 'UIC CS484 Course site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CS484 - Secure Web Application Development',
      logo: {
        alt: 'UIC Logo',
        src: 'img/uic_logo_blk.PNG',
      },
      items: [
        {
          type: 'doc',
          docId: 'syllabus',
          position: 'left',
          label: 'Syllabus',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/instructorc/uic_documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Syllabus',
              to: '/docs/syllabus',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
         
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/instructorc/uic_documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/instructorc/uic_documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
