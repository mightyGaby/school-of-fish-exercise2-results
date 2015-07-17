(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name google-static-map.directive:staticMap
     * @restrict AE
     * @description
     * Directive for creating a Google Static Map image
     * @param {string} location Location center
     * @param {string} width Width of the map (max 640)
     * @param {string} height Height of the map (max 640)
     * @param {string} maptype roadmap|satellite|hybrid|terrain (default roadmap)
     * @param {string} zoom Zoom factor of the map
     * @example
     * <example>
     *     <file name="staticmap.html">
     *         <static-map data-location="New York" data-width="640" data-height="640" data-maptype="roadmap" data-zoom="13"></static-map>
     *     </file>
     * </example>
     **/

    angular.module('google-static-map')
        .directive('staticMap', function () {
            return {
                template: require('./../templates/staticMap.html'),
                scope: {
                    'location': '@',
                    'width': '@',
                    'height': '@',
                    'maptype': '@',
                    'zoom': '@'
                },
                replace: false,
                restrict: 'AE',
                link: function (scope, element) {


                }
            };
        });
})();