const mysql = require('mysql');

// TODO : 데이터베이스 연결 관련 정보들은 환경 변수로 대체 필요
exports.pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',  // 도커 컴포즈에서 정의한 db 서비스 이름
    user: 'root',
    password: 'yjdbpassword',
    database: 'yjApp',
    port: 3306,
});

exports.createTables = () => {
    db.pool.query(`CREATE TABLE lists (
        id INTEGER AUTO_INCREMENT,
        value TEXT, 
        PRIMARY KEY (id)
    )`, (err, results, fileds) => {
        console.log('results', results)
    });
};