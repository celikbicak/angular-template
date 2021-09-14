module.exports = function(config) {
  config.set({
      basePath: "",
      frameworks: ["jasmine", "@angular-devkit/build-angular"],
      plugins: [
          require("karma-jasmine"),
          require("karma-chrome-launcher"),
          require("@angular-devkit/build-angular/plugins/karma")
      ],
      client: {
          clearContext: false,
          jasmine: { random: false }
      },
      port: 9876,
      logLevel: config.LOG_WARN,
      reporters: ["dots"],
      autoWatch: false,
      browsers: ["ChromeHeadlessNoSandbox"],
      customLaunchers: {
          ChromeHeadlessNoSandbox: {
              base: "ChromeHeadless",
              flags: ["--no-sandbox"]
          }
      },
      singleRun: true
  });
};
