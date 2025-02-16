const express = require("express");
const cors = require("cors");
const blogModel = require('./model');
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
require('./connection');


app.post('/blog', async (req, res) => {
  try {
    const blogPost = new blogModel(req.body);
    await blogPost.save();
    res.status(201).send(blogPost);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.put('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await blogModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!blogPost) {
      return res.status(404).send({ error: 'Blog not found' });
    }

    res.status(200).send(blogPost);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.delete('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await blogModel.findByIdAndDelete(id);

    if (!blogPost) {
      return res.status(404).send({ error: 'Blog not found' });
    }

    res.status(200).send({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/add", async (req, res) => {
  try {
    const data = await blogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error fetching blog posts" });
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
