/**
 * JS for this module.
 */

(function () {
  Drupal.behaviors.sortableLists = {
    attach: function (context, settings) {
      jQuery('.sortable-lists-elements', context).once('sortable-lists', function() {

        var id = Drupal.settings.sortableLists.id;
        var values = Drupal.settings.sortableLists.values;

        jQuery('.sortable-lists-elements select', context).selectWidget();

        jQuery('.sortable-lists-elements li', context).each(function() {
          var text = jQuery(this).text();
          var id = getId(text);
          jQuery(this).attr('id', id);
        });

        jQuery('.sortable-lists-elements .select-block', context).css('display', 'block');

        jQuery('.sortable-lists-elements .select-block ul', context).sortable({
          connectWith: '.sortable-lists-elements .select-block ul',
          placeholder: 'item-placeholder',
          stop: function(changes) {
            var items = getItems('.sortable-lists-elements .select-block');
            jQuery('#sortable-lists-value').val(items);
            return changes;
          },
        });

        function getId(text) {
          var id = '';
          jQuery('.sortable-lists-elements select option', context).each(function() {
            if (jQuery(this).text() === text) {
              id = jQuery(this).val();
              return;
            }
          });
          return id;
        }

        function getItems(container) {
          var columns = [];

          jQuery(container+ ' ul').each(function(){
            columns.push(jQuery(this).sortable('toArray').join(','));
          });

          return columns.join('|');
        }
      });
    }
  };
})();
