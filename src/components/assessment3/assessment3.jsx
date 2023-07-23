import React from "react";

import './assessment3.css'

export const Assessment3 = () => {
    const mockData = [
        { id: 1, name: 'Item 1', description: 'Description of Item 1' },
        { id: 2, name: 'Item 2', description: 'Description of Item 2' },
        { id: 3, name: 'Item 3', description: 'Description of Item 3' },
        { id: 4, name: 'Item 4', description: 'Description of Item 4' },
        { id: 5, name: 'Item 5', description: 'Description of Item 5' },
        { id: 6, name: 'Item 6', description: 'Description of Item 6' },
        { id: 7, name: 'Item 7', description: 'Description of Item 7' },
        { id: 8, name: 'Item 8', description: 'Description of Item 8' },
        { id: 9, name: 'Item 9', description: 'Description of Item 9' },
        { id: 10, name: 'Item 10', description: 'Description of Item 10' },
        { id: 11, name: 'Item 11', description: 'Description of Item 11' },
        { id: 12, name: 'Item 12', description: 'Description of Item 12' },
        { id: 13, name: 'Item 13', description: 'Description of Item 13' },
        { id: 14, name: 'Item 14', description: 'Description of Item 14' },
        { id: 15, name: 'Item 15', description: 'Description of Item 15' }

    ];

    return (
        <div className="assessment-3">
            <ol>
                {mockData.map(({ id, name, description }) => (
                    <React.Fragment key={id}>
                        <li>
                            {name}
                            <ul>
                                <li>{description}</li>
                            </ul>
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </div>
    )
}
