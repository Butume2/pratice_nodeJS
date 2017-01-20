'use strict';

/** 上空エリアマップのアプリケーションを示す名前空間 */
var step = step || {};
step.ProjectManagement = step.ProjectManagement || {};
step.ProjectManagement.Service = step.ProjectManagement.Service || {};
step.ProjectManagement.Service.Common = step.ProjectManagement.Service.Common || {};

/**
 * エラーポップアップを制御するためのサービスクラス
 *
 * Copyright (C) 2016 step
 */
step.ProjectManagement.Service.Common.ServerDataAccessService = function($http) {

    /**
     * 指定されたデータをポストパラメータに変換する.
     *  */
    var transform = function(data) {
        return $.param(data);
    }

    /**
     * 指定した情報を、指定したURLにポストする.
     *
     * @param {string} url ポスト先URL
     * @param {object} postData ポスト情報
     * @param {function} successFn ポスト成功時の処理
     * @param {function} errorFn ポスト失敗時の処理
     *  */
    this.post = function(url, postData, successFn, errorFn) {

        $http({
            method : 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            transformRequest : transform,
            url : url,
            data : postData
        }).success(successFn).error(errorFn);
    }

    /**
     * 指定したURLにゲットする.
     *
     * @param {string} url ポスト先URL
     * @param {function} successFn ポスト成功時の処理
     * @param {function} errorFn ポスト失敗時の処理
     *  */
    this.get = function(url, successFn, errorFn) {

        $http({
            method : 'GET',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            url : url,
        }).success(successFn).error(errorFn);
    }
};
