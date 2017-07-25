//angular stuff---------------------------------------------------------------
CTapp = angular.module("CustomTracker",[]);

CTapp.factory("ItemsManipulator",function(){                    //TODO TODO TODO TODO TODO
  var factory = {};

  factory.mode = "folders";
  factory.folderC = 0;
  factory.folders = {};
  factory.currFolderId ="";
  factory.currList = factory.folders;

  factory.switchList = function(mode){
    this.mode = mode;

    if (this.mode == "folders"){
      alert("in mode == folders");
      this.currList = this.folders;

    } else if (this.mode == "records"){
      alert("in mode == records");
      this.currList = this.folders[this.currFolderId].getRecords();

    } else {
      alert("invalid mode");
    }
    alert("done switching list");
  }

  return factory;
})
.directive('zTabs', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope',"ItemsManipulator", function MyTabsController($scope,ItemsManipulator) {
      $scope.im = ItemsManipulator;

      $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach($scope.panes, function(pane) {
          pane.selected = false;
        });
        $(".selectedTab").removeClass("selectedTab");


        $("#tab-"+pane.index.toString()).addClass("selectedTab");
        pane.selected = true;

        if (pane.index == 1){
          $scope.im.switchList("records");
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
})
.directive('zPane', function() {                    //TODO TODO TODO TODO TODO
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
});/**/

//alert();
//-------------------------------------------------------------------------------------
CTapp.directive("zDebug",function(){                    //TODO TODO TODO TODO TODO
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
});
