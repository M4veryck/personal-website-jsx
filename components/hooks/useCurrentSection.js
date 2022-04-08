/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { NavBarContextConsumer } from '../navBarContext'
import useIntersection from './useIntersection'

export default function useCurrentSection(ref, rootMargin, route) {
    const inViewport = useIntersection(ref, rootMargin)
    const { clickedNavBar, manageCurrentSection } = NavBarContextConsumer()

    useEffect(() => {
        if (inViewport && !clickedNavBar) {
            window.history.pushState('', '', route)
        }
        if (inViewport) {
            manageCurrentSection(route)
        }
    }, [inViewport])
}
