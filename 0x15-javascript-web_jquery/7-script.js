/* script that fetches and replaces the `name`
You can’t use document.querySelector to select the HTML tag */
const $ = window.$;
$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', function (data) {
  $('DIV#character').text(data.name);
});
