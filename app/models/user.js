import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  passwordDigest: DS.attr('string'),
  email: DS.attr('string'),
  bio: DS.attr('string'),
  picture: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  buildings: DS.hasMany('building'),
  topics: DS.hasMany('topic')
});
