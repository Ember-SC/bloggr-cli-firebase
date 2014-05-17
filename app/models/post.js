export default DS.Model.extend({
    title: DS.attr('string'),
    author: DS.belongsTo('author'),
    date: DS.attr('date'),
    excerpt: DS.attr('string'),
    body: DS.attr('string')
});