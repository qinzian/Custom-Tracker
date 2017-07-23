var z_listHTML = ''+
'<a id = "addItemButton" ng-click = "addItem()">New</a>'+
'<ul class="item-container">  '+
    '<ol class = "item" ng-repeat="item in currList">'+
    '  <button id = "item-{{$index}}" class = "itemButton" ng-click="select(item,$event)">{{item}}</button>'+
    '</ol>  '+
'</ul>';
