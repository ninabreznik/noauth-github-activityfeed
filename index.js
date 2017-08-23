var minixhr = require('minixhr')

module.exports = function (username, cb) {
  var res = []
  var url = 'https://api.github.com/users/' + username + '/events'

  minixhr(url, response)

  function response (data) {
    data = JSON.parse(data)
    data.forEach (function (item) {
      res.push({
        type: item.type,
        repo: item.repo.url,
        details: item.payload,
        time: item.created_at
      })
    })
    cb(null, res)
  }

}
