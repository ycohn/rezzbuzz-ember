import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(){
  return this.store.findAll("building");
},
  actions: {
    addBuilding(){
      let building = this.modelFor(this.routeName);
      building.save().then((savedBuilding) => {
        this.transitionTo('buildings.building', savedBuilding);
      });
    }
  }
});
