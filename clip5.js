var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3(
  'https://ropsten.infura.io/v3/3991c3ae68464102b53fd96da2da93f8'
)

const account1 = '0xcc90a543F456E50C4872C2f12FA60f0E63C9788B'
const account2 = '0xCDc09A422a719995643Bb80E24b82F1157d5947B'

const privatekey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privatekey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

const contractAddress = '0x5f5Fd4764Da8Ae81d133B8A4e5B20981d6A0376e'

const contractABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "standard",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }, { name: "", type: "address" }],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "_initialSupply", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_owner", type: "address" },
      { indexed: true, name: "_spender", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Approval",
    type: "event"
  }
];

// var contract = web3.eth.Contract(contractABI,contractAddress)
// const data = contract.methods.transfer(account2, 10).encodeABI();

// contract.methods.balanceOf(account2).call().then(result => {
//   console.log(result)
// })



// web3.eth.getTransactionCount(account1, (err,txCount) => {


//   // build transaction
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(800000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('0.01','gwei')),
//     to: account2,
//     data: data
//   }

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
