require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain modify hidden argue front two'; 
let testAccounts = [
"0xa02fce0ee2ac61f194fe9320442b3a47e1d59b3468809cda8467e1424da6bad3",
"0x59af1aa1bb3fe6bb067aebf1af8fa3ed266253992226d4fff1a0b10df04961d8",
"0x9b2a08356e54ac1729dc3929c696dbd433834169c42f3d9c2e2b6ed508441db6",
"0x8f8e8e89794915cb250ad09927671d072ca110fa94c16e9e6b52c9582dd08425",
"0xc3012d440cd369c53ce9e6c9b30759e6350c07a9a6bdb2028995a178ebace66b",
"0x2dc5dd3b8dbad47bced819bcfbedf09d494741a45d585e3fdac30003e0484abd",
"0x4ae78c411df88a2bfe1be8af4e1f3c38a9eddab28e6dbad2cc9657dc9ec52cbf",
"0x4da941d5826e94ac9401ce73488611ac10f602c2df11488ceaa955bb94b129a5",
"0x7ec0f51881d1b15d48cff4ad1cc1bd081f029c68550b5aee7905248f1833eeb6",
"0x618af846e78b40f1c945cbaa0eaa5ccf8e75bb96b23c6cb22b1a5de2621111e8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

