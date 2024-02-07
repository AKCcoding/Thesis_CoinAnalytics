import CoinNameRow from './CoinNameRow'
import { TbCaretUpFilled } from "react-icons/tb"
import { TbCaretDownFilled } from "react-icons/tb"
import { upperCase } from '@/app/hooks/currencyFunctions'
import {roundTwoDecimalPlaces} from '@/app/hooks/currencyFunctions'
import {currencyFormat} from '@/app/hooks/currencyFunctions'
import { Sparklines, SparklinesLine } from 'react-sparklines';


const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
}

const CMCTableRow = ({

  starNum,
  coinName,
  coinIcon,
  coinSymbol = '---',
  price = '----',
  hRate = '---',
  dRate = '---',
  marketCapValue = '---',
  volumeValue = '---',
  volumeCryptoValue = '---',
  circulatingSupply = '---',
  sparkline,

}) => {
  const graphImages = [
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
  ]
   
  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td>
        
        </td>
        <td>{starNum}</td>

        {coinIcon && coinIcon ? (
          <td className='cursor-pointer'>
            <CoinNameRow
              name={coinName}
              icon={coinIcon}
              symbol={coinSymbol}
            />
          </td>
        ) : (
          <></>
        )}

        <td>
          <p className='w-full'>$ {(price)}</p>
        </td>
        <td>
          <p className={`flex gap-1 w-full text-center ${hRate < 0 ? 'text-[#ff3a33]' : 'text-green-400'}`}> {hRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />} {roundTwoDecimalPlaces(hRate)}%</p>
        </td>
        <td>
        <p className={`flex gap-1 w-full text-center ${dRate < 0 ? 'text-[#ff3a33]' : 'text-green-400'}`}> {dRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />} {roundTwoDecimalPlaces(dRate)}%</p>
        </td>

        <td>
          <div>
            <p>{currencyFormat(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{currencyFormat(volumeValue)}</p>
            <p className='text-gray-400'>
              {currencyFormat(volumeCryptoValue)} {upperCase(coinSymbol)}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{currencyFormat(circulatingSupply)} {upperCase(coinSymbol)}</p>
          </div>
        </td>

        <td>
        <Sparklines svgWidth={160} height={60} data={sparkline}>
          <SparklinesLine color= {hRate < 0 ? 'red' : '#2DFE54'}/>
        </Sparklines>
        {/* <Image src={getRandomGraph()} width={150} height={60} alt='' /> */}
        </td>
      </tr>
    </tbody>

)
  
}

export default CMCTableRow