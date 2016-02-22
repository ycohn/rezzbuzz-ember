import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord("building");
  },
  actions:
  { 
    addBuilding(){
      let building = this.modelFor(this.routeName);
      building.save().then((savedBuilding) => {
        this.transitionTo('buildings.building', savedBuilding);
      }).catch();
    }
  }
});
