export default Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        return store.createRecord('author');
    }
});
