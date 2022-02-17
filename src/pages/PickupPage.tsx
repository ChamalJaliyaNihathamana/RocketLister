import React from "react";
import Sidenav from "../common/components/ui/SideBar/Sidenav";
import PickUp from "../common/containers/update-profile/Pick-Up";

interface PickUpPageProps {}

interface PickUpPageState {}

class PickUpPage extends React.Component<PickUpPageProps, PickUpPageState> {
  constructor(props: PickUpPageProps) {
    super(props);
    this.state = {};
  }
  render() {
   
    return (
      <div>
        <Sidenav />
        <PickUp />
      </div>
    );
  }
}

export default PickUpPage;
