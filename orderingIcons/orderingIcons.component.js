angular.
  module('orderingIcons',[]).
  component('orderingIcons',
    {
      templateUrl : 'orderingIcons/orderingIcons.template.html',
      controller: function orderingIconsController() {
        this.descIconCliked = function () {
          console.log(this.column + ' desc');
          this.onIconClicked({column : this.column,asc:false});
        };

        this.ascIconCliked = function () {
          console.log(this.column + ' asc');
          this.onIconClicked({column : this.column,asc:true});
        };
      },
      bindings : {
        column : '@',
        onIconClicked : '&'
      }
    });
