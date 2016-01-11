var removeDiacritics = require('diacritics').remove;

function munge (native) {
  // Using a package to substitute all the accents.
  var munged = removeDiacritics(native);
  // Remove all the punctuation AND reduce extra spaces
  munged = munged.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');
  // Lowercase everything
  return munged.toLowerCase();
}

module.exports = munge;
