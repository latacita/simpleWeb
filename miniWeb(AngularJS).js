angular.
  module('miniWeb',['simpleMenu','ngRoute']).
    controller('miniWebController', function miniWebController($scope,$location) {

    $scope.colorEntries =
    [ { 'name':'Azul', 'value':'blue'},
      { 'name':'Negro', 'value':'black'},
      { 'name':'Rojo', 'value':'red'}
    ];

    this.onColorEntryActivated = function(colorValue) {
      $scope.activeColor = colorValue;
    };

    $scope.pageEntries =
    [ { 'name':'Home', 'value':'/', 'link' : '/miniWeb'},
      { 'name':'1st Paragraph', 'value':'/firstParagraph', 'link' : '#!/firstParagraph'},
      { 'name':'2nd Paragraph', 'value':'/secondParagraph', 'link' : "#!/secondParagraph"},
      { 'name':'3rd Paragraph', 'value':'/thirdParagraph', 'link' : "#!/thirdParagraph"}
    ];

    this.onPageEntryActivated = function(pageValue) {
      console.log("Voy a redirigir a " + pageValue);
    };
});
