const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Van } = require("../Models/Vans");

//! GET ALL VANS
router.get(`/`, async (req, res) => {
  const vansData = await Van.find();
  if (!vansData) {
    res.status(500).json({ success: false });
  }
  res.send(vansData);
});

//! GET VAN WITH ID 
router.get(`/:id`, async (req, res) => {
  const id = req.params.id
  const vanData = await Van.findOne({id});
  if (!vanData) {
    res.status(500).json({ success: false });
  }
  res.send(vanData);
});

//! CREATE NEW VAN
router.post(`/`, (req, res) => {
  const van = new Van({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    type: req.body.type,
  });
  van
    .save()
    .then((createdVan) => {
      res.status(201).json(createdVan);
    })
    .catch((err) => {
      res.status(500);
    });
});

module.exports = router;
