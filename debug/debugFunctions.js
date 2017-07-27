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
