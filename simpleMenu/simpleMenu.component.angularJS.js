angular.module('simpleMenu',[]).component('simpleMenu',{
  templateUrl: 'simpleMenu/simpleMenu.template.html',
  controller: function SimpleMenuController($scope)
    {
        this.buttonClicked = function(value) {
          this.activeButton = value;
          this.onEntryChanged({entryValue:value});
        };

        this.$onInit = function() {
          this.activeButton = this.menuEntries[0].value;
          this.onEntryChanged({entryValue:this.activeButton});
        }
    },
    bindings : {
      menuEntries : '<',
      onEntryChanged : '&'
    }
});
