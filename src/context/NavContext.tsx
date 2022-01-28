import React, { useState } from 'react'

interface AppContextInterface {
  activeNavLinkId: string
  setActiveNavLinkId: React.Dispatch<React.SetStateAction<string>>
}

export const NavContext = React.createContext<AppContextInterface>({
  activeNavLinkId: '',
  setActiveNavLinkId: () => '',
})

const NavProvider = (props: any) => {
  const { children } = props
  const [activeNavLinkId, setActiveNavLinkId] = useState('')

  const providerValue: AppContextInterface = {
    activeNavLinkId,
    setActiveNavLinkId,
  }

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  )
}

export default NavProvider
