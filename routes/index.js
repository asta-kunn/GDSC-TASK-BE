const express = require('express');
const router = express.Router();

// import todosRouter.js
const todosRouter = require('./todosRouter');
router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.use('/todos', todosRouter);

module.exports = router
