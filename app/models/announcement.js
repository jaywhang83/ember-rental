import DS from 'ember-data';

export default DS.Model.extend({
  upComingSales: DS.attr(),
  weatherWarnings: DS.attr(),
  bigNews: DS.attr()
});
