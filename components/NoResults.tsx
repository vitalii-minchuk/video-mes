import React from "react"
import { NextPage } from "next"

interface IProps {
  text: string
}

const NoResults: NextPage<IProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default NoResults