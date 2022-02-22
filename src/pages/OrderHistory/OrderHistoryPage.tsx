import React from 'react'
import GridTable from '../../common/components/ui/Grid/Grid'

import Sidenav from '../../common/components/ui/SideBar/Sidenav'

interface OrderHistoryPageProps {}

interface OrderHistoryPageState {}

class OrderHistoryPage extends React.Component<
  OrderHistoryPageProps,
  OrderHistoryPageState
> {
  constructor(props: OrderHistoryPageProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Sidenav />
        <GridTable />
      </div>
    )
  }
}

export default OrderHistoryPage
