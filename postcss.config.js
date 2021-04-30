const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./components/**/*.js",
      "./components/**/*.tsx",
      "./components/**/*.css",
      "./pages/**/*.js",
      "./pages/**/*.tsx",
      "./pages/**/*.css",
      "./lib/**/*.js",
      "./lib/**/*.tsx",
      "./lib/**/*.css",
      "./mod/**/*.js",
      "./mod/**/*.tsx",
      "./mod/**/*.css",
      "./assets/**/*.js",
      "./assets/**/*.tsx",
      "./assets/**/*.css",
    ],
    safelist: {
      greedy: [/^hljs-/]
    },
    defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
  }
];
  
const production = process.env.NODE_ENV !== "development"

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(production ? [purgecss] : [])
  ]
};
