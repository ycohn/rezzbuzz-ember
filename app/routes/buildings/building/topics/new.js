import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord("topic");
  },
  actions: {
    addTopic(){
      let topic = this.modelFor(this.routeName);
      topic.save().then((savedTopic) => {
        this.transitionTo('buildings.building.topics.topic', savedTopic);
      }).catch();
    }
  }
});