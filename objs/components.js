function Component(type,id){
  this.id = id;
  this.sf = $("#"+id);
  this.type = type;
  this.data = {};
  this.title = "";

  this.setTitle = function(t){
    this.title = t;
  }

  this.getTitle = function(){
    return this.title;
  }

  this.getType = function(){
    return this.type;
  }

  this.getData = function(){
    return this.data;
  }
}

function Info(key,id){
  Component.call(this, "info",id);

  this.key = key;
  this.val = "";

  this.setVal = function(v){
    this.val = v;
  }
  this.getVal = function(){
    return this.val;
  }

}
Info.prototype = Object.create(Component.prototype);
Info.prototype.constructor = Info;



function Counter(key,startingVal,id){
  Component.call(this, "counter",id);

  this.key = key;
  this.val = startingVal;

  this.addVal = function(v){
    this.val += v;
  }

  this.getVal = function(){
    return this.val;
  }
}
Counter.prototype = Object.create(Component.prototype);
Counter.prototype.constructor = Counter;



function Poll(id){
  Component.call(this, "poll",id);

  this.options = {};

  this.selectOption = function(opt){
    this.options[opt] += 1;
  }

  this.addOption = function(opt){
    this.options[opt] = 0;
  }
}
Poll.prototype = Object.create(Component.prototype);
Poll.prototype.constructor = Poll;
