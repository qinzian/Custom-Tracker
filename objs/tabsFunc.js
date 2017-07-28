CTapp.directive('zTabs', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope',"ItemsManipulator", function MyTabsController($scope,ItemsManipulator) {
      $scope.im = ItemsManipulator;

      $scope.folderDescription = $("folderDescription");
      $scope.currFolder;
      $scope.folderTitle = "lalal title";
      $scope.folderDateTime = "blabla time";
      //-----------------------panes----------------------------------
      $scope.panes = [];
      $scope.selected = "Home";

      $scope.updateDescription = function(){
        alert("updateDescription()");
        //$scope.currFolder.setDescription($scope.folderDescription.text());
        //alert("currFolder description:"+$scope.currFolder.getDescription());
      }

      $scope.loadHomeContent = function(){
        //alert("loadHomeContent");
        $scope.currFolder = $scope.im.currFolder;
        if (typeof $scope.currFolder == "undefined"){
          //alert("currFolder is undefined");
        } else {
          $scope.folderTitle = $scope.currFolder.title;
          $scope.folderDateTime = $scope.currFolder.dateTime;
          alert($scope.folderTitle);
          //$scope.folderDescription.text($scope.currFolder.getDescription());
        }
      }

      $scope.select = function(pane) {
        angular.forEach($scope.panes, function(pane) {
          pane.selected = false;
        });
        $(".selectedTab").removeClass("selectedTab");


        $("#"+pane.label).addClass("selectedTab");
        pane.selected = true;

        switch(pane.label){
          case 'Home':
            $scope.im.setMode("folders");
            $scope.loadHomeContent();
            break;
          case 'Viewer':
            $scope.im.setMode("records");
            break;
          case 'Summary':
            $scope.im.setMode("folders");
            break;
          case 'Create':
            $scope.im.setMode("forms");
            break;
          default:
            $scope.im.setMode("void");
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

//alert("tabs loaded");
