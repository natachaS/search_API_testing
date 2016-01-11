var munge = require('./munge');

// unsorted set of artists to search
var artists = [ 'Rihanna', 'The Weeknd', 'Drake', 'The Game', 'Lana Del Rey',
  'Kanye West', 'Eminem', 'Adele', 'Fetty Wap', 'Kendrick Lamar', 'Panic! At The Disco',
  'Cam\'ron', 'Tyler, The Creator', 'The Notorious B.I.G.', 'Beyoncé' ];

// searchIndex contains munged artist names to perform substring matches on
// the order of searchIndex must match the order of artists to return correct results
var searchIndex = artists.map(function (artist) {
  return munge(artist);
});

// returns an unsorted array of artists matching query
function _artistSearch (query) {
  var mungedQuery = munge(query);

  // check if the mungedQuery is a substring of each mungedArtist until we're done
  // build an array of artist names (unmunged) as results
  var results = [ ];
  searchIndex.forEach(function (mungedArtist, artistIndex) {
    if (mungedArtist.indexOf(mungedQuery) !== -1) {
      results.push(artists[artistIndex]);
    }
  });
  return results;
}

function _validateQuery (query) {
  // need to validate against more edge cases, i.e. string full of spaces
  if (query === '') { throw new Error('Your query is not valid!'); }
}

function search (query) {
  // validate query throws an exception if query is invalid as this API
  // has no error in its contract
  _validateQuery(query);
  return _artistSearch(query);
}
module.exports = search;
