CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope","ItemsManipulator","HomePaneManager",
    function($scope,ItemsManipulator,HomePaneManager){
      $scope.hpm = HomePaneManager;
      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.folders = $scope.im.folders;
      $scope.forms = $scope.im.forms;

      $scope.folderC = 0;
      $scope.records = [];

      $scope.setCF = function(obj){
        $(".selectedFolder").removeClass("selectedFolder");
        $("#"+obj.id).addClass("selectedFolder");

        $scope.im.setCF(obj);
      }

      $scope.setCR = function(obj){
        $(".selectedRecord").removeClass("selectedRecord");
        $("#"+obj.id).addClass("selectedRecord");

        $scope.im.setCR(obj);
      }

      $scope.addFolder = function(){
        var currFolderId = "folder-"+$scope.folderC;
        var folderTitle = prompt("Name of new Folder:",currFolderId);

        if (folderTitle.split("").count(" ") == folderTitle.length || folderTitle == null){
          return; // don't make new folder if null title or title filled with spaces
        }
        // users are allowed to make folders with the same title

        $scope.folders[currFolderId] = new Folder(currFolderId,folderTitle);

        $scope.folderC++;
      }

      $scope.addRecord = function(){ // can only add record if cf exists and has a form
        if(typeof $scope.im.cf !== "undefined"){
          if (typeof $scope.im.cf.getFormId() !== "undefined"){
            $scope.im.cf.addRecord();

          } else { // no form present for this form, need to init form
            alert("init form for currFolder before adding new record");

            // prompt name of form, if successful, add form and load pane-content based on template provided by form
            //$scope.im.cf.addRecord();
          }
        } else {
          alert("no folders to add record to");
        }
      }

      $scope.addForm = function(){
        var currFolderId = "folder-"+$scope.folderC;
        var folderTitle = prompt("Name of new Folder:",currFolderId);

        if (folderTitle.split("").count(" ") == folderTitle.length || folderTitle == null){
          return; // don't make new folder if null title or title filled with spaces
        }
        // users are allowed to make folders with the same title

        $scope.folders[currFolderId] = new Folder(currFolderId,folderTitle);
      }

      $scope.selectFolder = function(obj){
        $scope.setCF(obj);

        $scope.records = obj.getRecords();

        $scope.hpm.loadDescription($scope.im.cf);
        $scope.hpm.loadTitle($scope.im.cf);
      }

      $scope.selectRecord = function(obj){
        $scope.setCR(obj);
      }

      $scope.selectForm = function(){

      }

    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
