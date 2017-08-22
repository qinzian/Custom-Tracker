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
