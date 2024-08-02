import React from 'react';
import Menu from './components/menu';
import '../menu.css'

function Home() {
    return (
        <div>
            <Menu />
            <main className="page-wrap">
                <h1>Home Page</h1>
            </main>
        </div>
    );
}

export default Home;
