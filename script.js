
//angular stuff---------------------------------------------------------------
var CTapp = angular.module("Custom-Tracker",[])

//*
CTapp.directive("zsPane",function(){
  return {





  };
})
.directive("zTab",function(){
  return {





  };
})
.directive("zList",function(){
  return {







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

    templateUrl: "debug/z-debug.html"
  };
});/**/


//alert();
//-------------------------------------------------------------------------------------
//log("done loading script.js");
