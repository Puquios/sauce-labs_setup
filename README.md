# Example IBM Bluemix Pipeline using Sauce Labs

A simple pipeline with a HelloWorld Node.js application that runs tests via Sauce Labs. This is an easy way to get a pre-configured pipeline with all the environment variables set and ready to go! The Sauce Labs username and API key fields will need to be filled in with valid information before the stage will run correctly.

Click the link below to see a project running in Bluemix!

[View a configured Sauce Labs project here.](https://hub.jazz.net/project/elobeto/Sauce-testStageSetsURL/overview)

### The application: 
Helloworld node application

### The pipeline: 
As simple as it gets:
* Deploy 
    * Deploys the HelloWorld Node.js app to Bluemix and exports the app name for use in the testing stage. 
* Tests 
    * Runs a suite of tests via Sauce Labs against the deployed app. All the needed environment variables have been set.

## Simple set up instructions:
In order to configure a new stage with Sauce Labs follow these steps:
1.	Click the "Add Stage" button in the Pipeline
2. 	Name the new stage accordingly and click on the "Jobs" tab
3.	Click the "Add Job" button and select "Deploy"
4.	Name the Deploy job accordingly and set up desired deploy configuration
5.	In the deploy script box add the following code: `export CF_APP_NAME="$CF_APP"`
6.	Click the "Add Job" button again and select "Test"
7.	Name the new Test Job accordingly and select "Sauce Labs" from the Tester Type dropdown
8.	Enter your Sauce Labs username and access key in the provided input fields
9.	Select the execution command that best fits your code configuration or enter a custom command
10.	Select whether to download the videos and Selenium logs for the Sauce Labs jobs
11.	Select whether or not to enable test reporting. For best results, use the `mocha-jenkins-reporter` in JavaScript
12.	Click on the "Environment Properties" tab at the top, hit "Add Property" and select "Text Property"
13.	Add the property `CF_APP_NAME` and delete the prefilled value
14.	Do the same for `TEST_URL`.
15.	Hit the "Save" button and the stage is complete!

## Usage:
Overview of the Sauce Labs extension:

Provide Sauce Labs User Name and Access Key in the text boxes provided.

The follwing environment variables will need to be added:
* `CF_APP_NAME`: The name of the app that will be pulled from the deploy job. Leave empty.
* `TEST_URL`: The URL of the deployed app that will be set from Cloud Foundry. Ensure the test code is configured to read in this value for the URL and are not hardcoded. Leave empty.

In order to automatically run tests against the URL generated in the deploy stage, ensure that tests are configured to pull a URL from the environment variables (namely `TEST_URL`).

Add the following command into the deploy job to ensure that the app URL is transferred to the test job: `export CF_APP_NAME="$CF_APP"` <strong>NOTE:</strong> Environment variables can only be transferred within a single stage (ie, from job to job), not from stage to stage.

Select whichever command best fits the test configuration (`npm test`, `grunt test`, `grunt`, `ant`, or `mvn`). If no selection fits the project enter a custom configuration in the provided command line and select "Custom".

To best utilize the Test Reporting tab for Node applications, configure Mocha to use the `mocha-jenkins-reporter` as this will generate correctly formatted xunit output for the reporter. Standard JUnit reporting will work for Java.

See [Sauce Labs extension](https://github.com/Osthanes/saucelabs) for the extension.
