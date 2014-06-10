export default Ember.ObjectController.extend({

    actions: {

        enter: function () {
            this.get('model').save();
        },

        cancel: function () {
            // Don't have to do anything
        }

    }
});
