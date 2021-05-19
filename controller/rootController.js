import path from 'path';

export const rootController = (req, res) => {
  console.log('root', req.user);
  //-> static때문에 root 경로를 쓸 수가 없네!!!!
  res.send('root');
  //res.sendFile(path.resolve(__dirname, '/public/index.html'))//;
};
