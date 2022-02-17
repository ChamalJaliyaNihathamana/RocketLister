import React from 'react'
import CustomForm from '../common/components/ui/Form/CustomFormInput'
import Sidenav from '../common/components/ui/SideBar/Sidenav'


interface UpdateProfilePageProps {}

interface UpdateProfilePageState {}

class UpdateProfilePage extends React.Component<
  UpdateProfilePageProps,
  UpdateProfilePageState
> {
  constructor(props: UpdateProfilePageProps) {
    super(props)
    this.state = {}
  }
  render() {
 
    return (
      <div>
        <Sidenav />
        <CustomForm />
      </div>
    )
  }
}

export default UpdateProfilePage
