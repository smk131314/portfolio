import React, { useState } from 'react'
import styles from '@styles/Contact.module.scss'
import classNames from 'classNames/bind'
import ArrowIcon from '@components/common/ArrowIcon'
import CloseIcon from '@images/close.svg'
import BaseSidebar from '@components/common/BaseSidebar'
import RoundButton from '@components/common/RoundButton'
import GithubIcon from '@images/github.svg'
import InstagramIcon from '@images/instagram.svg'
import LinkedinIcon from '@images/linkedin.svg'

const cx = classNames.bind(styles)
const socialLinkList = [
  {
    name: 'github',
    url: 'https://github.com/smk131314',
    icon: <GithubIcon width="1.25rem" height="1.25rem" fill="black" />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/jade-seungmin-kim/',
    icon: <LinkedinIcon width="1.25rem" height="1.25rem" />,
  },
  {
    name: 'instagram',
    url: '',
    icon: <InstagramIcon width="1.25rem" height="1.25rem" />,
  },
]

const Contact = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const openModal = () => {
    setIsSideBarOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setIsSideBarOpen(false)
    document.body.style.overflow = 'auto'
  }
  const openCvLink = () => {
    console.log('open cv')
  }

  return (
    <>
      <button className={cx('contactButton')} onClick={openModal} type="button">
        <p>Contact</p>
        <div className={cx('circle')}>
          <ArrowIcon />
        </div>
      </button>
      {isSideBarOpen && (
        <BaseSidebar onClose={closeModal}>
          <div className={cx('sidebarContentWrapper')}>
            <div onClick={closeModal} className={cx('closeIcon')}>
              <CloseIcon width="2.25rem" height="2.25rem" fill="black" />
            </div>
            <section>
              <h1>Contact</h1>
              <div className={cx('buttonsWrapper')}>
                <RoundButton className="outlined">
                  <a href="mailto:jade.sm.kim@gmail.com">Send me an E-mail</a>
                </RoundButton>
                <RoundButton onClick={openCvLink}>Check out CV</RoundButton>
              </div>
              <ul className={cx('iconsWrapper')}>
                {socialLinkList.map((socialLink) => (
                  <li key={socialLink.name}>
                    <a href={socialLink.url} target="_blank" rel="noreferrer">
                      {socialLink.icon}
                    </a>
                  </li>
                ))}
              </ul>
              <p>London, United Kingdom</p>
            </section>
          </div>
        </BaseSidebar>
      )}
    </>
  )
}

export default Contact
