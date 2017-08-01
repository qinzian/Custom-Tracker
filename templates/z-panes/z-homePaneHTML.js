var z_homePaneHTML = ''+
'<div class="panel" ng-show = "ts.selected == \'home\'">'+
  '<textarea id = "folderTitle" class = "yellowBG"'+
  'ng-click = "updateFolderTitle()"></textarea>'+
  '<br>'+
  '<a id = "folderDate" class = "yellowBG">{{im.cf.dateTime}}</a>'+
  '<br><br>'+
  '<textarea id = "folderDescription" placeholder="[Folder Description]" '+
  'ng-click = "updateFolderDescription()"></textarea>'+
  '<br><br>Click / Tap inside the text field to SAVE'+
'</div>';
