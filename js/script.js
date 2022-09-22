$(function() {
  // sp,tabletのサイドバーの開閉
  $('.p-header__button').on('click', function() {
    $('.l-sidebar').addClass('is-open');
  });

  $('.p-sidebar__button').on('click', function() {
    $('.l-sidebar').removeClass('is-open');
  });
});