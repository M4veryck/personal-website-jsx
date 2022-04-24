/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { NavBarContextConsumer } from '../navBarContext'
import useIntersection from './useIntersection'

export default function useSlideFirstTime(
    ref,
    { axis, overflow, reveal, revealAt }
) {
    const { windowBigEnough } = NavBarContextConsumer()
    const refVisible = useIntersection(ref, revealAt)
    const animation = useAnimation()
    const [refSeen, setRefSeen] = useState(false)

    useEffect(() => {
        if (!refSeen) {
            if (refVisible) {
                animation.start({
                    [axis]: 0,
                    opacity: 1,
                    transition: {
                        type: 'easeOut',
                        duration: 1.1,
                    },
                })
                setRefSeen(true)
                return
            }

            // if (windowBigEnough) {
            animation.start({
                [axis]: overflow,
                opacity: reveal ? 0 : 1,
                transition: {
                    type: 'ease',
                    duration: 1.1,
                },
            })
            // }
        }
    }, [refVisible])

    return animation
}
