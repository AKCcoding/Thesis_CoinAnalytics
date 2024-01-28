import Image from "next/image"

function upperCase(symbol) {
    return symbol.toUpperCase()
}

const CoinNameRow = ({ name, icon, symbol }) => {
    return <div className="flex w-full">
        <Image src={icon} alt={name} width={25} height={25} />
        <p> &nbsp; {name} </p>
        <p className="text-gray-400"> &nbsp; {symbol} </p>
    </div>
}

export default CoinNameRow