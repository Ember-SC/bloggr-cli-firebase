export default Ember.ObjectController.extend({

    actions: {

        enter: function () {
            this.get('model').save();
            this.transitionToRoute('authors');
        },

        cancel: function () {
            this.get('model').deleteRecord();
            this.transitionToRoute('authors');
        }

    }
});
