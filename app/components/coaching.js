import Component from '@ember/component';

export default Component.extend({
  received_success: false,
  received_error: false,
  actions: {
    submit() {
      $.ajax({
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        type: "POST",
        url: "https://api.nextrelease.io/app/release-coach/",
        body: JSON.stringify({
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
