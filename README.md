### OBJECTIVE
The purpose of this documentation is to define the integration of a search SDK in a Zendesk portal. Zendesk uses a template to create or modify all the pages. The following SDK setup was done using the basic template "Zendesk Copenhagen" because it is the default template.

More info about the [Zendesk Templates](https://developer.zendesk.com/apps/docs/help-center-templates/introduction).

### FEATURES
This application uses the Inbenta [search SDK](https://developers.inbenta.io/search/javascript-sdk/sdk-components) with the following used and supported components:

- Autocompleter
- Instants
- Last Chance
- Loader
- No Results
- Pagination
- Refinement Lists
- Refinement Tabs
- Results
- Results per Page Selector
- Router
- Sort By Selector
- Stats

### Files hierarchy
There are two main folders in this repository, assets and conf. In this section the files of those folders will be explained.

##### Common files
- **assets/css/inbenta-core.css** contains the design that defines the look & feel.
- **assets/js/inbenta-core.js** responsible for managing all application logic.

##### Specific files
- **conf/inbenta-conf-autocompleter.js** configuration example of the application for a page using the autocompleter component only. This configuration will overwrite the default configuration that can be found in the [Inbenta API & SDK Documentation](https://developers.inbenta.io/).
- **conf/inbenta-conf-deflection-community.js** configuration example of the application for a page using the deflection tools in a community form. This configuration will overwrite the default configuration that can be found in the [Inbenta API & SDK Documentation](https://developers.inbenta.io/).
- **conf/inbenta-conf-deflection.js** configuration example of the application for a page using the deflection tools in a new request form. This configuration will overwrite the default configuration that can be found in the [Inbenta API & SDK Documentation](https://developers.inbenta.io/).
- **conf/inbenta-conf-results.js** configuration example of the application for the results page. This configuration will overwrite the default configuration that can be found in the [Inbenta API & SDK Documentation](https://developers.inbenta.io/).

Modify these files to adapt it to the Zendesk page requirements that will be integrated.

### Setting the desired configuration
Although this template is designed with most of the search components, it also allows for their deactivation (except for the results components). Modify the conf files to activate/deactivate the different components in order to adapt the application to fit your requirements. To deactivate a component remove the whole component from the config file.

In order for the application to work properly, only one conf file should be loaded per page.

##### General configuration
The config file has some general configuration that is not related to the components.

```javascript
sdkVersion: '1.22.0',
sdkIntegrity: "sha384-ifuG86EAWx0kUeqJZTJxHpdJDFlKrXW0JcaBz2UsA5hdIXbvM9OmBQt6I98payUv",
sdkAuth: {
	publicKey: " ---------------- ",
    domainKey: " ---------------- "
},
// Inbenta standard SDK configuration - Check inbenta API/SDK documentation <https://apidocs.inbenta.io/> for more information
sdkConfig: {
    environment: "production", // Environments => "development" / "preproduction" / "production"
},
userTypes: {
    anonymous: 0,
    end_user: 0,
    agent: 0,
    manager: 0
},
// List of the paths where this script shouldn't be loaded (results and deflection pages)
resultsDeflectionPaths: {
    paths: ['/search', 'requests/new', 'community/posts/new']
},
```

- **sdkVersion**: The version of the SDK that will be used. 
- **sdkIntegrity**: Each SDK version has a SRI. This is a security feature that enables browsers to verify that the resources they fetch are delivered without unexpected manipulation. Changing the version might need a change of the inbenta-core.js to adapt it with the new features.
- **sdkAuth**: Introduce the public key and domain key of the Backstage instance that will be used. [More info](https://help.inbenta.io/general/administration/finding-your-api-credentials/).
- **sdkConfig**: Standard SDK configuration. [More info](https://developers.inbenta.io/search/javascript-sdk/sdk-setup#configuration-options).
- **userTypes**: This configuration sets the profiles that will be used for each Helpcenter user role. This configuration will look for the variable 'HelpCenter.user.role'. Change these object to use the desired profiles for each role. To know which profile ids the Backstage instance has, go to Settings -> User Types in Backstage.
- **resultsDeflectionPaths**: This configuration has an array of the paths where the 'inbenta-conf-autocompleter.js' shouldn't be loaded. This configuration is only available in the autocompleter configuration file to be able to load the Inbenta files that only use the autocompleter component in the header in order to avoid conflicts in pages like results or deflections where the files are loaded again.

##### Common components
Most components have the following configuration structure:
```javascript
tabs: {
	target: '#inbenta-tabs',
	conf: {
		attributeName: 'Source'
	}
}
```

- **target**: Id or class of the HTML element that this component will use. The application will add this div and replace it with the corresponding component.
- **conf**: Object with the configuration of the component. This object can be empty and it will use the default configuration.

Check the [components page](https://developers.inbenta.io/search/javascript-sdk/sdk-components) to know all the options available. To remove a component, remove it from the config file.

The results and search configuration are special as they can't be deactivated and have additional options.

##### Search
```javascript
search: {
	active: true
}
```
If this option is activated, the search bar will be replaced and will use the Inbenta search engine. Setting this option to false will only allow a page to have an autocompleter or deflection tools components

##### Results
```javascript
results: {
	container: '#inbenta-container', // Div where inbenta will be loaded
	target: '#inbenta-results',
	conf: {}
}
```
- **container**: Id or class where the application will be loaded. The application will add the needed elements above that div and will hide it when a search is done. If this element doesn't exist, the application will launch an error. This component is **required** for the application to work. Do not remove it.

##### Autocompleter
```javascript
autocompleter: {
	input: '#query', // Input to be linked to the autocompleter
	target: '#inbenta-autocompleter',
	conf: {
		showViewAllButton: false
	}
}
```
- **input**: Id or class of the input to be linked. This input will be replaced only when the search configuration is activated. This input must have the attribute autocomplete="off".
- **target**: Id or class of the HTML element that this component will use. The application will add this div and replace it with the corresponding component.
- **conf**: Object with the configuration of the component. This object can be empty and it will use the default configuration.

### Live examples
Here is a list of a search and a deflection integration examples to see how a basic configuration would look in a basic Zendesk template:

- [Autocompleter page](https://inbenta-ps.zendesk.com/hc/en-us)
- [Deflection page](https://inbenta-ps.zendesk.com/hc/en-us/requests/new)
- [Community Deflection page](https://inbenta-ps.zendesk.com/hc/en-us/community/posts/new)
- [Results page](https://inbenta-ps.zendesk.com/hc/en-us/search)
