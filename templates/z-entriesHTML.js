var z_entriesHTML = ''+
'<a id = "addEntryButton" ng-click = "addEntry()">New</a>'+
'<ul class="entry-container">  '+
    '<ol class = "entry" ng-repeat="entry in entries">'+
    '  <button id = "entry-{{$index}}" class = "entryButton" ng-click="select(entry,$event)">{{entry}}</button>'+
    '</ol>  '+
'</ul>';
