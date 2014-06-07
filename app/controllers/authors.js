export default Ember.ArrayController.extend({

    actions: {
        new: function () {
            var store = this.get('store');
            var object = store.createRecord('author');
            object.set('name', 'hope this works again');
            object.save();
        }
    }
});
