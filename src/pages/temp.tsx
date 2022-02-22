import React from 'react'
import Header from '../common/components/ui/Header/Header';
interface TempProps {
    
}
 
interface TempState {
    
}
 
class Temp extends React.Component<TempProps, TempState> {
    state = {}
    render() { 
        return ( <>
        <Header type="dashboard"/>
        </>);
    }
}
 
export default Temp;