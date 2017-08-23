# noauth-github-activityfeed

> retrieves a Github activity feed -- using Github API without authentication!

## background

This module is written to be used in the browser using  [browserify](https://github.com/substack/node-browserify). It uses [Github API](https://api.github.com/users/ninabreznik/events) without authentication.

## usage

```js
var githubFeed = require('noauth-github-activityfeed')

githubFeed('ninabreznik', function (err, feed) {
  console.log(feed)
})
```

This will output an array of objects:

```js
[
  {
    "type": "PushEvent",
    "repo": "https://api.github.com/repos/ninabreznik/noauth-github-activityfeed",
    "details": {
      "push_id": 1940532575,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "289c00d1abe5d9b52b308e2ae164056738abcc86",
      "before": "029f76a7140d0b96b8c64822a9e23885309e1d0f",
      "commits": [
        {
          "sha": "289c00d1abe5d9b52b308e2ae164056738abcc86",
          "author": {
            "email": "ninabreznik@gmail.com",
            "name": "ninabreznik"
          },
          "message": "Add github activityfeed using Github API",
          "distinct": true,
          "url": "https://api.github.com/repos/ninabreznik/noauth-github-activityfeed/commits/289c00d1abe5d9b52b308e2ae164056738abcc86"
        }
      ]
    },
    "time": "2017-08-23T22:48:28Z"
  },
  {
    "type": "CreateEvent",
    "repo": "https://api.github.com/repos/ninabreznik/noauth-github-activityfeed",
    "details": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "retrieves a Github activity feed -- using Github API without authentication! ",
      "pusher_type": "user"
    },
    "time": "2017-08-23T22:09:53Z"
  },
  {
    "type": "IssuesEvent",
    "repo": "https://api.github.com/repos/ethereum/browser-solidity",
    "details": {
      "action": "opened",
      "issue": {
        "url": "https://api.github.com/repos/ethereum/browser-solidity/issues/706",
        "repository_url": "https://api.github.com/repos/ethereum/browser-solidity",
        "labels_url": "https://api.github.com/repos/ethereum/browser-solidity/issues/706/labels{/name}",
        "comments_url": "https://api.github.com/repos/ethereum/browser-solidity/issues/706/comments",
        "events_url": "https://api.github.com/repos/ethereum/browser-solidity/issues/706/events",
        "html_url": "https://github.com/ethereum/browser-solidity/issues/706",
        "id": 251386221,
        "number": 706,
        "title": "Update colors/UI elements in Remix + remove style-guide from Browser-solidity",
        "user": {
          "login": "ninabreznik",
          "id": 1076427,
          "avatar_url": "https://avatars1.githubusercontent.com/u/1076427?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ninabreznik",
          "html_url": "https://github.com/ninabreznik",
          "followers_url": "https://api.github.com/users/ninabreznik/followers",
          "following_url": "https://api.github.com/users/ninabreznik/following{/other_user}",
          "gists_url": "https://api.github.com/users/ninabreznik/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ninabreznik/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ninabreznik/subscriptions",
          "organizations_url": "https://api.github.com/users/ninabreznik/orgs",
          "repos_url": "https://api.github.com/users/ninabreznik/repos",
          "events_url": "https://api.github.com/users/ninabreznik/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ninabreznik/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2017-08-19T00:16:07Z",
        "updated_at": "2017-08-19T00:16:07Z",
        "closed_at": null,
        "body": ""
      }
    },
    "time": "2017-08-19T00:16:07Z"
  }
  ...
```

## api

```js
var githubFeed = require('noauth-github-activityfeed')
```
## example

Clone the repository and run `npm start` to see the example.js or [see the demo page](https://ninabreznik.github.io/noauth-github-activityfeed/)

### noauth-github-activityfeed({ username }, cb(err, tweets))

Specify a `username` of the Github user whose activity feed (events) you want to see. The callback `cb` will contain an optional error as its first parameter, and an array with the user's latest
activity as its second parameter.

## installation

```sh
$ npm i noauth-github-activityfeed
```

## ever-shifting ground

As Github API changes, things will break. If you notice that `noauth-github-activityfeed` isn't working, please [file an issue](https://github.com/ninabreznik/noauth-github-activityfeed/issues). Better yet, file a fixing [pull request](https://github.com/ninabreznik/noauth-github-activityfeed).

## license

MIT
