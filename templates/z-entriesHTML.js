var z_entriesHTML =
'<ul class="entry-container">  '+
    '<ol class = "entry" ng-repeat="entry in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]">'+
    '  <button id = "entry-{{$index}}" class = "entryButton" ng-click="select(entry)">entry.title</button>'+
    '</ol>  '+
'</ul>';
