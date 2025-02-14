import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function RoleIndex({roles}) {
    const head = [
        'No',
        'Nama',
    ] 
    return (
        <AdminLayout
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className='w-full flex items-end justify-end my-3'>
                    <Link href={route('roles.create')} className='px-4 py-2 bg-green-400 rounded-md hover:text-white hover:bg-green-500 font-medium'>Buat</Link>
                </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div>
                            <Table>
                                <TableCaption>A list of your roles.</TableCaption>
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
                                        roles.data &&
                                        roles.data.map((body,index) => (
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
