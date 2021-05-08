import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  //port: 3306,  이건 생략 가능함 default port를 쓴다면
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect();

connection.query('select * from user', (error, rows, fields) => {
  if (error) throw error;
  console.log('💾 MySQL DB Connection is Succeed');
});
export default connection;
