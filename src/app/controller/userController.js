import { userDataModel } from "../models/userModel.js";

export const createUserData = async (req, res) => {
    try {
        const { name, email, number } = req.body;

        if (!name || !email || !number) {
            return res.status(422).json({ error: 'Please fill in all fields properly' });
        }

        // Check if either email or number already exists
        const userExist = await userDataModel.findOne({ $or: [{ email }, { number }] });

        if (userExist) {
            // Determine if the duplicate is due to email or number
            const duplicateField = userExist.email === email ? 'email' : 'number';
            return res.status(400).json({
                success: false,
                message: `The ${duplicateField} already exists. Please use a different ${duplicateField}.`
            });
        }

        const newUserData = await new userDataModel({
            name,
            email,
            number
        }).save();

        res.status(201).send({
            success: true,
            message: 'User Created Successfully',
            userData: newUserData,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in User Creation',
            error,
        });
    }
};

export const getUserData = async (req, res) => {
    try {
        const userData = await userDataModel.find().sort({ createdAt: -1 });
        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in retrieving user data',
            error,
        });
    }
};

export const deleteUserDataById = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the document by ID and delete it
        const deletedUserData = await userDataModel.findByIdAndDelete(id);

        if (!deletedUserData) {
            return res.status(404).json({ error: 'User data not found' });
        }

        res.status(200).json({ message: 'User data deleted successfully', deletedUserData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error in deleting user data', error });
    }
};