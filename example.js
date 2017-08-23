var githubFeed = require('.')

githubFeed('ninabreznik', function (err, feed) {
  document.body.innerHTML = `<xmp>${JSON.stringify(feed, null, 2)}</xmp>`
  console.log(feed)
})
