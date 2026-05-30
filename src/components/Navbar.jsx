'use client';
import Image from 'next/image';
import React from 'react';
import { FaChartBar, FaHome } from 'react-icons/fa';
import { RiTimeLine } from 'react-icons/ri';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavbarPage = () => {
    const pathName = usePathname();
    return (
        <div>
            <div className="navbar bg-white shadow-sm boerder-b-6 border-gray-200 px-15">
                  
                  <div className="navbar-start">
                  
                     {/* <a className="btn btn-ghost text-xl">KeenKeeper</a> */}
                     <Image src="/assets/logo.png" alt="KeenKeeper Logo" width={170} height={60} />
                </div>

                <div className="navbar-end mr-15">
                    <div className="dropdown text-black bg-white">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 max-w-25 p-2 shadow bg-white text-black text-lg font-bold">
                            <li><Link href="/" className={pathName === '/' ? 'text-green-500' : ''}><FaHome /> Home</Link></li>
                            <li><Link href="/timeline" className={pathName === '/timeline' ? 'text-green-500' : ''}><RiTimeLine /> Timeline</Link></li>
                            <li><Link href="/stats" className={pathName === '/stats' ? 'text-green-500' : ''}><FaChartBar /> Stats</Link></li>
                           
                        </ul>
                    </div>
                   
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-black font-bold text-lg">
                        <li><Link href="/" className={pathName === '/' ? 'text-green-500' : ''}><FaHome /> Home</Link></li>
                        <li>
                            <Link href="/timeline" className={pathName === '/timeline' ? 'text-green-500' : ''}><RiTimeLine /> Timeline</Link>
                        </li>
                        <li><Link href="/stats" className={pathName === '/stats' ? 'text-green-500' : ''}><FaChartBar /> Stats</Link></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default NavbarPage;