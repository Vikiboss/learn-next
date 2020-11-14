export default (req, res) => {
  // const email = req.body.email;
  // Then save email to your database, etc...
  res.status(200).json({ memo: "努力上进且优秀" });
};
