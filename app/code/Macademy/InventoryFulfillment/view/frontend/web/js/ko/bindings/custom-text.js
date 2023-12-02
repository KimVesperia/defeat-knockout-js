define([
    'jquery',
    'ko'
], function ($, ko) {
    'use strict';

    ko.bindingHandlers.customText = {
        /**
         * Update the element's text content whenever the value changes.
         *
         * @param {HTMLElement} element
         * @param {Function} valueAccessor
         */
        update: function (element, valueAccessor) {
            var value = ko.unwrap(valueAccessor());
            $(element).text('Custom Text: ' + value);
        }
    };
});
