import Image from "next/image"

const CoinNameRow = ({ name, icon, symbol }) => {
    return <div className="flex">
        <Image src={icon} alt={name} width={25} height={25} />
        <p> &nbsp; {name} </p>
        <p> &nbsp; {symbol} </p>
    </div>
}

export default CoinNameRow