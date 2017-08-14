CTapp.directive("zLists",function(){
  return{
    restrict:'E',
    scope:{},

    controller: ["$scope","ItemsManipulator","HomePaneManager","CreatePaneManager",
    function($scope,ItemsManipulator,HomePaneManager,CreatePaneManager){
      $scope.cpm = CreatePaneManager;
      $scope.hpm = HomePaneManager;
      $scope.im = ItemsManipulator; // the following is to copy the pointer to zList's ctrler
      $scope.folders = $scope.im.folders;
      $scope.forms = $scope.im.forms;

      $scope.folderC = 0;
      $scope.records = [];
      $scope.formC = 0;

      $scope.setCFolder = function(obj){
        //$(".selectedFolder").removeClass("selectedFolder");
        //$("#"+obj.id).addClass("selectedFolder");

        $scope.im.setCFolder(obj);
      }

      $scope.setCForm = function(obj){
        $scope.im.setCForm(obj);
      }

      $scope.setCR = function(obj){
        //$(".selectedRecord").removeClass("selectedRecord");
        //$("#"+obj.id).addClass("selectedRecord");
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
        var formTitle = prompt("Name of new Form:",currFormId);

        if (formTitle.split("").count(" ") == formTitle.length || formTitle == null){
          return; // don't make new form if null title or title filled with spaces
        }
        // users are allowed to make forms with the same title

        $scope.forms[currFormId] = new Form(currFormId,formTitle);
        $scope.formC++;
      }

      $scope.selectFolder = function(obj){
        $scope.setCFolder(obj);

        $scope.records = obj.getRecords();

        $scope.hpm.loadDescription($scope.im.cfolder);
        $scope.hpm.loadTitle($scope.im.cfolder);
      }

      $scope.selectRecord = function(obj){
        $scope.setCR(obj);
      }

      $scope.selectForm = function(obj){
        $scope.setCForm(obj);

        //$scope.hpm.loadDescription($scope.im.cform);
        //$scope.hpm.loadTitle($scope.im.cfolder);
      }

    }],

    template:z_listsHTML
  };
});
//alert("folders loaded");
