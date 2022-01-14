import React from 'react'
import styles from '@styles/RoundButton.module.scss'
import classNames from 'classNames/bind'
const cx = classNames.bind(styles)

type RoundButtonProps = {
  onClick?: () => void
  children: any
  className?: any
}
const RoundButton = (props: RoundButtonProps) => {
  const {
    onClick,
    children,
    className
  } = props

  return (
    <button className={cx('roundButton', className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default RoundButton
