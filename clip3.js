var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/3991c3ae68464102b53fd96da2da93f8')

const account1 = '0xcc90a543F456E50C4872C2f12FA60f0E63C9788B'
const account2 = '0xCDc09A422a719995643Bb80E24b82F1157d5947B'

web3.eth.getBalance(account1).then(result => {
  console.log("Before 1 : " + result)
})

web3.eth.getBalance(account2).then(result => {
  console.log("Before 2 : " + result)
})

// web3.eth.sendTransaction({from: account1, to: account2, value: web3.utils.toWei('1','ether') })

// web3.eth.getBalance(account1).then(result => {
//   console.log("After 1 : " + result)
// })

// web3.eth.getBalance(account2).then(result => {
//   console.log("After 2 : " +result)
// })

// console.log(web3.eth.accounts.create())
// console.log("Private key 1 : "+process.env.PRIVATE_KEY_1)
// console.log("Private key 2 : "+process.env.PRIVATE_KEY_2)


const privatekey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privatekey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

// console.log(process.env.PRIVATE_KEY_1)

// web3.eth.getBalance(account1, (err,bal) => {
//   console.log('Account 1 balance:'+web3.utils.fromWei(bal,'ether'))
// })

// web3.eth.getBalance(account2, (err,bal) => {
//   console.log('Account 2 balance:'+web3.utils.fromWei(bal,'ether'))
// })

// web3.eth.getTransactionCount(account1, (err,txCount) => {

//   // build transaction
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     to: account2,
//     value: web3.utils.toHex(web3.utils.toWei('0.01','ether')),
//     gasLimit: web3.utils.toHex(21000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('1','gwei'))
//   }

//   console.log(txObject)

//   //Sign Transaction
//   const tx = new Tx(txObject)
//   tx.sign(privatekey1)


//   const serializedTransaction = tx.serialize()
//   const raw = '0x' + serializedTransaction.toString('hex')
//   console.log(raw)

//   //Broadcast Transaction
//   web3.eth.sendSignedTransaction(raw, (err,txHash) => {
//     console.log('txHash: ',txHash)
//   })

// })

// web3.eth.getBalance(account1).then(result => {
//   console.log("After 1 : " + result)
// })

// web3.eth.getBalance(account2).then(result => {
//   console.log("After 2 : " +result)
// })
