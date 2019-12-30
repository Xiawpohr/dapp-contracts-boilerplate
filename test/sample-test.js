// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
const env = require('@nomiclabs/buidler')
const { assert } = require('chai')

describe('Greeter contract', function() {
  let accounts

  before(async function() {
    accounts = await web3.eth.getAccounts()
  })

  describe('Deployment', function() {
    it('Should deploy with the right greeting', async function() {
      const Greeter = await env.ethers.getContract('Greeter')
      const greeter = await Greeter.deploy('Hello, world!')

      assert.equal(await greeter.greet(), 'Hello, world!')

      const greeter2 = await Greeter.deploy('Hola, mundo!')
      assert.equal(await greeter2.greet(), 'Hola, mundo!')
    })
  })
})
