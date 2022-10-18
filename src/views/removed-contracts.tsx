import * as M from '@mui/material'
import { MenuItemMockData } from "../helpers/data";
import CustomSelect from "../components/customSelect";

const RemovedContracts = () => {
    return (
        <div className='p-4 mt-16'>
            <div className="card bg-white rounded-lg mb-5">
                <div className="card-header py-3 px-4 flex justify-between items-center border-b border-slate-200">
                    <span className='text-slate-700 text-lg font-semibold'>Shartnomalar</span>
                </div>
                <div className="card-body py-3 px-4">
                    <form>
                        <div className='grid grid-cols-6 gap-3 mb-3'>
                            <M.FormControl>
                                <CustomSelect label="Operator" menuItems={ MenuItemMockData } />
                            </M.FormControl>
                            <M.TextField type={'number'} label="STIR" variant="outlined"  />
                            <M.TextField type={'number'} label="Shartnoma raqami" variant="outlined"  />

                        </div>
                        
                        <M.Button sx={{ mr: 2 }} variant='contained'>Qidirish</M.Button>
                        <M.Button sx={{ mr: 2 }} variant="outlined">Tozalash</M.Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RemovedContracts