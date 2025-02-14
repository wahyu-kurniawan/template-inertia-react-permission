import { DataTable } from '@/Components/DataTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function UserIndex({users}) {
    const head = [
        'No',
        'Nama',
        'Email',
        'Role',
        'Permission'
    ] 
    return (
        <AdminLayout
            
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                       
                        <div>
                            {/* <DataTable thead={head} tbody={users.data}/> */}
                            <Table>
                                        <TableCaption>A list of your recent users.</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                {
                                                    head &&
                                                    head.map((head) => (
                                                        <TableHead className="w-[100px]" key={head}>{head}</TableHead>
                                                    ))
                                                }
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {
                                                users.data &&
                                                users.data.map((body,index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index+1}</TableCell>
                                                    <TableCell className="font-medium">{body.name}</TableCell>
                                                    <TableCell className="font-medium">{body.email}</TableCell>
                                                    <TableCell className="font-medium">{body.roles && body.roles.map(element => (
                                                        element
                                                    )
                                                    
                                                    )}</TableCell>
                                                    <TableCell className="font-medium">{body.permissions && body.permissions.map(element => (
                                                        element
                                                    ))}</TableCell>
                                                </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
