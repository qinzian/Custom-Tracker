CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope","ItemsManipulator",
    function($scope,ItemsManipulator){
      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.folders = $scope.im.folders;
      $scope.forms = $scope.im.forms;

      $scope.folderC = 0;
      $scope.records = [];
      $scope.formC = 0;

      $scope.setCFolder = function(obj){
        for (var i = 0; i < $scope.folders.length; i++) {
          $scope.folders[i].setHighLight(false);
        }
        obj.setHighLight(true);

        $scope.im.setCFolder(obj);
      }

      $scope.setCForm = function(obj){
        for (var i = 0; i < $scope.forms.length; i++) {
          $scope.forms[i].setHighLight(false);
        }
        obj.setHighLight(true);

        $scope.im.setCForm(obj);
      }

      $scope.setCR = function(obj){
        for (var i = 0; i < $scope.records.length; i++) {
          $scope.records[i].setHighLight(false);
        }
        obj.setHighLight(true);

        $scope.im.setCR(obj);
      }

      $scope.addFolder = function(){
        var currFolderId = "folder-"+$scope.folderC;
        var folderTitle = ctPrompt("Name of new Folder:",currFolderId);

        if (folderTitle){
          $scope.folders.push(new Folder(currFolderId,folderTitle));

          $scope.folderC++;
        }
      }

      $scope.addRecord = function(){ // can only add record if cfolder exists and has a form
        if(typeof $scope.im.cfolder !== "undefined"){
          if (typeof $scope.im.cfolder.getFormId() !== "undefined"){
            $scope.im.cfolder.addRecord();

          } else { // no form present for this form, need to init form
            alert("init form for currFolder before adding new record");

            // prompt name of form, if successful, add form and load pane-content based on template provided by form
            //$scope.im.cfolder.addRecord();
          }
        } else {
          alert("no folders to add record to");
        }
      }

      $scope.addForm = function(){
        var currFormId = "form-"+$scope.formC;
        var formTitle = ctPrompt("Name of new Form:",currFormId);

        if (formTitle){
          $scope.forms.push(new Form(currFormId,formTitle));
          $scope.formC++;
        }
      }

      $scope.selectFolder = function(obj){
        $scope.setCFolder(obj);

        $scope.records = obj.getRecords();
      }

      $scope.selectRecord = function(obj){
        $scope.setCR(obj);
      }

      $scope.selectForm = function(obj){
        $scope.setCForm(obj);
      }

    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
