const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
exports.helloZaid = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.send(
        {   id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
            });
        });})
