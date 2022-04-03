import { useEffect, useState } from 'react'

const useScroll = () => {
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {})
        }
    }, [])
}
