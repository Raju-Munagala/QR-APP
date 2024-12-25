import { Link } from "react-router"

const Header = ()=>{
    return (
        <ul class="header-list">
            <li className="header-item"><Link to="/generator">QR Generator</Link></li>
            <li className="header-item"><Link to="/validator">QR Validator</Link></li>
        </ul>
    )
}

export default Header