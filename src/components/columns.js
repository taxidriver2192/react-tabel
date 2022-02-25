import { format } from "date-fns"
import { ColumFilter } from "./ColumnFilter"

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true,
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'Date_of_Birth',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'Country',
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'Phone',
    },
]
export const GRUPED_CCOLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns:[
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns:[
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'Date_of_Birth'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'Country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'Phone'
            },
        ]
    }
]