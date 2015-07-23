'use strict';

require('common/ui/google-static-map');

/**
 * @ngdoc object
 * @name weather-search
 * @description
 * Angular module that loads the weather search exercise
 */
angular.module('weather-search', [
    'google-static-map'
]);

require('./controllers/weatherSearch');
require('./services/weatherSearch');
require('./constants/apikey');