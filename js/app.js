angular.module('myApp', ['ui.router'])
.config(function ($urlRouterProvider, $stateProvider){



        $stateProvider
            .state('home',{
                templateUrl: 'views/home.html',
                url: '/'
            })
            .state('about',{
                templateUrl: 'views/about.html',
                url: '/about'
            })
            .state('blog',{
                templateUrl: 'views/blog.html',
                url: '/blog'
            })
            .state('shop',{
                templateUrl: 'views/shop.html',
                url: '/shop',
                controller: 'shopCtrl'
            })
            .state('product',{
                templateUrl: 'views/product-details.html',
                url: '/product/:id',
                controller: 'productDetailsCtrl'
            })

             $urlRouterProvider
            .otherwise('/');
}
);