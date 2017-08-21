var z_viewerPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selectedTab == \'viewer\'">'+
  '<div class = "form-container zone">'+
      '<a>{{im.cform.title}}</a>'+
      '<a class = "zone yellowBG">{{im.crecord.title}}</a>'+
      '<div class = "component-container">'+
        '<div class = "component zone" ng-repeat = "component in im.cform.components">'+
          '<div ng-repeat = "(key,val) in component.data">'+
            '<a>{{key}}</a>:<button ng-click = "updateVal(key)">{{component.type}}</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
  '</div>'+
  '<button ng-click = "saveRecord()"> Save Record </button>'+
  '<button ng-click = "DeleteRecord()"> Delete Record </button>'+
'</div>';
