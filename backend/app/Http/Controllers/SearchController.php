<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Search;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        return json_encode(DB::table('searches')->where('category', 'like', '%'.$request->keyword.'%')->get());
    }
    public function Create(Request $request)
    {
        $category = Search::create([
            'category' => $request->category,
            
        ]);
        echo $category;
    }
    public function getCategories()
    {
        return json_encode(Search::all(['category']));
    }
}
