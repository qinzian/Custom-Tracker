//angular stuff---------------------------------------------------------------
angular.module("CustomTracker",[])
.directive('zTabs', function() {
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
.directive('zPane', function() {
  return {

    restrict: 'E',
    require: '^^zTabs',

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
.directive("zFolders",function(){
  return {
    restrict: 'E',
    scope: {},
    controller: ['$scope', function MyFolderController($scope) {
      $scope.folders = [1,2,3,4,5,6,0];

      $scope.rmEntry = function(id){

      }

      $scope.addEntry = function(){

      }

      $scope.select = function(folder){
        alert(folder);
      }

    }],

    template: z_foldersHTML
  };
})
.directive("zEntries",function(){
  return {


    template: z_entriesHTML
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

      this.updateMousePos = function(x,y){
        $scope.$apply(function(){ // forcing the ng-digest-cycle to include mousePos' update
            $scope.mousePos = strf("({},{})",[x,y]);
        });
      }
    }],

    require: "zDebug",
    link: function(scope, element, attrs,debugCtrler){
      	$(".zone").mousemove(function(event){
      		debugCtrler.updateMousePos(event.offsetX,event.offsetY);
      	});
    },

    template: z_debugHTML
  };
});/**/

//alert();
//-------------------------------------------------------------------------------------
//log("done loading script.js");
