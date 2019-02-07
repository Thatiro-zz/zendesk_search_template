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

### Setting up a Zendesk app (WIP)
The purpose of this section is to be able to integrate the Inbenta search application into a Zendesk page.

### Setting up a Search Zendesk template
##### Step 1: Create a Zendesk page (This step can be skipped if it was already created)
- Go to the [Zendesk main page](https://www.zendesk.com/) and click on the "Free trial" option.
- Register an account and follow the Zendesk registration guide to obtain it.

##### Step 2: Setting the desired configuration
Although this template is designed with most of the search components, it also allows for their deactivation (except for the results components). Modify the conf files to activate/deactivate the different components in order to adapt the application to fit your requirements. To deactivate a component remove the whole component from the config file.

### Integration (WIP)
This section is a guide for knowing how to integrate the application into the Zendesk page. There are many possible options for integrating the SDK. In this section, only a search and deflection integration will be explained as those are the most common and hard to integrate.

##### Search Integration
This integration will link the search to the search bar and show the results in the same page. Remember to modify the configuration file to select the components, where the application should be loaded, the input id or class to be linked...

Go to guide theming in the admin panel
- Select the Guide view
- Go to the Guide admin 
- Select the theming option on the left menu
- Select the theme to change it
- Click on the three dots and select edit code

Add the needed files and include them in the desired page
- Add the  inbenta-core.js, inbenta-core.css and the conf files (i.e: inbenta-conf-results.js) as a resource
- Include them in the desired pages. Include the scripts and CSS at the top of the file. Add the needed div or modify the conf file to use an existing one and load the application
- Perform a search on the integrated page to check that everything went well

### Live examples
Here is a list of a search and a deflection integration examples to see how a basic configuration would look in a basic Zendesk template:

- [Main search page](https://inbenta-ps.zendesk.com/hc/en-us)
- [Deflection page](https://inbenta-ps.zendesk.com/hc/en-us/requests)
