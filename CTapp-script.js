//angular stuff---------------------------------------------------------------
CTapp = angular.module("CustomTracker",[]);

CTapp.factory("ItemsManipulator",function(){                    //TODO TODO TODO TODO TODO
  var factory = {};

  factory.mode = "folders";
  factory.folders = {};
  factory.currFolderId = "";
  factory.currFolder = undefined;
  factory.currRecordId = "";
  factory.currRecord = undefined;
  factory.validModes = ["folders","records","forms","void"];

  factory.setMode = function(mode){
    if (this.validModes.contains(mode)){
      //alert("mode is now == "+mode);
      this.mode = mode;

    } else {
      alert("invalid mode: "+mode);
    }
  }

  factory.setCurrRecord = function(record){
    this.currRecord = record;
    this.currRecordId = record.id;
  }

  factory.setCurrFolder = function(folder){
    this.currFolder = folder;
    this.currFolderId = folder.id;
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
