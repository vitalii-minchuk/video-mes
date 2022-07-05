import { CredentialResponse } from "@react-oauth/google"
import axios from "axios"
import jwt_decode, { JwtPayload } from "jwt-decode"

type DecodeType = {
  name: string
  picture: string
}
// CredentialResponse
export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded = jwt_decode<DecodeType & JwtPayload>(response.credential)

  const { name, picture, sub } = decoded

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture
  }
  
  addUser(user)

  await axios.post("http://localhost:3000/api/auth", user)
  
}