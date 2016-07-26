(function() {
  'use strict';

  angular.module('todoApp')
  .component('todoComponent', {
    url: 'app.template.html',
    templateUrl: 'app/views/app.template.html',
    controller: TodoAppController
  });

  function TodoAppController() {
    var self = this;
    var name = "test";
    self.name = name;
  }

})();
