import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Video } from "../types"
import { GoVerified } from 'react-icons/go'

interface IProps {
  post: Video
}

const VideoCard: NextPage<IProps> = ({ post }) => {

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="/">
              <>
                <Image
                  src={post.postedBy?.image}
                  alt="profile photo"
                  className="rounded-full object-cover"
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className="flex items-center gap-2">
                <p className="flex gap-2 items-center md:text-md font-bold text-primary">
                  {post?.postedBy?.userName}{` `}
                </p>
                <GoVerified className="text-blue-400 text-md" />
                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block" >
                  {post?.postedBy?.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div
          className="rounded-3xl"
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          <Link href="/">
            <video
              loop
              src={post.video.asset.url}
              className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VideoCard