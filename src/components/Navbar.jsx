import React from 'react';

export default function Navbar() {
    return (
        <nav className='w-full bg-[#038962] p-4 flex justify-between items-center'>
            <div className='text-white text-2xl font-bold'>BankOnChain</div>
            <button className='bg-white text-[#038962] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200'>
                Connect Wallet
            </button>
        </nav>
    );
}