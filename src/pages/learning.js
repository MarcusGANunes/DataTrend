import React from "react";
import styles from "../styles/learning.modules.css";

export default function Learning() {
  return (
    <div className="container-learning">
      <div className="leftContent">
        <div className="texts">
          <div>
            <p>
              So, let's start. First of all lets talk about Solidity. Briefly,
              Solidity is an object-oriented programming language for writing
              smart contracts on various blockchain platforms, most notably,
              Ethereum. We are going to use the Remix IDE that helps us to write
              Solidity contracts straight from the browser. If you want to get
              into the site just click on the link: https://remix.ethereum.org/
              First of all, select the SOLIDITY enviroment:
            </p>
          </div>
          <div className={styles.image_1}>
            <img src="1.png" alt="" />
          </div>
          <div>
            <br />
            <p>
              Now, on the FILE EXPLORER icon stays our Workspace with documents
              and the 2 mains buttons here is the file and folder creators:
            </p>
          </div>
          <div className={styles.image_3}>
            <img src="3.png" alt="" />
          </div>
          <div>
            <br />
            <p>
              Over the Solity compiler button. We can configure the compiler.
              And for who don't know what a compilor is, it is what translate
              the computer language that we are writing to the machine language.
              So in this section we can select our compiler, or at least see
              what compiler our code is been treated, the language and in which
              Ethereum Virtual Machine (EVM) It is been running (to more about
              EVM access https://ethereum.org/en/developers/docs/evm/). We can
              leave the way it is for now. Now getting back to the section lets
              create a new file
            </p>
          </div>
          <div className={styles.image_5}>
            <img src="5.png" alt="" />
          </div>
          <div>
            <br />
            <p>
              and state into the first line which compiler version will be use
              for the current Solidity file. To do it we start by stating
              literally the compiler or by saying something about it:
            </p>
          </div>
          <div>
            <ul>
              <li>
                <p>
                  To set an specific version: pragma solidity 0.8.10;
                </p>
              </li>
              <li>
                <p>
                  To set a range: pragma solidity {">=0.4.0 < 0.8.0"};
                </p>
              </li>
              <li>
                <p>
                  To work with 0.a.(anything): pragma solidity ^0.4.0;
                </p>
              </li>
              <li>
                <p>
                  In this tutorial we are going to work with 0.8.* versions:
                  pragma solidity ^0.8.0;
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p>
              Now lets do our first contract. It is going to return to us a
              counter that can storage a number, increase and decrease this
              number. so let’s just declare our Counter:
            </p>
          </div>
          <div>
            <img src="a.png" alt="" />
          </div>
          <div>
            <p>
              And now declare our first variable. To declare a variable in
              Solidity we need first say what's going to be the data type: a
              integer? a string (texts variables)? an address (the hash)? or
              maybe a boolean value (a true or false variable)? By now lets
              concentrate in unsigned integer, meaning non negative integers
              (uint) variable and declare the count:
            </p>
          </div>
          <div>
            <img src="b.png" alt="" />
          </div>
          <div>
            <p>
              Now lets declare the function increment. So to increment 1 value
              to the "count" variable "count" is goint to receive "count + 1".
              So lets declare the increment function?
            </p>
          </div>
          <div>
            <img src="c.png" alt="" />
          </div>
          <div>
            <p>
              So here we can notice that the "equal" signal don't means equal,
              but means "receive", so we can read "count = count + 1;" as "count
              receive count plus one". Now with this function lets create the
              event "incremen". This event is goint to increment a number, in
              specificaly a "uint value":
            </p>
          </div>
          <div>
            <img src="d.png" alt="" />
          </div>
          <div>
            <p>
              Thus, the function increment needs to emit the Increment of the
              count, and our code gets like this:
            </p>
          </div>
          <div>
            <img src="e.png" alt="" />
          </div>
          <div>
            <p>Accordingly we can do the same to a decrease function: </p>
          </div>
          <div>
            <img src="f.png" alt="" />
          </div>
          <div>
            <p>
              By now we didn't say if this functions is going to be visible
              outside the contrat. So that we can call this functions outside
              the contrat we are going to specify that they are public:
            </p>
          </div>
          <div>
            <img src="g.png" alt="" />
          </div>
          <div>
            <p>
              We need something to set the initial value to the "count" value
              right? And more than that, we need to see the "count" out side the
              the contract too. So, by last lets makes it public and set an
              initial value:
            </p>
          </div>
          <div>
            <img src="h.png" alt="" />
          </div>
          <div>
            <p>
              And if you make everything right you are going to get this code:
            </p>
          </div>
          <div>
            <img src="i.png" alt="" />
          </div>
          <div>
            <p>
              Goes to the Solidity Compiler Section, makes sure that the
              compiler is in line with what we stated in the first line and
              click on compile and to deploy it just go to the Deploy & Run
              Transaction Section and click on Deploy:
            </p>
          </div>
          <div className={styles.image_8}>
            <img src="8.png" alt="" />
          </div>
          <br />
          <div className={styles.image_9}>
            <img src="9.png" alt="" />
          </div>
          <br />
          <div>
            <p>
              And click on the arrow symbol to see the Deployed Contract. You
              should get something like this:
            </p>
          </div>

          <div className={styles.image_10}>
            <img src="10.png" alt="" />
          </div>
        </div>
      </div>
      <div className="rightContent">
        <iframe width="100%" height="650px" src="https://remix.ethereum.org" />
      </div>
    </div>
  );
}
