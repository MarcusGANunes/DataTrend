import React from 'react';
import '../styles/nfts.modules.css'

export default function NFTs() {
  return (
    <div className='NFTs'>
      <div className="title">
        <h1>NFTs</h1>
      </div>
      <div className="texts">
        <p>NFT stands for Non-Fungible Token, so what it means is
          that NFTs are digital tokens for Non-Fungibles itens
          (that can really by physicall itens, it doesn't stands
          for just digital itens), and Non-Fungibles itens can't be replaced, for example an piece of art, or
          a limited edition card. On the other hand, Fundible itens are itens that
          can be replaced, like 10 dolar bill, that are totally
          replaceable by other 10 dolar bill.</p>
        <p>
          NFTs can represent ownership over digital or physical
          assets. The NFT is the token represented by a number
          (specically uint256) that is, in laymans term, an
          access key to the record of informations on the
          blockchain about the lifecycle of an item. These informations
          may contain digital files, who created the item, who
          linked to the blockchain and informations of transactions,
          like who bought and who has owned the item
          through out the history and the rest of the "standard"
          information of a block into a blockchain.</p>
        <p>
          As all the changes about Itens value and ownership
          are make publicly and as there are so
          many computers working on validating them,
          it makes really difficult to hack anything.
        </p>
        <p>In short, if you have a NFT, you have a token that ensures that
          you are, certainly, the owner of an item.</p>
      </div>
    </div>
  );
}