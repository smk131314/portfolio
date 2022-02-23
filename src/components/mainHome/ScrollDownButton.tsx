import React from 'react'
import classNames from 'classnames/bind'
import styles from '@styles/ScrollDownButton.module.scss'
import DoubleArrowIcon from '@images/double_arrow_down.svg'
import RoundButton from '../common/RoundButton'

const cx = classNames.bind(styles)

const ScrollDownButton = () => {
  return (
    <div className={cx('scrollDownButtonWrapper')}>
      <RoundButton className="scrollDownButton">
        <DoubleArrowIcon width="2rem" height="2rem" fill="white" />
      </RoundButton>
    </div>
  )
}

export default ScrollDownButton
