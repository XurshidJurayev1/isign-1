interface Props {
    text1: string,
    text2: string,
}

const PageHeader = ({ text1, text2 }: Props) => {
    return (
        <div className="bg-white p-4 flex justify-between items-center rounded-lg mb-5">
            <span className="font-semibold text-slate-700 text-lg">{ text1 }</span>
            <span className="font-semibold text-slate-700">{ text2 }</span>
        </div>
    )
}

export default PageHeader