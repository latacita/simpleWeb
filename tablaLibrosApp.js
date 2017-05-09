angular.module('TablaLibrosApp',['orderingIcons']).
  controller('TablaLibrosController',['$scope','$http',
             function($scope,$http) {

				$scope.publications      = [];
				$scope.orderingCriteria  = 'author';
        $scope.dataLoaded        = false;
        $scope.publishersFilter  = new Object();
        $scope.showedPublishers  = [];

				$http.get('publications.json').then(
					function(response) {
						$scope.publications = response.data.publicationList;
            $scope.publisherList = $scope.publications.reduce(function(result,current) {
              if (!result.includes(current.publisher)) {
                result.push(current.publisher);
              }
              return result;
            }, []);
            $scope.publisherList.forEach((p) => {$scope.publishersFilter[p] = true;});
						$scope.dataLoaded = true;
					},
					function(response) {
						$scope.dataLoaded = false;
					}
				);

        this.onOrderingIconClicked = function(column,asc) {
          $scope.orderingCriteria = (asc?"":"-") + column;
        };

        this.filterOptionChanged = function(publisher,activated) {
        };

        this.isPublisherInFilterSet = function() {
          return function(item) {
            return $scope.publishersFilter[item.publisher];
          };
        };
      }
    ]);
