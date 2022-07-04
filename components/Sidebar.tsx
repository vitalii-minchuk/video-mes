import { NextPage } from "next"
import Link from "next/link"
import React, { useState } from "react"

import { ImCancelCircle } from "react-icons/im"
import { AiFillHome, AiOutlineMenu } from "react-icons/ai"
import GoogleLogin from "react-google-login"

const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState(true)
 
  const userProfile = false

  const normalLink = `flex items-center gap-3 transition-all hover:bg-primary p-3 justify-center
    xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded
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
        <div className="xl:w-400 w20 flex flex-col justify-start mb10 border-r-2
          border-grey-200 xl:border-0 p-3"
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
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-grey-400">Login to like and comment on videos</p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="bg-white text-lg text-[#F51997] px-6 py-3
                        cursor-pointer border-[1px] border-[#F51997]
                        rounded-md font-semibold outline-none w-full mt-3
                        hover:bg-[#F51997] hover:text-white transition-all"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in
                    </button>
                  )}
                  onSuccess={() => {}} 
                  onFailure={() => {}}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Sidebar