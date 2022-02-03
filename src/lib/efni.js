const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const gogn = "./data/1.txt";

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function list(req, res) {
  const title = "Greinasafnið";

  return res.render("efi", { title });
}

router.get("/", catchErrors(list));

module.exports = router;
