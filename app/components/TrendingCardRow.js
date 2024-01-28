import Image from 'next/image'

const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
}

const TrendingCardRow = ({ number, icon, name, symbol, rate }) => {
  return (
    <div className={styles.trendingCardRow}>   
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && <Image alt='' src={icon} width={30} height={30} />}
        </div>
        <p className='font-bold truncate-'>
          {name}
          <span className='text-gray-400'> {symbol}</span>
        </p>
      </div>
      <p className='opacity-40'>{'$' + parseFloat(number.replace('$', '')).toFixed(2)}</p>
      {/* <Rate isIncrement={isIncrement} rate={rate} /> */}
    </div>
  )
}

export default TrendingCardRow