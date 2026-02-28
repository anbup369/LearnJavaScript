//Coding Challenge 8 of 10

/*
Test Environment Config

In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement that takes an environment name stored in a variable and
 prints the base URL, API key pattern, and timeout.
 Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

Examples:

Input:
envName = "staging"

Output:
Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror

💡 Explanation:The switch matches "staging" and sets the corresponding configuration values for the staging environment.
*/

let envName = "staging"
let base_url, API_Key_Prefix, timeout, description;

switch (envName) {
    case "dev": {
        base_url = "https://dev-api.testingacademy.com";
        API_Key_Prefix = "dev_key_xxxx-xxxx";
        timeout = "8000ms";
        description = "Dev - Pre-production mirror";
        break;

    }
    case "staging": {
        base_url = "https://staging-api.testingacademy.com";
        API_Key_Prefix = "stg_key_xxxx-xxxx";
        timeout = "8000ms";
        description = "Staging - Pre-production mirror";
        break;
    }
    case "qa": {
        base_url = "https://qa-api.testingacademy.com";
        API_Key_Prefix = "qa_key_xxxx-xxxx";
        timeout = "8000ms";
        description = "Qa - Pre-production mirror";
        break;
    }
    case "prod":
    case "production": {
        base_url = "https://api.testingacademy.com";
        API_Key_Prefix = "prod_key_xxxx-xxxx";
        timeout = "8000ms";
        description = "Production Server ";
        break;
    }
    default: {
        base_url = "N/A";
        API_Key_Prefix = "N/A";
        timeout = "N/A";
        description = "Unknown environment";
    }

}


console.log(`Environment: ${envName.toUpperCase()} Base URL: ${base_url} API Key: ${API_Key_Prefix} Timeout: ${timeout} Description: ${description}`)