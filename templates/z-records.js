var z_recordsHTML = ''+
'<a class = "addItemButton" ng-click = "addRecord()">New Record</a>'+
'<ul class="item-container">  '+
    '<ol class = "item" ng-repeat="(id,obj) in records">'+
    '  <button id = "record-{{$index}}" class = "itemButton" ng-click="select(id,obj)">{{obj.title}}</button>'+
    '</ol>  '+
'</ul>';
