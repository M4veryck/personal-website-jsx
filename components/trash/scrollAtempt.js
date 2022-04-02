// !!!!!!!!!!!!!!!!!!!!!!!! pages/index.js

// const router = useRouter()
// const heroRef = useRef()
// const aboutMeRef = useRef()
// const projectsRef = useRef()
// // const allRefs = [heroRef, aboutMeRef, projectsRef]
// const isVisibleHero = useOnScreen(heroRef)
// const isVisibleAboutMe = useOnScreen(aboutMeRef)
// const isVisibleProjects = useOnScreen(projectsRef)

// if (isVisibleHero) {
//     router.push('/', { shallow: true })
// }

// if (isVisibleAboutMe) {
//     router.push('/#about', { shallow: true })
// }

// if (isVisibleProjects) {
//     router.push('/#projects', { shallow: true })
// }

// const [scrollTop, setScrollTop] = useState()
// const [scrollBottom, setScrollBottom] = useState()
// const [scrolling, setScrolling] = useState()

// useEffect(() => {
//     const onScroll = e => {
//         const el = e.target.documentElement
//         // console.log(`el.scrollTop: ${el.scrollTop}`)
//         // console.log(`scrollTop: ${scrollTop}`)
//         setScrollTop(el.scrollTop)
//         setScrolling(el.scrollTop !== scrollTop)
//     }
//     window.addEventListener('scroll', onScroll)

//     return () => window.removeEventListener('scroll', onScroll)
// }, [scrollTop])

// useEffect(() => {
//     const onScroll = e => {
//         const el = e.target.documentElement
//         setScrollBottom(el.scrollBottom)
//         setScrolling(el.scrollBottom < scrollBottom)
//     }
//     window.addEventListener('scroll', onScroll)

//     return () => window.removeEventListener('scroll', onScroll)
// }, [scrollBottom])

// useEffect(() => {
//     console.log(`Am I scrolling ? ${scrolling}`)
// }, [scrolling])

// !!!!!!!!!!!!!!!!!!!!!!!! hero/index.js

// const router = useRouter()
// const [isVisible, setIsVisible] = useState(false)
// const heroRef = useRef()
// // const isVisibleHero = useOnScreen(heroRef)

// useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) =>
//         setIsVisible(entry.isIntersecting)
//     )
//     const heroRefCurrent = heroRef.current
//     if (heroRefCurrent) observer.observe(heroRefCurrent)
//     // Remove the observer as soon as the component is unmounted
//     return () => {
//         if (heroRefCurrent) observer.unobserve(heroRefCurrent)
//     }
// }, [heroRef])

// useEffect(() => {
//     console.log(`Main is visible: ${isVisible}`)
//     if (isVisible) {
//         router.push('/', { shallow: true })
//         console.log('pushed to main')
//     }
// }, [isVisible])

// !!!!!!!!!!!!!!!!!!!! aboutMe/index.js

// const router = useRouter()
// const [isVisible, setIsVisible] = useState(false)
// const aboutMeRef = useRef()
// // const isVisibleHero = useOnScreen(aboutMeRef)

// useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) =>
//         setIsVisible(entry.isVisible)
//     )
//     const aboutMeRefCurrent = aboutMeRef.current
//     if (aboutMeRefCurrent) observer.observe(aboutMeRefCurrent)
//     // Remove the observer as soon as the component is unmounted
//     return () => {
//         if (aboutMeRefCurrent) observer.unobserve(aboutMeRefCurrent)
//     }
// }, [aboutMeRef])

// useEffect(() => {
//     console.log(`About is visible: ${isVisible}`)
//     if (isVisible) {
//         router.push('/#about', { shallow: true })
//         console.log('pushed to about')
//     }
// }, [isVisible])
