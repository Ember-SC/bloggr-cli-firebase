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
