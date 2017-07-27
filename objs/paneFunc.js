CTapp.directive('zPane', function() {                    //TODO TODO TODO TODO TODO
  return {
    restrict: 'E',
    require: '^^zTabs',

    scope: {
      label: '@'
    },

    transclude: true,
    link: function(scope, element, attrs, tabsCtrl) {
      scope.index = attrs.index;
      tabsCtrl.addPane(scope);
    },
    template: z_paneHTML
  };
});

//alert("pane Loaded");
