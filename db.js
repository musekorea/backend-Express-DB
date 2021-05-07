import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: 'localhost',
  //port: 3306,  이건 생략 가능함 default port를 쓴다면
  user: 'root',
  password: 'blueb612', //아하... dot env를 이런데 쓰는 거구만
  database: 'users', // 내가 쓸 db 이름
});

connection.connect();

connection.query('select * from user', (error, rows, fields) => {
  if (error) throw error;
  console.log('💾 MySQL DB Connection is Succeed');
  //console.log('💾 DB Connection is Succeed//', rows[0].email);
  //요건 단지 접속에 성공했을때 테스트로 출력하는 용도임
});
export default connection;
