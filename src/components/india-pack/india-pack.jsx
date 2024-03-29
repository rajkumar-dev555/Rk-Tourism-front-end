import Navbar from "../navbar/navbar"
import { Link } from "react-router-dom"
import Popularpack from "../Popular-Packages/popular-pack"

import "./india-pack.scss"

export const IndiaPackages = () => {

    return (
        <div className="indiapack">

            <div className="nav-india">
                <Navbar />

            </div>
            <div className="pack-name">
                <h1>India Tours Packages</h1>

            </div>
            <Popularpack/>

        </div>

    )
}

export default IndiaPackages;