angular.
  module('miniWeb').
    config(['$locationProvider','$routeProvider',
      function config($locationProvider,$routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/',{
            template : '<p> Selecciona un párrafo para mostrar</p>'
          }).
          when('/firstParagraph',{
            templateUrl: 'firstParagraph/firstParagraph.html'
          }).
          when('/secondParagraph',{
            templateUrl: 'secondParagraph/secondParagraph.html'
          }).
          when('/thirdParagraph',{
            templateUrl: 'thirdParagraph/thirdParagraph.html'
          }).
          //otherwise('/firstParagraph');
          otherwise({
            template : '<p> Ruta no disponible </p>'
          });
      }
    ]);
