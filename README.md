# Example IBM Bluemix Pipeline using Sauce Labs

A simple pipeline with a HelloWorld Node.js application that runs tests via Sauce Labs. This is an easy way to get a pre-configured pipeline with all the environment variables set and ready to go! The Sauce Labs username and API key fields will need to be filled in with valid information before the stage will run correctly.

Click the link below to see a project running in Bluemix!

[View a configured Sauce Labs project here.](https://hub.jazz.net/project/elobeto/Sauce-testStageSetsURL/overview)

### The application: 
Helloworld node application

### The pipeline: 
As simple as it gets
* Deploy 
    * Deploys the HelloWorld Node.js app to Bluemix and exports the app name for use in the testing stage. 
* Tests 
    * Runs a suite of tests via Sauce Labs against the deployed app. All the needed environment variables have been set.

NOTE: The deploying to Bluemix Stage takes a while to complete.

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
