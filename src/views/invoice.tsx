import * as M from "@mui/material"
import HomeCard from "../components/homaCard";
import CustomSelect from "../components/customSelect";
import { MenuItemMockData } from "../helpers/data";
import StyledTableRow from "../components/styledTableRow";

const Invoice = () => {
    return (
        <div className="p-4">
            <div className="bg-white p-4 flex justify-between rounded-lg mb-5">
                <span>HISOB FAKTURA</span>
                <span className="font-semibold text-slate-700">1234555</span>
            </div>

            <M.Grid container spacing={2} marginBottom={2}>
                <M.Grid item xs >
                    <HomeCard withHeader={false} amount={2} text="Saqlangan" />
                </M.Grid>
                <M.Grid item xs >
                    <HomeCard withHeader={false} amount={639} text="Imzolashda" />
                </M.Grid>
                <M.Grid item xs >
                    <HomeCard withHeader={false} amount={4606} text="Kontragent imzosida" />
                </M.Grid>
                <M.Grid item xs >
                    <HomeCard withHeader={false} amount={9} text="Qaytarilgan" />
                </M.Grid>
                <M.Grid item xs >
                    <HomeCard withHeader={false} amount={12345} text="Imzolangan" />
                </M.Grid>
            </M.Grid>

            <div className="card bg-white rounded-lg mb-5">
                <div className="card-header py-3 px-4 flex justify-between items-center border-b border-slate-200">
                    <span className='text-slate-700 text-lg font-semibold'>Fakturalar ro'yhati</span>
                    <div className='flex gap-5'>
                        <M.Button className="font-semibold">Lot raqam tekshirish</M.Button>
                        <M.Button className="font-semibold">Sinxronizatsiya</M.Button>
                        <M.Button className="font-semibold">Yuborish</M.Button>
                    </div>
                </div>
                <div className="card-body py-3 px-4">
                    <form className='grid grid-cols-6 gap-3'>
                        <M.FormControl>
                            <CustomSelect label="Operator" menuItems={ MenuItemMockData } />
                        </M.FormControl>
                        <M.FormControl>
                            <CustomSelect label="Mahsulot turi" menuItems={ MenuItemMockData } />
                        </M.FormControl>
                        <M.FormControl>
                            <CustomSelect label="Kontragent STIRi" menuItems={ MenuItemMockData } />
                        </M.FormControl>
                        <M.FormControl>
                            <CustomSelect label="Shartnoma raqami" menuItems={ MenuItemMockData } />
                        </M.FormControl>
                        <M.FormControl>
                            <CustomSelect label="Faktura raqami" menuItems={ MenuItemMockData } />
                        </M.FormControl>
                        <M.FormControl>
                            <CustomSelect label="Holati" menuItems={ MenuItemMockData } />
                        </M.FormControl>
                        
                        <M.Button variant='contained'>Qidirish</M.Button>
                        <M.Button variant="outlined">Tozalash</M.Button>
                    </form>
                </div>
            </div>

            <M.Paper>
                <M.TableContainer>
                    <M.Table>
                        <M.TableHead>
                            <M.TableRow>
                                <M.TableCell>#</M.TableCell>
                                <M.TableCell>Tovar nomi</M.TableCell>
                                <M.TableCell>Faktura raqami va sanasi</M.TableCell>
                                <M.TableCell>Shartnoma raqami va sanasi</M.TableCell>
                                <M.TableCell>Umumiy summa</M.TableCell>
                                <M.TableCell>Kontragent</M.TableCell>
                                <M.TableCell>Lot raqami</M.TableCell>
                                <M.TableCell>Holati</M.TableCell>
                            </M.TableRow>
                        </M.TableHead>
                        <M.TableBody>
                            {
                                new Array(10).fill(1).map((el, index) => (
                                    <StyledTableRow key={"table-cell" + index}>
                                        <M.TableCell>{ index + 1 }</M.TableCell>
                                        <M.TableCell>на оказание услуг диная система контроля исполнительской дисциплины IJRO.GOV.UZ</M.TableCell>
                                        <M.TableCell>
                                            <p className='font-semibold'>18152-2022/EXAT</p>
                                            <p>13 okt. 2022 y.</p>
                                        </M.TableCell>
                                        <M.TableCell>
                                            <p className='font-semibold'>18152-2022/EXAT</p>
                                            <p>13 okt. 2022 y.</p>
                                        </M.TableCell>
                                        <M.TableCell>
                                            <span className="font-semibold">404.550 so'm</span>
                                        </M.TableCell>
                                        <M.TableCell>"O`ZBEKISTON RESPUBLIKASI YOSHLAR ISHLARI AGENTLIGI ANGREN SHAHAR BO`LIMI"</M.TableCell>
                                        <M.TableCell>DX-P-2211001077035</M.TableCell>
                                        <M.TableCell>
                                            <M.Button variant="outlined">Sallangan</M.Button>
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

export default Invoice