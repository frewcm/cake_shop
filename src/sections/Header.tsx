import { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from 'framer-motion'

export default function Header(){
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
      if(isInView){
        mainControls.start('visible')
      }
    },[isInView])

    
    return <header ref={ref} className="h-dvh bg-linear-to-t from-black to to-amber-950 flex flex-col md:flex-row">
       
        <div className="z-30 w-full h-2/3 md:h-full md:w-1/2 pl-6 sm:pl-13 md:pl-24 flex flex-col items-start justify-center text-gray-100 space-y-8">
            <motion.p variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate={mainControls}
             transition={{duration: 0.5, delay: 0.4}} className="text-3xl sm:text-4xl md:text-6xl font-semibold w-72 sm:w-80 md:w-[500px] leading-10 md:leading-14 tracking-wider">Sweet chocolate low fat</motion.p>
            <motion.p variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate={mainControls}
             transition={{duration: 0.5, delay: 0.45}} className="text-gray-400 w-60">Chocolate cake layer with vanila topped with thick chocolate and decorated with berries</motion.p>
            <div><motion.button variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate={mainControls}
             transition={{duration: 0.5, delay: 0.5}} className="border-gray-400 border px-4 py-2 rounded text-gray-300">Explore</motion.button></div>
        </div>
        <motion.div variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             animate={mainControls}
             transition={{duration: 0.5, delay: 0.5}} className="w-full h-1/3 md:h-full md:w-1/2 flex items-end justify-end leading-8"><img className="w-full object-cover" src="cake (2).webp" alt="" /></motion.div>

        </header>
}