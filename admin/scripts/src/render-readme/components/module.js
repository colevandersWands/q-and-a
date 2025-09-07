export const module = (
  { env = {} },
  { name = '', url = '', milestone = 0, description = '' },
) => {
  // --- scoped utilities for generating links ---

  const urlSafeName = `"${encodeURIComponent(name)}"`;

  const labelize = (name = '') => `label%3A${encodeURIComponent(name)}`;

  const issuesSearch = (label = '', linkText = label) =>
    `[${linkText}](https://github.com/${env.user}/${
      env.repo
    }/issues/?q=milestone%3A${urlSafeName}+${
      typeof label === 'string'
        ? labelize(label)
        : label.map(labelize).join('+')
    })`;

  // --- build the section ---

  const formattedName = name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  let moduleBulletPoints = `- **[${formattedName}](${url})**: ${
    description || ''
  }`;

  moduleBulletPoints += `\n  - ${issuesSearch(
    'resource',
    'helpful resources',
  )}, `;
  moduleBulletPoints += issuesSearch('tip or trick', 'tips and tricks') + ',  ';
  moduleBulletPoints += `[all issues](https://github.com/${env.user}/${env.repo}/milestone/${milestone})`;

  moduleBulletPoints += '\n  - questions about the tasks: ';
  moduleBulletPoints +=
    issuesSearch('clarification', 'task clarifications') + ',  ';
  moduleBulletPoints += issuesSearch('theory', 'theory questions') + ', ';
  moduleBulletPoints += issuesSearch('bug', 'bug reports');

  moduleBulletPoints += '\n  - questions about your work: ';
  moduleBulletPoints += issuesSearch('help wanted', 'help wanted') + ',  ';
  moduleBulletPoints += issuesSearch('review', 'review requests');

  return moduleBulletPoints;
};
