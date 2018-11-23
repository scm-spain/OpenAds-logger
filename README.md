# OpenAds Logger

[![Build status](https://travis-ci.org/scm-spain/OpenAds-logger.svg?branch=master)](https://travis-ci.org/scm-spain/OpenAds-logger) [![codecov](https://codecov.io/gh/scm-spain/OpenAds-logger/branch/master/graph/badge.svg)](https://codecov.io/gh/scm-spain/OpenAds-logger)

OpenAds Logger is a Log utility for [OpenAds](https://github.com/scm-spain/OpenAds).

# Installation
OpenAds Logger is available as the ```@schibstedspain/openads-logger``` package on [npm](https://www.npmjs.com/)
To install the stable version:
```
npm install --save @schibstedspain/openads-logger
```

# Usage

## The DEBUG property:

Use the DEBUG property to know when OpenAds will run under DEBUG context (DEBUG will be _true_).
This may be used when developing a new Connector that supports enabling a log system (p.ex. AppNexus AST).


```ecmascript 6
import {DEBUG} from '@schibstedspain/openads-logger'

// example to initialize different containers when using dependency injection
const container = DEBUG ? new DebugContainer() : new DefaultContainer()

```

## The debugInstance function:

Use this function to proxy an instance so any access to its attributes or functions will be logged with a log debug call.
It may be used (p.ex.) to proxy any instance created in a dependency container under DEBUG mode.

```ecmascript 6
import {DEBUG, debugInstance} from '@schibstedspain/openads-logger'

// example to initialize instances that log automatically under DEBUG context in a connector's dependency container
const _getInstance = key => DEBUG ? debugInstance(getOrCreateInstance(key)) : getOrCreateInstance(key)

const someRepository = _getInstance('SomeRepository')
```

## The LOG singleton:

Use it if you need to log manually some stuff instead 

```ecmascript 6
import {LOG} from '@schibstedspain/openads-logger'

LOG.debug('I need to log a line manually')
```

# License
OpenAds is [MIT licensed](./LICENSE).