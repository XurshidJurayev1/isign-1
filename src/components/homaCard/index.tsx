import * as M from '@mui/material'

interface HomeCardProps {
    name?: string,
    amount: string | number,
    text: string,
    withHeader?: boolean
}

const HomeCard = ({ name, amount, text, withHeader }: HomeCardProps) => {
    return (
        <M.Card>
            {
                withHeader && <M.CardHeader subheader={ name } sx={{ borderBottom: "1px solid grey" }} />
            }
            <M.CardContent>
                <M.Typography variant="h3" color="text.secondary" sx={{ fontWeight: 600, textAlign: 'center' }}>
                    { amount }
                </M.Typography>
                <M.Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, textAlign: 'center' }}>
                    { text }
                </M.Typography>
            </M.CardContent>
        </M.Card>
    )
}

export default HomeCard