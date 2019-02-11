/*--------------------------------------------------
|                    Main Configuration
|---------------------------------------------------
|
| Main configuration of the Inbenta application.
|
*/

// Inbenta application configuration
var inbApp = {
  sdkVersion: '1.22.0',
  sdkIntegrity: "sha384-ifuG86EAWx0kUeqJZTJxHpdJDFlKrXW0JcaBz2UsA5hdIXbvM9OmBQt6I98payUv",
  sdkAuth: {
    publicKey: " ---------------- ",
    domainKey: " ---------------- "
  },
  // Inbenta standard SDK configuration - Check inbenta API/SDK documentation <https://apidocs.inbenta.io/> for more information
  sdkConfig: {
    environment: "production", // Environments => "development" / "preproduction" / "production"
    userType: 0 // Select here the wanted profile
  },
  userTypes: {
    anonymous: 0,
    end_user: 0,
    agent: 0,
    manager: 0
  },
  // Inbenta custom application configuration
  appConfig: {
    autocompleter: {
      input: '#query', // Input to be linked to the autocompleter
      target: '#inbenta-autocompleter',
      conf: {
        showViewAllButton: false
      }
    },
    loader: {
      target: '#inbenta-loader',
      conf: {}
    },
    noResults: {
      target: '#inbenta-no-results',
      conf: {}
    },
    pagination: {
      target: '#inbenta-pagination',
      conf: {
        padding: 1 // pages before and after the actual
      }
    },
    filters: {
      target: '#inbenta-filters',
      conf: {
        refinements: [
          {
            attributeName: 'CONTENT_TYPE',
          }
        ]
      }
    },
    tabs: {
      target: '#inbenta-tabs',
      conf: {
        attributeName: 'Source'
      }
    },
    results: {
      container: '#inbenta-container', // Div where inbenta will be loaded
      target: '#inbenta-results',
      conf: {}
    },
    search: {
      active: true // This will activate or deactivate the Inbenta's search engine in the page, if deactivated is recommended to disable the router too
    },
    resultsPerPageSelector: {
      target: '#inbenta-results-per-page',
      conf: {
        options: [5, 10, 15]
      }
    },
    router: {
      target: '#inbenta-router',
      conf: {}
    },
    stats: {
      target: '#inbenta-stats',
      conf: {}
    },
    sortBy: {
      target: '#inbenta-sort-by',
      conf: {
        attributes: [
          { name: 'desc(_relevance)', label: 'Relevance' },
          { name: 'desc(Source)', label: 'Source - Descending' },
          { name: 'asc(Source)', label: 'Source - Ascending' },
        ],
      }
    },
    resultsPerPage: {
      target: '#inbenta-results-per-page',
      conf: {}
    }
  }
}

// Attach configuration to the window
window.inbAppSdk = inbApp;
