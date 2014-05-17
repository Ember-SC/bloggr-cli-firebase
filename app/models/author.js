export default DS.Model.extend ({
    name: DS.attr('string'),
    
    blogposts: DS.hasMany('post'),
});