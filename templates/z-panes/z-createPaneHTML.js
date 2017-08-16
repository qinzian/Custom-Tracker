var z_createPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selected == \'create\'">'+
  '<div class = "form-container zone" ng-show = "im.cform.id == formId" ng-repeat = "(formId,obj) in forms">'+
      '<a>{{im.cform.title}}</a>'+
      '<div id = {{formId}} class = "component-container zone">'+
        '<div id = "componentId" ng-repeat = "componentId in im.cform.components">'+
        '</div>'+
      '</div>'+
  '</div>'+
  '<button ng-click = "newInfo()"> Add Info </button>'+
  '<button ng-click = "newCounter()">Add Counter</button>'+
  '<button ng-click = "newPoll()">Add Poll</button>'+
'</div>';
