module.exports = function addusers(req, res, next) {
  const allowedkeys = ["fullName", "age", "id"];
  const data = Object.keys(req.body);

  try {
    if (!data.length) {
      throw new Error("request data can't be empty");
    }
    if (data.length !== 3) {
      throw new Error("data invalid format");
    }

    for (let i = 0; i < data.length; i++) {
      if (!allowedkeys.includes(data[i])) {
        throw new Error(`data ${data[i]} invalid format`);
      }
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
