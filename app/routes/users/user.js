import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params){
       return this.store.findRecord("user", params.user_id);
       model.refresh();
    },
    session: Ember.inject.service('session'),
    actions: {
      logout() {
        this.get('session').invalidate();
      },
      addSubscription(topic){
        let user = this.modelFor(this.routeName);
        let subscription = this.store.createRecord('subscription', {topic: topic, user: user});
        subscription.save().then((savedSubscription) =>{
          this.transitionTo('users.user', user);
        }).catch();
      }
    }
});
