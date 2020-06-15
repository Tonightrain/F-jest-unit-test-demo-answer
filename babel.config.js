module.exports = {
  presets: ["@babel/preset-env", "airbnb"],
  env: {
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    },
  },
};
