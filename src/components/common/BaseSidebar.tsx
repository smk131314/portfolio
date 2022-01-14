import React, { ReactNode, useRef } from 'react'
import styles from '@styles/BaseSidebar.module.scss'
import classNames from 'classNames/bind'

const cx = classNames.bind(styles);

type BaseSidebarProps = {
  children: ReactNode | any
  onClose: () => void
}

const BaseSidebar = (props: BaseSidebarProps) => {
  const {
    children,
    onClose
  } = props

  return (
    <div className={cx('sideBarWrapper')}>
      <div
        className={cx('overlay')}
        onClick={onClose}
      />
      <aside className={cx('contentContainer')}>
        {children}
      </aside>
    </div>
  )
}

export default BaseSidebar
