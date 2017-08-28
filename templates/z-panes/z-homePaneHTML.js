var z_homePaneHTML = ''+
'<div class="panel" ng-show = "ts.selectedTab == \'home\'">'+
  '<a id = "folderTitle" ng-click = "updateFolderTitle()" class = "zone yellowBG">{{im.cfolder.title}}</a>'+
  '<br><br>'+
  '<a id = "folderDate" class = "zone yellowBG">{{im.cfolder.dateTime}}</a>'+
  '<br><br><br>'+
  '<big><big><big>Folder Description :</big></big></big>'+
  '<div id = "folderDescription"  class = "textNewLine zone" '+
  'ng-click = "updateFolderDescription()">{{im.cfolder.description}}</div>'+
'</div>';
