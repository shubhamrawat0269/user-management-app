const testApi = (req, res) => {
  res.json({ message: "API is working", success: true });
};

module.exports = { testApi };
