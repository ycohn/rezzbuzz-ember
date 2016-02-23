import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model(){
    return this.store.createRecord("topic");
  },
  actions: {
    addTopic(){
      let topic = this.modelFor(this.routeName);
      let building = this.modelFor('buildings.building');
      topic.set("building", building);
      topic.save().then((savedTopic) => {
        this.transitionTo('buildings.building.topics.topic', savedTopic);
      }).catch();
    }
  }
}); 
