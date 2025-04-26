
import {motion} from 'framer-motion'
import { IoSparklesSharp } from "react-icons/io5";
import * as ReactScroll from 'react-scroll';




export default function SectionOne() {
    const Element = ReactScroll.Element as any;
    return <>
    <Element name='collection'>
     <div className="w-full h-full">
        <div className="w-full min-h-dvh flex flex-col items-center justify-center mt-20 lg:mt-0 space-y-20">
            <motion.div variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
            }} 
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true
            }}
            transition={{duration: 0.5, delay: 0.3}} className="flex flex-col items-center">
                <p className="text-gray-400">Discover the taste of</p>
                <p className="text-4xl md:text-5xl text-gray-900 font-semibold text-center">Cake Collection</p> 
            </motion.div>
          
            <div className="w-full lg:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center space-y-8 place-items-center">
                <motion.div variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }} 
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true
                }}
                transition={{duration: 0.4, delay: 0.35}} className={`relative transition duration-200 ease-in-out bg-center bg-cover bg-gray-100 hover:bg-[url('bg-cake.jpg')] hover:text-gray-100 w-48 h-80 rounded-full flex flex-col items-center border-2 border-gray-200 justify-center space-y-4`}>

                   <IoSparklesSharp size={20} />
                   <p className="text-md w-3/5 mx-auto text-center">Raspberry brownies cake</p>
                   <p className="text-sm w-3/5 mx-auto text-center">blah blah blah blah blah blah</p>
                </motion.div>
                <motion.div variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }} 
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true
                }}
                transition={{duration: 0.5, delay: 0.3}} className={`relative transition duration-200 ease-in-out bg-gray-100 bg-center bg-cover hover:bg-[url('bg-cake.jpg')] hover:text-gray-100 w-48 h-80 rounded-full flex flex-col items-center border-2 border-gray-200 justify-center space-y-4`}>
                      
                   <IoSparklesSharp size={20} />
                   <p className="text-md w-3/5 mx-auto text-center">Raspberry brownies cake</p>
                   <p className="text-sm w-3/5 mx-auto text-center">blah blah blah blah blah blah</p>
                </motion.div>
                <motion.div variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }} 
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true
                }}
                transition={{duration: 0.6, delay: 0.45}} className={`relative transition duration-200 ease-in-out bg-gray-100 bg-center bg-cover hover:bg-[url('bg-cake.jpg')] hover:text-gray-100 w-48 h-80 rounded-full flex flex-col items-center border-2 border-gray-200 justify-center space-y-4`}>

                   <IoSparklesSharp size={20} />
                   <p className="text-md w-3/5 mx-auto text-center">Raspberry brownies cake</p>
                   <p className="text-sm w-3/5 mx-auto text-center">blah blah blah blah blah blah</p>
                </motion.div>
                <motion.div variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0}
                }} 
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true
                }}
                transition={{duration: 0.7, delay: 0.5}} className={`relative transition duration-200 ease-in-out bg-gray-100 bg-center bg-cover hover:bg-[url('bg-cake.jpg')] hover:text-gray-100 w-48 h-80 rounded-full flex flex-col items-center border-2 border-gray-200 justify-center space-y-4`}>

                   <IoSparklesSharp size={20} />
                   <p className="text-md w-3/5 mx-auto text-center">Raspberry brownies cake</p>
                   <p className="text-sm w-3/5 mx-auto text-center">blah blah blah blah blah blah</p>
                </motion.div>
            </div>
        </div>
    </div>
                    </Element>
                 </>
}