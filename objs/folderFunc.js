/*function selectFolder(id){
  $(".selectedFolder").removeClass("selectedFolder");
  $("#"+id).addClass("selectedFolder");
  //alert($("#"+id).hasClass("selectedFolder")); if elem dne yet then cannot add class
}
function selectRecord(id){
  $(".selectedRecord").removeClass("selectedRecord");
  $("#"+id).addClass("selectedRecord");
  //alert($("#"+id).hasClass("selectedFolder")); if elem dne yet then cannot add class
}/**/

alert("folders loading");
CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope",function($scope){
/*
      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.mode = $scope.im.mode;
      $scope.folders = $scope.im.folders;
      $scope.currFolderId = $scope.im.currFolderId;
      $scope.currFolder = $scope.im.currFolder;
      $scope.currRecordId = $scope.im.currRecordId;
      $scope.currRecord = $scope.im.currRecord;*/

      $scope.mode = "folders";
      $scope.folders = {};
      $scope.currFolderId = "";
      $scope.currFolder;
      $scope.currRecordId = "$scope.im.currRecordId";
      $scope.currRecord;


      $scope.folderC = 0;
      $scope.records = [];

      $scope.updateCurrFolder = function(id,obj){
        $scope.currFolderId = id;
        $scope.currFolder = obj;
        $scope.records = obj.getRecords();

        selectFolder(id);
      }

      $scope.updateCurrFolder = function(id,obj){
        $scope.currFolderId = id;
        $scope.currFolder = obj;
        $scope.records = obj.getRecords();

        selectFolder(id);
      }

      $scope.addFolder = function(){
        //alert("add folder");
        $scope.currFolderId = "folder-"+$scope.folderC;
        $scope.folders[$scope.currFolderId] = new Folder($scope.currFolderId);
        $scope.folderC++;

        //alert();
        $scope.updateCurrFolder($scope.currFolderId,$scope.folders[$scope.currFolderId]);
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
        var tmp = $scope.mode == "folders" ? "records":"folders";
        //$scope.im.setMode(tmp);
      }

    }],

    template:z_listsHTML
  };
});
alert();
