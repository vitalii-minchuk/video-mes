import { NextPage } from "next"
import Link from "next/link"
import React, { useState } from "react"

import { ImCancelCircle } from "react-icons/im"
import { AiFillHome, AiOutlineMenu } from "react-icons/ai"
import SuggestedAccounts from "./SuggestedAccounts"
import Footer from "./Footer"
import Discover from "./Discover"

const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(true)
 
  const userProfile = false

  const normalLink = `flex items-center gap-3 transition-all hover:bg-primary justify-center
  xl:justify-start cursor-pointer p-3 font-semibold text-[#F51997] rounded
  `

  const clickHandler = (): void => {
    setShowSidebar(prev => !prev)
  }

  return (
    <div>
      <div className="block xl:hidden m-2 ml-4 mt-3 cursor-pointer"
        onClick={clickHandler}>
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2
         border-gray-100 xl:border-0 p-3 "
        >
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">
                  For you
                </span>
              </div>
            </Link>
          </div>
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Sidebar