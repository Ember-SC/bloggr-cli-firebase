export default Ember.ObjectController.extend({
    isEditing: false,

    edit: function() {
         this.set('oldName' , this.get('name'));
         this.set('isEditing', true);
    },

    doneEditing: function() {
        this.set('isEditing', false);
        //this.get('store').commit();
    },

    cancelEditing: function() {   
       this.set('name' , this.get('oldName'));
       this.set('isEditing', false);   
    }
});
