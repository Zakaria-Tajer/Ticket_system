<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tickets;
use App\Models\Clients;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TicketController extends Controller
{
    public function insertTicket(Request $request)
    {
        $fields = $request->validate([
            'Ticket_Title' => 'required|string',
            'ticket_text' => 'required|string',
            'clients_id' => 'string',
            'category' => 'required|string'
        ]);
        
        $ticket = Tickets::create([
            'Ticket_Title' => $fields['Ticket_Title'],
            'ticket_text' => $fields['ticket_text'],
            'clients_id' => $fields['clients_id'],
            'category' => $fields['category'],
            'uniques_id' => bin2hex(random_bytes(5))
        ]);

        return response($ticket,201);
    }   
    

    public function getTicket(Request $request)
    {
        $data = DB::table('tickets')->where('clients_id','=',$request->clients_id)->get(); 
        return json_decode($data);
    }
    public function deleteTicket(Request $request)
    {
        $row = DB::table('tickets')->where('uniques_id', $request->unique_id)->delete();
        return response($row, 201);
    }

    public function closingTickets(Request $request)
    {
        $rowUpdated = DB::table('tickets')->where('uniques_id', $request->unique_id)->update(array('status'=> 'closed'));

        if($rowUpdated)
        {
            echo 'success';
        }else {
            echo 'failed';
        }
    }

    public function closedTicket()
    {
        $closedTickets = DB::table('tickets')->where('status', '=', 'closed')->get();
        echo $closedTickets;
    }
    public function allTickets()
    {
        return Tickets::all();   
    }
    public function getUniqueId(Request $request)
    {
        $unique_id = DB::table('tickets')->where('id', '=', $request->id)->get('uniques_id');
        return $unique_id;
    }

    public function getAdminRespondedTickets()
    {
        $data = DB::table('resps')->get();    
        return json_decode($data);
    }

}
