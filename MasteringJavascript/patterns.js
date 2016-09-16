// MARK: Namespace Pattern
// We are making a single global object
var CARFACTORY = CARFACTORY || {}; // short-circuit operator to create namespace
CARFACTORY.Car = function() {};
CARFACTORY.BMW = function() {};
CARFACTORY.engines = 1;
CARFACTORY.features = {
  seats: 6,
  airbags: 6
};

console.log(CARFACTORY);

// MARK: Module pattern

var basicServerConfig = {
  environment: "production",
  startupParams: {
    cacheTimeout: 30,
    locale: "en_US"
  },
  init: function() {
    console.log("Initializing the server");
  },
  updateStartup: function(params) {
    this.startupParams = params;
    console.log(this.startupParams.cacheTimeout);
    console.log(this.startupParams.locale);
  }
};

basicServerConfig.init();
// Initializing the server
basicServerConfig.updateStartup({cacheTimeout:60, locale: "en_UK"});

//NOTE: Refactoring the previus example
var basicServerConfig = (function() {
  var environment = "production";
  startupParams = {
    cacheTimeout: 30,
    locale: "en_US"
  };

  return {
    init: function() {
      console.log("Initializing the server");
    },
    updateStartup: function(params) {
      this.startupParams = params;
      console.log(this.startupParams.cacheTimeout);
      console.log(this.startupParams.locale);
    }
  };
})();

basicServerConfig.init();
basicServerConfig.updateStartup({cacheTimeout: 60, locale: "en_UK"});

// NOTE: Refactoring once again
// Ensuring only populate one object to global space using a namespace
var SERVER = SERVER || {};
SERVER.basicServerConfig = (function() {
  var environment = "production";
  startupParams = {
    cacheTimeout: 30,
    locale: "en_US"
  };

  return {
    init: function() {
      console.log("Initializing the server");
    },
    updateStartup: function(params) {
      this.startupParams = params;
      console.log(this.startupParams.cacheTimeout);
      console.log(this.startupParams.locale);
    }
  };
})();

SERVER.basicServerConfig.init();
SERVER.basicServerConfig.updateStartup({cacheTimeout: 60, locale: "en_UK"});

// NOTE: Undestanding revealing module pattern (RMP)
var modulePattern = function() {
  var privateOne = 1;
  function privateFn() {
    console.log('privateFn called');
  }

  return {
    publicTwo: 2,
    publicFn: function() {
      modulePattern.publicFnTwo();
    },
    publicFnTwo: function() {
      privateFn();
    }
  };
}();

modulePattern.publicFn();

var revealingExample = function() {
  var privateOne = 1;
  function privateFn() {
    console.log('privateFn called');
  }

  var publicTwo = 2;

  function publicFn() {
    publicFnTwo();
  }
  function publicFnTwo() {
    privateFn();
  }

  function getCurrentState() {
    return 2;
  }

  //reveal private variables by assigning public pointers
  return {
    setup: publicFn,
    count: publicTwo,
    increaseCount: publicFnTwo,
    current: getCurrentState()
  };
}();

console.log(revealingExample.current);
revealingExample.setup();
