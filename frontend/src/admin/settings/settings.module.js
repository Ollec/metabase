var SettingsAdmin = angular.module('metabase.admin.settings', [
    'metabase.admin.settings.controllers',
    'metabase.services'
]);

SettingsAdmin.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/admin/settings/', {
        template: '<div mb-react-component="SettingsEditor" class="spread"></div>',
        controller: 'SettingsEditor',
        resolve: {
            settings: ['Settings', async function(Settings) {
                var settings = await Settings.list().$promise
                return settings.map(function(setting) {
                    setting.originalValue = setting.value;
                    return setting;
                });
            }]
        }
    });
}]);
