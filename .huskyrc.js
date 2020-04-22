module.exports = {
  "hooks": {
    "commit-msg": "commitlint --edit",
    "pre-commit": "lint-staged"
  }
}
