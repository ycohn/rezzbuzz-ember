import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord("building", params.building_id);
  },
  current_user: null,
  session: Ember.inject.service('session'),
    updateCurrentUser: function () {
    if (this.get("session.isAuthenticated")){
      this.get('store').findRecord('user', 'me').then((user) => {
        this.set("currentUser", user);
      })
    }},
  ajax: Ember.inject.service(),
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
    }, 
    leaveABuilding(currentBuilding){
      let building = this.currentModel;
      return this.get('ajax').del(`/user_buildings/${building.get('id')}/destroy`).then((userNow) => {
        debugger;
        let user = userNow.user.id;
        this.transitionTo('users.user', user);
      }).catch();
    } 
  }
});
