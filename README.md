# bloggr-cli-firebase

The EmberJS bloggr app implemented in the Ember-CLI environment using Firebase as the back end.

> This project is in progress.  At this time, if you install it, it will read some "fixture" data
> from a Firebase back end.  Attempting to do other CRUD operations will fail.  We're in the process
> of fixing these.

## Introduction

Thie project is for the [Ember-SC](http://www.meetup.com/Ember-SC/) group's
[Hackfest at the Beach](http://www.meetup.com/Ember-SC/events/177022872/).

The purpose of this hack-fest is to start with the [Bloggr](https://github.com/oldfartdeveloper/bloggr-client)
project implemented by [Tilde](http://www.tilde.io/) developer Tom Dale.  We have built the app following along
the [video](https://www.youtube.com/watch?feature=player_detailpage&v=1QHrlFlaXdI).

Furthermore the team has incorporated this ['completed' exercise](https://github.com/Ember-SC/bloggr-cli)
into [Ember-CLI](https://github.com/stefanpenner/ember-cli).
Consequently [this bloggr](https://github.com/Ember-SC/bloggr-cli-firebase) now uses the Ember **model** and **Firebase** to
set up a remote store.

## Installation

In a command line window, `cd` into your folder where you do your projects, then:

```bash
git clone git@github.com:Ember-SC/bloggr-cli-firebase.git
cd bloggr-cli-firebase
npm install -g ember-cli  # Tested using version 0.0.28
npm install
bower install
ember server
```

and then [browse away](http://localhost:4200)!

## Configuring your Own Firebase Account

This section describes how to set up your own Firebase account and how to hook this EmberJS app up to it.

1.  Follow [instructions](https://www.firebase.com/account/#/) on creating your own Firebase account.  Stay with the `Hacker` plan unless you want
    to spend money.
1.  Look for your app URL; will look something like `sizzling-fire-3441.firebaseio.com`.
1.  In this project, substitute your app URL into line 2 of `app/adapters/application.js`.
1.  Your backend database will be empty; configure it with "fixture" data as you desire.
1.  Run your local ember server: `ember server`.