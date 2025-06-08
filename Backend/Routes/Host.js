const express = require("express");
const hostRouter = express.Router();
const mongoose = require("mongoose");
const { Van } = require("../Models/Vans");

//! GET HOST VANS
hostRouter.get(`/`, async (req, res) => {
    const { hostId } = req.query
    const hostVansData = await Van.find({hostId});
    if (!hostVansData) {
        res.status(500).json({ success: false });
    }
    res.send(hostVansData);
});

module.exports = hostRouter