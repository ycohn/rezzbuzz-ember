import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('number'),
  buildingId: DS.attr('number'),
  building: DS.belongsTo('building'),
  user: DS.belongsTo('user')
});
