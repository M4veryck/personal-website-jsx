import '../styles/globals.scss'
import { NavBarContextProvider } from '../components/navBarContext'

function MyApp({ Component, pageProps }) {
    return (
        <NavBarContextProvider>
            <Component {...pageProps} />
        </NavBarContextProvider>
    )
}

export default MyApp
