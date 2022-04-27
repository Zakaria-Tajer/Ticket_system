<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('uniques_id');
            $table->string('Ticket_Title');
            $table->text('ticket_text');
            $table->string('category');
            $table->string('status')->default('onHold');
            $table->unsignedBigInteger('clients_id');
            $table->foreign('clients_id')->references('id')->on('clients')->onUpdate('cascade')->onDelete('cascade');    
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
};
