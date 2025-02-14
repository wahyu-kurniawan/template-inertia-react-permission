import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import CustomButton from '@/Components/CustomButton';

export default function RoleIndex() {
    const { data, setData, post, processing, errors, reset } = useForm({
            name: '',
        });
    
        const submit = (e) => {
            e.preventDefault();
    
            post(route('roles.store'), {
                onFinish: () => reset('name'),
            });
        };
   
    return (
        <AdminLayout
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                <div className='w-full flex items-end justify-end my-3'>
                    <Link href={route('roles.index')} className='px-4 py-2 bg-green-400 rounded-md hover:text-white hover:bg-green-500 font-medium'>Kembali</Link>
                </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="name" value="Nama Role" />
            
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
            
                                <InputError message={errors.name} className="mt-2" />
                            </div>
            
                            
            
                            <div className="mt-4 w-full">
            
                                <CustomButton className="w-full text-center" disabled={processing}>
                                    Buat
                                </CustomButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
