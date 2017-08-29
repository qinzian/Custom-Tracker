var z_viewerPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selectedTab == \'viewer\'">'+
  '<div class = "form-container zone">'+
      '<a class = "zone formTitle yellowBG"> {{im.cfolder.getFormUsedTitle()}}</a>'+
      '<br>'+
      'Date Time: <a class = "zone yellowBG"> {{im.crecord.getTitle()}}</a>'+
      '<br><br>'+
      '<div class = "component-container">'+
        '<div class = "component" ng-repeat = "component in im.crecord.getDetails()">'+
          '<div class = "zone" ng-show = "!isDefaultLabel(key)" ng-repeat = "(key,val) in component.getData()">'+
            '<a>{{key}}</a>\xa0\xa0:\xa0\xa0\xa0'+
            '<button ng-click = "updateVal(component,key)">{{component.getUpdateLabel()}}</button>'+
            '\xa0\xa0\xa0\xa0\xa0 {{val}}'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<br><br>'+
      'Extra Notes:'+
      '<div class = "textNewLine zone" ng-click = "updateExtraNotes()">{{im.crecord.getExtraNotes()}}</div>'+
  '</div>'+
  '<button ng-click = "clearFields()"> Clear Fields </button>'+
  '<button ng-click = "deleteRecord()"> Delete Record </button>'+
'</div>';
