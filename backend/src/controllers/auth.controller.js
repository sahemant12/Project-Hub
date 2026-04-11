import {asyncHandler} from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
    // registerUser
    // get jsonwebtoken
});

const verifyEmail = asyncHandler(async (req, res) => {
    // verifyEmail
    
});

const resendEmailVerification = asyncHandler(async (req, res) => {
    // resendEmailVerification
});

const loginUser = asyncHandler(async (req, res) => {
    // loginUser
    // log in
});

const logoutUser = asyncHandler(async (req, res) => {
    // logoutUser
    // log out
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    // refreshAccessToken
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
});
const resetForgottenPassword = asyncHandler(async (req, res) => {re
});
const changeCurrentPassword = asyncHandler(async (req, res) => {
    // changeCurrentPassword
});
const getCurrentUser = asyncHandler(async (req, res) => {
    // getCurrentUser
    // getCurrentUserInfo
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