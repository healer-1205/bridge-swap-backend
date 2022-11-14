const kucoinConfig = require("../config/kucoin.config.js")
/** Require SDK */
const api = require("kucoin-node-api")

/** Init Configure */
api.init(kucoinConfig)

exports.getCurrencies = async (req, res) => {
  try {
    const r = await api.getCurrencies()
    return res.send(r.data)
  } catch (err) {
    console.log(err)
  }
}
