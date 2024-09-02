import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="navbar bg-neutral">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">FutCalendar</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Log In</a></li>
                    <li>
                        <details>
                            <summary>Language</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>English</a></li>
                                <li><a>Español</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;