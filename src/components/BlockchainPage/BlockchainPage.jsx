import './BlockchainPage.css'
import Blockchain from './Blockchain'

import React, { useState } from 'react'
import { BlockchainClass } from '../../hash'

function BlockchainPage() {

    const [blockchains, setBlockchains] = useState([])

    return (
        <div className='BlockchainPage'>
            <div className="flavour-text">
                <h1>Blockchains</h1>
                <p>In short, <i>blockchains</i> are a collection of sequenced data which stores events that happened in a certain decentralized network.</p>
                <p>Each blockchain is made of blocks, that store elements of a transaction or event, like timestamp, data, index, and, of course, <i>hashes</i>, that work like the fingerprints of the block, and the hash of the <i>previous</i> block, insuring that the chain is correctly ordered.</p>
                <p>In fact, validators constantly work to enforce the correctness of the chains by matching hashes of the blocks and the previous hashes of the subsequent ones, and the calculation  required to a proper validation can be made through 2 main methods: <strong>Proof of Work</strong> and <strong>Proof of Stake</strong>.</p>
                <p>In the <strong>Proof of Work</strong> method, validators from across the internet battle to solve the encryption problem as fast as possible. The first one who correctly solves it is rewarded with a amount of tokens. This method is the oldest one and requires a lot of computacional power (hence, a lot of energy) and is very harmful to nature, albeit being the most popular one due to its age. It's used by Bitcoin, currently the most popular cryptocoin.</p>
                <p>The <strong>Proof of Stake</strong> method, the newest one, is quickly gaining support from the community, as it's more modern and less harmful to nature. In PoS, a group of validators are drawn among the network to try to solve the encryptions. As they are not with the most powerful hardware, they can easily error the validation, so the Network takes a <i>stake</i> from the validators as warranty for the validation in the form of a few coins. If they mistake in the process, they lose the coins staked, if not, they get them back plus a prefixed bonus, hence multiplying the tokens.</p>
                <p>So, lets take a look at how blockchains work by clicking buttons. The <strong>New Blockchain</strong> button generates a new Blockchain (represented by the gray boxes), already with it's "Genesis Block" created. Note that Genesis Block's Previous Hash is 0 (as it is preceded by no block). You can generate as many Blockchains as you want.</p>
                <p>Once a blockchain is created, you can add blocks to it by clicking the <strong>New Block</strong> button. Again, note that the second block has a completly different hash if compared to the first one, and the new block's previous hash is exactly equal to the previous one's hash. Congratulations, you created a Blockchain!</p>
            </div>
            <div
                className="btn"
                onClick={() => {
                    const atualBlockchains = [...blockchains]

                    let newBlockchain = new BlockchainClass()
                    atualBlockchains.push(newBlockchain.chain)

                    setBlockchains(atualBlockchains)
                }}
            >
                New Blockchain
            </div>
            {blockchains.map((bc, index) => {
                return (
                    <Blockchain
                        key={index}
                        blockchain={bc}
                    />
                )
            })
            }
        </div>
    )
}

export default BlockchainPage