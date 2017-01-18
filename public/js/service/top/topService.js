'use strict';

/** プロジェクトマネジメントのアプリケーションを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Service = step.ProjectManagement.Service || {};
step.ProjectManagement.Service.Top = step.ProjectManagement.Service.Top || {};

/**
 * Top画面用サービスクラス
 */
step.ProjectManagement.Service.Top.TopService = function() {};

/**
 * 初期化処理
 */
step.ProjectManagement.Service.Top.TopService.prototype.initialize = function() {
  console.log('topService initialize');
}
