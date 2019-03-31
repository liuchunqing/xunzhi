const MOCKURL='http://www.baidu.com/';
const SERVERURL='http://localhost:3000/';

const URL={
  getUser:MOCKURL+'getUser',
  registerUser:SERVERURL+'user/registUser',
  //loginUser: SERVERURL + 'user/loginUser',
  loginUser:'https://api.auauz.net/auth/login',
  xunzhiList:'http://blog.gdfengshuo.com/example/work/static/vuetable.json',
  getTypes: SERVERURL + 'type/getTypes',
  getProductsByType: SERVERURL + 'product/getProductsByType'
}
export default URL;