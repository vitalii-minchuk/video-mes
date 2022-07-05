import React from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../utils/tiktik-logo.png"
import { GoogleLogin, googleLogout } from "@react-oauth/google"
import { createOrGetUser } from "../utils"
import useAuthStore from "../store/authStore"

const Navbar = () => {
  const { userProfile, addUser } = useAuthStore()

  return (
    <div className="w-full flex justify-between items-center border-b-2
      border-grey-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="logo"
            layout="responsive"
          />
        </div>
      </Link>
      <div>
      {!userProfile ? (
        <GoogleLogin
          onSuccess={(res) => createOrGetUser(res, addUser)} 
          onError={() => console.log("Error")}
        />
      ) : (
        <div>{userProfile?.userName}</div>
      )}
      </div>
    </div>
  )
}

export default Navbar