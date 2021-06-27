require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz enter brand spot toy note muscle collect hunt dry flock giggle'; 
let testAccounts = [
"0x855dacc80888dd53d8dc3bc23146b20f69cebcca79635730b1c083356a114505",
"0xee61baf3717be3824ca0a25e9cf6dd776d4787784948b8d56c35c50219a56cb2",
"0x4463e1379bd50dfd5c16b8af14ee59ea443865fcd115473d8c9d7a825c077874",
"0x3d8ee5cd9557c4ca4d647a38f79e53425b218e340eeb9aa0069e521b2e18c294",
"0x219216172e2b7f0cdbdd9e9944514e10f7e3e476295503871f1b11e2edf5c04f",
"0x5163aa98adfe53d178936f4102c503b24047279915f15cc03f7266cb23c7a927",
"0x39920b18ae3a32df76b996f72c53f0bc990269e50d43f86a9e7829d2a8371d8f",
"0xcb346af8d3478c3a6460c8af74514d5d35ee8319f7678b4fa0d486b840d8d16a",
"0xa6e2345dde47d41bf03fbd7c405cc7edb46e30e0de22357e84e071ea379fd23a",
"0x016c1f3b8c8566e84ca2a00120c6336a6d91e65bb28496d952274137bb5781ca"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


