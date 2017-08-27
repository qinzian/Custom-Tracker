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

    controller: ["$scope","TabsSelector","ItemsManipulator",
    function($scope,TabsSelector,ItemsManipulator){
      $scope.ts = TabsSelector;
      $scope.im = ItemsManipulator;
      $scope.label = "viewer";

      $scope.clearFields= function(){ // this doesn't clear the extra notes section
        $scope.im.crecord.clearRecord();
      }

      $scope.deleteRecord = function(){
        var randCode = "randomCode"; // replace with generator later
        var input = prompt("Enter the following code to delete:"+randCode);

        if (input && input == randCode){
          $scope.im.cfolder.rmRecord($scope.im.crecord.getId());

          $scope.im.clearCRecord();

          alert("Successfully deleted the record");
        } else {
          alert("Invalid Code");
        }
      }

      $scope.updateExtraNotes = function(){
        var val = ctPrompt("Extra Notes for this record:",$scope.im.crecord.getExtraNotes());

        if (val){
          $scope.im.crecord.setExtraNotes(val);
        };
      }

      $scope.updateVal = function(comp,key){
        switch(comp.type){
          case "info":
            var val = ctPrompt(key+" :");

            if (val){
              comp.updateVal(key,val);
            };
            break;
          case "counter":
            var val = ctPrompt(key+" \xa0\xa0\xa0(number only):","-0.0"); // val is type String

            if (val){ // make sure val is a non-empty number
              if (!isNaN(val)){
                comp.updateVal(key,Number(val));
              } else {
                alert("please enter a number");
              }
            };
            break;
          case "poll":
            comp.updateVal(key);
            break;
          default:
            alert("updateVal() of invalid type of comp: "+comp.type);
            break;
        }
      }

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
        var newKey = ctPrompt("What do you want to track? ( "+comp.type+" )","default label");

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
