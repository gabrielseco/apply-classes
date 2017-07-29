/*!
 * Passed an object with conditions and return the class string
 *
 * @author   Gabriel García Seco <ggarciaseco@gmail.com> <http://ggseco.com>
 * @license  MIT
 */
var applyClasses = function (obj) {
  return Object.keys(obj)
    .map(function (key) {
      return obj[key] ? key : ''
    })
    .filter(function(item) {
      return item !== ''
    })
    .join(' ')
    .trim();
}
module.exports = applyClasses;