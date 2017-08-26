var z_viewerPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selectedTab == \'viewer\'">'+
  '<div class = "form-container zone">'+
      '<a class = "zone formTitle yellowBG"> {{im.cfolder.formUsedTitle}}</a>'+
      '<br>'+
      'Date Time: <a class = "zone yellowBG"> {{im.crecord.title}}</a>'+
      '<br><br>'+
      '<div class = "component-container">'+
        '<div class = "component zone" ng-repeat = "component in im.crecord.details">'+
          '<div ng-repeat = "(key,val) in component.data">'+
            '<a>{{key}}</a>'+
            ':<button ng-click = "updateVal(component,key)">{{component.updateLabel}}</button>'+
            '\xa0\xa0\xa0\xa0\xa0 {{val}}'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<br><br>'+
      '<textarea id="recordExtras" placeHolder = "[Extra Notes Here]"></textarea>'+
  '</div>'+
  '<button ng-click = "clearFields()"> Clear Fields </button>'+
  '<button ng-click = "deleteRecord()"> Delete Record </button>'+
'</div>';
