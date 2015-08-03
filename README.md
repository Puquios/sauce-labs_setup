# Example pipeline for starting Sauce Labs tests

A simple pipeline with a HelloWorld Node.js application that runs tests via Sauce Labs. This is an easy way to get a pre-configured pipeline with all the environment variables set and ready to go!

Now press this button, to get your own copy of the sample running in Bluemix !

[![Deploy To Bluemix](https://bluemix.net/deploy/button.png)](https://hub.jazz.net/deploy/index.html?repository=https://github.com/Puquios/sauce-labs_setup.git) 

## The application 
Helloworld node application

## The pipeline 
As simple as it gets
- Deploy 
+ Deploys the HelloWorld Node.js app to Bluemix and exports the app name for use in the testing stage. 
- Tests 
+ Runs a suite of tests via Sauce Labs against the deployed app. All the needed environment variables have been set.

NOTE: The deploying to Bluemix Stage will not complete since the Sauce Labs credentials are invalid. Once the Configuring Pipeline stage has completed, it is safe to view the project and enter valid Sauce Labs information.

##Overview of Sauce extensions
### Simple extension to allow exection of Sauce Labs tests via the pipeline. Support for Java and Javascript testing.


### Usage:
Provide Sauce Labs User Name and Access Key in the text boxes provided and indicate whether Sauce Connect will need to be set up. This only applies if the project does not use the npm module `sauce-connect-launcher`.

In order to automatically run tests against the URL generated in the build stage, ensure that tests are configured to pull a URL from environment variables(namely `TEST_URL`). Add two environment variables `CF_APP_NAME` with a blank value (delete any pre-filled data) and one with the key `TEST_URL` with no value as before. This will the be the URL of the deployed app that the tests will run against.

Declare the following environment properties for the stage: `HOST` and `PORT`. These variables will be set in response to the use of Sauce Connect. Ensure that tests are configured to read from these variables and are not hardcoded.

Add the following command into the deploy job to ensure that the app URL is transferred to the test job: `export CF_APP_NAME="$CF_APP"` <strong>NOTE:</strong> Environment variables can only be transferred within a single stage (ie, from job to job), not from stage to stage.

Select whichever command best fits the test configuration (`npm test`, `grunt test`, `grunt`, `ant`, or `mvn`). If no selection fits the project enter a custom configuration in the provided command line and select "Custom".