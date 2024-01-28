import CoinNameRow from './CoinNameRow'
import Chart from '@/app/components/cmc-table/Chart'
import { TbCaretUpFilled } from "react-icons/tb";
import { TbCaretDownFilled } from "react-icons/tb";

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

  const getRandomGraph = () => {
    const rndInt = Math.floor(Math.random() * 10) + 1
    return graphImages[rndInt]
  }
  
  function currencyFormat(num) {
    let formattedNum = num.toFixed(2);
    formattedNum = formattedNum.replace(/\.?0+$/, '');
    formattedNum = '$' + formattedNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return formattedNum;
  }

  function roundToTwoDecimalPlaces(number) {
    return parseFloat(number.toFixed(2));
  }

  function formatCurrencyWithoutDecimals(amount) {
    let roundedAmount = Math.round(amount);
    return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function upperCase(symbol) {
    return symbol.toUpperCase()
  }

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
          <p className={`flex gap-1 w-full text-center ${hRate < 0 ? 'text-red-400' : 'text-green-400'}`}> {hRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />} {roundToTwoDecimalPlaces(hRate)}%</p>

        </td>
        <td>
        <p className={`flex gap-1 w-full text-center ${dRate < 0 ? 'text-red-400' : 'text-green-400'}`}> {dRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />} {roundToTwoDecimalPlaces(dRate)}%</p>
        </td>

        <td>
          <div>
            <p>{(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{((volumeValue))}</p>
            <p className='text-gray-400'>
              {(volumeCryptoValue)} {upperCase(coinSymbol)}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{(circulatingSupply)} {(coinSymbol)}</p>
          </div>
        </td>

        <td>
          {/* <Chart /> */}
          {/* <Image src={getRandomGraph()} width={150} height={60} alt='' /> */}
        </td>
      </tr>
    </tbody>

)
  
}

export default CMCTableRow