import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  users: DS.hasMany('user'),
  topics: DS.hasMany('topic')
});
