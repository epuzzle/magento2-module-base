define([
    'jquery'
], function ($) {
    'use strict';

    const parser = {
        /**
         * Parse form data as payload object
         *
         * @param {object} $form form
         * @return {{}} parsed form data
         */
        parse($form) {
            let formData = {};

            $($form).serializeArray()
                    .map((entry) => {
                        if (-1 !== entry.name.indexOf('[')) {
                            let _formData = formData;

                            entry.name.split('[').map((name, index, names) => {
                                name = name.replace(']', '');
                                if (index === names.length - 1) {
                                    _formData[name] = entry.value;
                                } else {
                                    if (!_formData[name]) {
                                        _formData[name] = {};
                                    }
                                    _formData = _formData[name];
                                }
                            });
                        } else {
                            formData[entry.name] = entry.value;
                        }
                    });

            return formData;
        }
    };

    // extends the jquery library
    if (!$.fn.convertToPayload) {
        $.fn.convertToPayload = function () {
            return parser.parse($(this));
        };
    }

    return parser;
});
