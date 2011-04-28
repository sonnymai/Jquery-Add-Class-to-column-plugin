(function($) {
    $.fn.addTableColumnClass = function(options) {
        // build main options
        var opts = $.extend({}, $.fn.addTableColumnClass.defaults, options);
        _addClassToColumns(this, opts, _getTargetColumnIndex(this, opts));
    };

    //==Private methods==//

    //find the index of the target column
    function _getTargetColumnIndex($obj, opts) {
        var targetColumnIndex;
        $($obj.selector + " col").each(function(index, element){
            if($(element).hasClass(opts.targetColumnClass) == true){
                targetColumnIndex = index;
                return false;
            }
        });
        return targetColumnIndex;
    }

    //add the class to all td in the column
    function _addClassToColumns($obj, opts, targetColumnIndex){
        $($obj.selector + " tbody tr").each(function(index, element){
            $(element.tagName + ' td:nth-child(' + (targetColumnIndex + 1) + ')').addClass(opts.classesToAdd);
        });
    }

    // plugin defaults
    $.fn.addTableColumnClass.defaults = {
        targetColumnClass: '',
        classesToAdd: ''
    };
})(jQuery);


  