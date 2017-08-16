CTapp.directive('zHomePane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector","ItemsManipulator","HomePaneManager",
    function($scope,TabsSelector,ItemsManipulator,HomePaneManager){
      $scope.ts = TabsSelector;
      $scope.im = ItemsManipulator;
      $scope.hpm = HomePaneManager;
      $scope.label = "home";

      $scope.updateFolderTitle = function(){
        $scope.hpm.updateTitle($scope.im.cf);
      }

      $scope.updateFolderDescription = function(){
        $scope.hpm.updateDescription($scope.im.cf);
      }
    }],

    template: z_homePaneHTML
  };
})
.directive('zViewerPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "viewer";
    }],

    template: z_viewerPaneHTML
  };
})
.directive('zSummaryPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "summary";
    }],

    template: z_summaryPaneHTML
  };
})
.directive('zCreatePane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector","ItemsManipulator", "CreatePaneManager",
    function($scope,TabsSelector,ItemsManipulator,CreatePaneManager){
      $scope.cpm = CreatePaneManager;
      $scope.ts = TabsSelector;
      $scope.im = ItemsManipulator;
      $scope.label = "create";
      $scope.forms = $scope.im.forms;

      $scope.newInfo = function(){
        
      }

      $scope.newCounter = function(){
        alert("create new counter");
      }

      $scope.newPoll = function(){
        alert("create new poll");
      }
    }],

    template: z_createPaneHTML
  };
})
.directive('zSettingPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "setting";
    }],

    template: z_settingPaneHTML
  };
})

//alert("pane Loaded");
