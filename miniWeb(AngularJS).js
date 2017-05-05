var miniwebApp = angular.module('miniWeb',['simpleMenu']);

miniwebApp.controller('miniWebController', function miniWebController($scope) {

    $scope.menuEntries =
    [ { 'name':'Azul', 'value':'blue'},
      { 'name':'Negro', 'value':'black'},
      { 'name':'Rojo', 'value':'red'}
    ];

    this.onMenuEntryActivated = function(colorValue) {
      $scope.activeColor = colorValue;
    }

});
