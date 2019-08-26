import Component from '@ember/component';

export default Component.extend({
  actions: {
    submit() {
      $.ajax({
        type: "POST",
        url: "https://api.nextrelease.io/release-coach/coach",
        data: JSON.stringify({
          email: console.log(this.get('email')),
          markdown: console.log(this.get('textarea')),
        })
      }).then(function (resp) {
        // handle your server response here
      }).catch(function (error) {
        // handle errors here
      });
    }
  }
});
