import * as BN from "bn.js";
/**  it('can add liqudity via router', async () => {
    await setupRouter();
    const deadline = '111111111111111111';
    await token1.tx.approve(router.address, 10000);
    await router.tx.addLiquidityNative(
      token1.address,
      10000,
      10000,
      10000,
      deployer.address,
      deadline,
      { value: 10000 },
    );
    expect((await factory.query.allPairsLength()).value).to.equal(2);
  }); */