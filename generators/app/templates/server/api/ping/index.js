module.exports = {
    getPing: function(req, res) {
      res.json({
        message: 'pong'
      })
    },

    getPong: function(req, res) {
      res.json({
        message: 'ping'
      })
    }
}