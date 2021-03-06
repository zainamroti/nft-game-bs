const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('NFTGame');
    const gameContract = await gameContractFactory.deploy(
        ["Naruto", "Saitama", "Goku"],       // Names
        ["https://i.imgur.com/jQ4PZTE.jpeg", // Images
            "https://i.imgur.com/NBEIFBz.png",
            "https://i.imgur.com/5gAuNtn.png"],
        [400, 300, 500],                    // HP values
        [300, 500, 2500],
        "Omni Man", // Boss name
        "https://i.imgur.com/Y7Xlmux.jpeg", // Boss image
        1000, // Boss hp
        150 // Bo                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();

    // Get the value of the NFT's URI.
    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);


    txn = await gameContract.checkIfUserHasNFT();
    // await txn.wait();

    console.log(`Does user have NFT>> ${txn.name}`)

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
