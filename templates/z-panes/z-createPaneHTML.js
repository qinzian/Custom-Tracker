var z_createPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selected == \'create\'">'+
'lala'+
  '<div class = "form-container zone" ng-repeat = "(formId,form) in forms">'+
    '<div id = "{{formId}}" class = "form zone" ng-show = "selected == formId">'+
      '<div id = "comp-{{component}}" class = "component zone" ng-repeat = "component in components">'+
        '<button ng-click = "rmComp(\'comp-{{component}}\')"></button>'
        // the buttons below will add more elements inside this <div>
      '</div>'+
    '</div>'+
  '</div>'+
  '<button ng-click = "newInfo()"> Add Info </button>'+
  '<button ng-click = "newCounter()">Add Counter</button>'+
  '<button ng-click = "newPoll()">Add Poll</button>'+
'</div>';
