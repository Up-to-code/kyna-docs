// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial',
      collapsed: false,
      items: [
        'tutorial/getting-started',
        'tutorial/tour',
        'tutorial/variables',
        'tutorial/types',
        'tutorial/operators',
        'tutorial/control-flow',
        'tutorial/functions',
        'tutorial/modules',
        'tutorial/classes',
        'tutorial/errors',
        'tutorial/async',
        'tutorial/flow-result',
      ],
    },
    {
      type: 'category',
      label: 'Language reference',
      collapsed: false,
      items: [
        'reference/bindings',
        'reference/control-flow',
        'reference/functions',
        'reference/classes-and-objects',
        'reference/exceptions',
        'reference/async',
        'reference/networking',
      ],
    },
    {
      type: 'category',
      label: 'Standard library',
      collapsed: true,
      items: [
        'stdlib/text',
        'stdlib/collections',
        'stdlib/data-formats',
        'stdlib/files',
        'stdlib/system',
        'stdlib/timing-and-memory',
      ],
    },
    'examples',
  ],
};

export default sidebars;