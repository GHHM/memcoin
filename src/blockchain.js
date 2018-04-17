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