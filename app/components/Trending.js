import fire from "../assets/png/fire.png";
import btc from "../assets/png/btc.png";
import usdt from "../assets/png/usdt.png";
import gainers from "../assets/png/gainers.png";
import recent from "../assets/png/recent.png";
import Rate from "./cmc-table/rate"


const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `font-bold text-3xl text-white`,
  flexCenter: `flex items-center`,
};

const Trending = () => {
  {
    /*const trendingData = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        }, {
            number: 2,
            symbol: "USDT",
            name: "Tether",
            icon: usdt,
            isIncrement: false,
            rate: "9.32%"
        }, {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "2.34%"
        },
    ]*/
  }

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Todays Cryptocurrency Prices by Market Cap
          </h1>
          <br/>
          </div>
          <div className="flex mt-1 ml-1">
                <p> The global crypto market cap is $1.56T, a &nbsp; </p>
                <span> <Rate isIncrement={false} rate='4.53%' /> </span>
                <p> &nbsp; decrease over the last day.</p>
            </div>
            <br />
        </div>
      </div>

  );
};

export default Trending;
