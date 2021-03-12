const challengeFunction = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1: when rookCell="B3" and destinationCell= "B6" should return true', () => {

        let result = challengeFunction("B3", "B6")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2: when rookCell="H2" and destinationCell= "F4" should return false', () => {
        let result = challengeFunction("H2", "F4")
        let expected = false

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3: when rookCell="C1" and destinationCell= "C8" should return true', () => {
        let result = challengeFunction("C1","C8")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test4: when rookCell="G8" and destinationCell= "G4" should return true', () => {
        let result = challengeFunction("G8","G4")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test5: when rookCell="D2" and destinationCell= "H2" should return true', () => {
        let result = challengeFunction("D2","H2")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test6: when rookCell="E3" and destinationCell= "F4" should return true', () => {
        let result = challengeFunction("E3","F4")
        let expected = false

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test7: when rookCell="A7" and destinationCell= "H7" should return true', () => {
        let result = challengeFunction("A7","H7")
        let expected = true

        assert.strictEqual(result,expected)
    })

})
