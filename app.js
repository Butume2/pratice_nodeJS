// Expressモジュールをロード
var express = require('express');

// PostgreSQLモジュールをロード
var pg = require('pg');

var app = express();

var con = "tcp://postgres:postgres@127.0.0.1:5432/project_manage_db";


//-------------------------------------------------------------------------
// GET http://localhost:8080/getMembers
app.get('/getMembers', (req, res) => {
  console.log('/gemMembers start');
  pg.connect(con, (err, client) => {
    // dbコネクションでエラーが発生した場合
    if (err) {
      console.log('connection.error');
      res.status(500).send('DB connection error').end();
    } else {
      var rows = [];
      var query = client.query('select * from members;');
      // クエリ結果が返却されるたびに実行
      query.on('row', (row) => {rows.push(row)});
      // クエリーが完了
      query.on('end', (row,err) => {res.contentType('application/json').send(JSON.stringify(rows)).end();});
      // クエリでエラーが発生した場合
      query.on('error', (error) => {res.status(500).send('fail to getMembers').end();});
    }
  });
});
//-------------------------------------------------------------------------
// GET http://localhost:8080/getProjects
app.get('/getProjects', (req, res) => {
  console.log('/getProjects start');
  pg.connect(con, (err, client) => {
    // dbコネクションでエラーが発生した場合
    if (err) {
      console.log('connection.error');
      res.status(500).send('DB connection error').end();
    } else {
      var rows = [];
      var query = client.query('select * from projects;');
      // クエリ結果が返却されるたびに実行
      query.on('row', (row) => {rows.push(row)});
      // クエリーが完了
      query.on('end', (row,err) => {res.contentType('application/json').send(JSON.stringify(rows)).end();});
      // クエリでエラーが発生した場合
      query.on('error', (error) => {res.status(500).send('fail to getMembers').end();});
    }
  });
});
//-------------------------------------------------------------------------
// POST http://localhost:8080/addProject
app.post('/addProject', (req, res) => {
  console.log('/getProjects start');
  pg.connect(con, (err, client) => {
    // dbコネクションでエラーが発生した場合
    if (err) {
      console.log('connection.error');
      res.status(500).send('DB connection error').end();
    } else {
      var rows = [];
      var query = client.query('select * from projects;');
      // クエリ結果が返却されるたびに実行
      query.on('row', (row) => {rows.push(row)});
      // クエリーが完了
      query.on('end', (row,err) => {res.contentType('application/json').send(JSON.stringify(rows)).end();});
      // クエリでエラーが発生した場合
      query.on('error', (error) => {res.status(500).send('fail to getMembers').end();});
    }
  });
});

// publicフォルダ配下を公開設定
app.use(express.static('public'));

// webサーバをポート80で待ち受け開始
var server = app.listen(8080, function(){
    console.log('Server is running!');
})
