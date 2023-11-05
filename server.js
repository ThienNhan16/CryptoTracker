const express = require('express');
const app = express();

const port = 5000; // Thay đổi cổng thành 5000 hoặc bất kỳ cổng khác

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});