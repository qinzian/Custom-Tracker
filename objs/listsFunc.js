function selectFolder(id){
  $(".selectedFolder").removeClass("selectedFolder");
  $("#"+id).addClass("selectedFolder");
  //alert($("#"+id).hasClass("selectedFolder")); if elem dne yet then cannot add class
}
function selectRecord(id){
  $(".selectedRecord").removeClass("selectedRecord");
  $("#"+id).addClass("selectedRecord");
  //alert($("#"+id).hasClass("selectedFolder")); if elem dne yet then cannot add class
}/**/


CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope","ItemsManipulator",function($scope,ItemsManipulator){

      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.folders = $scope.im.folders;
      $scope.currFolderId = $scope.im.currFolderId;
      $scope.currFolder = $scope.im.currFolder;
      $scope.currRecordId = $scope.im.currRecordId;
      $scope.currRecord = $scope.im.currRecord;


      $scope.folderC = 0;
      $scope.records = [];

      $scope.updateCurrFolder = function(id,obj){
        $scope.currFolderId = id;
        $scope.currFolder = obj;
        $scope.records = obj.getRecords();

        selectFolder(id);
      }

      $scope.updateCurrRecord = function(id,obj){
        $scope.currRecordId = id;
        $scope.currRecord = obj;

        selectRecord(id);
      }

      $scope.addFolder = function(){
        $scope.currFolderId = "folder-"+$scope.folderC;
        var folderTitle = prompt("Name of new Folder:",$scope.currFolderId);

        if (folderTitle.split("").count(" ") == folderTitle.length || folderTitle == null){
          return; // don't make new folder if null title or title filled with spaces
        }
        // users are allowed to make folders with the same title

        $scope.folders[$scope.currFolderId] = new Folder($scope.currFolderId);
        $scope.currFolder = $scope.folders[$scope.currFolderId];

        $scope.currFolder.setTitle(folderTitle);

        $scope.folderC++;

        //alert();
        $scope.updateCurrFolder($scope.currFolderId,$scope.currFolder);
        //alert();
      }

      $scope.addRecord = function(){
        if(typeof $scope.currFolder !== "undefined"){
          $scope.currFolder.addRecord();
        } else {
          alert("no folders to add record to");
        }
      }

      $scope.selectFolder = function(id,obj){
        //alert("selectFolder");
        $scope.updateCurrFolder(id,obj);
      }

      $scope.selectRecord = function(id,obj){
        $scope.updateCurrRecord(id,obj);
        alert("selectRecord "+obj.id+" of folder: "+$scope.currFolderId);
      }

      $scope.test = function(input){
        var t = $scope.im.mode == "folders"? "records":"folders";
        $scope.im.setMode(t);
      }

      
    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
