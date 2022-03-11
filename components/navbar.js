import React, { useState, useEffect } from 'react';
import { 
    connectWallet
    , getCurrentWalletConnected } from '../utils/interact';
import Link from 'next/link';
import Image from 'next/image';
import { ethers } from 'ethers';
import axios from 'axios';
import detectEthereumProvider from '@metamask/detect-provider';

const Navbar = ({ Component, pageProps }) => {
	//State Variables
	const [walletAddress, setWallet] = useState("");
	const [correctNetwork, setCorrectNetwork] = useState("");
	const [chain, setChain] = useState("");
    const [status, setStatus] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [url, setURL] = useState("");

	useEffect(async () => {
        const {address, status, chainId} = await getCurrentWalletConnected();
        setWallet(address)
        setStatus(status);
        setChain(chainId);
	}, []);
  
	const connectWalletPressed = async () => { //TODO: implement
		const walletResponse = await connectWallet();
		setChain(walletResponse.chainId);
        setStatus(walletResponse.status);
		setWallet(walletResponse.address);
	};
    
    const checkConnection = async () => {
        const {address, chainId} = await getCurrentWalletConnected();
        console.log(address, chainId);
    }

    return (
    <nav class="navbar navbar-expand-xl sticky-top">
        <div class="container-fluid">
            <Link href="/">
                <a class="navbar-brand" >
                    Logo
                </a>
            </Link>
        <button class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarXL">
            <span class="navbar-toggler-icon">Menu</span>
        </button>

        <div class="collapse navbar-collapse" id="navbarXL">
			<ul class="navbar-nav">
                <Link href="/about">
                    <a class="nav-item" id="aboutButton">About
                    </a>
                </Link>
                <Link href="/examplePage">
                    <a class="nav-item" id="examplePageButton">Example Page
                    </a>
                </Link>
                {/* <Link href="/..">
                    <a class="nav-item" id="">  
                    </a>
                </Link> */}
			</ul>
        </div>
            <div class="d-flex flex-row">
                <div>
                    <button class="btn bg-primary" id="connectButton" onClick={connectWalletPressed}><strong>Connect Button</strong></button>
                    <p>{'Connected as: 0x...' + walletAddress.slice(-4)}</p>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar