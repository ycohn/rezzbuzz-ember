import Ember from 'ember';

export default Ember.Controller.extend({
  
   actions: {
      showMore: function(building){
        this.set('currentBuilding', building);
    },
      addSubscription: function(topic){
        debugger;
        let user = this.modelFor(this.routeName);
        let subscription = this.store.createRecord('subscription', {topicId: topic.get('id'), userId: user.get('id')});
        debugger;
      }
  }
}); 