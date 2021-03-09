class Controller {
  async checkData(req, res, next) {
    const allowedkeys = ["fullName", "age", "address"];
    const data = req.body;

    try {
      if (!data.length) {
        throw new Error("request data can't be empty");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new Controller();
