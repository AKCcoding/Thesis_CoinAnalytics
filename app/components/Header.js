import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
  navLink: `text-white flex mx-[10px]`,
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
        alt='jars icon'
        src=''
        width={30}
        height={30}
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
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Coin Analytics</div>
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