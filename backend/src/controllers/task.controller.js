import asyncHandler from "../utils/async-handler.js";

const getTasks = asyncHandler(async (req, res) =>{
 // getTasks
});

const getTaskById = asyncHandler(async (req, res) =>{
 // getTaskById
});

const createTask = asyncHandler(async (req, res) =>{
 // createTask
});

const updateTask = asyncHandler(async (req, res) =>{
 // updateTask
});

const deleteTask = asyncHandler(async (req, res) =>{

});

const createSubTask = asyncHandler(async (req, res) =>{

});

const updateSubTask = asyncHandler(async (req, res) =>{

});

const deleteSubTask = asyncHandler(async (req, res) =>{

});

export {
  createSubTask,
  createTask,
  deleteSubTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateSubTask,
  updateTask,
};