var z_entriesHTML ='<div class="entry-container">  '+
    '<a ng-repeat="entry in [1,2,3,4]">'+
    '  <button id = "entry-{{$index}}" class = "entry" ng-click="alert()">entry.title</button>'+
    '</a>  '+
  '</div>';


/* -------------------------------------The-above-string-is-taken-from-----------
<div class="entry-container">
    <div ng-repeat="entry in entries">
      <button id = "entry-{{$index}}" class = "entry" ng-click="select(entry)">entry.title</button>'+
    </div>
</div>
*/
