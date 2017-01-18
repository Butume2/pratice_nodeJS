'use strict';

/** プロジェクトマネジメントを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Module = step.ProjectManagement.Module || {};
step.ProjectManagement.Module.TaskManagement = step.ProjectManagement.Module.TaskManagement || {};

/**
 * TaskManagement画面用Appモジュールを設定
 */
step.ProjectManagement.Module.TaskManagement.app = angular.module('taskManagementApp', ['commonApp']);
step.ProjectManagement.Module.TaskManagement.app.service('taskManagementService', [step.ProjectManagement.Service.TaskManagement.TaskManagementService]);
