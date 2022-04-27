<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resp;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class TicketsResController extends Controller
{
    public function getResponse(Request $request)
    {
        $fields = $request->validate([
            'ResponseText' => 'required|string',
            'status' => 'required|string',
            'response_ticket_id' => 'string'          
        ]);
        // dd($request->all());
        
        Resp::create([
            'ResponseText' => $fields['ResponseText'],
            'status' => $fields['status'],
            'response_ticket_id' => $request->response_ticket_id
        ]);
        $update = DB::table('tickets')->where('id', $request->response_ticket_id)->update(array('status'=> $request->status));
        
        return Response($update,201);
    }


    public function ResponseTickets(Request $request)
    {
        return DB::table('resps')
            ->join('tickets', 'resps.response_ticket_id',"=",'tickets.id')
            ->join('clients', 'tickets.clients_id', "=", 'clients.id')
            ->where('clients.id', "=", $request->id)
            // ->limit(1)
            ->get();
    }

}
