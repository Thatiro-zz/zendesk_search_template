/*--------------------------------------------------
|                    Main Configuration
|---------------------------------------------------
|
| Main configuration of the Inbenta application.
|
*/

// Inbenta application configuration
var inbApp = {
	sdkVersion: '1.20.5',
  	sdkIntegrity: "sha384-QBrrSyaD53PR+8qPOCeaR3O2OMKKOqxqfSV/9e/EfYRXoG+1ClHZXe8n7rdaYX+V",
	sdkAuth: {
		publicKey: " ---------------- ",
  	    domainKey: " --------------------- "
	},
	// Inbenta standard SDK configuration - Check inbenta API/SDK documentation <https://apidocs.inbenta.io/> for more information
	sdkConfig: {
		environment: "development", // Environments => "development" / "preproduction" / "production"
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
			conf: {
		  		attributes: ['Title', 'BEST_DYNABS']
			}
		},
		instants: {
			target: '#inbenta-instants',
			input: ['#community_post_title', '#community_post_details'],
			conf: {}
		},
		lastChance: {
			target: '#inbenta-last-chance',
			input: ['#community_post_title', '#community_post_details'],
			conf: {}
		}
	}
}

/*--------------------------------------------------
|                   Starting SDK
|---------------------------------------------------
|
| >> WARNING!
|
| Load & trigger JS & CSS core. Please, be carefull if
| you want to modify this section.
|
*/

// Attach configuration to the window
window.inbAppSdk = inbApp;