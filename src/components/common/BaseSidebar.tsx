import React, { ReactNode, useRef } from 'react'
import styles from '@styles/BaseSidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type BaseSidebarProps = {
  children: ReactNode | any
  onClose: () => void
  className?: string
}

const BaseSidebar = (props: BaseSidebarProps) => {
  const { children, onClose, className } = props

  return (
    <div className={cx('sideBarWrapper', className)} role="dialog">
      <div className={cx('overlay')} onClick={onClose} />
      <aside className={cx('contentContainer')}>{children}</aside>
    </div>
  )
}

export default BaseSidebar
