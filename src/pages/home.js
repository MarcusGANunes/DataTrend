import React from "react";
import "../styles/home.modules.css";

export default function Home() {
  return (
    <div className="background">
      <div className="content">
        <div className="texts">
          <div className="subtitle">
            <h1>What is Web 3?</h1>
          </div>
          <p>
            WEB3 To explain what is web3 we need to explain a little of the
            evolution of the web. It is often partitioned into three separate
            stages: Web 1.0, Web 2.0, and Web 3.0.
          </p>
          <div className="subtitle">
            <h2>WEB 1.0</h2>
          </div>
          <p>
            On Web 1.0 (1991 - 2004)all web pages were static, or in others
            words, all web pages were just data expository with out relations
            with possibles input data that you could give, for example your
            likes your login, your photo or anything. There wasn't armazention
            for the user data.
          </p>
          <div className="subtitle">
            <h2>WEB 2.0</h2>
          </div>
          <p>
            We can define the Web 2.0 as the interactive and social web. Anyone
            can be a content creator, anyone can post videos on youtube, can
            post arts on Pinterest, or photos on instagram and texts on almost
            any where. But web2 applications repeatedly experience data
            breaches. But in web2, you don't have any control over your data or
            how it is stored. In fact, companies often track and save user data
            without their users' consent. All of this data is then owned and
            controlled by the companies in charge of these platforms. Users who
            live in countries where they have to worry about the negative
            consequences of free speech are also at risk. Governments will often
            shut down servers or seize bank accounts if they believe a person is
            voicing an opinion that goes against their propaganda. With
            centralized servers, it is easy for governments to intervene,
            control, or shut down applications as they see fit. Web3 aims to
            solve many of these shortcomings by fundamentally rethinking how we
            architect and interact with applications from the ground up.
          </p>
          <div className="subtitle">
            <h2>WEB 3</h2>
          </div>
          <p>
            The main difference about the web3 is the decentralization Web3
            enhances the internet as we know it today with a few other added
            characteristics. Web3 is: Verifiable Trustless Self-governing
            Permissionless Distributed and robust Stateful Native built-in
            payments In web3, developers don't usually build and deploy
            applications that run on a single server or that store their data in
            a single database. Instead, web3 applications either run on
            blockchains, decentralized networks of many peer to peer nodes
            (servers), or a combination of the two (that forms a cryptoeconomic
            protocol). These apps are often referred to as dapps (decentralized
            apps), and you will see that term used often in the web3 space. When
            you hear about web3, you'll notice that cryptocurrency is often part
            of the conversation. This is because cryptocurrency plays a big role
            in many of these protocols. It provides a financial incentive
            (tokens) for anyone who wants to participate in creating, governing,
            contributing to, or improving one of the projects themselves.
            Consumers of the service usually pay to use the protocol, similarly
            to how they would pay a cloud provider like AWS today. Except in
            web3, the money goes directly to the network participants. In this,
            like in many forms of decentralization, you'll see that unnecessary
            and often inefficient intermediaries are cut out. Native payments
            The presence of tokens also introduce a native payment layer that is
            completely borderless and frictionless. These systems are overly
            complex and still do not enable true international interoperability
            between participants, as we can see with the volacity of the value
            of the crypto coins compared to the traditional money. Crypto
            wallets like MetaMask and Torus enable you to integrate easy,
            anonymous, and secure international payments and transactions into
            web3 applications.
          </p>
          <div className="subtitle">
            <h2>A New Way of Building Companies</h2>
          </div>
          <p>
            Tokens also brings about the idea of tokenization and the
            realization of a token economy. Take, for example, the current state
            of building a software company. Someone comes up with an idea, but
            in order to start building they need money in order to support
            themselves. To get the money, they take on venture capital and give
            away a percentage of the company. This investment immediately
            introduces mis-aligned incentives that will, in the long run, not
            align well with building out the best user experience. Also, if the
            company ever does become successful, it will take a very long time
            for anyone involved to realize any of the value, often leading to
            years of work without any real return on investment. Imagine,
            instead, that a new and exciting project is announced that solves a
            real problem. Anyone can participate in building it or investing in
            it from day one. The company announces the release of x number of
            tokens, and give 10% to the early builders, put 10% for sale to the
            public, and set the rest aside for future payment of contributors
            and funding of the project. Stakeholders can use their tokens to
            vote on changes to the future of the project, and the people who
            helped build the project can sell some of their holdings to make
            money after the tokens have been released. People who believe in the
            project can buy and hold ownership, and people who think the project
            is headed in the wrong direction can signal this by selling their
            stake. Because blockchain data is all completely public and open,
            purchasers have complete transparency over what is happening. This
            is in contrast to buying equity in private or centralized businesses
            where many things are often maintained in secrecy, all of it lead to
            DAOs (Decentralized Autonomous Organizations) that you can learn
            into the [DAO section](link) How Identity Works in Web3 In web3,
            Identity also works much differently than what we are used to today.
            Most of the time in web3 apps, identities will be tied to the wallet
            address of the user interacting with the application. Unlike web2
            authentication methods like OAuth or email + password (that almost
            always require users to hand over sensitive and personal
            information), wallet addresses are completely anonymous unless the
            user decides to tie their own identity to it publicly. Cons about
            WEB3: - Web3 "tweets" would be uncensorable because control is
            decentralized - Web3 payment apps require no personal data and can't
            prevent payments for ilegall types of work. - By now has small
            scalability – transactions are slower on web3 because they're
            decentralized. Changes to state, like a payment, need to be
            processed by a miner and propagated throughout the network. - Harder
            adoption – interacting with web3 applications can require extra
            steps, software, and education. - Small accessibility – the lack of
            integration in modern web browsers makes web3 less accessible to
            most users. - It's expensive to put code on the blockchain – most
            successful dapps put very small portions of their code on the
            blockchain But these is not impeditive and don't turn Web3 into an
            utopia. Radicle (a decentralized GitHub alternative) allows
            stakeholders to participate in the governance of their project.
            Gitcoin allows developers to get paid in cryptocurrency for jumping
            in and working on Open Source issues. Yearn allows stakeholders to
            participate in decision making and voting on proposals. Uniswap,
            SuperRare, The Graph, Audius, and countless other protocols and
            projects are rising by now a days. There is a "free lancer" tasks in
            which are paied with tokens: <a href="dework.xyz">dework.xyz</a> .
          </p>
        </div>
      </div>
    </div>
  );
}
