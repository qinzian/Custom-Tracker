CTapp.directive('zTabs', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    transclude: true,
    scope: {},

    controller: ['$scope',"ItemsManipulator", "TabsSelector",
    function MyTabsController($scope,ItemsManipulator,TabsSelector) {
      $scope.im = ItemsManipulator;
      $scope.ts = TabsSelector;

      $scope.paneLabels = ["home","viewer","summary","create","setting"];

      $scope.select = function(label) {
        $scope.ts.selectTab(label);

        switch(label){
          case 'home':
            $scope.im.setMode("folders");
            break;
          case 'viewer':
            $scope.im.setMode("records");
            break;
          case 'summary':
            $scope.im.setMode("folders");
            break;
          case 'create':
            $scope.im.setMode("forms");
            break;
          default:
            $scope.im.setMode("void");
        }
      }
    }],
    template: z_tabsHTML
  };
});

//alert("tabs loaded");
