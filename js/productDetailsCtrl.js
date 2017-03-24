angular.module('myApp').controller('productDetailsCtrl', function ($scope, $stateParams, shopService) {
    $scope.showImage = false;

   shopService.getProductId($stateParams.id).then(response =>{
        console.log(response);
        $scope.product = response.data;
    });

});
