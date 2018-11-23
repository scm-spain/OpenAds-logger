import {LEVEL, Log} from './openads-logger/Log'
import {debugInstanceFactory} from './openads-logger/debugInstance'
import {isDebugContext} from './openads-logger/isDebugContext'

const DEBUG = isDebugContext({window})

const LOG = new Log({
  level: DEBUG ? LEVEL.debug : LEVEL.error,
  console
})

const debugInstance = debugInstanceFactory({log: LOG})

export {LOG, DEBUG, debugInstance}
