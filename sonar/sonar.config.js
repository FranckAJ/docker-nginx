/* eslint-disable */
const sonarqubeScanner = require('sonarqube-scanner')
sonarqubeScanner(
  {
    serverUrl: 'http:/app-test.com.br:9000',
    token : "MY SONAR PROJECT KEY",
    options: {
      'sonar.sources': 'components,server,layouts,middleware,pages,plugins,store',
      'sonar.exclusions': '**/*.test.js,.nuxt,node_modules,.nyc_output,coverage,files,CI,__mocks__,**/*.stories.js',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.eslint.reportPaths': 'lint-report.json'
    },
  },
  () => {}
)
