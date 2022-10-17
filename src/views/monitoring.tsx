import * as M from "@mui/material"
import { styled } from '@mui/material/styles';
import PageHeader from "../components/header/pageHeader";

const Monitoring = () => {
    return (
        <div className="p-4">
            <PageHeader text1="Monitoring paneli" text2="Operatorlar monitoringi" />

            <M.Paper>
                <M.TableContainer>
                    <M.Table>
                        <M.TableHead>
                            <M.TableRow>
                                <M.TableCell className='w-5'>
                                    <span className="font-semibold text-slate-600 ">#</span>
                                </M.TableCell>
                                <M.TableCell>
                                    <span className="font-semibold text-slate-600 ">Operator</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-semibold text-slate-600 ">Shartnomalar soni</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-semibold text-slate-600 ">Imzolanmagan</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-semibold text-slate-600 ">Bugun</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-semibold text-slate-600 ">Kecha</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-semibold text-slate-600 ">Bir haftada</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-semibold text-slate-600 ">Bir oyda</span>
                                </M.TableCell>
                            </M.TableRow>
                        </M.TableHead>
                        <M.TableBody>
                            {
                                new Array(10).fill(1).map((el, index) => (
                                    <StyledTableRow key={"table-cell" + index}>
                                        <M.TableCell>{ index + 1 }</M.TableCell>
                                        <M.TableCell >
                                            <p>ABDUSALOMOVA MADINA BAHODIROVNA</p>
                                            <p>"UNICON-SOFT" MAS`ULIYATI CHEKLANGAN JAMIYAT</p>
                                        </M.TableCell>
                                        <M.TableCell align="right">
                                            <span className="font-bold">1000</span>
                                        </M.TableCell>
                                        <M.TableCell align="right">
                                            <span className="text-red-500 font-bold">19</span> 
                                        </M.TableCell>
                                        <M.TableCell align="right">9</M.TableCell>
                                        <M.TableCell align="right">3</M.TableCell>
                                        <M.TableCell align="right">5</M.TableCell>
                                        <M.TableCell align="right">84</M.TableCell>
                                    </StyledTableRow>
                                ))
                            }

                            <M.TableRow>
                                <M.TableCell></M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-bold">Jami</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-bold">1000</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-bold text-red-500">19</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-bold">9</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-bold">3</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-bold">5</span>
                                </M.TableCell>
                                <M.TableCell align="right">
                                    <span className="font-bold">84</span>
                                </M.TableCell>
                            </M.TableRow>
                        </M.TableBody>
                    </M.Table>
                </M.TableContainer>
            </M.Paper>
        </div>
    )
}

const StyledTableRow = styled(M.TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default Monitoring