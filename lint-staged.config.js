module.exports = {
  '*.js': 'npm run compliance:lint',
  'package.json': ['npm run security:outdated', 'npm run security:audit'],
};
