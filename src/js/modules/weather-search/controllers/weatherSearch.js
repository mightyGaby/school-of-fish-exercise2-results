'use strict';
(function () {

    /**
     * @ngdoc object
     * @name weather-search.controller:weatherSearchService
     * @description
     * Controller for the weather search page
     */
    angular.module('weather-search')
        .controller('weatherSearch', ['weatherSearchService', function (weatherSearchService) {
            //store view model "this"
            var vm = this;

            /**
             * @ngdoc property
             * @name city
             * @propertyOf weather-search.controller:weatherSearchService
             * @description
             * City search query
             * @returns {string} City search
             */
            vm.city = "";

            /**
             * @ngdoc property
             * @name units
             * @propertyOf weather-search.controller:weatherSearchService
             * @description
             * Units (metric|imperial)
             * @returns {string} Units of measurement
             */
            vm.units = "metric";

            /**
             * @ngdoc method
             * @name searchWeather
             * @methodOf weather-search.controller:weatherSearchService
             * @description
             * Search weather function
             */
            vm.searchWeather = function(){
                if(vm.city !== ''){
                    weatherSearchService.getWeather(vm.city, vm.units)
                        .then(function(response){
                            console.log(response);
                            vm.results = response;
                        });
                }
            };

            /**
             * @ngdoc property
             * @name results
             * @propertyOf weather-search.controller:weatherSearchService
             * @description
             * Results array for the search
             * @returns {Array} Results array
             */
            vm.results = {};
        }]);

})();