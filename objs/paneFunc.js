CTapp.directive('zHomePane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "home";

      $scope.title = "title";
      $scope.dateTime = "date";

      $scope.editTitleButton = function(){
        alert("edit title button");
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

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "create";
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
