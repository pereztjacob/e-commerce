import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcryptjs';

const schema = new Schema({
  name: { 
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hash: String,
  photo: String,
  cart: Array,
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
});

schema.methods = {
  generateHash(password){
    this.hash = bcrypt.hashSync(password, 8);
  },
  comparePassword(password){
    return bcrypt.compareSync(password, this.hash);
  }
};

const User = mongoose.model('User', schema);
export { User };

// export default mongoose.model('User', schema);