'use strict';

/** プロジェクトマネジメントを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Module = step.ProjectManagement.Module || {};
step.ProjectManagement.Module.Common = step.ProjectManagement.Module.Common || {};

/**
 * 共通処理格納用commonAppクラス
 */
step.ProjectManagement.Module.Common.app = angular.module('commonApp', []);
step.ProjectManagement.Module.Common.app.service('serverDataAccessService', ['$http', step.ProjectManagement.Service.Common.ServerDataAccessService]);
step.ProjectManagement.Module.Common.app.service('projectService', ['serverDataAccessService', step.ProjectManagement.Service.Common.ProjectService]);
