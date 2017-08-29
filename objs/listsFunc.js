CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope","ItemsManipulator",
    function($scope,ItemsManipulator){
      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.folders = $scope.im.itemLists.folders;
      $scope.forms = $scope.im.itemLists.forms;

      $scope.setCItem = function(type,obj){
        var aList = $scope.im.itemLists[type];

        for (var i = 0; i < aList.length; i++) {
          aList[i].setHighLight(false);
        }
        obj.setHighLight(true);

        $scope.im.setCItem(type,obj);
      }

      /*
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
      }*/

      $scope.addFolder = function(){
        var currFolderId = "folder-"+$scope.im.getFolderC();
        var folderTitle = ctPrompt("Name of new Folder:",currFolderId);

        if (folderTitle){
          if ($scope.im.folderExists(folderTitle)){
            alert("Folder with title: '"+folderTitle+"' already exists");
            return;
          }

          $scope.folders.push(new Folder(currFolderId,folderTitle));
          $scope.folderC++;
        }
      }

      $scope.addRecord = function(){
        if(typeof $scope.im.cfolder == "undefined"){ // didn't choose a folder
          alert("Select a folder first before making records");
          return;
        }

        if ($scope.im.getFormC() == 0){ // no forms to put in folder
          alert("Make a form first before making records");
          return;
        }

        if ($scope.im.cfolder.hasTemplate()){ // choice of folder has template already
            $scope.im.cfolder.addRecord();
            return;
        }

        // choose a form for your folder, the most recently created form is chosen as default
        var formTitle = ctPrompt("Choose a form for '"+$scope.im.cfolder.getTitle()+"' to use:",$scope.forms.get(-1).getTitle());

        if (folderTitle){
          var formObj = $scope.im.getForm(formTitle);

          if(formObj){
            $scope.im.cfolder.initTemplate(formObj);
          } else {
            alert("The form: '"+formTitle+"' doesn't exist");
          }

        }
      }

      $scope.addForm = function(){
        var currFormId = "form-"+$scope.im.getFormC();
        var formTitle = ctPrompt("Name of new Form:",currFormId);

        if (formTitle){
          if ($scope.im.formExists(formTitle)){
            alert("Form with title: '"+formTitle+"' already exists");
            return;
          }

          $scope.forms.push(new Form(currFormId,formTitle));
          $scope.formC++;
        }
      }

      $scope.addItem = function(type){
        if (type == "folders"){
          $scope.addFolder();
        } else if (type == "records"){
          $scope.addRecord();
        } else if (type == "forms"){
          $scope.addForm();
        } else {
          alert("addItem() of invalid type: "+type);
        }
      }

      $scope.selectItem = function(type,obj){
        $scope.setCItem(type,obj);

        if(type == "folders"){
          $scope.im.clearCRecord();

          // the first line would have already updated im.itemLists.records
          $scope.selectItem("records",$scope.im.itemLists.records[0]);
        } else if (!$scope.im.validModes.contains(type)) {
          alert("listsFunc selected invalid item type: "+type);
        }
      }
    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
