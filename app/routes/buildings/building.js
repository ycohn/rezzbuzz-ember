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
      debugger;
      let new_user_building = this.store.createRecord("UserBuilding", {building: currentBuilding});
      new_user_building.save().then((user) => {
        debugger;
        this.transitionTo('users.user', user);
      }).catch();
    }
  }

});
