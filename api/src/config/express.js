const express = require("express");
const { cors } = require("../middlewares/cors.js");

module.exports = (app) => {
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(cors);
};
