module.exports = {
  purge: {
    mode: "all",
    content: [
      "./src/**/*.js",
      "./node_modules/next/dist/pages/**/*.js",
      "./node_modules/next/dist/pages/**/*.ts",
      "./node_modules/next/dist/pages/**/*.ts",
    ],
  },
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
