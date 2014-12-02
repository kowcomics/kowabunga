$(document).ready(function() {
  $('body').delegate('a[data-local-link]:not(.dropdown-toggle)', 'click', function() {
    window.location = $(this).attr('data-local-link');
  });
  $('body').delegate('a[data-external-link]:not(.dropdown-toggle)', 'click', function() {
    window.top.location.href = $(this).attr('href');
  });
});