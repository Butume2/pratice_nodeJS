// シーン
var scene = new THREE.Scene();

// レンダラ―
var renderer;

// カメラ
var camara;

// ライト
var light;

/**
 * レンダラ―初期化
 */
var initRenderer = () => {
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
}

/**
 * カメラ初期化処理
 */
 var initCamera = () => {
   // 投資投影カメラを作成
   camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );

   // カメラの中心座標(上方向)を設定
   // y方向を上に設定
   camera.up.set(0,1,0);

   // カメラ位置を設定
   camera.position.set(10, 10, 50);

   // カメラが移すポイント
   camera.lookAt({x:0, y:0, z:0 });
 }

/**
 * ライト初期化処理
 */
 var initLight = () => {
   // ライト
   var directionalLight = new THREE.DirectionalLight('#ffffff', 1);
   directionalLight.position.set(0, 10, 10);
   scene.add(directionalLight);
 }

/**
 * オブジェクト作成処理
 */
 var createObject = () => {
   // キューブ
   var geometry = new THREE.BoxGeometry(10,10,10);
   var material = new THREE.MeshPhongMaterial( { color: 'rgb(207, 175, 122)' } );
   var cube = new THREE.Mesh( geometry, material );
   cube.position.set(0, 0, 0);
   scene.add( cube );
 }

/**
 * レンダリング処理
 */
var render = () => {
  if (renderer !== null && renderer !== undefined) {
    requestAnimationFrame(render);
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
};



$(() => {

  initRenderer();

  initCamera();

  initLight();

  createObject();

  render();
});
