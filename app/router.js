var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('authors', function(){
        this.route('new');
        this.resource('author', { path: ':author_id' });
    });
    this.resource('about');
    this.resource('posts', function(){
        this.resource('post', { path: ':post_id' });
    });
});

export default Router;