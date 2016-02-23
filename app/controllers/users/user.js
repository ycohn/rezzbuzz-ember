import Ember from 'ember';

export default Ember.Controller.extend({
  
   actions: {
      showMore: function(building){
        this.set('currentBuilding', building);
    }
  }
}); 