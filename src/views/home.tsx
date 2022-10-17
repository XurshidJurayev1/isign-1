import * as M from "@mui/material";
import HomeCard from "../components/homaCard";
import { MenuItemMockData } from "../helpers/data";
import CustomSelect from "../components/customSelect";
import StyledTableRow from "../components/styledTableRow";

const Home = () => {
  return (
    <div className="p-4 mt-16">
      <div className="bg-white p-4 flex justify-between rounded-lg mb-5">
        <span className="font-semibold text-slate-700">"UNICON-SOFT" MAS`ULIYATI CHEKLANGAN JAMIYAT</span>
        <span className="font-semibold text-slate-700">1234555</span>
      </div>

      <M.Grid container spacing={2} marginBottom={2}>
        <M.Grid item xs={3}>
          <HomeCard name="Shartnomalar" amount={12345} text={"soni"} withHeader />
        </M.Grid>
        <M.Grid item xs={3}>
          <HomeCard name="Shartnomalar" amount={12345} text={"soni"} withHeader color="#f59e0b" />
        </M.Grid>
        <M.Grid item xs={3}>
          <HomeCard name="Shartnomalar" amount={12345} text={"soni"} withHeader color="#ef4444" />
        </M.Grid>
        <M.Grid item xs={3}>
          <HomeCard name="Shartnomalar" amount={12345} text={"soni"} withHeader color="#22c55e" />
        </M.Grid>
      </M.Grid>

      <div className="card bg-white rounded-lg mb-5">
        <div className="card-header py-3 px-4 flex justify-between items-center border-b border-slate-200">
          <span className="text-slate-700 text-lg font-semibold">Shartnoma ro'yhati</span>
          <div className="flex gap-5">
            <M.Button variant="outlined">+ Himoyalangan apparat qurilma</M.Button>
            <M.Button variant="outlined">+ Yangi shartnoma</M.Button>
          </div>
        </div>
        <div className="card-body py-3 px-4">
          <form className="grid grid-cols-6 gap-3">
            <M.FormControl>
              <CustomSelect label="Operator" menuItems={MenuItemMockData} />
            </M.FormControl>
            <M.FormControl>
              <CustomSelect label="Mahsulot turi" menuItems={MenuItemMockData} />
            </M.FormControl>
            <M.FormControl>
              <CustomSelect label="Kontragent imzosi" menuItems={MenuItemMockData} />
            </M.FormControl>
            <M.FormControl>
              <CustomSelect label="Ijrochi imzosi" menuItems={MenuItemMockData} />
            </M.FormControl>
            <M.FormControl>
              <CustomSelect label="Faol" menuItems={MenuItemMockData} />
            </M.FormControl>

            <M.TextField type={"number"} label="STIR" variant="outlined" />
            <M.TextField label="Shartnoma raqami" variant="outlined" />
            <M.TextField label="Tashkilot" variant="outlined" />

            <M.FormControl>
              <CustomSelect label="Holati" menuItems={MenuItemMockData} />
            </M.FormControl>

            <M.Button variant="contained">Qidirish</M.Button>
            <M.Button>Tozalash</M.Button>
            <M.Button variant="outlined">Eksport</M.Button>
          </form>
        </div>
      </div>

      <M.Paper>
        <M.TableContainer>
          <M.Table>
            <M.TableHead>
              <M.TableRow>
                <M.TableCell className="w-5">#</M.TableCell>
                <M.TableCell className="w-20">Operator</M.TableCell>
                <M.TableCell>Holati</M.TableCell>
                <M.TableCell>Raqami va sanani</M.TableCell>
                <M.TableCell>Buyurtmachi korxona</M.TableCell>
                <M.TableCell>Balans</M.TableCell>
                <M.TableCell>Holat (buyurtmachi)</M.TableCell>
              </M.TableRow>
            </M.TableHead>
            <M.TableBody>
              {
                new Array(10).fill(1).map((el, index) => (
                  <StyledTableRow key={"table-cell" + index}>
                    <M.TableCell>{index + 1}</M.TableCell>
                    <M.TableCell>M.I.UBAYDULLAYEVA</M.TableCell>
                    <M.TableCell>Tasdiqlangan</M.TableCell>
                    <M.TableCell>
                      <p className="font-semibold">18152-2022/EXAT</p>
                      <p>13 okt. 2022 y. 20:20</p>
                    </M.TableCell>
                    <M.TableCell>
                      <p>
                        <b>Tel:</b> <span>998919689875</span>
                      </p>
                      <p>NAV.VIL.GAZNACHILIK.BOSHQARMASI</p>
                    </M.TableCell>
                    <M.TableCell>
                      <span className="text-red-500 text-xl">0 so'm</span>
                    </M.TableCell>
                    <M.TableCell>Ko'rib chiqilmoqda</M.TableCell>
                  </StyledTableRow>
                ))
              }
            </M.TableBody>
          </M.Table>
        </M.TableContainer>
      </M.Paper>
    </div>
  );
};

export default Home;