import connection from '../db';

const editDbController = (req, res) => {
  const dbUsers = connection.query('select * from user', (error, rows) => {
    if (error) throw error;
    console.log(`Read User Data`);
    //console.log(rows[0].email);
    res.json({
      rows,
    });
  });
};

export default editDbController;
