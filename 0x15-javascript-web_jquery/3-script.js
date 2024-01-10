/* script that adds the class red to the HTML tag HEADER
You can’t use document.querySelector
*/
const $ = window.$;
$('DIV#red_header').click(function () {
  $('HEADER').addClass('red');
});
