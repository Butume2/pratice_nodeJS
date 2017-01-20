'use strict';

/** プロジェクトマネジメントのアプリケーションを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Module = step.ProjectManagement.Module || {};
step.ProjectManagement.Module.Top = step.ProjectManagement.Module.Top || {};
step.ProjectManagement.Module.Top.app = step.ProjectManagement.Module.Top.app || {};

/**
 * Top画面用コントローラクラス
 *
 * Copyright (C) 2016 step
 */
step.ProjectManagement.Module.Top.app.controller('topController', function($scope, topService) {

  topService.initialize();

  $scope.clickToTaskManager = function(event){
    window.location.href = 'taskManager.html';
  }

  console.log('controller running');
});
