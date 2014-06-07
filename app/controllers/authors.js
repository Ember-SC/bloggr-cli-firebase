export default Ember.ArrayController.extend({

    actions: {
        new: function () {
            this.store.createReccord('author')
            {
                this.set('name', 'give me a name, please');
            }
            ;
        }
    }

});
