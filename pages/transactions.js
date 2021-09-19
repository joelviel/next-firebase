import Layout from "../components/Layout"
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import "../lib/initFirebase"
import { getDatabase, ref, onValue, child, get} from "firebase/database"


function createData(amount, scpi, transactionStatus) {
  return { date: '25-01-2021', amount, scpi, transactionStatus: 'Confirmé' }
}


function Transactions({rows}) {
  return (
    <Layout title="Liste des transactions">
    <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell >Montant</TableCell>
          <TableCell >SCPI</TableCell>
          <TableCell >Statut de la transaction</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell >{row.date}</TableCell>
            <TableCell >{row.amount}</TableCell>
            <TableCell >{row.scpi}</TableCell>
            <TableCell >{row.transactionStatus}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Layout>
  )
}


Transactions.getInitialProps = async (ctx) => {
  const snapshot = await get(child(ref(getDatabase()), `/`))
  const rows = []
  if (!snapshot.exists()) return {rows}
  else {
    const data = snapshot.val()
    data.transactions.forEach(tx => rows.push(createData(tx.amount, tx.scpi)))
    //console.log(rows)
    return {rows}
  }
}

export default Transactions