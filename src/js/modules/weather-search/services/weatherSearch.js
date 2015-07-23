'use strict';
(function () {

    /**
     * @ngdoc object
     * @name weather-search.service:weatherSearchService
     * @description
     * Service for searching the weather by location
     */
    angular.module('weather-search')
        .service('weatherSearchService', ['$http', '$filter', 'apikeyConstant', function($http, $filter, apikeyConstant){

            /**
             * @ngdoc property
             * @name _endpoint
             * @propertyOf weather-search.service:weatherSearchService
             * @description
             * Endpoint for the openweathermap API
             * @returns {string} API url
             * @private
             */
            var _endpoint = 'http://api.openweathermap.org/data/2.5/forecast';

            /**
             * @ngdoc property
             * @name _APIKey
             * @propertyOf weather-search.service:weatherSearchService
             * @description
             * API key for the open weather map API
             * @returns {string} API key
             * @private
             */
            var _APIKey = apikeyConstant.apikey;

            /**
             * @ngdoc method
             * @name groupByDate
             * @methodOf groupByDate
             * @description
             * Groups the data by date
             * @param {Array} list List of forecasts
             */
            function groupByDate(list){
                var newList = {};
                angular.forEach(list, function(val){
                    var date = new Date(val.dt * 1000);
                    var idx = $filter('date')(date, 'yyyy-MM-dd');
                    newList[idx] = newList[idx] || [];
                    val.dt_obj = date;
                    newList[idx].push(val);
                });

                return newList;
            }

            /**
             * @ngdoc method
             * @name getWeather
             * @param {string} query Query search
             * @param {string} units metric|imperial
             * @returns {object} Angular $http
             *
             * @description
             * Get articles for the specified query
             */
            this.getWeather = function (query, units) {

                return $http({
                    url: _endpoint,
                    method: 'GET',
                    responseType: 'json',
                    params: {
                        "q": query,
                        "mode": 'json',
                        "units": units,
                        "APPID": _APIKey
                    }
                }).then(function (response) {
                    if(response.data){
                        return {
                            city: response.data.city.name,
                            country: response.data.city.country,
                            list: response.data.list,
                            listGrouped: groupByDate(response.data.list)
                        }
                    }else{
                        return {};
                    }
                });
            };
        }]);

})();