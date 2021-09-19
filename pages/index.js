import Layout from "../components/Layout"
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const DashboardEntry = ({ entryName, entryValue }) => (
  <Grid item xs={3}>
    <Item>
      <h2 style={{minHeight: "70px"}}>{entryName}</h2>
      <h3>{entryValue}</h3>
    </Item>
  </Grid>
)

export default function Index() {
  return (
  <Layout title="Votre patrimoine immobilier">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <DashboardEntry entryName="Valeur totale" entryValue="44 438€"></DashboardEntry>
        <DashboardEntry entryName="Plus-value" entryValue="1 664,46€"></DashboardEntry>
        <DashboardEntry entryName="Valorisation du capital" entryValue="3,89%"></DashboardEntry>
        <DashboardEntry entryName="Revenus nets versés" entryValue="0€"></DashboardEntry>
      </Grid>
    </Box>
  </Layout>
  )
}