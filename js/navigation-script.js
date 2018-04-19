/**
 * Created by Zulkifel on 19/04/2018.
 */

jQuery(function () {
    jQuery('.nav a').filter(function () {
        return this.href == location.href
    }).parent().addClass('active').siblings().removeClass('active')
    jQuery('.nav a').click(function () {
        jQuery(this).parent().addClass('active').siblings().removeClass('active')
    })
})


