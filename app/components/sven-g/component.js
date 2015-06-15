import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hit: () => {
      alert('hoj!');
    }
  }
});
