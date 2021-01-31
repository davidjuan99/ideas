<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function mostrarNotas()
    {
        $notas=DB::table('notes')->get();
        // return view('home',compact('notas'));
        return response()->json($notas, 200);
    }

    public function index() {
        return view('home');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function eliminarNota(Request $request){
        try {
            DB::delete('DELETE FROM notes WHERE id=?', [$request->input('id'),$request->input('id')]);
            //redirigir a la BBDD
            return response()->json(array('resultado'=>'OK'), 200);
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=>'NOK'.$th->getMessage()), 200);
            //throw $th;
        }
        // return redirect('home');
    }

    public function crearNota(Request $request){
        try {
        $datos=$request->except('_token', 'Crear');
        DB::insert('INSERT INTO notes(title,description) VALUES(?,?)', [$request->input('title'), $request->input('description')]);
        // return redirect('home');
        return response()->json(array('resultado'=>'OK'), 200);
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=>'NOK'.$th->getMessage()), 200);
        }
    }

    public function meterNotaForm($id){
        $nota1=DB::table('notes')->where('id','=',$id)->first();
    }

    public function modificarNota($id, Request $request){
        $datos=$request->except('_token','_method','actuali');
        // return $datos;
        DB::table('notes')->where('id','=',$id)->update($datos);
        // redirigimos a la vista mostrar.
        return redirect('home');
    } 

    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        //
    }
}
