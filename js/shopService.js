angular.module('myApp').service('shopService', function ($http) {

        this.getProducts = () => {
            return $http.get('http://practiceapi.devmounta.in/products');
        };

        this.getProductId = (id) =>{
            return $http.get('http://practiceapi.devmounta.in/products/' + id);
        }
});
