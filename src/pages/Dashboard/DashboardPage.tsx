import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "../../common/components/ui/Avatar/Avatar";
import BannerCard from "../../common/components/ui/Banner/BannerCard";
import Header from "../../common/components/ui/Header/Header";
import Sidenav from "../../common/components/ui/SideBar/Sidenav";

interface DashboardPageProps {}

interface DashboardPageState {}

class DashboardPage extends React.Component<
  DashboardPageProps,
  DashboardPageState
> {
  constructor(props: DashboardPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    var text = (
      <React.Fragment>
        Office hours for {<b>Thursday, December 23 rd</b>} , and{" "}
        {<b>Thursday, December 30 th</b>}
        will be from {<b>8 am - 12 pm.</b>} We will be closed on{" "}
        {<b>December 24th-25 th</b>} for Christmas as well as{" "}
        {<b>December 31 st - January 1 st</b>} for {<b>New Year's Day.</b>}{" "}
        Thank you and happy holidays!
      </React.Fragment>
    );

    var organization = (
      <React.Fragment>{<b>Keller</b>} Williams</React.Fragment>
    );

    return (
      <Container>
        <Header type="dashboard"/>
        <Row className="mt-3">
          <Col xs={2}>
            <Sidenav />
          </Col>
          <Col xs={10}>
            <Avatar
              image="https://images.unsplash.com/photo-1574784619102-f7e342f21aa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              logo="Kw"
              name="Welcome Jessica"
              org={organization}
            />

            <BannerCard
              title="ATTENTION CUSTOMERS: HOLIDAY HOURS!"
              description={text}
              image="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardPage;
