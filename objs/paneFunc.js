CTapp.directive('zHomePane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector","ItemsManipulator",
    function($scope,TabsSelector,ItemsManipulator){
      $scope.ts = TabsSelector;
      $scope.im = ItemsManipulator;
      $scope.label = "home";

      $scope.updateFolderTitle = function(){
        var newTitle = ctPrompt("New Title:",$scope.im.cfolder.getTitle());

        if(newTitle){
          $scope.im.cfolder.setTitle(newTitle);
        }
      }

      $scope.updateFolderDescription = function(){
        var newDescription = ctPrompt("New Description:",$scope.im.cfolder.getDescription());

        if(newDescription){
          $scope.im.cfolder.setDescription(newDescription);
        }
      }
    }],

    template: z_homePaneHTML
  };
})
.directive('zViewerPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "viewer";
    }],

    template: z_viewerPaneHTML
  };
})
.directive('zSummaryPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "summary";
    }],

    template: z_summaryPaneHTML
  };
})
.directive('zCreatePane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector","ItemsManipulator",
    function($scope,TabsSelector,ItemsManipulator){
      $scope.ts = TabsSelector;
      $scope.im = ItemsManipulator;
      $scope.label = "create";
      $scope.forms = $scope.im.forms;

      $scope.updateKey = function(k,comp){
        var newKey = ctPrompt("What do you want to track?","label");

        if(newKey){
          comp.updateKey(k,newKey); // func(old,new)
        }
      }

      $scope.rmComponent = function(index){
        $scope.im.cform.rmComp(index);
      }

      $scope.newInfo = function(){
        $scope.im.cform.addInfo();
      }

      $scope.newCounter = function(){
        $scope.im.cform.addCounter();
      }

      $scope.newPoll = function(){
        $scope.im.cform.addPoll();
      }
    }],

    template: z_createPaneHTML
  };
})
.directive('zSettingPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',

    scope: {},

    controller: ["$scope","TabsSelector",function($scope,TabsSelector){
      $scope.ts = TabsSelector;
      $scope.label = "setting";
    }],

    template: z_settingPaneHTML
  };
})

//alert("pane Loaded");
