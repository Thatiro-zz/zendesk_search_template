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
  	domainKey: " ---------------- "
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