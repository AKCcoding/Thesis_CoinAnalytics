import Rate from "./cmc-table/rate"
import fire from "../assets/png/fire.png"
import btc from "../assets/png/btc.png"
import usdt from "../assets/png/usdt.png"
import eth from "../assets/png/eth.png"
import gainers from "../assets/png/gainers.png"
import greed from "../assets/png/greed.png"
import TrendingCard from "./TrendingCard"

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `font-bold text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {

    const trendingData = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "0.12%"
        }, {
            number: 2,
            symbol: "ETH",
            name: "Ethereum",
            icon: eth,
            isIncrement: false,
            rate: "0.02%"
        }, {
            number: 3,
            symbol: "USDT",
            name: "Tether",
            icon: usdt,
            isIncrement: true,
            rate: "0.01%"
        },
    ]

    return <div className="text-white">
        <div className={styles.trendingWrapper}>
            <div className="flex justify-between">
                <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>
            </div>
            <br />
            <div className="flex ml-1 mt-1">
                <p>The global crypto market cap is $1.56T, a &nbsp; </p>
                <span> <Rate isIncrement={false} rate='4.53%' /> </span>
                <p> &nbsp; decrease over the last day.</p>
            </div>
            <br />
            <div className={styles.flexCenter}>
                <TrendingCard title='Trending' icon={fire} trendingData={trendingData} />
                <TrendingCard title='Biggest Gainers' icon={gainers} trendingData={trendingData} />
                <TrendingCard title='Fear and Greed Index' icon={greed} trendingData={trendingData} />
            </div>
        </div>
    </div>
}

export default Trending