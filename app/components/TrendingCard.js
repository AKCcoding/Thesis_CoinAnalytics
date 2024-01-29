import Image from 'next/image'
import TrendingCardRow from './TrendingCardRow'
import { getNftMarketCap, getTrendingCoins } from '../hooks/apiCoingecko'

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
}


const TrendingCard = async ({title, icon, type}) => {

  const data = type === "coins" ? await getTrendingCoins() : await getNftMarketCap()
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className='flex'>
          {icon && <Image src={icon} width={25} height={25} alt='' />}
          &nbsp;&nbsp;
          <p className='font-bold'>{title}</p>
        </div>
        
      </div>
      <br />

      {type === "coins" ?
        (data.map((coin, index) => {
          return (
            <TrendingCardRow
              key={index}
              number={coin.item.data.price}
              symbol={coin.item.symbol}
              name={coin.item.name}
              icon={coin.item.thumb}
              rate={coin.item.data.price}
            />
          )
        })
      ) : (data.map((nft, index) => {
        return (
          <TrendingCardRow
            key={index}
            number={nft.id}
            symbol={nft.symbol}
            name={nft.name}
          />)
      }))}
        
    </div>
  )
}

export default TrendingCard