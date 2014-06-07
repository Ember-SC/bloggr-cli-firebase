export default Ember.ArrayController.extend({

    actions: {
        new: function () {
            alert('Breaks after this alert');
            window.store.createReccord('author');
        }
    }
});
