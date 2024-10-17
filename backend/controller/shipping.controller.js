import express from 'express'
import ShippingDetails from '../model/shipping.model.js';


export const addShippingDetails = async (req, res) => {
    try {
        const { userId, country , fullName, address, city, phone, postalCode } = req.body;
        if (!userId || !address || !country || !city || !phone || !postalCode) {
            return res.status(400).json({ msg: "Invalid data" })
        }
        const newShippingDetails = await new ShippingDetails({
            userId,
            fullName,
            address,
            country,
            city,
            phone,
            postalCode
        })

        if (newShippingDetails) {
            await newShippingDetails.save();
        }

        return res.status(200).json({ msg: "Shipping details added successfully" })

    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" })
    }
}

export const allShippingDetails = async (req, res) => {
    try {
        const shippingDetails = await ShippingDetails.find();
        if (shippingDetails) {
            return res.status(200).json(shippingDetails)
        } else {
            return res.status(400).json({ msg: "No shipping details found" })
        }
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" })
    }
}

export const updateShippingDetails = async (req, res) => {
    try {
        const userId = req.params.userId
        const { address, fullName,country, city, phone, postalCode } = req.body;
        if (!address || !city || !country || !phone || !postalCode) {
            return res.status(400).json({ msg: "Invalid data" })
        }
        const updatedShippingDetails = await ShippingDetails.findOneAndUpdate({ userId: userId }, {
            address,
            fullName,
            country,
            city,
            phone,
            postalCode
        })

        if (updatedShippingDetails) {
            return res.status(200).json({ msg: "Shipping details updated successfully" })
        } else {
            return res.status(400).json({ msg: "Shipping details not found" })
        }
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" })
    }
}

export const deleteShippingDetails = async (req, res) => {
    try {
        const userId = req.params.userId
        const deleteShippinDetails = await ShippingDetails.findOneAndDelete({ userId: userId })

        if (deleteShippinDetails) {
            return res.status(200).json({ msg: "Shipping details deleted successfully" })
        } else {
            return res.status(400).json({ msg: "Shipping details not found" })
        }
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" })
    }
}

export const findDetailByUserId = async (req, res) => {
    try {
        const userId = req.params.userId
        const shippingDetails = await ShippingDetails.findOne({ userId: userId })
        if (shippingDetails) {
            return res.status(200).json(shippingDetails)
        } else {
            return res.status(400).json({ msg: "Shipping details not found" })
        }

    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" })
    }
}