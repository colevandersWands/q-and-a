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

  let moduleBulletPoint = `- **[${formattedName}](${url})**: ${
    description || ''
  }`;

  moduleBulletPoint += `\n  - ${issuesSearch(
    'resource',
    'helpful resources',
  )}, [all issues](https://github.com/${env.user}/${
    env.repo
  }/milestone/${milestone})`;

  moduleBulletPoint += '\n  - questions about the tasks: ';
  moduleBulletPoint += issuesSearch('clarification', 'clarifications') + ',  ';
  moduleBulletPoint += issuesSearch('bug', 'bug reports');

  moduleBulletPoint += '\n  - questions about your work: ';
  moduleBulletPoint += issuesSearch('theory', 'theory-related') + ', ';
  moduleBulletPoint += issuesSearch('help wanted', 'help wanted') + ',  ';
  moduleBulletPoint += issuesSearch('review', 'review requests');

  return moduleBulletPoint;
};
