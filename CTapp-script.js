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

  factory.setCurrRecord = function(id,obj){

  }

  factory.setCurrFolder = function(id,obj){

  }

  return factory;
});

//alert("factory loaded");
