//angular stuff---------------------------------------------------------------
angular.module("CustomTracker",[])
.directive('myTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function MyTabsController($scope) {
      $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach($scope.panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
        if ($scope.panes.length === 0) {
          $scope.select(pane);
        }
        $scope.panes.push(pane);
      };
    }],
    template: z_tabsHTML
  };
})
.directive('myPane', function() {
  return {

    restrict: 'E',
    require: '^^myTabs',

    scope: {
      title: '@'
    },
    transclude: true,
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template: z_paneHTML
  };
});  /*
.directive("zList",function(){
  return {


    template:"lala z-list is here"




  };
})
.directive("zDebug",function(){
  return {
    restrict: "E",
    scope:{},
    controller: ["$scope",function ZDebugCtrler($scope){
      $scope.info1 = "info1";
      $scope.info2 = "info2";
      $scope.mousePos = "( , )";
      $scope.showDebugger = true;

      $scope.toggleDebugP = function(){
        $scope.showDebugger = !$scope.showDebugger;
      }

      $scope.test = function(a){
        alert("debug test func w/ input: "+a);
      }
    }],

    template: z_debugHTML
  };
});/**/

//alert();
//-------------------------------------------------------------------------------------
//log("done loading script.js");
