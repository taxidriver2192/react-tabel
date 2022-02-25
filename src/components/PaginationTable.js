import React, {useMemo} from 'react'
import {useTable, usePagination} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS} from "./columns"
import './Table.css'

export const PaginationTable = () => {

    //const columns = useMemo(() => GRUPED_CCOLUMNS, []);
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        gotoPage,
        pageCount,
        pageOptions,
        state,
        prepareRow, 
    } = useTable({
        columns,
        data,
        initialState:{ pageIndex : 2}
    },
    usePagination
    )

    const { pageIndex } = state

    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) =>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div>
        <span>
                Go to page: {' '}
                <input type='number' defaultValue={pageIndex + 1} onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }} style={{width: '50px'}}/>
            </span>
            <br/>
            <span>
                page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <br/>
            <span>
            
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>next</button>

            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </span>
        </div>
        </>
    )
}