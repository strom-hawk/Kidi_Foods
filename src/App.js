import React from "react"
import CustomFooter from "./components/CustomFooter/CustomFooter"
import CustomHeader from "./components/CustomHeader/CustomHeader"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import BackDrop from './components/BackDrop/BackDrop'

class App extends React.Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    backDropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <BackDrop click={this.backDropClickHandler} />
        }

        return (
            <div>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
                {/* <CustomHeader drawerClickHandler={this.drawerToggleClickHandler} /> */}
                <CustomFooter />
            </div>
        )
    }
}

export default App