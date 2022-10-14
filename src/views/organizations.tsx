import * as M from "@mui/material"
import CustomSelect from "../components/customSelect";
import { MenuItemMockData } from "../helpers/data";
import StyledTableRow from "../components/styledTableRow";

const Organizations = () => {
    return (
        <div className="p-4">
            <div className="card bg-white rounded-lg mb-5">
                <div className="card-header py-3 px-4 flex justify-between items-center border-b border-slate-200">
                    <span className='text-slate-700 text-lg font-semibold'>Tashkilotlar ro'yhati</span>
                </div>
                <div className="card-body py-3 px-4">
                    <form>
                        <div className='grid grid-cols-4 gap-3 mb-3'>
                            <M.FormControl>
                                <CustomSelect label="Viloyat" menuItems={ MenuItemMockData } />
                            </M.FormControl>
                            <M.FormControl>
                                <CustomSelect label="Tuman" menuItems={ MenuItemMockData } />
                            </M.FormControl>

                            <M.FormControlLabel control={<M.Checkbox defaultChecked />} label="Shartnomasi mavjud" />
                        </div>
                        
                        <div className="flex justify-end">
                            <M.Button sx={{ mr: 2 }} variant='contained'>Qidirish</M.Button>
                            <M.Button sx={{ mr: 2 }} variant="outlined">Tozalash</M.Button>
                            <M.Button sx={{ mr: 2 }} variant="outlined">Eksport</M.Button>
                        </div>
                    </form>
                </div>
            </div>

            <M.Paper>
                <M.TableContainer>
                    <M.Table>
                        <M.TableHead>
                            <M.TableRow>
                                <M.TableCell>#</M.TableCell>
                                <M.TableCell>Tashkilot nomi</M.TableCell>
                                <M.TableCell>Shartnoma raqami</M.TableCell>
                                <M.TableCell>STIR</M.TableCell>
                                <M.TableCell>Yuqori turuvchi tashkilot</M.TableCell>
                            </M.TableRow>
                        </M.TableHead>
                        <M.TableBody>
                            {
                                new Array(10).fill(1).map((el, index) => (
                                    <StyledTableRow key={"table-cell" + index}>
                                        <M.TableCell>{ index + 1 }</M.TableCell>
                                        <M.TableCell>
                                            Termiz tuman shaxsiy tarkib hujjatlari davlat arxivi
                                        </M.TableCell>
                                        <M.TableCell>
                                            <p className='font-semibold'>5607-1622-2021/IJRO</p>
                                            <p>13 okt. 2022 y. 15:48</p>
                                        </M.TableCell>
                                        <M.TableCell>12316283612</M.TableCell>
                                        <M.TableCell>
                                            Termiz tuman shaxsiy tarkib hujjatlari davlat arxivi
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

export default Organizations