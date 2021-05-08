import connection from '../db';

const asyncController = (req, res) => {
  const inputID = req.body.id;
  const dbID = connection.query('select * from user', (error, rows, fields) => {
    if (error) throw error;
    if (inputID === rows[0].email) {
      console.log(`Your id is exist`);
      res.json({
        message: `${inputID} is exist in our DB`,
        id: rows[0].email,
      });
    } else {
      console.log(`Your id is not found`);
    }
  });
};

export default asyncController;
