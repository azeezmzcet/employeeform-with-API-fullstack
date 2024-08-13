<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\empform;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Exception;

class EmployeeController extends Controller
{
    public function index()
    {
        try {
            $employees = empform::all();
            return response()->json($employees);
        } catch (Exception $e) {
            return response()->json(['error' => ' general unxpected not found issues', 'message' => 'not found'], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $employee = empform::create($request->all());
            return response()->json($employee, 201);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Failed to create employee', 'message' => 'please create employee database'], 400);
        } 
    }
  
    public function show(string $id)
    {
        try {
            $employee = empform::findOrFail($id);
            return response()->json($employee);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Employee not found', 'message' => 'employee not created'], 404);
        } 
    }  

    public function update(Request $request, string $id)
    {
        try {
            $employee = empform::findOrFail($id);
            $employee->update($request->all());
            return response()->json($employee);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Employee not found', 'message' => 'employee not created'], 404);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Failed to update employee', 'message' => 'employee not created'], 400);
        } 
    }

    public function destroy(string $id)
    {
        try {
            $employee = empform::findOrFail($id);
            $employee->delete();
            return response()->json(['message' => 'Employee deleted']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Employee not found', 'message' => 'not founf'], 404);
        } 
    }
}
