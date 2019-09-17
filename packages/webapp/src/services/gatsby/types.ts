export type env = {
  HOTJAR_ID?: string;
  HOTJAR_SNIPPET_VERSION?: string;
  GOOGLE_ANALYTICS_ID?: string;
};

export type pluginObj = {
  resolve: string;
  options: { [key: string]: any };
};

export type plugin = string | pluginObj;

export type configObject = {
  siteMetadata: {
    title: string;
    siteUrl: string;
  };
  plugins: plugin[];
};

export type TcreateConfig = (env: env, root: string) => configObject;
