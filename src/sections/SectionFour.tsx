import { MdStar } from "react-icons/md";
import {motion} from 'framer-motion'
import * as ReactScroll from 'react-scroll';


export default function SectionFour(){
    const Element = ReactScroll.Element as any;
    return <>
    <Element name='testimonial'>

    <div className="w-full h-full">
        <div className="w-full min-h-dvh flex flex-col items-center justify-center space-y-14">
            <div className="mt-20 md:mt-0 w-[90%] flex flex-col items-center justify-center">
               <motion.p  variants={{
                   hidden: {opacity: 0, y: 50},
                   visible: {opacity: 1, y: 0}
                }} 
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true
                }}
                transition={{duration: 0.5, delay: 0.3}}  className="text-3xl md:text-5xl text-center font-semibold">Testimonials</motion.p>
            </div>
            <div className="flex flex-wrap w-[90%] md:w-[80%] mx-auto space-y-10">
                <motion.div  variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }} 
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true
                }}
                transition={{duration: 0.5, delay: 0.3}}  className="w-full md:w-1/2 flex items-center justify-center"><img className="w-60 rounded-full object-cover" src="bg-cake.jpg" alt="" /></motion.div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start space-y-6 ">
                <div className="flex flex-col justify-center">

                    <motion.p  variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
            }} 
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true
            }}
            transition={{duration: 0.5, delay: 0.35}}  className="flex text-3xl font-semibold items-center">Cassandra Winter </motion.p>
                    <motion.p  variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }} 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true
                    }}
                    transition={{duration: 0.5, delay: 0.4}}  className="text-xs text-gray-600">Addis Ababa, Ethiopia</motion.p>
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
                transition={{duration: 0.5, delay: 0.45}}  className="flex space-x-1">
                        <MdStar className="text-amber-500" size={20} />
                        <MdStar className="text-amber-500" size={20} />
                        <MdStar className="text-amber-500" size={20}  />
                        <MdStar className="text-amber-500" size={20}  />
                        <MdStar className="text-amber-500" size={20}  />
                        </motion.div>
                    <motion.p  variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
             }} 
             initial='hidden'
             whileInView='visible'
             viewport={{
                 once: true
             }}
             transition={{duration: 0.5, delay: 0.5}}  className="w-3/4 text-sm text-gray-800 text-center md:text-start">The cake was absolutely stunning and tasted even better! Everyone at the party was impressed. Amazing service, beautiful design, and unforgettable flavor. I’ll definitely be ordering again—highly recommended!</motion.p>
                    
                </div>
            </div>
            

        </div>
    </div>
                    </Element>
                 </>
}