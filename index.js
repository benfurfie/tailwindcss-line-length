const _ = require('lodash');
const className = 'line-length';

module.exports = function({ widths, variants }) {
  return function({ addUtilities, e }) {
    let utilities = _.map(widths, (val, name) => ({
      [`.${e(`${className}-${name}`)}`]: {
        maxWidth: val
      }
    }));
    addUtilities(utilities, variants);
  }
}