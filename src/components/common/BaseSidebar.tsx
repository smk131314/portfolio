import React, { ReactNode, useRef } from 'react'
import styles from '@styles/BaseSidebar.module.scss'
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

interface BaseSidebarProps  {
  children: ReactNode | any
  onClose: () => void
}

const BaseSidebar = (props: BaseSidebarProps) => {
  const {
    children,
    onClose
  } = props

  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>

  return (
    <div
      ref={sidebarRef}
      className={cx('sidebarRoot')}
    >
      <div className={cx('')}>
        <div className={cx('overlay')} onClick={onClose} />
        <section>
          <div className={cx('contentWrapper')} ref={contentRef}>
            {children}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BaseSidebar
