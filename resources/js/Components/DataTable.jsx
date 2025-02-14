import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export const DataTable = ({thead,tbody}) => {
  return (
    <div>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    {
                        thead &&
                        thead.map(head => (
                            <TableHead className="w-[100px]" key={head}>{head}</TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    tbody &&
                    tbody.map((body,index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium" key={index}></TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}
