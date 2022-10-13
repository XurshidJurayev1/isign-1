interface HomeCardProps {
    name?: string,
    amount: string | number,
    text: string,
    withHeader?: boolean
}

const HomeCard = ({ name, amount, text, withHeader }: HomeCardProps) => {
    return (
        <div className="bg-white w-full rounded-lg drop-shadow-md hover:drop-shadow-xl">
            {
                withHeader && <div className="card-header text-sm px-4 py-3 border-b border-slate-200">{ name }</div>
            }
            <div className="card-body px-4 py-3 flex flex-col items-center">
                <span className="text-4xl text-slate-500 font-semibold">{ amount }</span>
                <span className="text-sm font-semibold">{ text }</span>
            </div>
        </div>
    )
}

export default HomeCard