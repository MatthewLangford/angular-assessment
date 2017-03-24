angular.module('myApp').controller('shopCtrl', function ($scope, shopService) {

    shopService.getProducts().then(response =>{
        $scope.products = response.data;
    });
    
    
});