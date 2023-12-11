import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `bg-[#18181B] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#343434]`,
  input: `bg-transparent outline-none text-white w-96 ml-3 rounded-full`,
  cursorPointer: `mr-5 cursor-pointer`,
}

const Header = () => {
  return (
    /* logo here patrick*/
    <div className={styles.header}>
      <Image
        alt='PATRICK BORAT'
        src=''
        width={220}
        height={220}
      />

        <div className='flex items-center'>
          {/* <ConnectButton /> */}
          <div className={styles.inputContainer}>
          <Search />
            <input className={styles.input} placeholder='Search Address, Collections, NFT' />
          </div>
        </div>

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>News</div>
          </div>

          <div className={styles.navItem} onClick=''>
            <div className={styles.navLink}>Collections</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Trade</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Coin Analytics</div>
            <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header