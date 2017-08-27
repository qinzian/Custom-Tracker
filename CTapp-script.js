//angular stuff---------------------------------------------------------------
CTapp = angular.module("CustomTracker",[]);

CTapp.factory("ItemsManipulator",function(){                    //TODO TODO TODO TODO TODO
  var factory = {};

  factory.mode = "folders";
  factory.folders = [];
  factory.forms = [];
  factory.cform = undefined; // currFolder obj
  factory.cfolder = undefined; // currFolder obj
  factory.crecord = undefined; // currRecord obj
  factory.validModes = ["folders","records","forms","void"];

  factory.setMode = function(mode){
    if (this.validModes.contains(mode)){
      //alert("mode is now == "+mode);
      this.mode = mode;

    } else {
      alert("invalid mode: "+mode);
    }
  }

  factory.setCRecord = function(record){
    this.crecord = record;
  }

  factory.setCFolder = function(folder){
    this.cfolder = folder;
  }

  factory.setCForm = function(form){
    this.cform = form;
  }

  factory.clearCRecord = function(){
    this.crecord = undefined;
  }

  factory.formExists = function(formTitle){
    for (var i = 0; i < this.forms.length; i++) {
      if(this.forms[i].getTitle() == formTitle){
        return true;
      }
    }
    return false;
  }

  factory.getForm = function(formTitle){
    for (var i = 0; i < this.forms.length; i++) {
      if(this.forms[i].getTitle() == formTitle){
        return this.forms[i];
      }
    }
  }

  factory.folderExists = function(folderTitle){
    for (var i = 0; i < this.folders.length; i++) {
      if(this.folders[i].getTitle() == folderTitle){
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

    $(".selectedTab").removeClass("selectedTab");

    $("#"+label).addClass("selectedTab");
  }

  return factory;
});

//alert("factory loaded");
