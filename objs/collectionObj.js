function CollectionObj(type,id){
  this.dateTime = "";
  this.id = id;
  this.type = type;
  this.highlight = "";

  this.setHighLight = function(h){
      this.highlight = h? "selectedItem":"";
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

function Record(id,template){
  CollectionObj.call(this, "record",id);

  this.title = this.dateTime;

  this.details = {};

}
Record.prototype = Object.create(CollectionObj.prototype);
Record.prototype.constructor = Record;


function Folder(id,title){
  CollectionObj.call(this, "folder",id);

  this.title = title; // by default

  this.description = "[Click to Edit]";

  this.records = []; // collection of id to RecordObj pairs

  this.template = [];

  this.initTemplate = function(form){
    if (this.template.length !== 0){// to make sure that each folder can only have 1 template
      alert("this folder already has a form, formTitle:"+this.form.title);
      return;
    }

    if (form.getComp().length == 0){
      alert("This form is empty. Edit the form first");
      return;
    }

    cloneComponentsList(form.getComp(),this.template); // uses deep cloning to make a duplicate of form.comp[]
  }

  this.hasTemplate = function(){
    return this.template.length !== 0;
  }
  this.getForm = function(){
    return this.form;
  }

  this.getTitle = function(){
    return this.title;
  }

  this.setTitle = function(t){
    this.title = t;
  }

  this.addRecord = function(){
    this.records.push(new Record("record-"+this.records.length,this.form.getComp()));
  }

  this.rmRecord = function(index){
    alert("delete record: "+this.records[index].toString())
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

  this.addInfo = function(){
    this.components.push(new Info());
  }
  this.addCounter = function(){
    this.components.push(new Counter());
  }
  this.addPoll = function(){
    this.components.push(new Poll());
  }

}
Form.prototype = Object.create(CollectionObj.prototype);
Form.prototype.constructor = Form;


function cloneComponentsList(src,storage){
  for (var compIndex = 0; compIndex< src.length; compIndex++){ // duplicate the basic format of the form into template
    var component = src[compIndex];

    alert(component.getType());
    switch(component.getType()){
      case "info":
        storage.push(new Info());
        break;
      case "counter":
        storage.push(new Counter());
        break;
      case "poll":
        storage.push(new Poll());
        break;
      default:
        alert("cloning invalid comp type: "+formComp[compIndex].getType());
        break;
    }

    var compData = component.getData();
    for (var key in compData){ // comp data is an obj
      if (compData.hasOwnProperty(key)){
        storage[compIndex].updateKey("default label",key);
      }
    }
  }
  alert(src.toString());
  alert(storage.toString());
}
