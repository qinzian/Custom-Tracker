CTapp.directive('zTabs', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    transclude: true,
    scope: {},

    controller: ['$scope',"ItemsManipulator", "TabsSelector",
    function MyTabsController($scope,ItemsManipulator,TabsSelector) {
      $scope.im = ItemsManipulator;
      $scope.ts = TabsSelector;

      //$scope.folderDescription = $("folderDescription");
      $scope.currFolder = {title:"a title",dateTime:"a time",description:"a text"};
      //-----------------------panes----------------------------------
      $scope.paneLabels = ["home","viewer","summary","create","setting"];

      /*
      $scope.updateDescription = function(){
        alert("updateDescription()");
        //$scope.currFolder.setDescription($scope.folderDescription.text());
        //alert("currFolder description:"+$scope.currFolder.getDescription());
      }

      $scope.loadHomeContent = function(){
        //alert("loadHomeContent");
        if (typeof $scope.im.currFolder == "undefined"){
          //alert("currFolder is undefined");
        } else {
          //$scope.panes["Home"].setCurrFolder($scope.im.currFolder);
          alert("currFolder is defined");
        }
      }*/

      $scope.select = function(label) {
        $scope.ts.selectTab(label);

        switch(label){
          case 'home':
            $scope.im.setMode("folders");
            $scope.loadHomeContent();
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
      }// select() ends
    }],
    template: z_tabsHTML
  };
});

//alert("tabs loaded");
