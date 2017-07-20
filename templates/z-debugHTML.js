var z_debugHTML = ''+
'<div id = "debugZone">'+
  '<button id = "debugToggleButton" ng-click = "toggleDebugP()">Debug On/Off</button>'+
  '<button ng-click = "test(true)">Do stuff</button>'+
  '<div id = "debugInfo" ng-show = "showDebugger">'+
    '<input ng-model = "debugInput1" class = "info">'+
    '<br> {{debugInput1}} <br>'+
    '<textarea ng-model = "debugInput2" class = "info"></textarea>'+
    '<br> {{debugInput2}} <br>'+
    '<p id = "debug1" class = "info"></p>'+
    '<p class = "info">{{mousePos}}</p>'+
    '<p id = "debug2"class = "info"></p>'+
  '</div>'+
'</div>';
