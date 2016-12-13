/**
 * Created by user on 2016/12/12.
 */
// 应用层
require.config({
    paths: {
        jquery: 'jquery.min',
        jqueryUI: 'jqueryUI.1.10.4'
    }
});

require(['jquery','jqueryUI'], function ($,$UI) {
    $( "#accordion" ).accordion();
});
