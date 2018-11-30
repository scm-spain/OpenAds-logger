import {expect} from 'chai'
import sinon from 'sinon'
import {LEVEL, Log} from "../openads-logger/Log";

describe('Log', () => {
    it('should not log messages with a lower log level', () => {
        const consoleMock = {
            debug: () => null
        }
        const debugSpy = sinon.spy(consoleMock, 'debug')

        const log = new Log({level: LEVEL.info, console: consoleMock})

        log.debug('whatever')
        expect(debugSpy.callCount, 'should not call to the console debug method').to.equal(0)
    })
    it('should log messages with the same log level', () => {
        const consoleMock = {
            info: () => null
        }
        const debugSpy = sinon.spy(consoleMock, 'info')

        const log = new Log({level: LEVEL.info, console: consoleMock})

        log.info('whatever')
        expect(debugSpy.callCount, 'should call to the console info method').to.equal(1)
    })
    it('should log messages with a higher log level', () => {
        const consoleMock = {
            info: () => null
        }
        const debugSpy = sinon.spy(consoleMock, 'info')

        const log = new Log({level: LEVEL.debug, console: consoleMock})

        log.info('whatever')
        expect(debugSpy.callCount, 'should call to the console info method').to.equal(1)
    })
    it('should log nothing with level set to off', () => {
        const consoleMock = {
            error: () => null
        }
        const debugSpy = sinon.spy(consoleMock, 'error')

        const log = new Log({level: LEVEL.off, console: consoleMock})

        log.error('whatever')
        expect(debugSpy.callCount, 'should not call to the console error method').to.equal(0)
    })
    it('should change the log level', () => {
        const consoleMock = {
            warn: () => null
        }
        const debugSpy = sinon.spy(consoleMock, 'warn')

        const log = new Log({level: LEVEL.error, console: consoleMock})

        log.warn('whatever not logged')
        expect(debugSpy.callCount, 'should not call to the console warn method if loglevel is error').to.equal(0)

        log.changeLevel({level: LEVEL.info})
        log.warn('whatever now is logged')
        expect(log.level, 'log level should be set to info').to.equal(LEVEL.info)
        expect(debugSpy.callCount, 'should call to the console warn method if loglevel is info').to.equal(1)
    })
})
