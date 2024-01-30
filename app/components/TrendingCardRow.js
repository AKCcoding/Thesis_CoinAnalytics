import Image from 'next/image'

const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
}

const TrendingCardRow = ({ number, icon, name, symbol, sparkline }) => {
  return (
    <div className={styles.trendingCardRow}>   
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && <Image alt='icons.svg' src={icon} width={30} height={30} style={{ borderRadius: '15px' }}/>}
        </div>
        <p className='font-bold overflow-hidden truncate-'>
          {name}
          <span className='text-gray-400'> {symbol}</span>
        </p>
      </div>
      <p className='opacity-80'>{(number)}</p>
      <div className='mx-5 w-auto h-auto'>
      {sparkline && <Image alt='sparkline.svg' src={sparkline} width={180} height={100}/>}
      </div>
      
    </div>
  )
}

export default TrendingCardRow