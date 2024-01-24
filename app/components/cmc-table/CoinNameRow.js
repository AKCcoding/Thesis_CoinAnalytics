import Image from "next/image"

const CoinNameRow = ({ name, icon, symbol }) => {
    return <div className="flex">
        <Image src={icon} alt={name} width={30} height={27} />
        <p> &nbsp; {name} </p>
        <p> &nbsp; {symbol} </p>
    </div>
}

export default CoinNameRow