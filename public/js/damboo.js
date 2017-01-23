// シーン
var scene = new THREE.Scene();

// レンダラ―
var renderer;

// カメラ
var camara;

// 環境光
var ambientlight;

// 平行光
var directionalLight

/** レンダラ―初期化 */
var initRenderer = function() {
  var mapCanvas = $('canvas');
  var mapWidth = mapCanvas.width();
  var mapHeight = mapCanvas.height();
  mapCanvas.attr({
    width : mapWidth,
    height : mapHeight
  })
  renderer = new THREE.WebGLRenderer({
    alpha : true,
    antialias : true,
    canvas : mapCanvas[0]
  });
  renderer.shadowMapEnabled  = true;
}

/** カメラ初期化処理 */
 var initCamera = function() {
   // 投資投影カメラを作成
   camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 1000 );

   // 性投影カメラを作成
  //  camera = new THREE.OrthographicCamera( -300, 300, 300, -300, 0, 1000 );

   // カメラの中心座標(上方向)を設定
   // y方向を上に設定
   camera.up.set(0,1,0);

   // カメラ位置を設定
   camera.position.set(0, 100, 400);

   // カメラが移すポイント
   camera.lookAt({x:0, y:200, z:0 });
 }

/** ライト初期化処理 */
 var initLight = function() {
   // 並行光源ライト
   directionalLight = new THREE.DirectionalLight('#ffffff', 0.5);
   directionalLight.position.set(100, 400, 300);
   scene.add(directionalLight);

   // 影有効化
   directionalLight.castShadow = true;
   directionalLight.shadow.camera.left = -(window.innerWidth / 2);
   directionalLight.shadow.camera.right = window.innerWidth / 2;
   directionalLight.shadow.camera.top = -(window.innerHeight / 2);
   directionalLight.shadow.camera.bottom = window.innerHeight / 2;
   directionalLight.shadow.camera.near = 0;
   directionalLight.shadow.camera.far = 1100;

   // 環境光
   ambientLight = new THREE.AmbientLight(0xffffff,0.7);
   scene.add(ambientLight);

 }

/** ダンボー作成処理  */
 var createDamboo = function() {

   // 床を作成
   var ground = createGround();
   ground.position.set(0,-40,0);
   scene.add(ground);

   // 左足を作成
   var leftLeg = createLeg();
   leftLeg.position.set(20,0,0);
   scene.add(leftLeg);

   // 右足を作成
   var rightLeg = createLeg();
   rightLeg.position.set(-20,0,0);
   scene.add(rightLeg);

   // 体を作成
   var body = createBody();
   body.position.set(0,80,0);
   scene.add(body);

   // 頭を作成
   var head = createHead();
   head.position.set(0,180,0);
   scene.add(head);

   // 右腕を作成
   var rightArm = createArm();
   rightArm.position.set(-70,70,0);
   rightArm.rotation.set(0,0,-Math.PI/16);
   scene.add(rightArm);

   // 左腕を作成
   var leftArm = createArm();
   leftArm.position.set(70,70,0);
   leftArm.rotation.set(0,0,Math.PI/16);
   scene.add(leftArm);

   // 口を作成
   var mouse = createMouse();
   mouse.position.set(0,150,51);
   scene.add(mouse);

   // 右目を作成
   var rightEye = createEye();
   rightEye.position.set(-30,185,51);
   scene.add(rightEye);

   // 左目を作成
   var leftEye = createEye();
   leftEye.position.set(30,185,51);
   scene.add(leftEye);

 }

 /** ボックスメッシュ作成処理 */
 var createBoxObject = function(x,y,z, color) {
   var geometry = new THREE.BoxGeometry(x, y, z);
   var material = new THREE.MeshLambertMaterial({'color': color});
   var mesh = new THREE.Mesh( geometry, material );
   mesh.castShadow = true;
   mesh.receiveShadow = true;
   return mesh;
 }

/** 土台作成処理 */
var createGround = function() {
  return createBoxObject(300, 0, 300, 'rgb(203, 203, 203)');
}

/** 足メッシュ作成処理 */
var createLeg = function() {
  return createBoxObject(30,80,30, 'rgb(207, 175, 122)');
}

/** 胴体メッシュ作成処理 */
var createBody = function() {
  return createBoxObject(80,120,50, 'rgb(207, 175, 122)');
}

/** 頭メッシュ作成処理 */
var createHead = function() {
  return createBoxObject(160,100,100, 'rgb(207, 175, 122)');
}

/** 腕メッシュ作成処理 */
var createArm = function() {
  return createBoxObject(25,100,25, 'rgb(207, 175, 122)');
}

/** 口メッシュ作成処理 */
var createMouse = function() {
  //ジオメトリ（形状）の宣言と生成
  var geometry = new THREE.Geometry();

  //頂点座標データを追加
  geometry.vertices[0] = new THREE.Vector3(0,10,0);
  geometry.vertices[1] = new THREE.Vector3(-10,0,0);
  geometry.vertices[2] = new THREE.Vector3(10,0,0);

  //面指定用頂点インデックスを追加
  geometry.faces[0] = new THREE.Face3(0,1,2);

  //マテリアル（材質）の宣言と生成
  var material =  new THREE.MeshBasicMaterial({ color: 'rgb(60, 40, 2)' });
  return  new THREE.Mesh(geometry,material);
}

/** 目メッシュ作成処理 */
var createEye = function() {
  var material = new THREE.MeshBasicMaterial( { color: 'rgb(60, 40, 2)' } );
  var geometry = new THREE.CircleGeometry( 8, 500 );
  return new THREE.Mesh( geometry, material );
}


/** レンダリング開始処理 */
var render = function() {
  if (renderer !== null && renderer !== undefined) {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
};


// ファイルロード完了後実施される処理
$(function() {

  // レンダラ―初期化
  initRenderer();

  // カメラ初期化
  initCamera();

  // ライト初期化
  initLight();

  // ダンボー作成
  createDamboo();

  // レンダリング開始
  render();
});
