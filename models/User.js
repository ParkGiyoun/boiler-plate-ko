const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50, //최대 길이
  },
  email: {
    type: String,
    trim: true, //String 에 스페이스 있을 때 없애주는 놈
    unique: 1, // 똑같은 건 쓰지 못하게 함.
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    //나중에 유효성 같은거 관리
    type: String,
  },
  tokenExp: {
    //토큰 사용기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

//다른 곳에서도 쓸 수 있도록
module.exports = { User };
