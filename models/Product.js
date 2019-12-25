import mongoose, { Schema, Mongoose } from 'mongoose';
import shortid from 'shortid';

const { String, Number } = Schema.Types;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  name: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate9,
  },
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
