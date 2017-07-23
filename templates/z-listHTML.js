var z_listHTML = ''+
'<a id = "addItemButton" ng-click = "addItem()">New</a>'+
'<ul class="item-container">  '+
    '<ol class = "item" ng-repeat="(id,obj) in currList">'+
    '  <button id = "ib-{{$index}}" class = "itemButton" ng-click="select(id,obj)">{{obj.title}}</button>'+
    '</ol>  '+
'</ul>';
