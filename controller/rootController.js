import path from 'path';

export const rootController = (req, res) => {
  res.sendFile(path.resolve(__dirname, '/public/index.html'));
};
