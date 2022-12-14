const axios = require("axios")
const kucoinConfig = require("../config/kucoin.config.js")
/** Require SDK */
const api = require("kucoin-node-api")

/** Init Configure */
api.init(kucoinConfig)

exports.getCurrencies = async (req, res) => {
  try {
    const r = await axios.get("https://titanex.io/api/coinInfo")
    return res.send(r.data)
  } catch (err) {
    console.log(err)
  }
}

exports.getDepositAddress = async (req, res) => {
  try {
    const r = await api.getDepositAddress(req.query)
    return res.send(r.data)
  } catch (err) {
    console.log(err)
  }
}
