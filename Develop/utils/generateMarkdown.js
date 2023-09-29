// Function to render a list of credits
function renderCreditsList(credits) {
  if (!credits) return '';
  const creditList = credits.split(',').map(credit => `- ${credit.trim()}`).join('\n');
  return `## Credits\n${creditList}\n`;
}

// Function to render a list of badges
function renderBadgesList(badges) {
  if (!badges) return '';
  const badgeList = badges.split(',').map(badge => `- ${badge.trim()}`).join('\n');
  return `## Badges\n${badgeList}\n`;
}

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  return `- [License](#license)`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License\nThis project is licensed under the ${license} license.\n`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.license ? renderLicenseBadge(data.license) : ''}

${data.description ? `## Description\n${data.description}\n` : ''}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.Badges ? '- [Badges](#badges)' : ''}
${data.license ? '- [License](#license)' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${data.installation ? `## Installation\n${data.installation}\n` : ''}

${data.usage ? `## Usage\n${data.usage}\n` : ''}

${data.Badges ? renderBadgesList(data.Badges) : ''}

${data.license ? renderLicenseSection(data.license) : ''}

${data.contributing ? `## Contributing\n${data.contributing}\n` : ''}

${data.tests ? `## Tests\n${data.tests}\n` : ''}

## Questions
${data.github || data.email ? `For questions, you can reach out to me at [${data.github}](https://github.com/${data.github}) or email me at ${data.email}.` : ''}
`;
}

module.exports = generateMarkdown;
