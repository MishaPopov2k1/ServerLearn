import mongoose from 'mongoose';

//деструктуризация схемы из монгуса
//const { Schema } = mongoose;

//способ 2
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
});

//экспортируем результат работы этой функции, а именно модель
export default mongoose.model('User', userSchema);
