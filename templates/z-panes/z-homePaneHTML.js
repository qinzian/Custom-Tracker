var z_homePaneHTML = ''+
'<div class="panel" ng-show = "ts.selectedTab == \'home\'">'+
  '<a id = "folderTitle" ng-click = "updateFolderTitle()" class = "zone yellowBG">{{im.cfolder.title}}</a>'+
  '<br><br>'+
  '<a id = "folderDate" class = "zone yellowBG">{{im.cfolder.dateTime}}</a>'+
  '<br><br><br>'+
  'Folder Description:'+
  '<div id = "folderDescription"  class = "zone" ng-click = "updateFolderDescription()">{{im.cfolder.description}}</div>'+
  /* commented section repr the Form template that this folder is currently using
  '<div class = "component-container">'+
    '<div class = "component zone" ng-repeat = "comp in im.cfolder.template">'+
      '<div ng-repeat = "(key,val) in comp.data">'+
        '<a>{{key}}</a>'+
        ':<button>{{component.updateLabel}}</button>'+
      '</div>'+
    '</div>'+
  '</div>'+ //*/
'</div>';
