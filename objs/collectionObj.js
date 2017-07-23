function CollectionObj(type,id){
  this.title = "";
  this.date = "";
  this.highlight = false;
  this.id = id;
  this.type = type;
}

function Folder(id){
  CollectionObj.call(this, "folder",id);

  this.entries = {}; // collection of date to EntryObj pairs

  this.addEntry = function(id){

  }

  this.rmEntry = function(id){

  }
}
Folder.prototype = Object.create(CollectionObj.prototype);
Folder.prototype.constructor = Folder;

function Entry(id){
  CollectionObj.call(this, "folder",id);

  this.details = {info:{},counter:{},poll:{}}; // may add in location later
}
Entry.prototype = Object.create(CollectionObj.prototype);
Entry.prototype.constructor = Entry;
