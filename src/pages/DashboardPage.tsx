import * as React from "react";
import Avatar from "../common/components/ui/Avatar/Avatar";
import BannerCard from "../common/components/ui/Banner/BannerCard";
import Sidenav from "../common/components/ui/SideBar/Sidenav";

interface DashboardPageProps {}

interface DashboardPageState {
}

class DashboardPage extends React.Component<
  DashboardPageProps,
  DashboardPageState
> {
  constructor(props: DashboardPageProps) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <div>
        <Sidenav />
        <Avatar
          image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
          logo="JWK"
          name="Jessica Williams"
        />

        <BannerCard
          title="Real Estate"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
    );
  }
}

export default DashboardPage;
