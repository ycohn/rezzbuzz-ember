import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('number'),
  topicId: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  topic: DS.belongsTo('topic'),
  user: DS.belongsTo('user')
});
