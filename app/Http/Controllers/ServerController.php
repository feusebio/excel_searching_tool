<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ServersImport;
use stdClass;

class ServerController extends Controller
{
    public function import(Request $request){
        $serversArray = Excel::toArray(new stdClass(), $request->file('file'));
        $servers = [];
        $heading = true;
        foreach ($serversArray[0] as $item) {
//            print_r($item[0]." # " .$item[1]." # " . $item[2] . "</br>");
            if(!$heading){
                $server = [
                    'model' => $item[0],
                    'ram' => $item[1],
                    'hdd' => $item[2],
                    'location' => $item[3],
                    'price' => $item[4],
                    'ramCapacity' => $this->ramCapacity($item[1]),
                    'hddType' => $this->hddType($item[2]),
                    'storageCapacity' => ''
                ];
                $servers[] = $server;
            }
            $heading = false;
        }

        return [
            'status' => 'success',
            'data' => $servers
        ];
    }

    private function hddType($hddText){
        $index = '';
        switch ($hddText){
            case strpos($hddText, 'SAS') > 0:
                $index = 'SAS';
                break;
            case strpos($hddText, 'SATA') > 0:
                $index = 'SATA';
                break;
            case strpos($hddText, 'SSD') > 0:
                $index = 'SSD';
                break;
        }
        return $index;
    }

    private function ramCapacity($ramText){
        $ram = explode('GB', $ramText);
        return $ram[0];
    }

    private function storageCapacity($storageText){
        /*$storage = explode('GB', $storageText);
        or
        $storage = explode('TB', $storageText);
        return $storage[0];*/
    }
}
