const express = require("express");
const morgan = require("morgan");
const router = require("./router");
const app = express();

const PORT = "3000";

app.use(express.urlencoded());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
router(app);

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});
