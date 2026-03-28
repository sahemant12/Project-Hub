import { asyncHandler } from "../utils/async-handler";


const getProjects = asyncHandler(async (req, res) =>{
 // getProjects
});

const getProjectById = asyncHandler(async (req, res) =>{
  // getProjectById
});

const createProject = asyncHandler(async (req, res) =>{
 // createProject
});

const updateProject = asyncHandler(async (req, res) =>{
 // updateProject
});

const deleteProject = asyncHandler(async (req, res) =>{
 // deleteProject
});

const addMemberToProject = asyncHandler(async (req, res) =>{
 // addMemberToProject
});

const getProjectMembers = asyncHandler(async (req, res) =>{
 // getProjectMembers
});

const updateMemberRole = asyncHandler(async (req, res) =>{
 // updateMemberRole
});

const deleteMember = asyncHandler(async (req, res) =>{
 // deleteMember
});

export {
  addMemberToProject,
  createProject,
  deleteMember,
  deleteProject,
  getProjectById,
  getProjectMembers,
  getProjects,
  updateMemberRole,
  updateProject,
};