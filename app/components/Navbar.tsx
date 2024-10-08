"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function Navbar() {
    return (
        <div className="flex justify-between items-center px-4 py-2">
            <motion.div initial={{y:-10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{  duration: 2 }} className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="currentColor"><path d="M9 12C10.1046 12 11 11.1046 11 10 11 8.89543 10.1046 8 9 8 7.89543 8 7 8.89543 7 10 7 11.1046 7.89543 12 9 12ZM21.5 6.5 12 1 2.5 6.5V17.5L12 23 21.5 17.5V6.5ZM12 3.311 19.5 7.65311V14.5338L14.9379 11.7966 6.96669 17.775 4.5 16.3469V7.65311L12 3.311ZM12 20.689 8.84788 18.8641 15.0621 14.2034 19.0595 16.6019 12 20.689Z"></path></svg>
                <span className='text-lg font-serif'>Token Launch</span>
            </motion.div>
            <div className="border rounded-xl p-0.5">
                <WalletMultiButton style={{ backgroundColor: "transparent", height: "30px", fontFamily: "serif" }} />
            </div>
        </div>
    )
}

export default Navbar