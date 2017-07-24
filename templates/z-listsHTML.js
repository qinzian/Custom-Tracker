var z_listsHTML = ''+
'<img src = "pics/num0.png" ng-click="test(1)">'+
'<div ng-show = "mode == \'folders\'">'+
  '<a class = "addItemButton" ng-click = "addFolder()">New Folder</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat=" (id,obj) in folders">'+
      '  <button id = "folder-{{$index}}" class = "itemButton" ng-click"selectFolder(id,obj)">{{obj.title}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>'+
'<div ng-show = "mode == \'records\'">'+
  '<a class = "addItemButton" ng-click = "addRecord()">New Record</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat="(id,obj) in records">'+
      '  <button id = "record-{{$index}}" class = "itemButton" ng-click="selectRecord(id,obj)">{{obj.title}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>';
