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
        $(".selectedTab").removeClass("selectedTab");
        $("#tab-"+pane.index.toString()).addClass("selectedTab");
        pane.selected = true;
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
})
.directive('myPane', function() {
  return {

    restrict: 'E',
    require: '^^myTabs',

    scope: {
      label: '@'
    },
    transclude: true,
    link: function(scope, element, attrs, tabsCtrl) {
      scope.index = attrs.index;
      tabsCtrl.addPane(scope);
    },
    template: z_paneHTML
  };
})
.directive("zList",function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function MyTabsController($scope) {
      $scope.entries = [];

      $scope.rmEntry = function(id){

      }

      $scope.addEntry = function(){

      }

      $scope.selectEntry = function(){
        
      }

    }],
    template: z_listHTML
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
