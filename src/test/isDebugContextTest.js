import {expect} from 'chai'
import {isDebugContext} from "../openads-logger/isDebugContext";

describe('isDebugContext', () => {
    it('should return false if no window is given', () => {
        const givenWindow = undefined
        const isDebug = isDebugContext({window: givenWindow})
        expect(isDebug).to.be.false
    })
    it('should return false if query string has no openads_debug key', () => {
        const givenWindow = {
            document: {
                location: {
                    search: 'whatever=1&wherever=2'
                }
            }
        }
        const isDebug = isDebugContext({window: givenWindow})
        expect(isDebug).to.be.false
    })
    it('should return true if query string has the openads_debug key', () => {
        const givenWindow = {
            document: {
                location: {
                    search: 'whatever=1&openads_debug&wherever=2'
                }
            }
        }
        const isDebug = isDebugContext({window: givenWindow})
        expect(isDebug).to.be.true
    })
})
