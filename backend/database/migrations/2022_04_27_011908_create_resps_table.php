<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resps', function (Blueprint $table) {
            $table->id();
            $table->text('ResponseText');
            $table->string('status')->default('onHold');
            $table->unsignedBigInteger('response_ticket_id');
            $table->foreign('response_ticket_id')->references('id')->on('tickets')->onUpdate('cascade')->onDelete('cascade');    
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
        Schema::dropIfExists('resps');
    }
};
