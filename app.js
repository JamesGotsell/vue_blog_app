// vue
window.onload = function () {

var url = 'http://jsonplaceholder.typicode.com'

new Vue({
  el: '#app',
  data: {
    posts: ['posts'],
  }, 
  ready: function() {
    this.apiData();
  },
  methods: {
    apiData: function () {
        var self = this;
    $.ajax({
      url: url + "/posts",
      type: 'GET', 
      data:  {
         format: 'json'
      },     
      success: function (data){
        self.posts = data
      },
       dataType: 'JSON'
      }).done();
     },
     toggle1: function( $index){     
          $('.blog_body').eq($index).toggle(); 
     }
    }
  });
}
Vue.filter('limit', function (array, limit){
     return array.slice(0, limit);
});