var z_listHTML = "<div id = \"debugZone\" class = \"zone\">"+
  "<button id = \"debugToggleButton\" ng-click = \"toggleDebugP()\">Debug On/Off</button>"+
  "<button ng-click = \"test(true)\">Do stuff</button>"+
  "<div id = \"debugInfo\" ng-show = \"showDebugger\">"+
  "  <input ng-model = \"debugInput1\" class = \"info\"> <br>"+
  "  {{debugInput1}}"+
  "  <textarea ng-model = \"debugInput1\" class = \"info\"></textarea>"+
  "  {{debugInput2}}"+
  "  <p class = \"info\">{{info1}}</p>"+
  "  <p class = \"info\">{{mousePos}}</p>"+
  "  <p class = \"info\">{{info2}}</p>"+
  "</div></div>";

/* -------------------------------------The-above-string-is-taken-from-----------
<div id = "debugZone" class = "zone">
  <button id = "debugToggleButton" ng-click = "toggleDebugP()">Debug On/Off</button>
  <button ng-click = "test(true)">Do stuff</button>
  <div id = "debugInfo" ng-show = "showDebugger">
    <input ng-model = "debugInput1" class = "info"> <br>
    {{debugInput1}}
    <textarea ng-model = "debugInput1" class = "info"></textarea>
    {{debugInput2}}
    <p class = "info">{{info1}}</p>
    <p class = "info">{{mousePos}}</p>
    <p class = "info">{{info2}}</p>
  </div>
</div>
*/
