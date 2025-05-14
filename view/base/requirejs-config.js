var config = {
    map: {
        '*': {
            formParser: 'EPuzzle_Base/js/form-parser'
        }
    },
    shim: {
        formParser: {
            deps: [ 'jquery' ]
        }
    },
    deps: ['EPuzzle_Base/js/form-parser']
};
