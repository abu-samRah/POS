import React from 'react';
import { Catagory } from '../../types';
import { POSTable } from '../../components/Table/index';
import { Edit2 as EditIcon, X as DeleteIcon } from 'react-feather';
import { TableCell } from '@material-ui/core';
import { get } from '../../api/axios';
import { useState, useEffect, useCallback } from 'react';

const ActionsCell: React.FC<Catagory> = ({ Name }) => {
    const handleClick = () => {};
    return (
        <>
            <EditIcon
                onClick={handleClick}
                style={{ marginRight: 7 }}
                size={20}
            />
            <DeleteIcon onClick={handleClick} size={20} />
        </>
    );
};

function Catagories() {
    const [catagories, setCatagories] = useState<Catagory[]>([]);

    const getCatagories = useCallback(async () => {
        const url: string = `/catagories`;
        try {
            const response = await get<Catagory[]>(url);
            setCatagories(response.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        getCatagories();
    }, [getCatagories]);

    return (
        <POSTable<Catagory>
            rows={catagories}
            columns={[
                {
                    id: 'Name',
                    align: 'left',
                    Head: '',
                    width: '35%',
                },

                {
                    id: 'Date',
                    align: 'left',
                    Head: '',
                    width: '35%',
                },

                {
                    id: 'Acitons',
                    align: 'left',
                    width: '30%',
                    Head: TableCell,
                    Cell: ActionsCell,
                },
            ]}
            title="Catagories"
            isPaginated
        ></POSTable>
    );
}

export default Catagories;
