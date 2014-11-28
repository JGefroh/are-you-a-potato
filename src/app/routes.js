(function() {
    function Routes($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: '/splash'
            })
            .when("/splash", {
                templateUrl: 'modules/potato/Splash.html'
            })
            .when("/question", {
                templateUrl: 'modules/potato/Question.html',
                controller: 'QuestionController',
                controllerAs: 'QuestionCtrl'
            })
            .when("/potato", {
                templateUrl: 'modules/potato/Potato.html'
            })
            .when("/notapotato", {
                templateUrl: 'modules/potato/NotAPotato.html'
            })
            .otherwise({
                templateUrl: 'app404.html'
            });
    }
    angular
        .module('AreYouAPotato.Routes', [])
        .config(['$routeProvider', Routes]);
})();