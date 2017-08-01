CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope","ItemsManipulator","HomePaneManager",
    function($scope,ItemsManipulator,HomePaneManager){
      $scope.hpm = HomePaneManager;
      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.folders = $scope.im.folders;

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

      $scope.addRecord = function(){
        if(typeof $scope.im.cf !== "undefined"){
          $scope.im.cf.addRecord();
          //alert("added record");
        } else {
          alert("no folders to add record to");
        }
      }

      $scope.selectFolder = function(obj){
        $scope.setCF(obj);

        $scope.records = obj.getRecords();

        $scope.hpm.loadDescription($scope.im.cf);
      }

      $scope.selectRecord = function(obj){
        $scope.setCR(obj);
      }

    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
