import React from 'react'

export default function Company({company, getCompanyInfo}) {
    return (
        <div>
            <div key={company.id} className="company" onClick={getCompanyInfo}>{company.name}</div>
        </div>
    )
}
