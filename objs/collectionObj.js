function CollectionObj(type,id){
  this.date = "";
  this.highlight = false;
  this.id = id;
  this.type = type;
  this.title = id; // by default

  this.setHighlight = function(b){
    this.highlight = b
  }
  this.initDate = function(){
    //this.date = ; // yyyy/mm/dd (maybe time as well)
  }
  this.initDate();
}

function Folder(id){
  CollectionObj.call(this, "folder",id);

  this.records = {}; // collection of date to EntryObj pairs

  this.addEntry = function(id){

  }

  this.rmEntry = function(id){

  }

  this.getRecords = function(){
    return this.records;
  }
}
Folder.prototype = Object.create(CollectionObj.prototype);
Folder.prototype.constructor = Folder;


function Record(id){
  CollectionObj.call(this, "record",id);


  //this.details = {info:{},counter:{},poll:{}}; // may add in location later
}
Record.prototype = Object.create(CollectionObj.prototype);
Record.prototype.constructor = Record;
