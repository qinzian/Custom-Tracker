var z_foldersHTML = ''+
'<a class = "addItemButton" ng-click = "addFolder()">New Folder</a>'+
'<ul class="item-container">  '+
    '<ol class = "item" ng-repeat="(id,obj) in folders">'+
    '  <button id = "folder-{{$index}}" class = "itemButton" ng-click="select(id,obj)">{{obj.title}}</button>'+
    '</ol>  '+
'</ul>';
