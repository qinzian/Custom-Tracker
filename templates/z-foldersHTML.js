var z_foldersHTML =''+
'<a id = "addFolderButton" ng-click = "addFolder()">New</a>'+
'<div class="folder-container">  '+
  '<a class = "folder" ng-repeat="folder in folders">'+
  '  <button id = "folder-{{$index}}" class = "folderButton" ng-click="select(folder,$event)">{{folder}}</button>'+
  '</a>'+
'</div>';
