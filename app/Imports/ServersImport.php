<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithMappedCells;

class ServersImport implements ToCollection, WithMappedCells
{
    public function mapping(): array
    {
        return [
            'model'  => 'A1',
            'ram' => 'A2',
        ];
    }

    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        $collection->each(function ($item, $key) {
            print_r($key. " " . $item);
        });
    }
}
