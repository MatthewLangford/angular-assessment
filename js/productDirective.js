angular.module('myApp').directive('productDirective', function () {

    return {
        restrict: 'E',
        templateUrl: 'views/product-tmpl.html',
    }
});