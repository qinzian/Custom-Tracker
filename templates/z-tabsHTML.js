var z_tabsHTML ='<div class="tab-container">  '+
    '<div ng-repeat="pane in panes">'+
    '  <button id = "tab-{{$index}}" class = "tab" ng-click="select(pane)">{{pane.label}}</button>'+
    '</div>  '+
  '<div class="tab-content" ng-transclude></div></div>';


/* -------------------------------------The-above-string-is-taken-from-----------
<div class="tab-container">
    <div ng-repeat="pane in panes"">
      <button id = "tab-{{$index}}" class = "tab" ng-click="select(pane)">{{pane.label}}</button>'+
    </div>
  <div class="tab-content" ng-transclude></div></div>
*/
