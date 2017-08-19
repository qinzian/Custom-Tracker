var z_homePaneHTML = ''+
'<div class="panel" ng-show = "ts.selected == \'home\'">'+
  '<a id = "folderTitle" ng-click = "updateFolderTitle()" class = "zone yellowBG">{{im.cfolder.title}}</a>'+
  '<br><br>'+
  '<a id = "folderDate" class = "zone yellowBG">{{im.cfolder.dateTime}}</a>'+
  '<br><br><br>'+
  'Folder Description:'+
  '<div id = "folderDescription"  class = "zone" ng-click = "updateFolderDescription()">{{im.cfolder.description}}</div>'+
'</div>';
