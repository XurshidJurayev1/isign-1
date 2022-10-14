import * as M from "@mui/material"
import CustomSelect from "../components/customSelect";
import { MenuItemMockData } from "../helpers/data";
import StyledTableRow from "../components/styledTableRow";

const Debitors = () => {
    return (
        <div className="p-4">
            <div className="card bg-white rounded-lg mb-5">
                <div className="card-header py-3 px-4 flex justify-between items-center border-b border-slate-200">
                    <span className='text-slate-700 text-lg font-semibold'>Qarzdorligi mavjud shartnomalar</span>
                </div>
                <div className="card-body py-3 px-4">
                    <form>
                        <div className='grid grid-cols-4 gap-3 mb-3'>
                            <M.FormControl>
                                <CustomSelect label="Operator" menuItems={ MenuItemMockData } />
                            </M.FormControl>
                        </div>
                        
                        <M.Button sx={{ mr: 2 }} variant='contained'>Qidirish</M.Button>
                        <M.Button sx={{ mr: 2 }} variant="outlined">Tozalash</M.Button>
                        <M.Button sx={{ mr: 2 }} variant="outlined">Eksport</M.Button>
                    </form>
                </div>
            </div>

            <M.Paper>
                <M.TableContainer>
                    <M.Table>
                        <M.TableHead>
                            <M.TableRow>
                                <M.TableCell>#</M.TableCell>
                                <M.TableCell>Raqami va sanasi</M.TableCell>
                                <M.TableCell>Buyurtmachi korxona</M.TableCell>
                                <M.TableCell>Shartnoma summasi</M.TableCell>
                                <M.TableCell>Balans</M.TableCell>
                            </M.TableRow>
                        </M.TableHead>
                        <M.TableBody>
                            <StyledTableRow>
                                <M.TableCell></M.TableCell>
                                <M.TableCell></M.TableCell>
                                <M.TableCell></M.TableCell>
                                <M.TableCell></M.TableCell>
                                <M.TableCell>
                                    <span className="text-lg text-red-600">28,123,454 so'm</span>
                                </M.TableCell>
                            </StyledTableRow>
                            {
                                new Array(10).fill(1).map((el, index) => (
                                    <StyledTableRow key={"table-cell" + index}>
                                        <M.TableCell>{ index + 1 }</M.TableCell>
                                        <M.TableCell>
                                            <p className='font-semibold'>5607-1622-2021/IJRO</p>
                                            <p>13 okt. 2022 y. 15:48</p>
                                        </M.TableCell>
                                        <M.TableCell>
                                            Termiz tuman shaxsiy tarkib hujjatlari davlat arxivi
                                        </M.TableCell>
                                        <M.TableCell>
                                            <span className="text-lg">520,000 so'm</span>
                                        </M.TableCell>
                                        <M.TableCell>
                                            <span className="text-lg text-red-700">520,000 so'm</span>
                                        </M.TableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </M.TableBody>
                    </M.Table>
                </M.TableContainer>
            </M.Paper>
        </div>
    )
}

export default Debitors