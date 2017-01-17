'use strict';

/** プロジェクトマネジメントを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Module = step.ProjectManagement.Module || {};
step.ProjectManagement.Module.Top = step.ProjectManagement.Module.Top || {};

/**
 * Top画面用Appモジュールを設定
 */
step.ProjectManagement.Module.Top.app = angular.module('topApp', ['commonApp']);
step.ProjectManagement.Module.Top.app.service('topService', [step.ProjectManagement.Service.Top.TopService]);
