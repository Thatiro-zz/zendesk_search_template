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
      form: '#formInbenta',
      target: '#inbenta-autocompleter',
      conf: {
        showViewAllButton: false
      }
    },
    results: {
      container: '#inbenta-container', // Div where inbenta will be loaded
      target: '#inbenta-results',
      conf: {}
    },
    instants: {
      target: '#inbenta-instants',
      input: ['#request_subject', '#request_description'],
      conf: {}
    },
    lastChance: {
      target: '#inbenta-last-chance',
      input: ['#request_subject', '#request_description'],
      conf: {}
    }
  }
}

// Attach configuration to the window
window.inbAppSdk = inbApp;
