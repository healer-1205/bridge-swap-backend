module.exports = (app) => {
  const kucoin = require("../controllers/kucoin.controller.js")

  var router = require("express").Router()

  // Retrieve all kucoin
  router.get("/getCurrencies", kucoin.getCurrencies)
  router.get("/getDepositAddress", kucoin.getDepositAddress)

  app.use("/api/kucoin", router)
}
