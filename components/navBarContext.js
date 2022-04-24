import { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'

const NavBarContext = createContext()

function NavBarContextProvider({ children }) {
    const [clickedNavBar, setClickedNavBar] = useState(false)
    const [currentSection, setCurrentSection] = useState('/')
    const [windowBigEnough, setWindowBigEnough] = useState(false)
    useEffect(() => {
        if (window.innerWidth >= 1000) {
            setWindowBigEnough(true)
        } else {
            setWindowBigEnough(false)
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1000) {
                setWindowBigEnough(true)
            } else {
                setWindowBigEnough(false)
            }
        })
        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth >= 1000) {
                    setWindowBigEnough(true)
                } else {
                    setWindowBigEnough(false)
                }
            })
        }
    }, [])

    const manageClicked = () => {
        setClickedNavBar(true)
        setTimeout(() => setClickedNavBar(false), 1000)
    }

    const manageCurrentSection = current => {
        setCurrentSection(current)
    }

    const values = {
        clickedNavBar,
        manageClicked,
        currentSection,
        manageCurrentSection,
        windowBigEnough,
    }

    return (
        <NavBarContext.Provider value={values}>
            {children}
        </NavBarContext.Provider>
    )
}

function NavBarContextConsumer() {
    const context = useContext(NavBarContext)

    return context
}

export { NavBarContextProvider, NavBarContextConsumer }
