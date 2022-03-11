export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        let chainId = await ethereum.request({ method: 'eth_chainId' })
        console.log('Connected to chain:' + chainId)

        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const obj = {
          status: "Write a message in the text field above",
          chainId: chainId,
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          status: "" + err.message,
          chainId: "",
          address: "",
        };
      }
    } else {
      return {
        address: "",
        chainId: "",
        status: (
          <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
        )
      };
    }
  };

  export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        let chainId = await ethereum.request({ method: 'eth_chainId' });
        if (addressArray.length > 0) {
          return {
            chainId: chainId,
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };