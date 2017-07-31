CTapp.directive('zTabs', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope',"ItemsManipulator", function MyTabsController($scope,ItemsManipulator) {
      $scope.im = ItemsManipulator;

      $scope.folderDescription = $("folderDescription");
      $scope.currFolder = {title:"a title",dateTime:"a time",description:"a text"};
      //-----------------------panes----------------------------------
      $scope.paneLabels = ["Home","Viewer","Summary","Create","Setting"];

      $scope.selected = "viewer";

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
      }

      $scope.select = function(label) {
        $scope.selected = label;

        $(".selectedTab").removeClass("selectedTab");

        $("#"+label).addClass("selectedTab");

        switch(label){
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
    }],
    template: z_tabsHTML
  };
});

//alert("tabs loaded");
