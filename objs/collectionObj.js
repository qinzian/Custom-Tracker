alert();

function CollectionObj(type,id){
  this.title = "";
  this.date = "";
  this.highlight = false;
  this.id = id;
  this.type = type;
}

function MyFolder(id){
  CollectionObj.call(this, "folder",id);

  this.entries = {}; // collection of date to EntryObj pairs

  this.addEntry = function(id){

  }

  this.rmEntry = function(id){

  }
}
MyFolder.prototype = Object.create(CollectionObj.prototype);
MyFolder.prototype.constructor = MyFolder;


function MyEntry(id){
  CollectionObj.call(this, "folder",id);

  //this.details = {info:{},counter:{},poll:{}}; // may add in location later
}
MyEntry.prototype = Object.create(CollectionObj.prototype);
MyEntry.prototype.constructor = MyEntry;
