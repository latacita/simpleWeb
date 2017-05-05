angular.module('simpleMenu',[]).component('simpleMenu',{
  templateUrl: 'simpleMenu/simpleMenu.template.html',
  controller: function SimpleMenuController($scope)
    {
      this.menuEntries =
        [ { 'name':'Negro', 'value':'black'},
          { 'name':'Azul', 'value':'blue'},
          { 'name':'Rojo', 'value':'red'}
        ];

        this.activeButton = this.menuEntries[0].value;

        this.buttonClicked = function(colorValue) {
          this.activeButton = colorValue;
        };
    }
});
