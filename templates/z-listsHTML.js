var z_listsHTML = ''+
//'<img src = "pics/num0.png" ng-click="test(1)">'+
'<div ng-show = "im.mode == \'folders\'">'+
  '<a class = "addItemButton" ng-click = "addFolder()">New Folder</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat=" (id,obj) in folders">'+
      '  <button id = "folder-{{$index}}" class = "itemButton" ng-click = "selectFolder(id,obj)">{{obj.title}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>'+
//--------------------------------------------------------------------------------------
'<div ng-show = "im.mode == \'records\'">'+
  '<a class = "addItemButton" ng-click = "addRecord()">New Record</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat="obj in records">'+
      '  <button id = "record-{{$index}}" class = "itemButton" ng-click="selectRecord(obj)">{{obj.dateTime}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>'+
//--------------------------------------------------------------------------------------
'<div ng-show = "im.mode == \'forms\'">'+
  '<a class = "addItemButton" ng-click = "addForm()">New Form</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat="obj in forms">'+
      '  <button id = "form-{{$index}}" class = "itemButton" ng-click="selectForm(obj)">{{obj.title}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>';
