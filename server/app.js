const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 請在部署時以環境變數提供 API_KEY
const API_KEY = process.env.API_KEY || null;

app.use(express.static('../app'));

app.get('/api/config', (req, res) => {
  // 只回傳必要的非敏感設定；實務上不要回傳私密憑證
  res.json({
    apiKey: API_KEY ? '***PROTECTED***' : null
  });
});

app.listen(port, () => {
  console.log(`Demo server listening on http://localhost:${port}`);
});
