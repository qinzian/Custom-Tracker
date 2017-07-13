var z_tabsHTML ='<div class="tabbable">  '+
    '<div ng-repeat="pane in panes"">'+
    '  <a href="" ng-click="select(pane)">{{pane.title}}</a>'+
    '</div>  '+
  '<div class="tab-content" ng-transclude></div></div>';


/* -------------------------------------The-above-string-is-taken-from-----------
<div class="tabbable">
    <div ng-repeat="pane in panes"">
      <a href="" ng-click="select(pane)">{{pane.title}}</a>
    </div>
  <div class="tab-content" ng-transclude></div></div>
*/
