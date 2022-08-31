/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {

    attach: function(context, settings) {

      var position = $(window).scrollTop();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('body').addClass("scrolled");
        }
        else {
          $('body').removeClass("scrolled");
        }
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          $('body').addClass("scrolldown");
          $('body').removeClass("scrollup");
        } else {
          $('body').addClass("scrollup");
          $('body').removeClass("scrolldown");
        }
        position = scroll;
      });

    },

  };

})(jQuery, Drupal);



(function($, Drupal) {


  Drupal.behaviors.mcgrath_lesson_tabs = {

    attach: function(context, settings) {

      $('.lesson-tabs .field', context).once('mcgrath_lesson_tabs').each(function() {

        var label = $(this).find('.field__label').html();
        $('<li/>').html(label).appendTo('#lesson-tabs-list');
      });

      $('#lesson-tabs-list li').on('click', function() {

        idx = $(this).index();
        Drupal.behaviors.mcgrath_lesson_tabs.change_tab(idx);
      });

      if ($('#lesson-tabs-list li.active-tab').length == 0) {
        this.change_tab(0);
      }
    },

    change_tab: function(index) {

      $('#lesson-tabs-list li').removeClass('active-tab');
      $('.lesson-tabs .field').removeClass('active-tab');

      $('#lesson-tabs-list li').eq(index).addClass('active-tab');
      $('.lesson-tabs .field').eq(index).addClass('active-tab');
    }
  }


})(jQuery, Drupal);



(function($, Drupal) {

  Drupal.behaviors.popup_region = {

    attach: function(context, settings) {

      let label = $('.popup h2.title:first').html();
      let $link;
      let $close;

      if (label) {

        $link = $('<a class="popup-button"/>').html(label).on('click', this.open_popup);
        $close = $('<a class="close-popup"/>').html('X').on('click', this.close_popup);

        $('.popup').append($link);
        $('.popup h2.title').append($close);
      }
    },

    open_popup: function() {

      $('.popup-button').hide();
      $('.popup-overlay').css('display', 'flex');
    },

    close_popup: function() {

      $('.popup-button').show();
      $('.popup-overlay').hide();
    }

  };


})(jQuery, Drupal);
