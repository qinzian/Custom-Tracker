var z_tabsHTML =''+
'<div class="tab-container">  '+
  '<div ng-repeat="pane in panes">'+
    '<button id = "{{pane.label}}" class = "tab" ng-click="select(pane)">{{pane.label}}</button>'+
  '</div>  '+
'</div>'+
'<div class="tab-content" ng-transclude></div>';
