const express = require("express");
const router = express.Router();
const { dbDev } = require("../config/dbConnection");

const db = dbDev;

// GET ALL
router.get("/db/create", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    judul VARCHAR(100) NOT NULL,
    deskripsi VARCHAR(100) NOT NULL,
    penulis VARCHAR(100) NOT NULL,
    created_at VARCHAR(100) NOT NULL,
    updated_at VARCHAR(100) NOT NULL
  );`;

  db.run(sql, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful creation of the 'todos' table");
    res.send("Successful creation of the 'todos' table");
  });
});

router.get("", (req, res) => {
  const sql = `SELECT * FROM todos`;
  db.all(sql, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(row);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM todos WHERE (id = ?)`;
  db.get(sql, id, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(row);
  });
});

router.post("", (req, res) => {
  const sql = `INSERT INTO todos (judul, deskripsi, penulis, created_at, updated_at) VALUES (?,?,?,?,?)`;

  const value = {
    judul: "Todo 5",
    deskripsi: "Ini adalah Todo 5",
    penulis: "Lutfi Ikbal Majid",
    created_at: new Date(),
    updated_at: new Date(),
  };

  db.run(sql, Object.values(value), (err, row) => {
    if (err) {
      return res.send(err);
    }
    res.send("berhasil ditambahkan");
  });
});

module.exports = router;
