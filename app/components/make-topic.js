import Ember from 'ember';

export default Ember.Component.extend({
  model(params){
    return this.store.findRecord("building", params.building_id);
  },
 actions: {
  submit(){
    this.sendAction('onSubmit');
  }
}
});
