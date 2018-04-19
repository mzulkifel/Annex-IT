/**
 * Created by Zulkifel on 16/04/2018.
 */

jQuery(document).ready(function () {
    jQuery('.carousel .item').each(function () {
        var next = jQuery(this).next();
        if (!next.length) {
            next = jQuery(this).siblings(':first');
        }
        next.find('.item-content:first-child').clone().appendTo(jQuery(this));
    });
});