const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('NFTGame');
    const gameContract = await gameContractFactory.deploy(
        ["Naruto", "Saitama", "Goku"],       // Names
        ["https://i.imgur.com/jQ4PZTE.jpeg", // Images
            "https://i.imgur.com/NBEIFBz.png",
            "https://i.imgur.com/5gAuNtn.png"],
        [900, 600, 1800],                    // HP values
        [300, 500, 900],                       // Attack damage values
        "Omni Man", // Boss name
        "https://i.imgur.com/Y7Xlmux.jpeg", // Boss image
        10000, // Boss hp
        200
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
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
