function Component(type){
  this.type = type;
  this.data = {"default label":0};

  this.getType = function(){
    return this.type;
  }

  this.getData = function(){
    return this.data;
  }

  this.updateKey = function(oldKey,newKey){
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
}

function Info(){
  Component.call(this, "info");

  this.updateVal = function(k,v){
    this.data[k] = v;
  }
}
Info.prototype = Object.create(Component.prototype);
Info.prototype.constructor = Info;



function Counter(){
  Component.call(this, "counter");

  this.updateVal = function(k,v){
    this.data[k] += k;
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
