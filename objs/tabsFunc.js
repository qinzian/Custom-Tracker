alert("tabs begin loading");
CTapp.directive('zTabs', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope',"ItemsManipulator", function MyTabsController($scope,ItemsManipulator) {
      $scope.im = ItemsManipulator;
      $scope.currFolder = $scope.im.currFolder;
      //$scope.currRecord = $scope.currRecord;



      //-----------------------panes----------------------------------
      $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach($scope.panes, function(pane) {
          pane.selected = false;
        });
        $(".selectedTab").removeClass("selectedTab");


        $("#tab-"+pane.index.toString()).addClass("selectedTab");
        pane.selected = true;

        switch(pane.index){
          case 0:
            $scope.im.setMode("folders");
            break;
          case 1:
            $scope.im.setMode("records");
            break;
          default:
            alert("invalid pane index @"+pane.index);
        }

      };

      this.addPane = function(pane) {
        if ($scope.panes.length === 0) { // the first tab to add into $scope.panes is shown
          $scope.select(pane);
        }
        $scope.panes.push(pane);
      };
    }],
    template: z_tabsHTML
  };
});
alert();
