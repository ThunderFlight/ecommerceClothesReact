const camelCasePattern = "^[a-z][a-zA-Z0-9]+$"

module.exports = {
    "extends": ["stylelint-config-clean-order"],
    "plugins": ["stylelint-scss"],
    "rules": {
      "selector-class-pattern": camelCasePattern,
      
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": true,
      
      "scss/dollar-variable-pattern": camelCasePattern,
      "scss/selector-no-redundant-nesting-selector": true,
    }
}