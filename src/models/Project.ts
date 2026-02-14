import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    title: string;
    slug: string;
    category: string;
    description: string;
    mediaUrl: string;
    thumbnailUrl: string;
    toolsUsed: string[];
    date: Date;
    featured: boolean;
    year?: string;
    client?: string;
    role?: string;
}

const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    mediaUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    toolsUsed: { type: [String], default: [] },
    date: { type: Date, default: Date.now },
    featured: { type: Boolean, default: false },
    year: { type: String },
    client: { type: String },
    role: { type: String },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
