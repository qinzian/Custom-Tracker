//angular stuff---------------------------------------------------------------
angular.module("CustomTracker",[])
.factory("ItemsManipulator",function(){                    //TODO TODO TODO TODO TODO
  var factory = {};

  factory.mode = "folders";
  factory.folderC = 0;
  factory.folders = {};
  factory.currFolderId ="";
  factory.currList = factory.folders;

  factory.switchList = function(mode){
    if (mode == "folders"){
      this.currList = this.folders;
    } else if (mode == "entries"){
      this.currList = this.folders[this.currFolderId].getEntries();
    }
  }

  return factory;
})
.directive('zTabs', function() {                    //TODO TODO TODO TODO TODO
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
})
.directive("zList",function(){                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    scope: {},
    controller: ['$scope',"ItemsManipulator", function MyListController($scope,ItemsManipulator) {
      $scope.im = ItemsManipulator;
      $scope.folders = $scope.im.folders;
      $scope.currFolderId = $scope.im.currFolderId;
      $scope.folderC = $scope.im.folderC;
      $scope.mode = $scope.im.mode;
      $scope.currList = $scope.im.currList;

      $scope.rmFolder = function(id){

      }

      $scope.addItem = function(){
        alert("clicked additem, mode="+$scope.mode);
        if ($scope.mode == "folders"){
          $scope.currFolderId = "folder-"+$scope.folderC;
          $scope.folders[$scope.currFolderId] = $scope.currFolderId; // use this for now
          // $scope.folders[$scope.currFolderId] = new Folder($scope.currFolderId);
          $scope.folderC++;
        } else if ($scope.mode == "entries"){
          alert("mode == entries");
        } else {
          alert("invalid mode");
        }
      }

      $scope.select = function(folderId,e){
        $scope.currFolderId = folderId;

        $scope.im.switchList("entries");
      }

    }],

    template: z_listHTML
  };
})
.directive("zDebug",function(){                    //TODO TODO TODO TODO TODO
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
});/**/

alert();
//-------------------------------------------------------------------------------------
