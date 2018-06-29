
const MetaCoin = artifacts.require("./MetaCoin.sol");

contract('MetaCoin', (accounts) => {
    let coin;
    beforeEach(async () => {
        coin = await MetaCoin.new()
    });
    it("should call a function that depends on a linked library", async () => {
        const metaCoinBalance = (await coin.getBalance.call(accounts[0])).toNumber();
        const metaCoinEthBalance = (await coin.getBalanceInEth.call(accounts[0])).toNumber();
        assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
    });
});