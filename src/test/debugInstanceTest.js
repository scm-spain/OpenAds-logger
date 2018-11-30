import {expect} from 'chai'
import sinon from 'sinon'
import {debugInstanceFactory} from "../openads-logger/debugInstance";

describe('debugInstance', () => {
    it('should proxy an object', () => {
        const givenObject = {
            testProperty: 'testProperty',
            testFunction: () => 'testFunction'
        }
        const logMock = {
            debug: () => null
        }
        const debugSpy = sinon.spy(logMock, 'debug')

        const debugGivenObject = debugInstanceFactory({log: logMock})({instance: givenObject})

        const testPropertyResult  = debugGivenObject.testProperty
        expect(testPropertyResult, 'the property result should not be altered').to.equal('testProperty')
        expect(debugSpy.callCount, 'accessing the property should log the access').to.equal(1)

        const testFunctionResult = debugGivenObject.testFunction()
        expect(testFunctionResult, 'the function result should not be altered').to.equal('testFunction')
        expect(debugSpy.callCount, 'accessing the function should log the access').to.equal(2)

    })
})
