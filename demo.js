const express = require("express");
const app = express();
const port = 3000;

app.get("/abc", async (req, res) => {
    await sleep(2000)
    return res.send({
      name: "abc"
  })
}
);

//https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  


app.listen(port, () =>
  console.log(
    `Example app listening at http://localhost:${port}`
  )
);
