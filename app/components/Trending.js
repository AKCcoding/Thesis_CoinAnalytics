import React from 'react';
import fire from "../assets/png/fire.png";
import gainers from "../assets/png/gainers.png";
import greed from "../assets/png/greed.png";
import TrendingCard from "./TrendingCard";
import FearAndGreedCard from "./FearAndGreedCard";
import { getCoingeckoGlobalData } from '@/app/hooks/apiCoingecko';
import { roundTwoDecimalPlaces } from '../hooks/currencyFunctions';
import { TbCaretUpFilled } from "react-icons/tb"
import { TbCaretDownFilled } from "react-icons/tb"
import { currencyFormat } from '../hooks/currencyFunctions';

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `font-bold text-3xl text-white`,
  flexCenter: `flex items-center`
};

const Trending = async () => {
  try {
    const data = await getCoingeckoGlobalData();
    const percentageChange = data.data.market_cap_change_percentage_24h_usd;
    const totalMarketCapObject = data.data.total_market_cap;
    const totalMarketCapSum = Object.values(totalMarketCapObject).reduce((acc, value) => acc + value, 0);
    console.log(data);
    return (
      <div className="text-white">
        <div className={styles.trendingWrapper}>
          <div className="flex justify-between">
            <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>
          </div>
          <br />
          <div className="flex ml-2 mt-1">
            <p>The Global Crypto Market Cap is ${currencyFormat(totalMarketCapSum.toFixed(2))}, a &nbsp; </p>
            <span className={`flex gap-0 ${percentageChange < 0 ? 'text-[#ff3a33]' : 'text-green-400'}`}> {percentageChange < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />}{roundTwoDecimalPlaces(percentageChange)} %</span>
            <p> &nbsp; decrease over the last day.</p>
          </div>
          <br />
          <div className={styles.flexCenter}>
            <TrendingCard title='Trending Coins (24h)' icon={fire} type="coins" />
            <TrendingCard title='Top NFTs (24h)' icon={gainers} type="nfts"/>
            <FearAndGreedCard title='Fear and Greed' icon={greed}/>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching global data:', error);
    // You can handle the error or render an error message here
    return <div>Error fetching data</div>;
  }
};

export default Trending;
