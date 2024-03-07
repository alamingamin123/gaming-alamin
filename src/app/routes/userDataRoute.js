import express from 'express'
import { createUserData, deleteUserDataById, getUserData } from '../controller/userController.js'

//router object
const router = express.Router()

router.post('/create-userData', createUserData)
router.get('/user-allData', getUserData)
router.delete('/:id', deleteUserDataById)

export default router
