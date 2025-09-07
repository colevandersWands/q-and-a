const nameToTitle = (name = '') =>
  typeof name !== 'string'
    ? ''
    : name.includes('-')
    ? name
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    : name;

export const top = ({ env = {}, modules = {}, org = {} }) =>
  `# ${env.repo ? nameToTitle(env.repo) : 'Study Repo'}: ${nameToTitle(
    env.school,
  )}

<details>
<summary>Tech Support</summary>
<a href="https://rubberduckdebugging.com/" target="_blank"><img alt="Rubber Ducky" src="./assets/rubber-ducky.png"/></a>

</details>

${
  org.forum
    ? `- [${
        org.forum.includes('discord')
          ? 'Discord'
          : org.forum.includes('slack')
          ? 'Slack'
          : 'Forum'
      }](${org.forum})`
    : ``
}
- [Asking for Help](./guides/asking-for-help.md)
- [Study Tips](./guides/study-tips)
- [All issues](https://github.com/${env.user}/${env.repo}/issues)

---

`;
