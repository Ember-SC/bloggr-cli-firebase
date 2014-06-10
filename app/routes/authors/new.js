export default Ember.Route.extend({
    model: function() {
        window.console.log('authors new route before get');
        var store = this.get('store');
        window.console.log('authors new route after get');
        return store.createRecord('author');
    }
});
