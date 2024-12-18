import React from 'react';

const CatalogCarBody = () => {

    const carBody = ['Седан', 'Хетчбек', 'Кроссовер', 'Джип', 'Минивен']

    return (
        <div className={'catalogCarBody'}>
            <ul>
                {carBody.map((car, idx) => (
                    <li key={idx}>{car}</li>
                ))}
            </ul>
        </div>
    );
};

export default CatalogCarBody;