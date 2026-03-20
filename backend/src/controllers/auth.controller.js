import {asyncHandler} from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
    // registerUser
});

const verifyEmail = asyncHandler(async (req, res) => {
    // verifyEmail
    
});

const resendEmailVerification = asyncHandler(async (req, res) => {
    // resendEmailVerification
});

const loginUser = asyncHandler(async (req, res) => {
    // loginUser
});

const logoutUser = asyncHandler(async (req, res) => {
    // logoutUser
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
    
});
const resetForgottenPassword = asyncHandler(async (req, res) => {
    
});
const changeCurrentPassword = asyncHandler(async (req, res) => {
    
});
const getCurrentUser = asyncHandler(async (req, res) => {
    
});



export {
    registerUser,
    verifyEmail,
    resendEmailVerification,
    loginUser,
    logoutUser,
    refreshAccessToken,
    forgotPasswordRequest,
    resetForgottenPassword,
    changeCurrentPassword,
    getCurrentUser
};