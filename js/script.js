$(function() {
  // menuボタンを押した時の挙動
  $('.p-header__button').on('click', function() {
    $('.c-grid__sidebar').addClass('is-open');
  });

  // ×ボタンを押した時の挙動
  $('.p-sidebar__button').on('click', function() {
    $('.c-grid__sidebar').removeClass('is-open');
  });  
});

$(function() {
  $(window).on('resize', function() {
    $('.c-grid__sidebar').removeClass('is-open');
  });
});