var z_listsHTML = ''+
'<div ng-show = "im.mode == \'folders\'">'+
  '<a class = "addItemButton" ng-click = "addFolder()">New Folder</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat="folder in folders">'+
        '<button id = "{{folder.id}}" class = "{{folder.highlight}} itemButton" '+
        'ng-click = "selectFolder(folder)">{{folder.title}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>'+
//--------------------------------------------------------------------------------------
'<div ng-show = "im.mode == \'records\'">'+
  '<a class = "addItemButton" ng-click = "addRecord()">New Record</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat="record in records">'+
        '<button id = "{{record.id}}" class = "{{record.highlight}} itemButton" '+
        'ng-click="selectRecord(record)">{{record.dateTime}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>'+
//--------------------------------------------------------------------------------------
'<div ng-show = "im.mode == \'forms\'">'+
  '<a class = "addItemButton" ng-click = "addForm()">New Form</a>'+
  '<ul class="item-container">  '+
      '<ol class = "item" ng-repeat="form in forms">'+
        '<button id = "{{form.id}}" class = "{{form.highlight}} itemButton" '+
        'ng-click="selectForm(form)">{{form.title}}</button>'+
      '</ol>  '+
  '</ul>'+
'</div>';
