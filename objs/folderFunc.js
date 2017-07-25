function selectFolder(id){
  $(".selectedFolder").removeClass("selectedFolder");
  $("#"+id).addClass("selectedFolder");
  //alert($("#"+id).hasClass("selectedFolder")); if elem dne yet then cannot add class
}

CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope",function($scope){
      /*
      $scope.im = ItemsManipulator;
      $scope.folders = $scope.im.folders;
      $scope.currFolderId = $scope.im.currFolderId;
      $scope.folderC = $scope.im.folderC;
      $scope.mode = $scope.im.mode;//*/

      $scope.mode = "folders";
      $scope.folders = {};
      $scope.folderC = 0;
      $scope.currFolderId = "";
      $scope.currFolder = undefined;
      $scope.records = [];

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
        this.updateCurrFolder(id,obj);
      }

      $scope.selectRecord = function(obj){
        alert("selectRecord "+obj.id+" of folder: "+$scope.currFolderId);
      }

      $scope.test = function(input){
        $scope.mode = $scope.mode == "folders" ? "records":"folders";
      }

    }],

    template:z_listsHTML
  };
});
