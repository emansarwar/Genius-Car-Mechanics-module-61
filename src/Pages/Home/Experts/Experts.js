import React from 'react';
import './Experts.css';


import Expert from '../Expert/Expert';

const experts = [
    {
        img:" https://tse4.mm.bing.net/th?id=OIP.F5GWaO859FWMLlaezcgleAHaGX&pid=Api&P=0&w=190&h=163",
        name: 'Andrew Smith',
        expertize: '-AMERICAN GUIDE-'
    },
    {
        img:"https://tse3.mm.bing.net/th?id=OIF.%2f9ba4qI0519nhe7W%2befmAQ&pid=Api&P=0&w=152&h=226",
        name: 'John Anderson',
        expertize: '-FRENCH GUIDE-'
    },
    {
        img: "https://tse3.mm.bing.net/th?id=OIP.DV31Nq95KkajUD55gQ10YgEpDS&pid=Api&P=0&w=249&h=176",
        name: 'Zakaria Smith',
        expertize: '-ITALIAN GUIDE-'
    },
    {
        img: "https://tse2.mm.bing.net/th?id=OIP.e3yU75QJ3nUNnlfIChaaxAHaEo&pid=Api&P=0&w=273&h=170",
        name: 'Sakib Anderson',
        expertize: '-TURKISH GUIDE-'
    },
]

const Experts = () => {
    return (
        <div id="experts">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="experts-container">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;