import { InputLabel, Select, MenuItem } from "@mui/material"

interface CustomSelectProps {
    label: string,
    menuItems: {
        value: string | number,
        label: string | number
    }[]
}

const CustomSelect = ({ label, menuItems }: CustomSelectProps) => (
    <>
        <InputLabel id="custom-select">{ label }</InputLabel>
        <Select
            labelId="custom-select"
            id="custom-select"
            label={ label }
        >
            {
                menuItems.map((el) => (
                    <MenuItem key={ el.value } value={el.value}>{ el.label }</MenuItem>
                ))
            }
        </Select>
    </>
)

export default CustomSelect