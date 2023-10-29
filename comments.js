
// Create web server
var express = require('express');
var router = express.Router();

// Create database connection
var db = require('../db');

// Create API
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM comments', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

router.get('/:id', function(req, res, next) {
  db.query('SELECT * FROM comments WHERE id = ?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

router.post('/', function(req, res, next) {
  db.query('INSERT INTO comments (comment, user_id, post_id) VALUES (?, ?, ?)', [req.body.comment, req.body.user_id, req.body.post_id], function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

router.put('/:id', function(req, res, next) {
  db.query('UPDATE comments SET comment = ?, user_id = ?, post_id = ? WHERE id = ?', [req.body.comment, req.body.user_id, req.body.post_id, req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

router.delete('/:id', function(req, res, next) {
  db.query('DELETE FROM comments WHERE id = ?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

module.exports = router;