# Electron App

**A Basic Electron App for Tinkering Purposes**

## Overview

This is just a basic [Electron](https://electron.atom.io/) app for tinkering purposes.

This project was started as a result of following an earlier version of the [Quick Start tutorial](https://electron.atom.io/docs/tutorial/quick-start/) in the [Electron Documentation](https://electron.atom.io/docs/). It has since been updated to maintain general parity of technique with the Electron 1.0 update to the tutorial, but the project's code and content do of course differ from those in the tutorial.

## Setup

This project's **package.json** file now specifies **[electron-prebuilt](https://www.npmjs.com/package/electron-prebuilt)** as a dev dependency. This may or may not be the best way to go about things.

For now, **electron-prebuilt** is this project's _only_ dependency, so if you have it installed globally, you can probably just skip local installation. If you _do_ want to install it locally, you can do so via **npm** like so:

```bash
npm install
```

## Running

As you might expect, you can run the project like so:

```bash
npm start
```

That really just does this, though:

```bash
electron .
```

## Room for Improvement

Of course there is some room for improvement! At the very least I will probably add some scripts and information for the following:
* configuration
* building
* validation
* testing

I would also like to get CSSLint to shut up about Internet Explorer 6 and 7 because it is the second half of 2016 now and people should have stopped using such old versions of Internet Explorer several years ago, but I haven't yet had any success in convincing CSSLint to do or not do anything. Supposedly, CSSLint supports [options](https://github.com/CSSLint/csslint/wiki/rules) via a **.csslintrc** file, but I am just learning about CSSLint's options and how its configuration file may or [may not](https://github.com/AtomLinter/linter-csslint/issues/73) be used.


## Who is making this?

This is being made by [Brian Sexton](https://briansexton.com/) of [Carroket, Inc.](https://carroket.com/)