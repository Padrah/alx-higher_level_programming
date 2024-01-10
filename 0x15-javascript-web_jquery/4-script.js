/* script that toggles the class of the HTML
You can’t use document.querySelector
*/
const $ = window.$;
$('DIV#toggle_header').click(function () {
  $('HEADER').toggleClass('green red');
});
