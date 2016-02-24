import Ember from 'ember';

const { service } = Ember.inject;
const { store } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  store: service("store"),

  actions: {
    authenticate() {
     let { identification, password } = this.getProperties('identification', 'password');
     this.get('session').authenticate('authenticator:devise', identification, password).then(()=>{
       this.get('store').findRecord('user', 'me').then((user) => {
        this.attrs.triggerSetCurrentUser(user);
      })
    }).catch((reason) => {
       this.set('errorMessage', reason.error || reason);
     });
   },
 }
});
