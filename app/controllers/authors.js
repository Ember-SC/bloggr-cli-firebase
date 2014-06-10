export default Ember.ArrayController.extend({

    actions: {

        new: function() {
            this.transitionToRoute('authors.new');
        }

    }
});
