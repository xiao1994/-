var swiper_img = [
  'http://img4.imgtn.bdimg.com/it/u=357230454,230895532&fm=27&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=2503700276,1530813578&fm=27&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=2563346207,295360227&fm=200&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=19648601,3455646529&fm=27&gp=0.jpg'
]

var icons_container = [
  {
    content1: "专线物流",
    content2: "专业调车"
  },
  {
    content1: "搬家公司",
    content2: "国际物流"
  },
  {
    content1: "物流保险",
    content2: "物流装备"
  },
  {
    content1: "车辆买卖",
    content2: "档口转租"
  },
  {
    content1: "招商加盟",
    content2: "招聘求职"
  }
]

var sign_in = [
  {
    id: "phone",
    img: "/images/input/phone.png",
    line: "/images/icon/vertical-line.png",
    content: "手机号",
  },
  {
    id: "password",
    img: "/images/input/lock.png",
    line: "/images/icon/vertical-line.png",
    content: "登陆密码(6-11)位",
  }
]

var sign_up = [
  {
    id: "phone",
    img: "/images/input/phone.png",
    line: "/images/icon/vertical-line.png",
    content: "手机号"
  }, {
    id: "userName",
    img: "/images/input/user.png",
    line: "/images/icon/vertical-line.png",
    content: "用户名(3-11)位"
  }, {
    id: "password",
    img: "/images/input/lock.png",
    line: "/images/icon/vertical-line.png",
    content: "密码(6-11)位"
  }, {
    id: "passwordAgain",
    img: "/images/input/lock.png",
    line: "/images/icon/vertical-line.png",
    content: "重复确认密码"
  }, {
    id: "code",
    img: "/images/input/code.png",
    line: "/images/icon/vertical-line.png",
    content: "手机验证码",
    phoneCode: "true",
  },
]

var id_content = [
  {
    id:"telephone",
    title: "备用电话",
    content: "座机或者其它手机"
  },
  {
    id:"idName",
    title: "真实姓名",
    content: "必填"
  }, {
    id:"address",
    title: "住址",
    content: "住址"
  }, {
    id:"idNumber",
    title: "身份证号",
    content: "必填"
  },
]

var id_img = [
  {
    img: "/images/input/id-face.jpg",
    title: "身份证正面照"
  },
  {
    img: "/images/input/id-opposite.jpg",
    title: "身份证反面照"
  },
  {
    img: "/images/input/id-hand.jpg",
    title: "手持身份证正面照"
  },
]

var sign_phone = [
  {
    img: "/images/input/phone.png",
    content: "手机号"
  },
  {
    img: "/images/input/code.png",
    content: "手机验证码",
    phoneCode: "true"
  }
]

var password = [
  {
    content: "请输入新密码"
  },
  {
    content: "确认新密码"
  }
]

var me = [
  {
    img: "/images/input/key.png",
    text: "修改密码"
  },
  {
    img: "/images/input/quit.png",
    text: "退出当前账号"
  }
]

var city_container = [
  {
    city1: "北京",
    city2: "上海",
    city3: "广东",
    city4: "湖南",
  },
  {
    city1: "湖北",
    city2: "河南",
    city3: "香港",
    city4: "台湾",
  },
  {
    city1: "北京",
    city2: "上海",
    city3: "广东",
    city4: "湖南",
  },
  {
    city1: "湖北",
    city2: "河南",
    city3: "香港",
    city4: "台湾",
  },
]

module.exports = {
  swiper_img: swiper_img,
  icons_container: icons_container,
  sign_in: sign_in,
  sign_up: sign_up,
  id_content: id_content,
  id_img: id_img,
  sign_phone: sign_phone,
  password: password,
  me: me,
  city_container: city_container
}