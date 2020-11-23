module.exports = {
  extends: 
  'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    "react/prop-types": 0
  },
  extends: [
    "plugin:react/recommended"
  ]
};
