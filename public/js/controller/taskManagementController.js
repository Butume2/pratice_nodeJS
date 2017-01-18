'use strict';

/** プロジェクトマネジメントのアプリケーションを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Module = step.ProjectManagement.Module || {};
step.ProjectManagement.Module.TaskManagement = step.ProjectManagement.Module.TaskManagement || {};
step.ProjectManagement.Module.TaskManagement.app = step.ProjectManagement.Module.TaskManagement.app || {};

/**
 * TaskManagement画面用コントローラクラス
 *
 * Copyright (C) 2016 step
 */
step.ProjectManagement.Module.TaskManagement.app.controller('taskManagementController', function($scope, taskManagementService) {

  console.log('controller running');
});
