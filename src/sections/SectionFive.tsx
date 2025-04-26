import {motion} from 'framer-motion'

export default function SectionFive() {
    return <div className="relative w-full h-80 mt-20 bg-black">
        <img className="absolute  object-cover opacity-25 w-full h-full" src="cake-image.jpg" alt="" />
        <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
            <motion.p  variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             whileInView='visible'
             viewport={{
                once: true
             }}
             transition={{duration: 0.5, delay: 0.3}}  className="text-gray-100 text-4xl text-center font-semibold w-3/4 md:w-2/5">Get discount promo for new member</motion.p>
            <motion.button  variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             whileInView='visible'
             viewport={{
                once: true
             }}
             transition={{duration: 0.5, delay: 0.3}}  className="px-4 py-2 bg-white rounded text-gray-950 opacity-100">Register now</motion.button>
        </div>
    </div>
}