import { asyncHandler } from "../utils/async-handler.js";

const getNotes = asyncHandler(async (req, res) =>{
    // getNotes
});
const getNoteById = asyncHandler(async (req, res) =>{
    // getNoteById
});
const createNote = asyncHandler(async (req, res) =>{
    // createNote
});
const updateNote = asyncHandler(async (req, res) =>{
    // updateNote
});
const deleteNote = asyncHandler(async (req, res) =>{

});

export { 
    createNote, 
    deleteNote, 
    getNoteById, 
    getNotes, 
    updateNote 
};
