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

      $scope.setCRecord = function(obj){
        for (var i = 0; i < $scope.records.length; i++) {
          $scope.records[i].setHighLight(false);
        }
        obj.setHighLight(true);

        $scope.im.setCRecord(obj);
        //alert("curr Record is: "+$scope.im.crecord.id);
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
          if ($scope.im.cfolder.hasTemplate()){
            $scope.im.cfolder.addRecord();

          } else { // no form present for this form, need to init form
            if($scope.im.forms.length == 0){
              alert("select a form for this folder to start data tracking");
            } else {  // Allow user to choose from a list of form titles
              $scope.im.cfolder.initTemplate($scope.im.forms[0]); // for now just use the first form
              alert("now using form:"+$scope.im.cfolder.form.title);
            }
          }
        } else {
          alert("select a folder to add the records into");
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
        $scope.setCRecord(obj);
      }

      $scope.selectForm = function(obj){
        $scope.setCForm(obj);
      }

    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
