CTapp.directive('z_homePane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope",function($scope){
      $scope.selected = true;

      $scope.title = "title";
      $scope.dateTime = "date";

      $scope.label = "some label";

      $scope.editTitleButton = function(){
        alert("edit title button");
      }
    }],

    template: z_homePaneHTML
  };
})
.directive('z_viewerPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope",function($scope){
      $scope.selected = false;
      $scope.label = "viewer";
    }],

    template: z_viewerPaneHTML
  };
})
.directive('z_summaryPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope",function($scope){
      $scope.selected = false;
      $scope.label = "summary";
    }],

    template: z_summaryPaneHTML
  };
})
.directive('z_createPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope",function($scope){
      $scope.selected = false;

      $scope.label = "create";
    }],

    template: z_createPaneHTML
  };
})
.directive('z_settingPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope",function($scope){
      $scope.selected = false;
      $scope.label = "setting";
    }],

    template: z_settingPaneHTML
  };
})

//alert("pane Loaded");
