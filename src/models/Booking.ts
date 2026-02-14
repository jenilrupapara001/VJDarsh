import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
    name: string;
    email: string;
    phone?: string;
    eventType: string;
    date: string;
    budget?: string;
    message: string;
    status: "pending" | "contacted" | "booked" | "archived";
}

const BookingSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    eventType: { type: String, required: true },
    date: { type: String, required: true },
    budget: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ["pending", "contacted", "booked", "archived"], default: "pending" },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
