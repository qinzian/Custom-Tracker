//angular stuff---------------------------------------------------------------
CTapp = angular.module("CustomTracker",[]);

CTapp.factory("ItemsManipulator",function(){                    //TODO TODO TODO TODO TODO
  var factory = {};

  factory.mode = "folders";
  factory.folders = {};
  factory.cf = undefined; // currFolder obj
  factory.cr = undefined; // currRecord obj
  factory.validModes = ["folders","records","forms","void"];

  factory.setMode = function(mode){
    if (this.validModes.contains(mode)){
      //alert("mode is now == "+mode);
      this.mode = mode;

    } else {
      alert("invalid mode: "+mode);
    }
  }

  factory.setCR = function(record){
    this.cr = record;
  }

  factory.setCF = function(folder){
    this.cf = folder;
  }

  return factory;
})
.factory("CreatePaneManager",function(){
  var factory = {};

  return factory;
})
.factory("HomePaneManager",function(){
  var factory = {};

  factory.fd = $("#folderDescription");
  factory.ft = $("#folderTitle");

  factory.updateDescription = function(cf){
    cf.setDescription(this.fd.text());
  }

  factory.loadDescription = function(cf){
    this.fd.text(cf.getDescription());
  }

  factory.updateTitle = function(cf){
    cf.setTitle(this.ft.text());
  }

  factory.loadTitle = function(cf){
    this.ft.text(cf.getTitle());
  }

  return factory;
})
.factory("TabsSelector",function(){                    //TODO TODO TODO TODO TODO
  var factory = {};

  factory.selected = "create";

  factory.selectTab = function(label){
    this.selected = label;

    $(".selectedTab").removeClass("selectedTab");

    $("#"+label).addClass("selectedTab");
  }

  return factory;
});

//alert("factory loaded");
