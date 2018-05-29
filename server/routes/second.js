const express = require('express'),
      router = express.Router(),
      axios = require('axios');

router.get("/", (req, res)=>{
  res.json({one:"one", two:"two"});
})

module.exports = router;
