import React, { useEffect, useState } from 'react'
import Company from './company';


export default function HomePage({ stock, handleValueChange, getDropdown, getCompanyInfo }) {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=%3COmU0ZjczMzE0YTE5MjZjYzJlOWNmN2E3ZDQ2YzkyOTRi%3E');
                if (!response.ok) {
                    throw new Error(`${response.status} : ${response.statusText}`);
                }
                 const companies = await response.json();
                setCompanies(companies.companies);
                console.log(companies.companies);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    

    return (
        <div>
            <h1>Stocticker App</h1>
            <hr />
            <label>Enter Stock Ticker Symbol:
        <input value={stock} onChange={e => handleValueChange(e.target.value)} />
            </label>
            <button onClick={getDropdown}>Choose Company</button>
            { companies.map(company => <Company key={company.id} company={company} getCompanyInfo={getCompanyInfo}/>)}
        </div>
    )
}
