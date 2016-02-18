import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addBuilding(){
      let building = this.modelFor(this.routeName);
      debugger;
      building.save().then((savedBuilding) => {
        this.transitionTo('buildings.building', savedBuilding);
      });
    }
  }
});
