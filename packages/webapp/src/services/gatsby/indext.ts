import * as types from './types';

const createFilesystemConfig = (root): types.plugin => ({
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'data',
    path: `${root}/src/data/`,
  },
});

export const createAnalyticsConfig = (trackingId): types.pluginObj | null => {
  if (!trackingId) {
    return null;
  };

  return {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId,
    },
  }
}

export const createHotjarConfig = (id, sv): types.pluginObj | null => {
  if (!id || !sv) {
    return null;
  }

  return {
    resolve: 'gatsby-plugin-hotjar',
    options: {
      id,
      sv,
    },
  }
};

/**
 * A list of all Gatsby plugins used as is, without any configuration.
 */
const STRING_CONFIGS = [
  'gatsby-plugin-offline',
  'gatsby-plugin-material-ui',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-typescript',
  'gatsby-transformer-remark',
];

const OBJECT_CONFIGS: types.pluginObj[] = [
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Commit Africa',
      icon: 'packages\webapp\src\assets\meta\logo.png',
      // eslint-disable-next-line @typescript-eslint/camelcase
      short_name: 'Draint', 
      // eslint-disable-next-line @typescript-eslint/camelcase
      start_url: '/?utm_source=pwa',
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: '#FFFFFF',
      // eslint-disable-line @typescript-eslint/camelcase
      theme_color: '#000000', 
      display: 'fullscreen',
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `src/output/pages`,
    },
  },
  {
    resolve: `gatsby-plugin-env-variables`,
    options: {
      whitelist: [],
    }
  }
]

/**
 * A function that creates a list of all Gatsby plugins with custom configuration applied via functions. Also removes plugins (via `filter` method) that do not have required configuration passed from ENV variable (for example, a Google Analytics ID is only passed in production)
 */
const createPluginsArray = (env: types.env, root: string): types.plugin[] => {
  const { HOTJAR_ID: id, HOTJAR_SNIPPET_VERSION: sv, GOOGLE_ANALYTICS_ID: trackingId } = env;
  const dynamicConfigsArray = [createAnalyticsConfig(trackingId), createHotjarConfig(id, sv), createFilesystemConfig(root)]
  const dynamicConfigs = dynamicConfigsArray.filter((value): boolean => !!value) as types.pluginObj[];

  return [...STRING_CONFIGS, ...OBJECT_CONFIGS, ...dynamicConfigs];
};

/**
 * Returns entire list of plugins used by Gatsby with custom configuration applied as needed.
 */
export const = createBrowserConfig (env, root): types.configObject => ({
  siteMetadata: {
    title: 'Commit Africa',
    siteUrl: 'https://commit.africa',
  },
  plugins: createPluginsArray(env, root),
});
