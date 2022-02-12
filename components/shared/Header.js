import Link from 'next/link'
import styles from '../../styles/main.module.scss'

const Header = () => {
  return (
    <>
      <Link href='/'>
        <a style={{ fontSize: '20px' }}>Home</a>
      </Link>
      <Link href='/jobs'>
        <a>Jobs</a>
      </Link>
      <Link href='/services'>
        <a className={styles.customBlue}>Services</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
      <style jsx>
        {`
          a {
            font-size: 20px;
          }
          .customColor {
            color: red;
          }
        `}
      </style>
    </>
  )
}

export default Header
