var Web3 = require('web3')

var url = 'https://mainnet.infura.io/v3/3991c3ae68464102b53fd96da2da93f8'

var web3 = new Web3(url)

// console.log(web3)

var address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

web3.eth.getBalance(address , (err, bal) => { balance = bal }).then ( () => {
  console.log(balance)
  web3.utils.fromWei(balance , 'ether')
  console.log(balance)
  web3.utils.fromWei(balance , 'gwei')
  console.log(balance)
  web3.utils.fromWei(balance , 'Gwei')
  console.log(balance)
})

var account = web3.eth.accounts.create()
console.log(account)

var localAddress = 'HTTP://127.0.0.1:7545'
var web3 = new Web3(localAddress)

var balance = web3.eth.getBalance('0xCCc0a2d34ccc2351b693bf00F884BF1687619810' , (err, wei) => {
  console.log(web3.utils.fromWei(wei, 'ether'))
}
)
