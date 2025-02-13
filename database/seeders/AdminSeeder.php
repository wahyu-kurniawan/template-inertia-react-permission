<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create(
            [
                'name' => 'admin',
                'email' => 'admin@mail.com',
                'email_verified_at' => now(),
                'password' => '$2y$12$U3Bdyraxu4kIIXFjllHxxO1FE47.uMhc4Qe/Outx5WD5cw6M5Pfuy'
            ]
            )->assignRole('admin')
            ;
    }
}
