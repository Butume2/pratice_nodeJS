// Expressモジュールをロード
var express = require('express');

// PostgreSQLモジュールをロード
var pg = require('pg');

var app = express();

//-------------------------------------------------------------------------
// GET http://localhost:8080/getMembers
app.get('/getMembers', (req, res) => {
  var con = "tcp://postgres:postgres@127.0.0.1:5432/project_manage_db";

  // postgreSQLと接続
  pg.connect(con, (err, client) => {
    // dbコネクションでエラーが発生した場合
    if (err) {
      console.log('connection.error');
      res.status(500).send('DB connection error');
      res.end();
    }

    // dbコネクションの接続が成功した場合
    else {
      var query = client.query('select * from members;');
      var rows = [];

      // クエリ結果が返却されるたびに実行
      query.on('row', function(row) {
        rows.push(row);
      });

      // クエリーが完了
      query.on('end', function(row,err) {
        console.log('query end');
        for (var i = 0; i < rows.length; i ++) {
          console.log(rows[i].id);
        }

        res.contentType('application/json');
        res.send(JSON.stringify(rows));
        res.end();
      });

      // クエリでエラーが発生した場合
      query.on('error', function(error) {
          console.log("ERROR!!" + error);
          res.status(500).send('getMembers error');
          res.end();
      });
    }
  });
});
//-------------------------------------------------------------------------


//-------------------------------------------------------------------------

// publicフォルダ配下を公開設定
app.use(express.static('public'));

// webサーバをポート80で待ち受け開始
var server = app.listen(8080, function(){
    console.log('Server is running!');
})
