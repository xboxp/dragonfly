/**
 * 按钮
 * 
 * @ignore
 */
define(function (require) {
    var base = require('base/base'),
        Widget = require('Widget');
    
    /**
     * 按钮
     * 
     * @extends Widget
     * @constructor
     */
    function Button() {
        
    }
    
    base.inherit(Button, Widget);
    
    return Button;
});
