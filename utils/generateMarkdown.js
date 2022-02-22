function generateMarkdown(data) {
    return `# ${data.project_title}

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Test](#Test)
* [License](#License)
* [Questions](#Questions)
    
## Description
${data.project_description}

## Installation
${data.installation_instructions}

## Usage
${data.usage_information}

## Contribution
${data.conrtibution_guidelines}

## Test
${data.test_instructions}

## License
[![License](https://img.shields.io/badge/License-${data.license_choice}-blue.svg)](https://opensource.org/licenses/${data.license_choice})
    
## Questions?
    
github: https://github.com/${data.github_name}

email: ${data.email_address}

`
}

module.exports = generateMarkdown