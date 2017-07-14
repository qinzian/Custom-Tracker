var z_foldersHTML ='<div class="folder-container">  '+
    '<a class = "folder" ng-repeat="folder in folders">'+
    '  <button id = "folder-{{$index}}" class = "folderButton" ng-click="select(folder)">aaaaaaa</button>'+
    '</a>'+
  '</div>';


/* -------------------------------------The-above-string-is-taken-from-----------
<div class="folder-container">
    <div ng-repeat="folder in entries">
      <button id = "folder-{{$index}}" class = "folder" ng-click="select(folder)">folder.title</button>'+
    </div>
</div>
*/
