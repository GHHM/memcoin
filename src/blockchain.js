const CryptoJS = require("crypto-js");

class Block{
    constructor(index, hash, previousHash, timestamp, data){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }
}

//Genesis block
const genesisblock = new Block(
    0,
    'F131BCE850EF65CA19937C5EF1C757184335D9C7057142EBC3BBB0966232B3A5',
    null,
    1523940838988,
    "This is the genesis!"
);

let blockchain = [genesisblock];

console.log(blockchain);

const getLastBlock = () => blockchain[blockchain.length-1];
const getTimeStamp = () => new Date().getTime()/1000;
const createHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index+previousHash+timestamp+data).toString();

const createNewBlock = data => {
    const previousBlock = getLastBlock();
    const newBlockIndex = previousBlock.index+1;
    const newTimestamp = getTimeStamp();
    const newHash = createHash(newBlockIndex,previousBlock.hash, newTimestamp,data);
    const newBlock = new Block(
        newBlockIndex,
        newHash,
        previousBlock.hash,
        newTimestamp,
        data
    );

    return newBlock;
}