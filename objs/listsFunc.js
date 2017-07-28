CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope","ItemsManipulator",function($scope,ItemsManipulator){

      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.folders = $scope.im.folders;

      $scope.folderC = 0;
      $scope.records = [];

      $scope.setCurrFolder = function(obj){
        $(".selectedFolder").removeClass("selectedFolder");
        $("#"+obj.id).addClass("selectedFolder");

        $scope.im.setCurrFolder(obj);
      }

      $scope.setCurrRecord = function(obj){
        $(".selectedRecord").removeClass("selectedRecord");
        $("#"+obj.id).addClass("selectedRecord");

        $scope.im.setCurrRecord(obj);
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

        //alert();
        $scope.setCurrFolder($scope.currFolder);
        //alert();
      }

      $scope.addRecord = function(){
        if(typeof $scope.im.currFolder !== "undefined"){
          $scope.im.currFolder.addRecord();
        } else {
          alert("no folders to add record to");
        }
      }

      $scope.selectFolder = function(obj){
        $scope.setCurrFolder(obj);
      }

      $scope.selectRecord = function(obj){
        $scope.setCurrRecord(obj);
      }

    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
