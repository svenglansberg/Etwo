import Ember from 'ember';

let _grisen = 'glad';

export default Ember.Route.extend({
  model: () => {

    return [{'id': 1, 'text': `hejhopp ${_grisen}`},
            {'id': 2, 'text': 'hejhipp' + _grisen}];
  }
});
