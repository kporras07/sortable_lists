/**
 * @file
 * JS for this module.
 */

(function () {
  'use strict';

  Drupal.behaviors.sortableLists = {
    attach: function (context, settings) {
      jQuery('.sortable-lists-elements', context).once('sortable-lists', function () {

        jQuery('.sortable-lists-elements select', context).each(function () {
          var list = jQuery('<ul></ul>');
          jQuery(this).find('option').each(function () {
            jQuery(list).append('<li id="' + jQuery(this).val() + '">' + jQuery(this).text() + '</li>');
          });
          var div = jQuery('<div class="select-block"></div>').append(list);
          jQuery(this).before(div);
          jQuery(this).hide();
        });

        jQuery('.sortable-lists-elements .select-block', context).css('display', 'block');

        jQuery('.sortable-lists-elements .select-block ul', context).sortable({
          connectWith: '.sortable-lists-elements .select-block ul',
          placeholder: 'item-placeholder',
          stop: updateValue
        });

        updateValue();
        function updateValue() {
          var items = getItems('.sortable-lists-elements .select-block');
          jQuery('#sortable-lists-value').val(items);
        }

        function getItems(container) {
          var columns = [];

          jQuery(container + ' ul').each(function () {
            columns.push(jQuery(this).sortable('toArray').join(','));
          });

          return columns.join('|');
        }
      });
    }
  };
})();
