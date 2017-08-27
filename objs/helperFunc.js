CTapp.directive('zHelper', function() {
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector","ItemsManipulator",
    function($scope,TabsSelector,ItemsManipulator){
      $scope.ts = TabsSelector;
      $scope.im = ItemsManipulator;
      
      $scope.displayInstr = function(tab){
        alert("helper msg for the tab:"+tab);
      }
    }],

    template: z_helperHTML
  };
})
