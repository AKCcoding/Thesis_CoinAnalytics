import '../styles/globals.css'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
  )
}

export default MyApp