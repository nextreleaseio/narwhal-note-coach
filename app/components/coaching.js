import Component from '@ember/component';
import requireModule from 'ember-require-module';

export default Component.extend({
  received_success: false,
  received_error: false,
  actions: {
    submit() {
      $.ajax({
        type: "POST",
        url: "https://api.nextrelease.io/app/release-coach/",
        data: JSON.stringify({
          email: console.log(this.get('email')),
          markdown: console.log(this.get('textarea')),
        })
      }).then(function (resp) {
        this.set('received_success', true);
      }).catch(function (error) {
        this.set('received_error', true);
      });
    }
  }
});
