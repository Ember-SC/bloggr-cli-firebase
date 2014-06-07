export default Ember.Handlebars.makeBoundHelper(function(input) {
    var showdown = new window.Showdown.converter();
    return new window.Handlebars.SafeString(showdown.makeHtml(input));
});
