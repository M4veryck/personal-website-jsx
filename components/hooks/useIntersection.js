/* eslint-disable react-hooks/exhaustive-deps */
// Thanks to https://www.webtips.dev/webtips/react-hooks/element-in-viewport

import { useState, useEffect } from 'react'

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting)
            },
            { rootMargin }
        )
        const elementCurrent = element.current

        elementCurrent && observer.observe(elementCurrent)

        return () => observer.unobserve(elementCurrent)
    }, [])

    return isVisible
}

export default useIntersection
