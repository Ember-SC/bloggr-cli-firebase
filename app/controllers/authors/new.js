export default Ember.ObjectController.extend({

    actions: {

        enter: function () {
            this.get('model').save();
        },

        cancel: function () {
            this.transitionToRoute('authors');
        }

    }
});
