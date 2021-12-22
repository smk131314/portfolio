import React from 'react'
import styles from '@styles/Contact.module.scss'
import classNames from 'classNames/bind';
import ArrowIcon from '@components/common/ArrowIcon';
// import BaseSidebar from './common/BaseSidebar';

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <>
      <button className={cx('contactButton')}>
        <p>Contact</p>
        <div className={cx('circle')}>
          <ArrowIcon />
        </div>
      </button>
      {/* <BaseSidebar onClose={() => {}}>{'test'}</BaseSidebar> */}
    </>
  )
}

export default Contact
