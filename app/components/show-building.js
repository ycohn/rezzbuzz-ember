import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    submit() {
      this.sendAction('onSubmit');
    },
    join(building){
      this.sendAction('onJoin', building);
    },
    leave(building){
      this.sendAction('onLeave', building);
    },
    newTopic(building){
      this.sendAction('onNewTopic', building);
    }
  }
});
