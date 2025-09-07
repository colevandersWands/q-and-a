export const section = (
  config,
  { title = '', intro = '', component = () => {}, data = [] },
) =>
  `

## ${title}

${intro}

${data.map((item) => component(config, item)).join('\n')}

---

`;
