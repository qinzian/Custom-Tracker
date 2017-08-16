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

function Record(id,template){
  CollectionObj.call(this, "record",id);

  this.components = template;

  /*
  this.updateInfo = function(info,val){
    info.data[1] = val;
  }
  this.updateCounter = function(counter){
    counter.data[1] += val;
  }
  this.updatePoll = function(poll){

  }
  this.updateComponent = function(index,val){
    var comp = this.components[index];

    switch(comp.type){
      case "info":
        this.updateInfo(comp,val);
        break;
      case "counter":
        this.updateCounter(comp,val);
        break;
      case "poll":
        this.updatePoll(comp,val);
        break;
      default:
        alert("trying to update\n"+val+"\n into component with type: "+comp.type);
        break;
    }
  }*/
}
Record.prototype = Object.create(CollectionObj.prototype);
Record.prototype.constructor = Record;


function Folder(id,title){
  CollectionObj.call(this, "folder",id);

  this.title = title; // by default

  this.description = "";

  this.records = []; // collection of id to RecordObj pairs

  this.form = undefined;

  this.initForm = function(form){ // to make sure that each folder can only have 1 form
    if (typeof this.form == "undefined"){
      this.form = form;
    } else {
      alert("this folder already has a form, formTitle:"+this.form.title+"formId:"+this.form.id);
    }
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

  /*
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
    this.components.push({type:"counter",data:[key,0.0]});
  }
  this.addPoll = function(key){
    this.components.push({type:"poll",data:{key:0}});
  }
  this.addPollOpt = function(key){

  }
  */

}
Form.prototype = Object.create(CollectionObj.prototype);
Form.prototype.constructor = Form;
