import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params){
       return this.store.findRecord("user", params.user_id);
    },
    session: Ember.inject.service('session'),
    actions: {
      logout() {
        this.get('session').invalidate();
      }
    }
  }
});
