# Example IBM Bluemix Pipelines using Sauce Labs

A simple pipeline with a HelloWorld Node.js application that runs tests via Sauce Labs. This is an easy way to get a pre-configured pipeline with all the environment variables set and ready to go! The Sauce Labs username and API key fields will need to be filled in with valid information before the stage will run correctly.

Click the links below to see a project running in Bluemix!

##Pipeline with a Build stage -> Deploy/Test stage:

[![Deploy To Bluemix](https://bluemix.net/deploy/button.png)](https://hub.jazz.net/deploy/index.html?repository=https://github.com/Puquios/sauce-labs_setup.git)

### The application: 
Helloworld node application

### The pipeline: 
* Build
	* Pulls in code from the Git repo and builds it.
* Deploy 
    * Deploys the HelloWorld Node.js app to Bluemix and exports the app name for use in the testing job. 
    * Runs a suite of tests via Sauce Labs against the deployed app. All the needed environment variables have been set.

##Pipeline with a Build stage -> Deploy stage - > Test stage:

[View a configured Sauce Labs project here.](https://hub.jazz.net/project/elobeto/Sauce-testStageSetsURL/overview)


### The application: 
Helloworld node application

### The pipeline: 
* Build
	* Pulls in code from the Git repo and builds it.
* Deploy 
    * Deploys the HelloWorld Node.js app to Bluemix.
* Test
    * Runs a suite of tests via Sauce Labs against the deployed app. All the needed environment variables have been set.


# Simple set up instructions:

##Adding Sauce Labs to an existing stage:

6.	Click the "Add Job" button inside the desired stage and select "Test"
7.	Name the new Test Job accordingly and select "Sauce Labs" from the Tester Type dropdown
8.	Enter your Sauce Labs username and access key in the provided input fields
9.	Select the execution command that best fits your code configuration or enter a custom command
10.	Select whether to download the videos and Selenium logs for the Sauce Labs jobs
11.	Select whether or not to enable test reporting. For best results, use the `mocha-jenkins-reporter` in JavaScript
12.	Click on the "Environment Properties" tab at the top, hit "Add Property" and select "Text Property"
13.	Add the property `CF_APP_NAME` and delete the prefilled value
14.	Do the same for `APP_URL`
15. Ensure that the following code is included in the deploy stage script box: `export CF_APP_NAME="$CF_APP"`
15.	Hit the "Save" button and the stage is complete!

##Adding a Sauce Labs test job to its own, new stage:

##Creating a new stage with Sauce Labs:

1.	Click the "Add Stage" button in the Pipeline
2. 	Name the new stage accordingly and click on the "Jobs" tab
6.	Click the "Add Job" button again and select "Test"
7.	Name the new Test Job accordingly and select "Sauce Labs" from the Tester Type dropdown
8.	Enter your Sauce Labs username and access key in the provided input fields
9.	Select the execution command that best fits your code configuration or enter a custom command
10.	Select whether to download the videos and Selenium logs for the Sauce Labs jobs
11.	Select whether or not to enable test reporting. For best results, use the `mocha-jenkins-reporter` in JavaScript
12.	Click on the "Environment Properties" tab at the top, hit "Add Property" and select "Text Property"
13.	Add the property `CF_APP_NAME` and delete the prefilled value
14.	Do the same for `APP_URL` but add in the URL for the application instead of leaving it blank
15.	Hit the "Save" button and the stage is complete!

###References:

See [Sauce Labs extension](https://github.com/Osthanes/saucelabs) for the extension.
