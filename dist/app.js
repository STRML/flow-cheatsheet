$(window).on('activate.bs.scrollspy', function (e) {
  console.log('activate');
  history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
});
