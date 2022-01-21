import React from 'react'
import classNames from 'classNames/bind'
import styles from '@styles/ProjectModal.module.scss'
import BaseSidebar from '@components/common/BaseSidebar'
import CloseIcon from '@images/close.svg'
import DownIcon from '@images/arrow_down.svg'
import Image from 'next/image'

const cx = classNames.bind(styles)

type ProjectModalProps = {
  onClose: () => void
}

const ProjectModal = (props: ProjectModalProps) => {
  const { onClose } = props
  
  return (
    <BaseSidebar onClose={onClose} className='projectModal'>
      <div className={cx('modalContainer')}>
        <button type='button' onClick={onClose}>
          <CloseIcon width='2.5rem' height='2.5rem' fill='#4F4F4F' />
        </button>
        <div className={cx('imageContainer')}>
          <div className={cx('imageWrapper')}>
            <Image src={'/images/dummy_item.png'} alt='project preview' width={400} height={800} />
          </div>
          <button type='button' className={cx('downButton')}>
            <DownIcon width='2.5rem' height='3.25rem' fill='#4F4F4F' />
          </button>
        </div>
      </div>
    </BaseSidebar>
  )
}

export default ProjectModal
