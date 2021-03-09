const app = require("./src/app");
const mongoConnect = require("./src/mongoose");

(async () => {
  try {
    await mongoConnect();
    app(5000);
  } catch (error) {
    console.log(error);
    console.log(`error app cant running`);
  }
})();
