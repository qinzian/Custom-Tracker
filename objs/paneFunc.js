CTapp.directive('zPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    require: '^^zTabs',

    scope: {
      label: '@'
    },

    transclude: true,

    /*
    controller: ["$scope",function($scope){
      $scope.a = 1;

      $scope.test = function(){
        alert($scope.a++);
      }
    }],*/

    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template: z_paneHTML
  };
});

//alert("pane Loaded");
