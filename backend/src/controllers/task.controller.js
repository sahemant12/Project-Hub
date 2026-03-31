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
 // deleteTask
});

const createSubTask = asyncHandler(async (req, res) =>{
 // createSubTask
});

const updateSubTask = asyncHandler(async (req, res) =>{
// updateSubTask
});

const deleteSubTask = asyncHandler(async (req, res) =>{
 // deleteSubTask
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