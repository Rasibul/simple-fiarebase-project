
import { Outlet } from 'react-router-dom';
import Haeder from '../Component/Header/Haeder';

const MainLayout = () => {
    return (
        <div>
            <Haeder></Haeder>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;