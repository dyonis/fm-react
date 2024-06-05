import './Tabs.scss';
import {Link} from "react-router-dom";

const Tabs = () => {
    return (
        <div className="Tabs">
            <div className="Tab">
                <Link to="/">Tab 1</Link>
            </div>
            <div className="Tab">
                <Link to="about">Tab 2</Link>
            </div>
            <div className="Tab">
                <Link to="contact">Tab 3</Link>
            </div>
        </div>
    );
};

export default Tabs;
