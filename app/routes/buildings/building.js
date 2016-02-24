import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord("building", params.building_id);
  },
  current_user: null,
  session: Ember.inject.service('session'),
  actions: {
    joinABuilding(currentBuilding){
      let building = this.modelFor(this.routeName);
      let newUserBuilding = this.store.createRecord("UserBuilding", {building: currentBuilding});
      newUserBuilding.save().then((userBuilding) => {
        let user = userBuilding._internalModel._data.userId;
        this.transitionTo('users.user', user);
      }).catch();
    },
    addATopic(building){
      this.transitionTo("buildings.building.topics.new", building);
    }
  }

});
