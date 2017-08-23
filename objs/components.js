function Component(type){
  this.type = type;
  this.data = {"default label":0};

  if(type == "info"){
    this.updateLabel = "+ input";
  } else if (type == "counter"){
    this.updateLabel = "+ ?";
  } else if (type == "poll"){
    this.updateLabel = "+ 1";
  } else {
    alert("illegal component type: "+type);
  }

  this.getType = function(){
    return this.type;
  }

  this.getData = function(){
    return this.data;
  }

  this.updateKey = function(oldKey,newKey){ // only unique keys are allowed
    var tmp = this.data[oldKey];
    delete this.data[oldKey];
    this.data[newKey] = tmp;
  }

  this.updateVal = function(key,v){
    alert("abstract Component.updateVal(key = "+key+"        v = "+v+")");
  }

  this.getVal = function(k){
    return this.data[k];
  }

  this.toString = function(){
    return objToString(this.data);
  }
}

function Info(){
  Component.call(this, "info","Information");

  this.updateVal = function(k,v){
    this.data[k] = v;
  }
}
Info.prototype = Object.create(Component.prototype);
Info.prototype.constructor = Info;



function Counter(){
  Component.call(this, "counter");

  this.updateVal = function(k,v){
    this.data[k] += v;
  }
}
Counter.prototype = Object.create(Component.prototype);
Counter.prototype.constructor = Counter;



function Poll(){
  Component.call(this, "poll");

  this.updateVal = function(k){
    this.data[k]++;
  }

  this.updateKey = function(oldKey,newKey){
    var tmp = this.data[oldKey];
    delete this.data[oldKey];
    this.data[newKey] = tmp;

    if(!this.data.hasOwnProperty("default label")){
      this.data["default label"] = 0; //add an blank option
    }
  }

}
Poll.prototype = Object.create(Component.prototype);
Poll.prototype.constructor = Poll;
