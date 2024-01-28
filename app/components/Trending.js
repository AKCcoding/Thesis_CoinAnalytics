import fire from "../assets/png/fire.png"
import btc from "../assets/png/btc.png"
import usdt from "../assets/png/usdt.png"
import eth from "../assets/png/eth.png"
import gainers from "../assets/png/gainers.png"
import greed from "../assets/png/greed.png"
import TrendingCard from "./TrendingCard"
import FearAndGreedCard from "./FearAndGreedCard"

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `font-bold text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {

    return <div className="text-white">
        <div className={styles.trendingWrapper}>
            <div className="flex justify-between">
                <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>
            </div>
            <br />
            <div className="flex ml-1 mt-1">
                <p>The global crypto market cap is $1.56T, a &nbsp; </p>
                <span> 4.53% </span>
                <p> &nbsp; decrease over the last day.</p>
            </div>
            <br />
            <div className={styles.flexCenter}>
                <TrendingCard title='Trending Coins (24h)' icon={fire} type="coins" />
                <TrendingCard title='Top NFTs (24h)' icon={gainers} type="nfts"/>
                <FearAndGreedCard title='Fear and Greed' icon={greed} />
            </div>
        </div>
    </div>
}

export default Trending