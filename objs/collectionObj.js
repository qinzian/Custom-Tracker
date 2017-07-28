function CollectionObj(type,id){
  this.dateTime = "";
  this.highlight = false;
  this.id = id;
  this.type = type;

  this.setHighlight = function(b){
    this.highlight = b
  }

  this.initDate = function(){
    var today = new Date();

    // month +1 because start from 0
    this.dateTime = strf("{}-{}-{}     {}:{}",[today.getFullYear(),
                                               today.getMonth()+1,
                                               today.getDate(),today.getHours(),
                                               today.getMinutes()]);
  }
  this.initDate();
}

function Record(id){
  CollectionObj.call(this, "record",id);


  //this.details = {info:{},counter:{},poll:{}}; // may add in location later
}
Record.prototype = Object.create(CollectionObj.prototype);
Record.prototype.constructor = Record;


function Folder(id){
  CollectionObj.call(this, "folder",id);

  this.title = id; // by default

  this.records = []; // collection of id to RecordObj pairs

  this.setTitle = function(t){
    this.title = t;
  }
  
  this.addRecord = function(){
    this.records.push(new Record("record-"+this.records.length));
  }

  this.rmRecord = function(id){
    alert("delete record with id: "+id)
  }

  this.getRecords = function(){
    return this.records;
  }

  this.toString = function(){
    return strf("{}     id:{}     title:{}",[this.type,this.id,this.title]);
  }
}
Folder.prototype = Object.create(CollectionObj.prototype);
Folder.prototype.constructor = Folder;
