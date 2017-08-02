function CollectionObj(type,id){
  this.dateTime = "";
  this.id = id;
  this.type = type;

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


function Folder(id,title){
  CollectionObj.call(this, "folder",id);

  this.title = title; // by default

  this.description = "";

  this.records = []; // collection of id to RecordObj pairs

  this.formId = undefined;

  this.initFormId = function(id){
    if (typeof this.formId == "undefined"){
      this.formId = id;
    } else {
      alert("this folder already has a form, formId:"+this.formId);
    }
  }

  this.getFormId = function(){
    return this.formId;
  }

  this.getTitle = function(){
    return this.title;
  }

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

  this.setDescription = function(d){
    this.description = d;
  }

  this.getDescription = function(){
    return this.description;
  }

  this.toString = function(){
    return strf("{}     id:{}     title:{}",[this.type,this.id,this.title]);
  }
}
Folder.prototype = Object.create(CollectionObj.prototype);
Folder.prototype.constructor = Folder;

function Form(id,title){
  CollectionObj.call(this, "form",id);

  this.title = title;

  this.components = []; // the following functions will add objs into this list

  this.rmComp = function(index){
    this.components.splice(index,1);
  }

  this.getComp = function(){
    return this.components;
  }

  this.addInfo = function(key){
    this.components.push({type:"info",data:[key,""]});
  }
  this.addCounter = function(key){
    this.components.push({type:"counter"[key,0.0]});
  }
  this.addPoll = function(key){
    this.components.push({type:"poll",[key]});
  }

}
Form.prototype = Object.create(CollectionObj.prototype);
Form.prototype.constructor = Form;
