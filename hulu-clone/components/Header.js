import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  BadgeCheckIcon,
  Collectionicon,
  HomeIcon,
  LightingBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline"

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title='Home' Icon={HomeIcon}/>
      </div>
      <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100}/>
      <p className="text-gray-500">uhfefiejfioefjoeifjoef</p>
    </header>
  )
}

export default Header

