import { IoSparklesSharp } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import {motion} from 'framer-motion';
import * as ReactScroll from 'react-scroll';


export default function SectionTwo(){
    const Element = ReactScroll.Element as any;
    return <>
    <Element name='recommendation'>

    <div className="w-full h-full">
        <div className="w-full min-h-dvh flex flex-col items-center justify-center space-y-10">
            <motion.div variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
            }} 
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true
            }}
            transition={{duration: 0.5, delay: 0.3}} className="mt-20 md:mt-0 w-[90%] flex flex-col items-center justify-center">
               <p className="text-3xl md:text-5xl text-center font-semibold">Our recommendation cake</p>
            <p className="text-gray-600 text-sm mt-2">cake recommendations from us especially for you</p> 
            </motion.div>
            <div className="flex flex-wrap w-[90%] md:w-[80%] mx-auto">
                <motion.div variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
            }} 
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true
            }}
            transition={{duration: 0.5, delay: 0.3}} className="w-full md:w-1/2 flex justify-center"><img className="w-60 rounded-full object-cover" src="bg-cake.jpg" alt="" /></motion.div>
                <div className="w-full md:w-1/2 flex flex-col ktems-center md:items-start space-y-8">
                    <motion.p variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }} 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true
                    }}
                    transition={{duration: 0.5, delay: 0.3}} className="flex text-3xl font-semibold items-center gap-2">Berry mini cake <IoSparklesSharp size={20} /> </motion.p>
                    <motion.p variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }} 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true
             }}
             transition={{duration: 0.5, delay: 0.35}} className="text-sm text-gray-600">Cake is a flour confection usually made from flour, sugar, and other ingredients and is usually baked. In their oldest forms, cakes were modifications of bread.</motion.p>
                    <motion.div variants={{
                        hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
            }} 
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true
            }}
            transition={{duration: 0.5, delay: 0.4}} className="flex space-x-1">
                        <MdStar className="text-amber-500" size={20} />
                        <MdStar className="text-amber-500" size={20} />
                        <MdStar className="text-amber-500" size={20}  />
                        <MdStar className="text-amber-500" size={20}  />
                        <MdStar className="text-amber-500" size={20}  />
                        </motion.div>
                    <motion.p variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }} 
             initial='hidden'
             whileInView='visible'
             viewport={{
                 once: true
                }}
                transition={{duration: 0.5, delay: 0.45}} className="text-xl font-semibold">250 Birr</motion.p>
                    <motion.button variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }} 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true
                    }}
                    transition={{duration: 0.5, delay: 0.5}} className="w-28 py-1 px-3 rounded bg-amber-500 text-white">Buy now</motion.button>
                </div>
            </div>
            

        </div>
    </div>
                    </Element>
                </>
}