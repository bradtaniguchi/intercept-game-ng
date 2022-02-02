window.exclude = [];
  window.groupByFolder = false;
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';
  
  window.appConfig = {
    showDebugger: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"c8530f8ef4e05ee9097d74e3bef98acb85a6468166fc63d3cedb9bb48783da74","projects":[{"name":"game-client-ng-e2e","type":"e2e","data":{"tags":[],"root":"apps/game-client-ng-e2e","files":[]}},{"name":"common-material","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-material","files":[]}},{"name":"internal-ng-e2e","type":"e2e","data":{"tags":[],"root":"apps/internal-ng-e2e","files":[]}},{"name":"game-client-ng","type":"app","data":{"tags":["type:app"],"root":"apps/game-client-ng","files":[]}},{"name":"gh-codespaces","type":"lib","data":{"tags":["type:lib"],"root":"libs/gh-codespaces","files":[]}},{"name":"script-loader","type":"lib","data":{"tags":["type:lib"],"root":"libs/script-loader","files":[]}},{"name":"common-ngrx","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ngrx","files":[]}},{"name":"internal-ng","type":"app","data":{"tags":["type:app"],"root":"apps/internal-ng","files":[]}},{"name":"common-ng","type":"lib","data":{"tags":["type:lib"],"root":"libs/common-ng","files":[]}},{"name":"common","type":"lib","data":{"tags":["type:lib"],"root":"libs/common","files":[]}},{"name":"game","type":"lib","data":{"tags":["type:lib"],"root":"libs/game","files":[]}}],"dependencies":{"game-client-ng-e2e":[{"source":"game-client-ng-e2e","target":"game-client-ng","type":"implicit"}],"common-material":[],"internal-ng-e2e":[{"source":"internal-ng-e2e","target":"internal-ng","type":"implicit"}],"game-client-ng":[],"gh-codespaces":[],"script-loader":[],"common-ngrx":[{"source":"common-ngrx","target":"common","type":"static"}],"internal-ng":[{"source":"internal-ng","target":"common-material","type":"implicit"},{"source":"internal-ng","target":"common-ng","type":"implicit"}],"common-ng":[{"source":"common-ng","target":"common","type":"implicit"}],"common":[],"game":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};