// ---------- Dependencies ----------

const express = require("express");
const Message = require("../models/message");

// ---------- Create Message Router ----------

const router = express.Router();

// ---------- Middleware ----------


// ---------- Event Router ----------

//Index Route
router.get("/", async (req, res) => {
  try {
    const data = await Message.find({})
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
});

//Show Route
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Message.findOne({ _id: id });
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
});

//Create Route
router.post('/', async (req, res) => {

  const data = new Message({
    Content: req.body.content,
    Order: req.body.order
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// ---------- Export Router ----------

module.exports = router;

///////////////////////////////////////