import Image from "next/image"
import {upperCase} from "@/app/hooks/currencyFunctions"


const CoinNameRow = ({ name, icon, symbol }) => {
    return <div className="flex w-full">
        <Image src={icon} alt={name} width={30} height={30} />
        <p> &nbsp; {name} </p>
        <p className="text-gray-400"> &nbsp; {upperCase(symbol)} </p>
    </div>
}

export default CoinNameRow