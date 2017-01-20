'use strict';

/** プロジェクトマネジメントのアプリケーションを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Service = step.ProjectManagement.Service || {};
step.ProjectManagement.Service.Common = step.ProjectManagement.Service.Common || {};

/**
 * プロジェクト情報管理用サービスクラス
 */
step.ProjectManagement.Service.Common.ProjectService = function(serverDataAccessService) {

  var getProjectSucccess = function() {
    console.log('success');
  }

  var getProjectError = function() {
    console.log('error');
  }

  serverDataAccessService.get('./getProjects', getProjectSucccess, getProjectError);
};
