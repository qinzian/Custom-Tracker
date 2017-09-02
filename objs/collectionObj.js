function CollectionObj(type,id){
  this.dateTime = "";
  this.id = id;
  this.type = type;
  this.highlight = "";

  this.getId = function(){
    return this.id;
  }

  this.setTitle = function(s){
    alert("abstract CollectionObj.getTitle(), input: "+s);
  }

  this.getTitle = function(){
    alert("abstract CollectionObj.getTitle()");
  }

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

  this.getDateTime = function(){
    return this.dateTime;
  }
}

function Record(id,template){
  CollectionObj.call(this, "record",id);

  this.details = [];

  cloneComponentsList(template,this.details);

  this.extraNotes = "";

  this.clearRecord = function(){
    for (var i = 0; i < this.details.length; i++){
      this.details[i].clearComp();
    }
  }

  this.setExtraNotes = function(s){
    this.extraNotes = s;
  }

  this.getExtraNotes = function(){
    return this.extraNotes;
  }

  this.getTitle = function(){
    return this.dateTime;
  }

  this.getDetails = function(){
    return this.details;
  }
}
Record.prototype = Object.create(CollectionObj.prototype);
Record.prototype.constructor = Record;


function Folder(id){
  CollectionObj.call(this, "folder",id);

  this.description = "[Click to Edit]";

  this.records = []; // collection of id to RecordObj pairs

  this.formUsedTitle = undefined;

  this.template = [];

  this.totals = []; // this is a list of lists for each comp in this.templates

  this.getTotals = function(){
    return this.totals;
  }

  this.initTotals = function(){
    //alert("Folder.initTotals()");
    for (var i = 0; i < this.template.length; i++) {
      this.totals.push({});

      var compData = this.template[i].getData();
      for (var key in compData){
        if (!compData.hasOwnProperty(key) || key == "default label"){
          continue;
        }

        if (this.template[i].getType() == "poll"){
          this.totals.get(-1)[key] = 0;
        } else {
          this.totals.get(-1)[key] = [];
        }
      }
    }
    //alert("done Folder.initTotals()");
  }

  this.hasTemplate = function(){ // return !this.template[].contains(only "default labels")
    return typeof this.formUsedTitle == "string";
  }

  this.initTemplate = function(form){
    if (this.hasTemplate()){// to make sure that each folder can only have 1 template
      alert("this folder already has a form, formTitle:"+this.formUsedTitle);
      return;
    }

    if (form.isEmpty()){
      alert("This form is empty. Edit the form first");
      return;
    }

    this.formUsedTitle = form.getTitle();
    cloneComponentsList(form.getComp(),this.template); // uses deep cloning to make a duplicate of form.comp[]

    this.initTotals();
  }

  this.getTemplate = function(){
    return this.template;
  }

  this.getFormUsedTitle = function(){
    return this.formUsedTitle;
  }

  this.addRecord = function(){
    if (!this.hasTemplate()){
      alert("Folder.addRecord() is called somehow with empty template");
      return;
    }
    this.records.push(new Record("record-"+this.records.length,this.template));
  }

  this.rmRecord = function(recordId){
    for(var i = 0; i < this.records.length; i++){
      if (this.records[i].getId() == recordId){
        this.records.splice(i,1);
        return;
      }
    }
    alert("record id: "+recordId+" doesn't exist");
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

  this.getTitle = function(){
    return this.id;
  }

  this.setTitle = function(t){
    this.id = t;
  }

  this.updateSum = function(){
    alert(this.totals.length);
    for (var recordIndex = 0; recordIndex < this.records.length; recordIndex++) {
      var crecordDetails = this.records[recordIndex].getDetails();

      for (var compIndex = 0; compIndex < crecordDetails.length; compIndex++) {
        var crecordComp = crecordDetails[compIndex];

        var crecordData = crecordComp.getData();
        for (var key in crecordData) {
          if (!crecordData.hasOwnProperty(key) || key == "default label"){
            continue;
          }

          if (crecordComp.getType() == "poll"){
            this.totals[compIndex][key] = this.totals[compIndex][key]+crecordData[key];
          } else { // for info and counter
            this.totals[compIndex][key].push(crecordData[key]);
          }

        } // loop over keys of a comp
      } // loop over comps of a record
    } // loop over records of a folder
    alert(this.totals.toString());
  }

  this.toString = function(){
    return strf("{}     id:{}     title:{}",[this.type,this.id,this.title]);
  }
}
Folder.prototype = Object.create(CollectionObj.prototype);
Folder.prototype.constructor = Folder;



function Form(id){
  CollectionObj.call(this, "form",id);

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

  this.getTitle = function(){
    return this.id;
  }

  this.setTitle = function(t){
    this.id = t;
  }

  this.isEmpty = function(){
    for (var i = 0; i< this.components.length; i++){
      var compData = this.components[i].getData();
      for (var key in compData){
        if (key !== "default label"){
          return false; // non-empty => there exists non-"default label"
        }
      }
    }
    return true;
  }
}
Form.prototype = Object.create(CollectionObj.prototype);
Form.prototype.constructor = Form;


function cloneComponentsList(src,storage){
  for (var compIndex = 0; compIndex< src.length; compIndex++){ // duplicate the basic format of the form into template
    var component = src[compIndex];

    //alert(component.getType());
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
}
