import DS from 'ember-data';

export default DS.Model.extend({
  buildingId: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  users: DS.hasMany('user'),
  messages: DS.hasMany('message'),
  building: DS.belongsTo('building')
});
