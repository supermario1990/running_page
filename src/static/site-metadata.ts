interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Life',
  siteUrl: 'https://github.com/supermario1990',
  logo: 'https://avatars.githubusercontent.com/u/8428531?u=e5866ec2eb5a3726403b0043840d00df68ff99cc&v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://github.com/supermario1990',
    },
    {
      name: 'About',
      url: 'https://github.com/supermario1990',
    },
  ],
};

export default data;
