import { IoSparklesSharp } from "react-icons/io5";
import {motion} from 'framer-motion'
import * as ReactScroll from 'react-scroll';


export default function SectionThree(){
    const Element = ReactScroll.Element as any;
    return<>
    <Element name='about'>

     <div className="w-full h-full">
        <div className="w-full min-h-dvh flex flex-col items-center justify-center ">
            <div className="flex flex-wrap w-[90%] md:w-[75%] mx-auto space-y-10">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start space-y-8">
                    <motion.p  variants={{
                        hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             whileInView='visible'
             viewport={{
                 once: true
                }}
                transition={{duration: 0.5, delay: 0.4}}  className="flex text-4xl font-semibold items-center gap-2 md:mt-0 mt-20">About us <IoSparklesSharp size={20} /> </motion.p>
                    <motion.p  variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }} 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true
                    }}
                    transition={{duration: 0.5, delay: 0.45}}  className="text-sm text-gray-900 leading-7 text-center md:text-start">We craft delicious, beautiful cakes that make every celebration unforgettable. Using quality ingredients and creative designs, we bring your sweetest ideas to life. From birthdays to weddings, each cake is made with care, love, and a passion for perfection.</motion.p>
                </div>
                <motion.div  variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }} 
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true
                }}
                transition={{duration: 0.5, delay: 0.5}}  className="w-full md:w-1/2 flex justify-center"><img className="w-60 rounded-full object-cover" src="bg-cake.jpg" alt="" /></motion.div>
            </div>
        
        </div>
    </div>
                </Element>
                </>
}