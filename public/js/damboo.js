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
  renderer.shadowMap.enabled = true;
}

/**
 * カメラ初期化処理
 */
 var initCamera = () => {
   // 投資投影カメラを作成
  //  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );

   // 性投影カメラを作成
   camera = new THREE.OrthographicCamera( -300, 300, 300, -300, 0, 1000 );

   // カメラの中心座標(上方向)を設定
   // y方向を上に設定
   camera.up.set(0,1,0);

   // カメラ位置を設定
   camera.position.set(50, 100, 300);

   // カメラが移すポイント
   camera.lookAt({x:0, y:80, z:0 });
 }

/**
 * ライト初期化処理
 */
 var initLight = () => {
   // 並行光源ライト
   var directionalLight = new THREE.DirectionalLight('#ffffff', 0.5);
   directionalLight.position.set(0, 10, 10);

   // 影有効化
   directionalLight.castShadow = true;
   scene.add(directionalLight);

   // 環境光
   ambientLight = new THREE.AmbientLight(0xffffff,0.7);
   scene.add(ambientLight);

 }

/**
 * オブジェクト作成処理
 */
 var createObject = () => {

   // 床を作成
   var ground = createGroundObject();
   ground.position.set(0,-40,0);
   scene.add(ground);

   // 左足を作成
   var leftLeg = createLegObject();
   leftLeg.position.set(20,0,0);
   scene.add(leftLeg);

   var rightLeg = createLegObject();
   rightLeg.position.set(-20,0,0);
   scene.add(rightLeg);

   var body = createBodyObject();
   body.position.set(0,80,0);
   scene.add(body);

   var head = createHead();
   head.position.set(0,180,0);
   scene.add(head);
 }

var createGroundObject = () => {
  var geometry = new THREE.BoxGeometry(300, 0, 300);
  var material = new THREE.MeshPhongMaterial({color: 'rgb(203, 203, 203)'});
  var ground = new THREE.Mesh( geometry, material );
  ground.castShadow = true;
  ground.receiveShadow = true;
  return ground;
}

var createLegObject = () => {
  var geometry = new THREE.BoxGeometry(30,80,30);
  var material = new THREE.MeshPhongMaterial( { color: 'rgb(207, 175, 122)' } );
  var leg = new THREE.Mesh( geometry, material );
  leg.castShadow = true;
  leg.receiveShadow = true;
  return leg;
}

var createBodyObject = () => {
  var geometry = new THREE.BoxGeometry(80,120,50);
  var material = new THREE.MeshPhongMaterial( { color: 'rgb(207, 175, 122)' } );
  var body = new THREE.Mesh( geometry, material );
  body.castShadow = true;
  body.receiveShadow = true;
  return body;
}

var createHead = ()=> {
  var geometry = new THREE.BoxGeometry(120,80,80);
  var material = new THREE.MeshPhongMaterial( { color: 'rgb(207, 175, 122)' } );
  var head = new THREE.Mesh( geometry, material );
  head.castShadow = true;
  head.receiveShadow = true;
  return head;
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
