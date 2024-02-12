/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/dist',
    "node_modules/font-awesome/fonts": {
      url: "/fonts/",
      static: true,
      resolve: false,
    },
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-webpack',
    // {
    //   extendConfig: (config) => {
    //     config.re
    //     config.plugins.push(/* ... */);
    //     return config;
    //   },
    // },
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
