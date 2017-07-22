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
      $scope.folders = [];
      $scope.folderC = 0;

      $scope.rmFolder = function(id){

      }

      $scope.addFolder = function(){
        $scope.folders.push("folder-"+$scope.folderC);
        $scope.folderC++;
        //log("reached end of zFolders.addFolder()");
      }

      $scope.select = function(folderId,e){
        alert(folderId==e.target.id);
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
})
.factory("Selection",function(){
  var factory = {};

  factory.folders = [];
  factory.currFolder = undefined;
  factory.setCurrFolder = function(id){
    factory.currFolder = id; // something like this
  }
  factory.getEntries = function(){
    return [12,3,"new stuff","factory entries"];
  }

  return factory;
});/**/

//alert();
//-------------------------------------------------------------------------------------
