// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on('ready page:load', function() {
  var engine = new Bloodhound({
    datumTokenizer: function(d) {
      console.log(d);
      return Bloodhound.tokenizers.whitespace(d.title);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      wildcard: '%QUERY',
      url: '/books/autocomplete?query=%QUERY'
    }
  });

  var promise = engine.initialize();

  promise
    .done(function() { console.log('Typeahead Loaded properly') })
    .fail(function() { console.log('There was a problem with Typeahead') })

  $('.typeahead.book-search')
    .typeahead(null, {
      name: 'engine',
      displayKey: 'title',
      source: engine.ttAdapter()
    })
    .bind("enter",function() {
      $(this).closest('.book-search-form').submit()
    })

})
