var z_createPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selected == \'create\'">'+
  '<div class = "form-container zone" ng-show = "im.cform.id == formId" ng-repeat = "(formId,obj) in forms">'+
      '<a>{{im.cform.title}}</a>'+
      '<div id = {{formId}} class = "component-container zone">'+
        '<div id = "comp-{{$index}}" class = "component zone" ng-repeat = "component in im.cform.components">'+
          '<a ng-click = "rmComponent($index)">X</a>'+
          '<div ng-repeat = "(key,val) in component.data">'+
            '<a ng-click = "updateKey(key,component)">{{key}}</a>:<button>{{component.type}}</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
  '</div>'+
  '<button ng-click = "newInfo()"> Add Info </button>'+
  '<button ng-click = "newCounter()">Add Counter</button>'+
  '<button ng-click = "newPoll()">Add Poll</button>'+
'</div>';
