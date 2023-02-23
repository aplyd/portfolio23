export default {
  '*': 'prettier -l',
  '*.(ts|tsx)': () => 'tsc --skipLibCheck --noEmit',
  '*.(ts|tsx|js|jsx)': 'eslint',
};
