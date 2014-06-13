export default Ember.ObjectController.extend({
    isEditing: false,
    oldName: '',

    actions: {

        edit: function () {
            this.set('oldName', this.get('model').get('name'));
            this.set('isEditing', true);
        },

        doneEditing: function () {
            this.set('isEditing', false);
            this.get('model').save();
            this.transitionToRoute('authors');
        },

        cancelEditing: function () {
            this.get('model').set('name', this.get('oldName'));
            this.set('isEditing', false);
            this.transitionToRoute('authors');
        }

    }
});
