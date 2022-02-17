import React from 'react'
import Paper from '@mui/material/Paper'
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui'
import { Container } from 'react-bootstrap'

interface GridTableProps {}
const columns = [
  { name: 'id', title: 'ID' },
  { name: 'address', title: 'Address' },
  { name: 'orderDate', title: 'Order Date' },
  { name: 'status', title: 'Status' },
  { name: 'billingStatus', title: 'Billing Status' },
  { name: 'orderTotal', title: 'Order Total' },
]
const rows = [
  {
    id: 0,
    address: 'DevExtreme',
    orderDate: 'DevExpress',
    status: 'Completed',
    billingStatus: 'Completed',
    orderTotal: 1233,
  },
]

const GridTable: React.FunctionComponent<GridTableProps> = () => {
  return (
    <Container>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </Container>
  )
}

export default GridTable
