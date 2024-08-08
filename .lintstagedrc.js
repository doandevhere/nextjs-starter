const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) => `prettier --write ${filenames.join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx, md, mdx}': [buildEslintCommand, buildPrettierCommand],
};
