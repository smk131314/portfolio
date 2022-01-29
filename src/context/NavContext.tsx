import React, { useState } from 'react'

interface AppContextInterface {
  activeNavLinkId: string
  setActiveNavLinkId: React.Dispatch<React.SetStateAction<string>>
  activeCareerCardId: string
  setActiveCareerCardId: React.Dispatch<React.SetStateAction<string>>
}

export const NavContext = React.createContext<AppContextInterface>({
  activeNavLinkId: '',
  setActiveNavLinkId: () => '',
  activeCareerCardId: '',
  setActiveCareerCardId: () => '',
})

const NavProvider = (props: any) => {
  const { children } = props
  const [activeNavLinkId, setActiveNavLinkId] = useState('')
  const [activeCareerCardId, setActiveCareerCardId] = useState('')

  const providerValue: AppContextInterface = {
    activeNavLinkId,
    setActiveNavLinkId,
    activeCareerCardId,
    setActiveCareerCardId,
  }

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  )
}

export default NavProvider
