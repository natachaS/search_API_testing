// for the purpose of the test i put all the tests in one file (instead of writing one for the munge function and one for the search)
var expect = require('chai').expect;
var search = require('../app/search');

describe('The Search API', function () {
  // An empty query should return an error
  it('makes sure the query is valid', function () {
    var emptySearch = function () { search(''); };
    expect(emptySearch).to.throw('Your query is not valid!');
  });

  // The Search API should return an array
  it('returns an array', function () {
    expect(search('anything')).to.be.an('array');
  });

  // The search API should be case insensitive
  it('is case insensitive', function () {
    expect(search('aDelE')).to.eql(['Adele']);
  });

  // If no match is found, the search should return an empty array
  it('returns an empty array if no match is found', function () {
    expect(search('Natacha Springer')).to.eql([ ]);
  });

  // The search API should work when the query contains accented characters
  it('disregards accented characters', function () {
    expect(search('Beyonce')).to.eql(['Beyoncé']);
  });

  // The search API should return the correct result once a match is found.
  it('returns the right result if a match is found', function () {
    expect(search('the weeknd')).to.eql(['The Weeknd']);
  });
  // The search API should return a set of potential matches (substring search).
  it('returns a set of potential matches', function () {
    expect(search('e')).length.to.be.above(1);
  });
});
