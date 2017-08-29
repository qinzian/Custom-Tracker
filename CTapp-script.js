//angular stuff---------------------------------------------------------------
CTapp = angular.module("CustomTracker",[]);

CTapp.factory("ItemsManipulator",function(){                    //TODO TODO TODO TODO TODO
  var factory = {};

  factory.mode = "folders";
  factory.itemLists = {"folders":[],"forms":[],"records":null,"void":null};
  factory.cItemList= factory.itemLists.folders;
  factory.cform = undefined; // currFolder obj
  factory.cfolder = undefined; // currFolder obj
  factory.crecord = undefined; // currRecord obj
  factory.validModes = ["folders","records","forms","void"];

  factory.setMode = function(mode){
    if (this.validModes.contains(mode)){
      this.mode = mode;

      this.cItemList = this.itemLists[mode];

    } else {
      alert("invalid mode: "+mode);
    }
  }

  factory.setCItem = function(type,item){
    if (type == "records"){
      this.crecord = item;
    } else if (type == "folders"){
      this.cfolder = item;
      this.itemLists.records = item.getRecords();
    } else if (type == "forms"){
      this.cform = item;
    } else {
      alert("setCItem() invalid type:"+type);
    }
  }

  /*
  factory.setCRecord = function(record){
    this.crecord = record;
  }

  factory.setCFolder = function(folder){
    this.cfolder = folder;

    $scope.records = folder.getRecords();
  }

  factory.setCForm = function(form){
    this.cform = form;
  }*/

  factory.clearCRecord = function(){
    this.crecord = undefined;
  }

  factory.getFolderC = function(){
    return this.itemLists.folders.length;
  };

  factory.getFormC = function(){
    return this.itemLists.forms.length;
  };

  factory.formExists = function(formTitle){
    for (var i = 0; i < this.getFormC(); i++) {
      if(this.itemLists.forms[i].getTitle() == formTitle){
        return true;
      }
    }
    return false;
  }

  factory.getForm = function(formTitle){
    for (var i = 0; i < this.getFormC(); i++) {
      if(this.itemLists.forms[i].getTitle() == formTitle){
        return this.itemLists.forms[i];
      }
    }
  }

  factory.folderExists = function(folderTitle){
    for (var i = 0; i < this.getFolderC(); i++) {
      if(this.itemLists.folders[i].getTitle() == folderTitle){
        return true;
      }
    }
    return false;
  }

  return factory;
})
.factory("TabsSelector",function(){
  var factory = {};

  factory.selectedTab = "home";

  factory.selectTab = function(label){
    this.selectedTab = label;

    //*
    $(".selectedTab").removeClass("selectedTab");

    $("#"+label).addClass("selectedTab"); // change this to using databind on this.selectedTab */
  }

  return factory;
});

//alert("factory loaded");
