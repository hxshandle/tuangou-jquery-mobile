/**
 * Created by 123 on 2014/9/6.
 */
$(function(){
  $('.show-info').click(function(){
    $('.info-box,.page-mask').show();
  });
  $('.info-box-close').click(function(){
    $('.info-box,.page-mask').hide();
  });
});