import React  from 'react';
import Begin from "./Begin/Begin";
import Menu from "./Menu/Menu";
import Location from "./Location/Location";
import Map from "./Map/Map";

const Home = () => {

    return (
        <main>
            <Begin/>
            <Menu/>
            <Location/>
            <Map/>
        </main>
    );
};

export default Home;