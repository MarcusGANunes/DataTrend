const sha256 = require('crypto-js/sha256')

export class BlockClass {
    constructor(index, previousHash = '') {
        let currentTime = new Date()
        this.timestamp = `${currentTime.getDate()}/${currentTime.getMonth()+1}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}.${currentTime.getMilliseconds()}${currentTime.getHours() < 12 ? ' AM' : ' PM'}`
            // this.timestamp = currentTime.getDate() + '/' + (currentTime.getMonth() + 1) + '/' + currentTime.getFullYear()
            // + ' ' + currentTime.getHours + ':' + cu
        this.index = index
        this.previousHash = previousHash
        this.hash = this.calculateHash();
    }

    calculateHash() {
        console.log(this.timestamp);
        return sha256(this.index + this.previousHash + JSON.stringify(this.timestamp)).toString();
    }
}

export class BlockchainClass {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock() {
        return new BlockClass(0, '0')
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock)
    }
}