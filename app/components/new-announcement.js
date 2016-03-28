import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save1() {
      var params = {
        upComingSales: this.get('sale'),
        weatherWarnings: this.get('weather'),
        bigNews: this.get('news')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save2', params);
    }
  }
});
