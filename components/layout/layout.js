import Header from './header'
import Footer from './footer/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
