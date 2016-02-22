import Ember from 'ember';

export default Ember.Route.extend({
   model(params){
       return this.store.findRecord("topic", params.topic_id);
    },
  actions: {
    addMessage(newMessage){
      let topic = this.modelFor(this.routeName);
      let message = this.store.createRecord('message', {content: newMessage, topic: topic});
      $('.ember-text-field').val('');
      message.save().then((savedMessage) => {
        this.transitionTo('buildings.building.topics.topic', topic);
      }).catch();
    }
  }
});