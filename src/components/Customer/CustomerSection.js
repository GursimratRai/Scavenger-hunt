import React ,{useState} from 'react';
import {Empty} from 'antd';
import {SearchBox,Table} from '../index';

const CustomerSection = (props) => {
    const [branches,setBranches] = useState([]);

    return (
        <div>
            <SearchBox setBranches={setBranches} />
            <Table branches={branches} />
            {branches.length===0 && <Empty className='container' />}
        </div>
    );
}

export default CustomerSection ;