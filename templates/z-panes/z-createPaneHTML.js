var z_createPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selectedTab == \'create\'">'+
  '<div class = "form-container zone">'+
      '<a class = "formTitle YellowBG">{{im.cform.getTitle()}}</a>'+
      '<div class = "component-container">'+
        '<div class = "component zone" ng-repeat = "component in im.cform.getComp()">'+
          '<a ng-click = "rmComponent($index)">X</a>'+
          '<div ng-repeat = "(key,val) in component.getData()">'+
            '<a ng-click = "updateKey(key,component)">{{key}}</a>:<button>{{component.updateLabel}}</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
  '</div>'+
  '<button ng-click = "newInfo()"> Add Info </button>'+
  '<button ng-click = "newCounter()">Add Counter</button>'+
  '<button ng-click = "newPoll()">Add Poll</button>'+
'</div>';
