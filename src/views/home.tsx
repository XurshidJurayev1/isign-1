import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Home = () => {
    return (
        <div className="p-4">
            <div className="bg-white p-4 flex justify-between rounded-lg drop-shadow-md mb-5">
                <span>"UNICON-SOFT" MAS`ULIYATI CHEKLANGAN JAMIYAT</span>
                <span className="font-semibold text-slate-700">1234555</span>
            </div>

            <div className="cards flex justify-between gap-4 mb-5">
                <div className="bg-white w-full rounded-lg drop-shadow-md hover:drop-shadow-xl">
                    <div className="card-header text-sm px-4 py-3 border-b border-slate-200">
                        Shartnomalar
                    </div>
                    <div className="card-body px-4 py-3 flex flex-col items-center">
                        <span className="text-4xl text-slate-500 font-semibold">12314</span>
                        <span className="text-sm">soni</span>
                    </div>
                </div>
                <div className="bg-white w-full rounded-lg drop-shadow-md hover:drop-shadow-xl">
                    <div className="card-header text-sm px-4 py-3 border-b border-slate-200">
                        Shartnomalar
                    </div>
                    <div className="card-body px-4 py-3 flex flex-col items-center">
                        <span className="text-4xl text-slate-500 font-semibold">12314</span>
                        <span className="text-sm">soni</span>
                    </div>
                </div>
                <div className="bg-white w-full rounded-lg drop-shadow-md hover:drop-shadow-xl">
                    <div className="card-header text-sm px-4 py-3 border-b border-slate-200">
                        Shartnomalar
                    </div>
                    <div className="card-body px-4 py-3 flex flex-col items-center">
                        <span className="text-4xl text-slate-500 font-semibold">12314</span>
                        <span className="text-sm">soni</span>
                    </div>
                </div>
                <div className="bg-white w-full rounded-lg drop-shadow-md hover:drop-shadow-xl">
                    <div className="card-header text-sm px-4 py-3 border-b border-slate-200">
                        Shartnomalar
                    </div>
                    <div className="card-body px-4 py-3 flex flex-col items-center">
                        <span className="text-4xl text-slate-500 font-semibold">12314</span>
                        <span className="text-sm">soni</span>
                    </div>
                </div>
            </div>

            <div className="card bg-white rounded-lg">
                <div className="card-header py-3 px-4 flex justify-between items-center border-b border-slate-200">
                    <span className='text-slate-700 text-lg font-semibold'>Shartnoma ro'yhati</span>
                    <div className='flex gap-5'>
                        <Button variant='outlined'>+ Himoyalangan apparat qurilma</Button>
                        <Button variant='outlined'>+ Yangi shartnoma</Button>
                    </div>
                </div>
                <div className="card-body py-3 px-4">
                    <form className='flex gap-3'>
                        <FormControl className='w-full'>
                            <InputLabel id="select-opeartor">Operator</InputLabel>
                            <Select
                                labelId="select-opeartor"
                                id="select-opeartor"
                                label="Operator"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='w-full'>
                            <InputLabel id="product-select">Mahsulot turi</InputLabel>
                            <Select
                                labelId="product-select"
                                id="product-select"
                                label="Mahsulot turi"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='w-full'>
                            <InputLabel id="select-opeartor">Operator</InputLabel>
                            <Select
                                labelId="select-opeartor"
                                id="select-opeartor"
                                label="Operator"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='w-full'>
                            <InputLabel id="product-select">Mahsulot turi</InputLabel>
                            <Select
                                labelId="product-select"
                                id="product-select"
                                label="Mahsulot turi"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='w-full'>
                            <InputLabel id="select-opeartor">Operator</InputLabel>
                            <Select
                                labelId="select-opeartor"
                                id="select-opeartor"
                                label="Operator"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className='w-full'>
                            <InputLabel id="product-select">Mahsulot turi</InputLabel>
                            <Select
                                labelId="product-select"
                                id="product-select"
                                label="Mahsulot turi"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
                
            </div>


        </div>
    )
}

export default Home