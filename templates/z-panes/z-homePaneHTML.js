var z_homePaneHTML = ''+
'<div class="panel" ng-show = "ts.selectedTab == \'home\'">'+
  '<a id = "folderTitle" ng-click = "updateFolderTitle()" class = "zone yellowBG">{{im.cfolder.title}}</a>'+
  '<br><br>'+
  '<a id = "folderDate" class = "zone yellowBG">{{im.cfolder.dateTime}}</a>'+
  '<br><br><br>'+
  'Folder Description:'+
  '<div id = "folderDescription"  class = "zone" ng-click = "updateFolderDescription()">{{im.cfolder.description}}</div>'+
  /*'<div class = "component-container">'+
    '<div class = "component zone" ng-repeat = "compData in im.cfolder.template">'+
      '<div ng-repeat = "(key,val) in compData">'+
        '<a>{{key}}</a>'+
        ':<button>{{component.updateLabel}}</button>'+
        '\xa0\xa0\xa0\xa0\xa0m.crecord.details[key]'+
      '</div>'+
    '</div>'+
  '</div>'+ //*/
'</div>';
