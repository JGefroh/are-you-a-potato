/**
 * @author: Joseph Gefroh
 */
(function() {
    function NavigationCtrl($location, applicationName) {
        var vm = this;
        vm.applicationName = applicationName;

        vm.goTo = function(route) {
            $location.path(route);
        };

        vm.isActive = function(route) {
            return $location.path() === route;
        }
    }
    angular
        .module('AreYouAPotato.NavigationModule', [])
        .controller('NavigationCtrl', ['$location', 'applicationName', NavigationCtrl]);
})();