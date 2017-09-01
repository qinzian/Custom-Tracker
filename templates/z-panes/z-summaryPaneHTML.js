var z_summaryPaneHTML = ''+
'<div class = "panel" ng-show = "ts.selectedTab == \'summary\'">'+
  '<button ng-click = "updateSum()"> Refresh </button>'+
  '<div class = "summary-container">'+
    '<a class = "zone formTitle yellowBG"> {{im.cfolder.getFormUsedTitle()}}</a>'+
    //'<a class = "zone yellowBG"> {{im.crecord.getTitle()}}</a> <br><br>'+ //from what time to what time
    '<div class = "component" ng-repeat = "component in im.cfolder.getTotals()">'+
      '<div class = "zone" ng-show = "!isDefaultLabel(key)" ng-repeat = "(key,tot) in component.getData()">'+
        '<a>{{key}}</a>\xa0\xa0:\xa0\xa0\xa0{{tot}}'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';
