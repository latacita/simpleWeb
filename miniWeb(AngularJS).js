var miniwebApp = angular.module('miniWeb',[]);

miniwebApp.controller('miniWebController', function miniWebController($scope) {
  $scope.menuEntries =
    [ { 'name':'Negro', 'value':'black'},
      { 'name':'Azul', 'value':'blue'},
      { 'name':'Rojo', 'value':'red'}
    ];

  $scope.activeButton = $scope.menuEntries[0].value;

  $scope.changeContentColor = function(colorValue) {
      $scope.activeButton = colorValue;
  };
})
