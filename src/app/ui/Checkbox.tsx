import React from 'react';

type Props = {
    item: string;
}

const Checkbox = ({item}: Props) => {
    return (
        <label className="customCheckbox">
            <input type="checkbox" value={item}/>
            <span className="checkmark"></span>
            {item}
        </label>
    );
};

export default Checkbox;