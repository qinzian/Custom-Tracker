var z_homePaneHTML = ''+
'<div class="panel" ng-show = "ts.selected == \'home\'">'+
  '<img id = "editTitleButton" src = "pics/num0.png" ng-click = "editTitleButton()">'+
  '<a id = "folderTitle" class = "yellowBG">{{im.cf.title}}</a>'+
  '<br>'+
  '<a id = "folderDate" class = "yellowBG">{{im.cf.dateTime}}</a>'+
  '<br><br>'+
  '<textarea id = "folderDescription" placeholder="[Folder Description]" '+
  'ng-mouseleave = "updateFolderDescription()" ng-keydown = "keydown()"></textarea>'+
  '<br><br>Move / Tap outside the text field to SAVE'+
  '<br>{{Saving}}'
'</div>';
