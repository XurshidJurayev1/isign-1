import * as M from '@mui/material'

interface HomeCardProps {
    name?: string,
    amount: string | number,
    text: string,
    withHeader?: boolean,
    color?: string

}

const HomeCard = ({ name, amount, text, withHeader, color }: HomeCardProps) => {
    return (
        <M.Card>
            {
                withHeader && <M.CardHeader subheader={ name } sx={{ borderBottom: "1px solid grey" }} />
            }
            <M.CardContent>
                <M.Typography variant="h3" sx={{ fontWeight: 600, textAlign: 'center', color: color ?? "#3b82f6" }}>
                    { amount }
                </M.Typography>
                <M.Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'center', color: color ?? "#3b82f6"  }}>
                    { text }
                </M.Typography>
            </M.CardContent>
        </M.Card>
    )
}

export default HomeCard