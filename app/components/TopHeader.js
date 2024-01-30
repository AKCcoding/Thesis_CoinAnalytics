const TopHeader =() => {

  return (
    <div id="header" className="border-bottom py-3 px-5 ml-20">
      <span className="d-inline-block mr-3">
        <b>Coins: </b>
        <span className="text-info">coins</span>
      </span>
      <span className="d-inline-block mr-3">
        <b>Exchanges: </b>
        <span className="text-info">exchanges</span>
      </span>
      <span className="d-inline-block mr-3">
        <b>Market Cap: </b>
        <span className="text-info">
          cap
        </span>
        <span>
          market cap
        </span>
      </span>
      <span className="d-inline-block mr-3">
        <b>24h Vol: </b>
        <span className="text-info">
          vol
        </span>
      </span>
      <span className="d-inline-block mr-3">
        <b>Dominance: </b>
        <span>
          BTC btcDominance% ETH ethDominance%
        </span>
      </span>
      <span className="d-inline-block mr-3">
        <b className="mr-1">
          <i className="fas fa-gas-pump d-inline-block mr-1" />
          ETH Gas:
        </b>
        <span> gwei</span>
      </span>
    </div>
  )
}

export default TopHeader