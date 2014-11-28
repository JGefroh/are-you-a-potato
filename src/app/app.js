/**
 * Defines and configures all modules.
 */
angular
    .module('AreYouAPotato',
    [
        'ngRoute',
        'AreYouAPotato.Routes',
        'AreYouAPotato.NavigationModule',
        'AreYouAPotato.PotatoModule'
    ]);
angular
    .module('AreYouAPotato')
    .constant('applicationName', 'Are You A Potato?')
    .constant('versionNumber', 'v0.0.1');