<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class student extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker =
            \Faker\Factory::create();
        DB::table("students")->insert([
            "username" => $faker->username(),
            "email" => $faker->safeEmail,
            "phone_no" => $faker->phoneNumber(),
            "age" => $faker->numberBetween(25, 50),
            "gender" => $faker->randomElement(["male", "female"])
        ]);
    }
}
