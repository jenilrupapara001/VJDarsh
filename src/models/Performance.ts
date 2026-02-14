import mongoose, { Schema, Document } from "mongoose";

export interface IPerformance extends Document {
    title: string;
    venue: string;
    location: string;
    date: string; // Storing as string for display flexibility or Date object
    description: string;
    imageUrl?: string;
}

const PerformanceSchema: Schema = new Schema({
    title: { type: String, required: true },
    venue: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
}, { timestamps: true });

export default mongoose.models.Performance || mongoose.model<IPerformance>("Performance", PerformanceSchema);
