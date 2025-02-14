import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function PermissionIndex() {
    return (
        <AdminLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Permission
            </h2>
        }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Permission Index Page
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
