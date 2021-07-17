import express, { Request, Response, NextFunction, Router } from 'express';
import Menus from '../schemas/menu';
import Shops from '../schemas/store';

const menuPost = express.Router();

menuPost.post('/', async (req, res) => {
  const bhc_menu = [
    {
      "name": "뿌링클",
      "price": 17000,
      "image": "http://www.bhc.co.kr//upload/bhc/menu//BB(0).jpg"
    },
    {
      "name": "뿌링클HOT",
      "price": 18000,
      "image": "http://www.bhc.co.kr//upload/bhc/menu//BBUHOT.jpg"
    },
    {
      "name": "커리퀸",
      "price": 17000,
      "image": "http://www.bhc.co.kr//upload/bhc/menu//썸네일_커리퀸_상세(2).jpg"
    },
    {
      "name": "맛초킹",
      "price": 17000,
      "image": "http://www.bhc.co.kr//upload/bhc/menu//macho_20150728_v(1).jpg"
    },
    {
      "name": "해바라기 후라이드",
      "price": 15000,
      "image": "http://www.bhc.co.kr//upload/bhc/menu//410_0024_해바라기%20후라이드%20치킨(2).jpg"
    }
  ]

  const kyochon_menu = [
    {
      "name": "교촌오리지날",
      "price": 15000,
      "image": "http://www.kyochon.com/uploadFiles/TB_ITEM/브랜드_list_15-10-221047(3).png"
    },
    {
      "name": "교촌허니콤보",
      "price": 18000,
      "image": "http://www.kyochon.com/uploadFiles/TB_ITEM/교촌-허니-콤보.png"
    },
    {
      "name": "교촌레드오리지날",
      "price": 16000,
      "image": "http://www.kyochon.com/uploadFiles/TB_ITEM/브랜드_list_15-10-231088.png"
    },
    {
      "name": "교촌신화오리지날",
      "price": 18000,
      "image": "http://www.kyochon.com/uploadFiles/TB_ITEM/신화오리지날-(3).png"
    },
    {
      "name": "교촌오리지날",
      "price": 15000,
      "image": "http://www.kyochon.com/uploadFiles/TB_ITEM/브랜드_list_15-10-221047(3).png"
    }
  ]

  const puradak_menu = [
    {
      "name": "푸라닭치킨",
      "price": 15900,
      "image": "https://www.puradakchicken.com/upload/menu/메뉴-010.png"
    },
    {
      "name": "고추마요치킨",
      "price": 17900,
      "image": "https://www.puradakchicken.com/upload/menu/메뉴-290.png"
    },
    {
      "name": "블랙알리오",
      "price": 17900,
      "image": "https://www.puradakchicken.com/upload/menu/메뉴-040.png"
    },
    {
      "name": "투움바치킨",
      "price": 18900,
      "image": "https://www.puradakchicken.com/upload/menu/(교체)투움바치킨0.jpg"
    },
    {
      "name": "제너럴 핫 치킨",
      "price": 17900,
      "image": "https://www.puradakchicken.com/upload/menu/메뉴_PC-720.png"
    }
  ]

  const bbq_menu = [
    {
      "name": "황금올리브치킨",
      "price": 18000,
      "image": "https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/BBQ_앱_썸네일(480x480)_후라이드류_황금올리브치킨_수정_out.png"
    },
    {
      "name": "극한왕갈비치킨",
      "price": 21000,
      "image": "https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200717_BBQ_앱_썸네일(양념류)_극한왕갈비.png"
    },
    {
      "name": "오리지날 양념 치킨",
      "price": 19500,
      "image": "https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20200702_BBQ_앱_섬네일_시크릿양념.png"
    },
    {
      "name": "메이플버터갈릭",
      "price": 19900,
      "image": "https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/1.20200929_BBQ_메이플버터갈릭치킨_6조각_썸네일(480x480).png"
    },
    {
      "name": "마라 핫치킨",
      "price": 18900,
      "image": "https://img.bbq.co.kr:449/uploads/bbq_d/thumbnail/20210413_BBQ_앱_썸네일(480x480)_양념류_마라핫_수정.png"
    }
  ]

  const gubne_menu = [
    {
      "name": "굽네치킨",
      "price": 18000,
      "image": "https://image.happymoney.co.kr/extimage/allianceProduct/20191128134627.png"
    },
    {
      "name": "갈릭마왕",
      "price": 18000,
      "image": "https://order.goobne.co.kr:8481//Upload/menu//2021041411495538_acbfl1e8.jpg"
    },
    {
      "name": "갈비천왕",
      "price": 17000,
      "image": "https://order.goobne.co.kr:8481//Upload/menu//101030414.png"
    },
    {
      "name": "고추바사삭",
      "price": 16000,
      "image": "https://order.goobne.co.kr:8481//Upload/menu//굽네고추바사삭_L_01.png"
    },
    {
      "name": "허니멜로",
      "price": 18000,
      "image": "https://order.goobne.co.kr:8481//Upload/menu//2018060809144539_apu168!^.png"
    },
    {
      "name": "오리지널",
      "price": 15000,
      "image": "https://order.goobne.co.kr:8481//Upload/menu//굽네오리지널치킨_L_01.png"
    }
  ]

  const themat = [
    {
      "name": "더맛있는족발보쌈",
      "price": 27000,
      "image": "https://cdn.imweb.me/thumbnail/20210324/e9c3958dd079c.png"
    } ,
    {
      "name": "직화마늘족발",
      "price": 27000,
      "image": "https://cdn.imweb.me/thumbnail/20191218/66465bd604a63.png"
    },
    {
      "name": "족발+불족",
      "price": 29000,
      "image": "https://cdn.imweb.me/thumbnail/20191218/ac54b1e758fe9.png"
    },
    {
      "name": "족발",
      "price": 26000,
      "image": "https://cdn.imweb.me/thumbnail/20191218/fd8487c01e1ef.png"
    },
    {
      "name": "냉채족발",
      "price": 35000,
      "image": "https://cdn.imweb.me/thumbnail/20191218/61eaedef71cc4.png"
    },
    {
      "name": "직화불족",
      "price": 27000,
      "image": "https://cdn.imweb.me/thumbnail/20191218/49d7f360dee65.png"
    }
  ]

  const onegrandma = [
    {
      "name": "모둠보쌈",
      "price": 32000,
      "image": "https://wonandone.co.kr/_xUpFiles/xMenu/20200410105824841152814.jpg"
    },
    {
      "name": "솜씨보쌈",
      "price": 32000,
      "image": "https://wonandone.co.kr/_xUpFiles/xMenu/20200410105611542472959.jpg"
    },
    {
      "name": "솜씨맵쌈",
      "price": 32000,
      "image": "https://wonandone.co.kr/_xUpFiles/xMenu/20200410105834475059552.jpg"
    },
    {
      "name": "맛보쌈",
      "price": 31000,
      "image": "https://wonandone.co.kr/_xUpFiles/xMenu/20200410105834475059552.jpg"
    },
    {
      "name": "의성마늘떡보쌈",
      "price": 35000,
      "image": "https://wonandone.co.kr/_xUpFiles/xMenu/20200630214859844946256.jpg"
    }
  ]

  const samdae = [
    {
      "name": "족발",
      "price": 18000,
      "image": "http://www.삼대족발.com/theme/samde/img/menu-pic01.jpg"
    },
    {
      "name": "보쌈",
      "price": 23000,
      "image": "http://www.삼대족발.com/theme/samde/img/menu-pic02.jpg"
    },
    {
      "name": "반반메뉴",
      "price": 35000,
      "image": "http://www.삼대족발.com/theme/samde/img/menu-pic04.jpg"
    },
    {
      "name": "냉채족발",
      "price": 35000,
      "image": "http://www.삼대족발.com/theme/samde/img/menu-pic05.jpg"
    },
    {
      "name": "직화불족발",
      "price": 35000,
      "image": "http://www.삼대족발.com/theme/samde/img/menu-pic03.jpg"
    }
  ]

  const jangchungdong = [
    {
      "name": "학센 갈비맛 족발",
      "price": 34000,
      "image": "http://www.1588-3300.co.kr/thum_img/jcd15883300/myboard/ffc522accdd0701de88f3a365abab175_water__c0_w400_h400.png"
    },
    {
      "name": "장충동왕족발",
      "price": 29000,
      "image": "http://www.1588-3300.co.kr/thum_img/jcd15883300/myboard/0abb0be727a26ecaa2c84bac0f374c40_water__c0_w400_h400.png"
    },
    {
      "name": "장충동왕보쌈",
      "price": 29000,
      "image": "http://www.1588-3300.co.kr/thum_img/jcd15883300/myboard/6d29d1de0b6f2b7d300575c47a770175_water__c0_w400_h400.png"
    },
    {
      "name": "마늘족발",
      "price": 32000,
      "image": "http://www.1588-3300.co.kr/thum_img/jcd15883300/myboard/ebae93c8d05e0d7cb42dbb409fafa0cb_water__c0_w400_h400.png"
    },
    {
      "name": "쟁반국수",
      "price": 12000,
      "image": "http://www.1588-3300.co.kr/thum_img/jcd15883300/myboard/61688b1127441dae03798ecf85393ea7_water__c0_w400_h400.png"
    }
  ]

  const gajang = [
    {
      "name": "가족의 족보",
      "price": 31000,
      "image": "https://gajok.kr/upload/food/20201006155100_4766_족보섬네일.jpg"
    },
    {
      "name": "냉채족발",
      "price": 34000,
      "image": "https://gajok.kr/upload/food/20200925213851_6464_sodcowhrqkf.jpg"
    },
    {
      "name": "반반족발",
      "price": 31000,
      "image": "https://gajok.kr/upload/food/20201007113941_8744_반반섬네일.jpg"
    },
    {
      "name": "보쌈",
      "price": 29000,
      "image": "https://gajok.kr/upload/food/20200925213629_7437_qhtka.jpg"
    },
    {
      "name": "직화불족발",
      "price": 29000,
      "image": "https://gajok.kr/upload/food/20200925214209_1522_wlrghkqnfwhrqkf.jpg"
    }
  ]

  const sinjeon = [
    {"name" : "떡볶이", "price": 3000, "image": "http://sinjeon.co.kr/img/sub/menu03_dduk1.png"},
{"name" : "로제떡볶이", "price": 5000, "image": "http://sinjeon.co.kr/img/sub/menu03_dduk3.png"},
{"name" : "오뎅튀김(6개)", "price": 1500, "image": "http://sinjeon.co.kr/img/sub/menu01/menu4.png"},
{"name" : "잡채말이튀김(3개)", "price": 1500, "image": "http://sinjeon.co.kr/img/sub/menu01/menu6.png"},
{"name" : "오징어튀김(3개)", "price": 2500, "image": "http://sinjeon.co.kr/img/sub/menu01/menu28.png4"}
  ]

  const yeopgi = [
    {"name" : "엽기떡볶이", "price": 14000, "image": "https://www.yupdduk.com/images/menu/2020_hotmenuY01.png"},
{"name" : "엽기닭볶음탕", "price": 24000, "image": "https://www.yupdduk.com/images/menu/2020_hotmenuY03.png"},
{"name" : "엽기로제떡볶이", "price": 16000, "image": "https://www.yupdduk.com/images/menu/2021_hotmenuY11.png"},
{"name" : "엽기 오돌뼈", "price": 14000, "image": "https://www.yupdduk.com/images/menu/2020_hotmenuY07.png"},
{"name" : "주먹김밥", "price": 2000, "image": "https://www.yupdduk.com/images/menu/2021_hotmenuS01.png"}
  ]

  const myeonglang = [
    {"name" : "감자 통 모짜 핫도그", "price": 2500, "image": "https://myungranghotdog.com/cmm/fms/getImage.do?atchFileId=FILE_000000000000132GBBTq&fileSn=1"},
{"name" : "모짜 맵구마 핫도그", "price": 2300, "image": "https://myungranghotdog.com/cmm/fms/getImage.do?atchFileId=FILE_000000000000151plJvN&fileSn=14"},
{"name" : "모짜체다 핫도그", "price": 2300, "image": "https://myungranghotdog.com/cmm/fms/getImage.do?atchFileId=FILE_000000000000215F701l&fileSn=1"},
{"name" : "먹물 치즈 핫도그", "price": 1800, "image": "https://myungranghotdog.com/cmm/fms/getImage.do?atchFileId=FILE_00000000000021122avc&fileSn=1"},
{"name" : "점보 핫도그", "price": 1800, "image": "https://myungranghotdog.com/cmm/fms/getImage.do?atchFileId=FILE_0000000000002130rrr3&fileSn=1"}
  ]

  const samcheop = [
{"name" : "감자폭탄 떡볶이", "price": 10900, "image": "http://www.samcheop.com/images/sub/menu2_1.png"},
{"name" : "크림떡볶이 세트", "price": 17000, "image": "http://www.samcheop.com/images/sub/menu2_3.png"},
{"name" : "마라로제 떡볶이 세트", "price": 18000, "image": "https://lh3.googleusercontent.com/proxy/ATtJbGVCuB9heNbYajhtz4odyn-r_2-3lND7DPTtjluqVRc_QiSU115u9RU0qiqQgziGdcskyJnVFijaGm9wgvPpcK0PSA"},
{"name" : "삼첩떡볶이 세트", "price": 17000, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLrA-5cOsjXBAz4S7lDzxDZuMT8lzmR6I0g&usqp=CAU"},
{"name" : "로제떡볶이 세트", "price": 17000, "image": "http://www.samcheop.com/images/sub/menu2_2.png"}
  ]

  const cheongnyeon = [

{"name" : "핫버터갈릭떡볶이", "price": 16500, "image": "http://www.youngdabang.com/upload/menu_01/2021_07_07/hero_YIX1h_2021_07_07_13_52_29.png"},
{"name" : "차돌로제떡볶이", "price": 16000, "image": "http://www.youngdabang.com/upload/menu_01/2021_07_07/hero_kICdw_2021_07_07_13_52_20.png"},
{"name" : "통큰오짱떡볶이", "price": 14500, "image": "http://www.youngdabang.com/upload/menu_01/2019_03_05/hero_nvkdI_2019_03_05_01_11_51.png"},
{"name" : "버터갈릭감자튀김", "price": 4500, "image": "http://www.youngdabang.com/img/page/menu/01/side8.png"},
{"name" : "치즈폭포순살떡볶이", "price": 16000, "image": "http://www.youngdabang.com/upload/menu_01/2020_03_19/hero_YfMh5_2020_03_19_12_41_20.jpg"}
  ]

  const mejacoffee_menu =[
{"name" : "오션스무디", "price": 5200, "image": "http://www.megacoffee.me/images/menu/smoothie/27s.jpg"},
{"name" : "아메리카노", "price": 2900, "image": "http://www.mega-coffee.co.kr/images/menu/coffee/26s.png"},
{"name" : "큐브라떼", "price": 5400, "image": "http://www.megacoffee.me/images/menu/coffee/16s.jpg"},
{"name" : "퐁크러쉬 플레인", "price": 5400, "image": "http://www.megacoffee.me/images/menu/smoothie/09s.jpg"},
{"name" : "쿠키프라페", "price": 5300, "image": "http://www.megacoffee.me/images/menu/smoothie/04s.jpg"}
]

const entienzprezzl_menu =[
{"name" : "옥수수 크림치즈 스틱", "price": 4300, "image": "http://auntieannes.co.kr/admin/img/1623294508.jpg"},
{"name" : "아몬드 프레즐", "price": 3000, "image": "http://auntieannes.co.kr/admin/img/1577176384.png"},
{"name" : "시나몬 슈가 스틱", "price": 3700, "image": "http://auntieannes.co.kr/admin/img/1577176471.pngg"},
{"name" : "아몬드 크림치즈 스틱", "price": 4300, "image": "http://auntieannes.co.kr/admin/img/1577176556.png"},
{"name" : "할라피뇨 치즈 핫도그", "price": 4300, "image": "http://auntieannes.co.kr/admin/img/1577176517.png"}
]

const dunkin_menu =[
{"name" : "미니도넛 간식세트", "price": 12900, "image": "https://cdn.011st.com/11dims/resize/1264x1264/quality/75/11src/pd/21/1/5/8/9/5/4/HrLNq/2512158954_L300.jpg"},
{"name" : "버라이어티 10EA", "price": 15000, "image": "https://image.g9.co.kr/g/1653540705/o?ts=1565253911000"},
{"name" : "해피 먼치킨컵 10EA", "price": 4000, "image": "https://www.dunkindonuts.co.kr/upload/product/1644025794.png"},
{"name" : "올스타 도넛세트", "price": 13000, "image": "https://cdn.011st.com/11dims/resize/1264x1264/quality/75/11src/pd/21/6/7/0/3/8/5/STLOH/3354670385_L300.jpg"},
{"name" : "버라이어티 6EA", "price": 9000, "image": "https://www.dunkindonuts.co.kr/assets/images/onlinestore/hp_market01_pc.jpg"}
]


const baskin_menu =[
{"name" : "파인트", "price": 8200, "image": "https://www.happyconstore.com/file/image/202102101005162513"},
{"name" : "쿼터", "price": 15500, "image": "https://www.happyconstore.com/file/image/202102101003412507"},
{"name" : "패밀리", "price": 22000, "image": "https://www.happyconstore.com/file/image/202102101005322513"},
{"name" : "하프갤론", "price": 26500, "image": "https://www.happyconstore.com/file/image/202102101005512513"},
{"name" : "핸드팩세트", "price": 31000, "image": "https://www.happyconstore.com/file/image/202102101006102513"},
]

const auabekery_menu =[
{"name" : "더티초코", "price": 4700, "image": "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/52864795_2570656962948395_1669819796453248589_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=iw_xFjN4zgwAX9-y4Le&tn=vCVHJ6fRuptCZg0A&edm=AP_V10EBAAAA&ccb=7-4&oh=c4e2f8a6312d7ba405f1741fc7330cc1&oe=60F84CDB&_nc_sid=4f375e"},
{"name" : "카야 크루아상", "price": 4500, "image": "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/22709492_133304950756836_2150803636244971520_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=MsukysLAGKUAX8DEn2u&tn=vCVHJ6fRuptCZg0A&edm=AP_V10EBAAAA&ccb=7-4&oh=626a960f4b38348f46c258acf326a958&oe=60F8C3C8&_nc_sid=4f375e"},
{"name" : "빨미까레", "price": 3900, "image": "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/50998191_2344798862416254_681194181465134421_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=lWS8ZcBCcN4AX8s3hkd&tn=vCVHJ6fRuptCZg0A&edm=AP_V10EBAAAA&ccb=7-4&oh=42817b0f7f5e49381d1d01f14dbef5c7&oe=60F802CF&_nc_sid=4f375e"},
{"name" : "갈릭올리브", "price": 3600, "image": "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/90431920_870793000010365_8810532242664567563_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=jda9YiV0jFsAX-U9ewN&edm=AP_V10EBAAAA&ccb=7-4&oh=c7ec183134fd619e12f25735349ca680&oe=60F7A950&_nc_sid=4f375e"},
{"name" : "앙버터", "price": 4300, "image": "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/25015328_1980660468925886_8696933548877152256_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=5u42L8M80zkAX-4-HTK&edm=AP_V10EBAAAA&ccb=7-4&oh=f47d3dc5edb6f46235d758bbaad6d180&oe=60F78B27&_nc_sid=4f375e"},
]


const mrpizza_menu =[
{"name" : "멕시칸하바네로", "price": 27900, "image": "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2021630152357486.jpg?timestamp=1626411217099"},
{"name" : "쉬림프골드", "price": 35900, "image": "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/201511985627380.jpg?timestamp=1626410978994"},
{"name" : "포테이토골드", "price": 35900, "image": "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/20186111554536.jpg?timestamp=1626411198004"},
{"name" : "페퍼로니플러스", "price": 22900, "image": "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/201961817451241.jpg?timestamp=1626411260916"},
{"name" : "불고기", "price": 23900, "image": "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/20141020165912481.jpg?timestamp=1626411279058"}
]

const pizzahut_menu =[
{"name" : "로스트비프", "price": 35900, "image": "https://akamai.pizzahut.co.kr/2020pizzahut-prod/public/img/menu/RPPZ1518_RPEG0003_pl.png"},
{"name" : "티본&쉬림프", "price": 35900, "image": "https://akamai.pizzahut.co.kr/2020pizzahut-prod/public/img/menu/RPPZ0018_RPEG0003_pl.png"},
{"name" : "블랙알리오스테이크", "price": 35900, "image":"https://akamai.pizzahut.co.kr/2020pizzahut-prod/public/img/menu/RPPZ1429_RPEG0004_pl.png"},
{"name" : "허니버터옥수수", "price": 26900, "image": "https://akamai.pizzahut.co.kr/2020pizzahut-prod/public/img/menu/RPPZ1544_RPEG0016_pl.png"},
{"name" : "오리지널슈프림", "price": 26900, "image": "https://akamai.pizzahut.co.kr/2020pizzahut-prod/public/img/menu/RPPZ1547_RPEG0016_pl.png"}
]

const banallrim_menu =[
{"name" : "아이유의pick피자", "price": 27900, "image": "https://handmadepizza.co.kr/uploadFiles/TB_MENU_MAIN/2021022395133648_3e3744045a79456d93d004e0f4ad75a2.png"},
{"name" : "고스트 페파로니피자", "price": 17900, "image": "https://handmadepizza.co.kr/uploadFiles/TB_MENU_MAIN/img_pizza_%EA%B3%A0%EC%8A%A4%ED%8A%B8_%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88.png"},
{"name" : "포텐피자", "price": 23900, "image": "https://handmadepizza.co.kr/uploadFiles/TB_MENU_MAIN/img_pizza_%ED%8F%AC%ED%85%90%ED%94%BC%EC%9E%90.png"},
{"name" : "치즈후라이 크림치즈", "price": 22900, "image": "https://handmadepizza.co.kr/uploadFiles/TB_MENU_MAIN/img_pizza_%EC%B9%98%EC%A6%88%ED%9B%84%EB%9D%BC%EC%9D%B4_%ED%81%AC%EB%A6%BC%EC%B9%98%EC%A6%88%ED%94%BC%EC%9E%90.png"},
{"name" : "핫치킨쉬림프 골드", "price": 23900, "image": "https://handmadepizza.co.kr/uploadFiles/TB_MENU_MAIN/img_pizza_%ED%95%AB%EC%B9%98%ED%82%A8%EC%89%AC%EB%A6%BC%ED%94%84_%EA%B3%A8%EB%93%9C.png"}
]

const bunga_menu =[
{"name" : "새우파티", "price": 30500, "image": "https://www.7thpizza.com/files/MENU/35D7B22DCC58438A8D9CA7296A003E8F-54c175a4cf45f9ee2f4ea7b04d2e37af.jpg"},
{"name" : "샘스테이크", "price": 30500, "image": "https://www.7thpizza.com/files/MENU/CB73C7576D8F4A16A5DE939AE5EF7AEB-2c79d466ac4a146f981052c1ab2d9cf8.jpg"},
{"name" : "흥부 포테이토", "price": 25900, "image": "https://www.7thpizza.com/files/MENU/6CB683ADABCB4F0481C229C52CF4E52F-8eb3308e7d8c0ee612a913017e1b8f10.jpg"},
{"name" : "슈퍼콤비네이션", "price": 25900, "image": "https://www.7thpizza.com/files/MENU/04C3D97817D24663B1051111D66A958F-05dfe03cfc5d6046da3c857e66b4144b.jpg"},
{"name" : "체다골드 포테이토", "price": 30500, "image": "https://www.7thpizza.com/files/MENU/E1007BE527AF406A9B173DC1FC7B73F3-cd22e53918ceba6a7a908a8248e9d3b2.jpg"},
]

const papazonse_menu =[
{"name" : "소시지 레볼루션", "price": 28500, "image": "https://imgcdn.pji.co.kr/pc/img/menu/detail/2703_10.png"},
{"name" : "위스콘신 치즈 포테이토", "price": 27500, "image": "https://imgcdn.pji.co.kr/pc/img/menu/detail/2609_10.png"},
{"name" : "수퍼파파스", "price": 26500, "image": "https://imgcdn.pji.co.kr/pc/img/menu/detail/1000_10.png"},
{"name" : "존스 페이버릿", "price": 27500, "image": "https://imgcdn.pji.co.kr/pc/img/menu/detail/1656_.png"},
{"name" : "마가리타", "price": 21500, "image": "https://imgcdn.pji.co.kr/pc/img/menu/detail/1012_10.png"}
]

const mcdonald_menu =[
{"name" : "상하이 어니언 버거 세트", "price": 8100, "image": "https://www.mcdonalds.co.kr/upload/product/pcfile/1625725209880.png"},
{"name" : "트리플 치즈버거 세트", "price": 8500, "image": "https://www.mcdonalds.co.kr/upload/product/pcfile/1621834971998.png"},
{"name" : "빅맥세트", "price": 7500, "image": "https://www.mcdonalds.co.kr/upload/product/pcfile/1614163187334.png"},
{"name" : "맥스파이시 상하이 버거 세트", "price": 7500, "image": "https://www.mcdonalds.co.kr/upload/product/pcfile/1614163257453.png"},
{"name" : "1955버거 세트", "price": 8800, "image": "https://www.mcdonalds.co.kr/upload/product/pcfile/1599120026459.png"}
]

const burgerking_menu =[
{"name" : "몬스터X 세트", "price": 11700, "image": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/09ab88bd-e5ec-4275-94b5-d56e1ebcefe6.png"},
{"name" : "콰트로치즈X 세트", "price": 11100, "image": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/8dfbf963-792f-4307-88d7-22a8d96be85e.png"},
{"name" : "기네스콰트로치즈와퍼 세트", "price": 10700, "image":"https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e299adbd-bcac-49b1-8a41-f0ac03f593c2.png"},
{"name" : "콰트로치즈와퍼주니어 세트", "price": 8100, "image": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/354c2f0c-8700-43fb-acea-a2bfda208d06.png"},
{"name" : "통새우와퍼주니어 세트", "price": 8100, "image": "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/6c9f2e10-02f7-414d-9c2c-e93e6266c1a3.png"}
]

const kfc_menu =[
{"name" : "핫통삼겹베이컨버거 세트", "price": 10100, "image": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2274717_20210615132745490.png"},
{"name" : "더블마이티버거 세트", "price": 9100, "image": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2274612_20210621132844946.png"},
{"name" : "타워버거 세트", "price": 8800, "image": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2274476_20210203104323159.png"},
{"name" : "징거버거 세트", "price": 7900, "image": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2274478_20210203104507095.png"},
{"name" : "캡새버거 세트", "price": 7000, "image": "https://kfcapi.inicis.com/kfcs_api_img/KFCS/goods/DL_2274479_20210203104545633.png"}
]

const momstouch_menu =[
{"name" : "싸이버거 세트", "price": 5800, "image": "https://momstouchdev.co.kr/upload_file/product_info/1616055241-EYPWG.png"},
{"name" : "새우불고기버거 세트", "price": 6500, "image": "https://momstouchdev.co.kr/upload_file/product_info/1616389716-CPORN.png"},
{"name" : "딥치즈버거 세트", "price": 6000, "image": "https://momstouchdev.co.kr/upload_file/product_info/1616055336-FOPBZ.png"},
{"name" : "인크레더블버거 세트", "price": 6900, "image": "https://momstouchdev.co.kr/upload_file/product_info/1616055398-ZHVMP.png"},
{"name" : "네슈빌핫치킨버거 세트", "price": 6100, "image": "https://momstouchdev.co.kr/upload_file/product_info/1616055591-NLJHL.png"}
]

const lotteria_menu =[
{"name" : "한우불고기 세트", "price": 8900, "image": "http://www.lotteria.com/Data//Goods/235/DetailImage.jpg"},
{"name" : "핫크리스피버거 세트", "price": 6800, "image": "http://www.lotteria.com/Data//Goods/99/DetailImage.jpg"},
{"name" : "모짜렐라 인 더 버거 세트", "price": 7900, "image": "http://www.lotteria.com/Data//Goods/232/DetailImage.jpg"},
{"name" : "폴더버거 세트", "price": 7600, "image": "http://www.lotteria.com/Data//Goods/328/DetailImage.jpg"},
{"name" : "치킨버거 세트", "price": 5200, "image": "http://www.lotteria.com/Data//Goods/295/DetailImage.jpg"}
]


const hongkong_menu =[
{"name" : "짬뽕", "price": 6000, "image":"http://www.theborn.co.kr/wp-content/uploads/2017/05/01_%EC%A7%AC%EB%BD%95.jpg"},
{"name": "짜장면", "price": 5000, "image":"http://www.theborn.co.kr/wp-content/uploads/2017/05/04_%EC%A7%9C%EC%9E%A5%EB%A9%B4.jpg"},
{"name": "짜장밥", "price": 7000, "image":"http://www.theborn.co.kr/wp-content/uploads/2017/05/05_%EC%A7%9C%EC%9E%A5%EB%B0%A5.jpg"},
{"name": "탕수육", "price": 13000, "image":"http://www.theborn.co.kr/wp-content/uploads/2017/06/07_%ED%83%95%EC%88%98%EC%9C%A1_%ED%8F%AC%EC%9E%A5-1.jpg"} ,
{"name": "군만두", "price": 4500, "image":"http://www.theborn.co.kr/wp-content/uploads/2017/06/14_%EA%B5%B0%EB%A7%8C%EB%91%90.jpg"}
]

const pisumarahongtang_menu =[
{"name": "마라홍탕", "price": 15000, "image":"https://cdn.imweb.me/thumbnail/20190614/f83de58e7b06c.jpg"},
{"name": "마라샹궈", "price": 19000, "image":"https://cdn.imweb.me/thumbnail/20190614/a353967a6fe6b.jpg"},
{"name": "꿔바로우", "price": 9000, "image":"https://cdn.imweb.me/thumbnail/20190614/8b4eada84cde2.jpg"},
{"name": "양저우볶음밥", "price":7000, "image":"https://cdn.imweb.me/thumbnail/20190614/b2d457a7af048.jpg"},
{"name": "쇼좌빙", "price":2500, "image":"https://cdn.imweb.me/thumbnail/20190614/322fac2be924f.jpg"}
]

const hongzzazang_menu =[
{"name": "홍짜장", "price": 7000, "image":"http://hongjjajang.com/upload/menu_01//2021_07_07/hero_H9k47_2021_07_07_16_39_08.jpg"},
{"name": "홍짬뽕", "price":7500, "image":"http://hongjjajang.com/upload/menu_01//2021_06_24/hero_ao77Z_2021_06_24_11_46_44.jpg"},
{"name": "홍짬뽕밥", "price":6000, "image":"http://hongjjajang.com/upload/menu_01//2021_06_24/hero_JVqVR_2021_06_24_11_47_13.jpg"},
{"name": "홍짜장덮밥", "price": 6000, "image":"http://hongjjajang.com/upload/menu_01//2021_07_07/hero_41eWa_2021_07_07_16_39_48.jpg"},
{"name": "홍탕수육", "price": 13000, "image":"http://hongjjajang.com/upload/menu_01//2021_06_24/hero_R5R4W_2021_06_24_11_49_43.jpg"}
]

const thechikago_menu =[
  {"name": "시카고짬뽕", "price": 7000, "image":"http://chicagojjamppong.com/default/img/aa/menu/1.jpg"},
  {"name": "크림짬뽕", "price":8000, "image":"http://chicagojjamppong.com/default/img/aa/menu/2.jpg"},
  {"name": "로제짬뽕", "price":8000, "image":"http://chicagojjamppong.com/default/img/aa/menu/3.jpg"},
  {"name": "볶음짬뽕", "price": 8000, "image":"http://chicagojjamppong.com/default/img/aa/menu/4.jpg"},
  {"name": "크림탕수육", "price": 15000, "image":"http://chicagojjamppong.com/default/img/aa/menu/10.jpg"},
  ]
  
  const jungchef_menu =[
  {"name": "수제탕수육", "price": 16000, "image":"https://modo-phinf.pstatic.net/20190625_38/1561473770928pYWhW_JPEG/mosa7Nf9m7.jpeg?type=w720"},
  {"name": "사천탕수육", "price":17000, "image":"https://modo-phinf.pstatic.net/20190625_84/1561473771523SRHCv_JPEG/mosa6kNDys.jpeg?type=w720"},
  {"name": "모듬탕수육", "price": 20000, "image":"https://modo-phinf.pstatic.net/20190625_176/15614737726709p9oy_JPEG/mosapr56Pc.jpeg?type=w720"},
  {"name": "김치피자탕수육", "price": 20000, "image":"https://modo-phinf.pstatic.net/20190625_3/1561474015580vFOo4_JPEG/mosaVWqchf.jpeg?type=w720"},
  {"name": "양념탕수육", "price": 20000, "image":"https://modo-phinf.pstatic.net/20190625_269/1561474413126c0eSp_JPEG/mosauNdCl2.jpeg?type=w720"},
  ]
  // 일식
  const shushiro_menu =[
    {"name": "연어모아 set", "price":9700, "image":"http://sushiro.co.kr/data/file/menu/thumb/193x133_100/3718618333_9neHNKqf_EC97B0EC96B4-EBAAA8EC9584-EC858BED8AB8.png"},
    {"name": "스시로 set", "price":14900, "image":"http://sushiro.co.kr/data/file/menu/thumb/193x133_100/3718618333_L6x5WM4g_EC8AA4EC8B9CEBA19C-EC858BED8AB8.png"},
    {"name": "참다랑어 프리미엄 set", "price":19800, "image":"http://sushiro.co.kr/data/file/menu/thumb/193x133_100/3718618333_g6jBWidm_ECB0B8EB8BA4EB9E91EC96B4-ED9484EBA6ACEBAFB8EC9784-EC858BED8AB8.png"},
    {"name": "인기모아 set", "price":14900, "image":"http://sushiro.co.kr/data/file/menu/thumb/193x133_100/3718618333_pqeWODxf_EC9DB8EAB8B0-EBAAA8EC9584-EC858BED8AB8.png"},
    {"name": "스시로키즈 set", "price":8900, "image":"http://sushiro.co.kr/data/file/menu/thumb/193x133_100/3718618333_CgA7kV6l_EC8AA4EC8B9CEBA19C-ED82A4ECA688-EC858BED8AB8.png"},
    ]
    const yamiga_menu =[
    {"name": "야미가","price":8000, "image":"http://www.yummyga.co.kr/img/logo.png"},
    {"name": "히레가스", "price":8000, "image":"http://www.yummyga.co.kr/img/s1_1.jpg"},
    {"name": "치즈가스", "price":8000, "image":"http://www.yummyga.co.kr/img/s1_3.jpg"},
    {"name": "고구마치즈가스", "price":8000, "image":"http://www.yummyga.co.kr/img/s1_8.jpg"},
    {"name": "우동세트", "price":8000, "image":"http://www.yummyga.co.kr/img/s6_1.jpg"},
    {"name": "돈가스카레라이스", "price":6500, "image":"http://www.yummyga.co.kr/img/s3_1.jpg"},
    ]
    const tokyo_menu =[
    {"name": "돈코츠라멘", "price":3900, "image":"https://cdn.imweb.me/thumbnail/20200219/a3095d2bc8351.png"},
    {"name": "미소라멘", "price":3900, "image":"https://cdn.imweb.me/thumbnail/20200219/2089ca13e9e1d.png"},
    {"name": "소유라멘", "price":3900, "image":"https://cdn.imweb.me/thumbnail/20200219/46ac08fabb64d.png"},
    {"name": "치즈라멘", "price":3900, "image":"https://cdn.imweb.me/thumbnail/20200219/2a77ecf6ddf0e.png"},
    {"name": "초카라이라멘", "price":4900, "image":"https://cdn.imweb.me/thumbnail/20200219/75edf1b24bdcb.png"},
    ]
    
    const hongik_menu =[
    {"name": "홍익왕돈까스", "price":9900, "image":"https://contents.sixshop.com/thumbnails/uploadedFiles/39154/default/image_1576811394455_300.png"},
    {"name": "더블치즈돈까스", "price":11900, "image":"https://contents.sixshop.com/thumbnails/uploadedFiles/39154/default/image_1576811416971_300.png"},
    {"name": "스파이시 어니언 돈까스", "price":11000, "image":"https://contents.sixshop.com/thumbnails/uploadedFiles/39154/default/image_1576811429982_300.png"},
    {"name": "로스까스", "price":9500, "image":"https://contents.sixshop.com/thumbnails/uploadedFiles/39154/default/image_1576811444718_300.png"},
    {"name": "스노우 철판 돈까스", "price":11900, "image":"https://contents.sixshop.com/thumbnails/uploadedFiles/39154/default/image_1576811457251_300.png"},
    ]
    
    const gorea_menu =[
    {"name": "돈까스 카레라이스", "price":8000, "image":"http://www.korecurry.com/resources/images/contents/menu/curry/curry_Pork_s.jpg"},
    {"name": "시금치베이컨 카레라이스", "price":8000, "image":"http://www.korecurry.com/resources/images/contents/menu/curry/curry_Bacon_Spinach_s.jpg"},
    {"name": "포크슬라이스 카레라이스", "price":8000, "image":"http://www.korecurry.com/resources/images/contents/menu/curry/curry_Porkslice_s.jpg"},
    {"name": "순살치킨 카레라이스", "price":8500, "image":"http://www.korecurry.com/resources/images/contents/menu/curry/curry_chicken_s.jpg"},
    {"name": "함박새우 카레라이스", "price":9500, "image":"http://www.korecurry.com/resources/images/contents/menu/curry/curry_Hambak_s.jpg"},
    ]


  try {
      let shop;
      let shop_id;

      let name;
      let price;
      let image;

    for (let i = 0; i < 5; i ++) {
      const bhc = await Shops.findOne({ name: "bhc" })
      const bhc_id = bhc._id;

      let name = bhc_menu[i].name;
      let price = bhc_menu[i].price;
      let image = bhc_menu[i].image;
      await Menus.create({ shopId: bhc_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      const kyochon = await Shops.findOne({ name: "교촌치킨" })
      const kyochon_id = kyochon._id;

      let name = kyochon_menu[i].name;
      let price = kyochon_menu[i].price;
      let image = kyochon_menu[i].image;
      await Menus.create({ shopId: kyochon_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      const puradak = await Shops.findOne({ name: "푸라닭치킨" })
      const puradak_id = puradak._id;

      let name = puradak_menu[i].name;
      let price = puradak_menu[i].price;
      let image = puradak_menu[i].image;
      await Menus.create({ shopId: puradak_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      const bbq = await Shops.findOne({ name: "bbq" })
      const bbq_id = bbq._id;

      let name = bbq_menu[i].name;
      let price = bbq_menu[i].price;
      let image = bbq_menu[i].image;
      await Menus.create({ shopId: bbq_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      const gubne = await Shops.findOne({ name: "굽네치킨" })
      const gubne_id = gubne._id;

      let name = gubne_menu[i].name;
      let price = gubne_menu[i].price;
      let image = gubne_menu[i].image;
      await Menus.create({ shopId: gubne_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      let shop = await Shops.findOne({ name: "더맛있는족발보쌈" })
      let shop_id = shop._id;

      let name = themat[i].name;
      let price = themat[i].price;
      let image = themat[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      shop = await Shops.findOne({ name: "원할머니보쌈족발" })
      shop_id = shop._id;

       name = onegrandma[i].name;
       price = onegrandma[i].price;
       image = onegrandma[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      shop = await Shops.findOne({ name: "삼대족발" })
      shop_id = shop._id;

       name = samdae[i].name;
       price = samdae[i].price;
       image = samdae[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
       shop = await Shops.findOne({ name: "더맛있는족발보쌈" })
       shop_id = shop._id;

       name = themat[i].name;
       price = themat[i].price;
       image = themat[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
       shop = await Shops.findOne({ name: "장충동왕족발보쌈" })
       shop_id = shop._id;

       name = jangchungdong[i].name;
       price = jangchungdong[i].price;
       image = jangchungdong[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
       shop = await Shops.findOne({ name: "가장맛있는족발" })
       shop_id = shop._id;

       name = gajang[i].name;
       price = gajang[i].price;
       image = gajang[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
       shop = await Shops.findOne({ name: "신전떡볶이" })
       shop_id = shop._id;

       name = sinjeon[i].name;
       price = sinjeon[i].price;
       image = sinjeon[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
       shop = await Shops.findOne({ name: "엽기떡볶이" })
       shop_id = shop._id;

       name = yeopgi[i].name;
       price = yeopgi[i].price;
       image = yeopgi[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
       shop = await Shops.findOne({ name: "명랑핫도그" })
       shop_id = shop._id;

       name = myeonglang[i].name;
       price = myeonglang[i].price;
       image = myeonglang[i].image;
      await Menus.create({ shopId: shop_id, name, price, image });
    }

    for (let i = 0; i < 5; i ++) {
      shop = await Shops.findOne({ name: "삼첩분식" })
      shop_id = shop._id;

      name = samcheop[i].name;
      price = samcheop[i].price;
      image = samcheop[i].image;

      await Menus.create({ shopId: shop_id, name, price, image });
   }

   for (let i = 0; i < 5; i ++) {
    shop = await Shops.findOne({ name: "청년다방" })
    shop_id = shop._id;

    name = cheongnyeon[i].name;
    price = cheongnyeon[i].price;
    image = cheongnyeon[i].image;

    await Menus.create({ shopId: shop_id, name, price, image });
 }

 for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "메가커피" })
  shop_id = shop._id;

  name = mejacoffee_menu[i].name;
  price = mejacoffee_menu[i].price;
  image = mejacoffee_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "던킨" })
  shop_id = shop._id;

  name = dunkin_menu[i].name;
  price = dunkin_menu[i].price;
  image = dunkin_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "배스킨라빈스" })
  shop_id = shop._id;

  name = baskin_menu[i].name;
  price = baskin_menu[i].price;
  image = baskin_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "아우어베이커리" })
  shop_id = shop._id;

  name = auabekery_menu[i].name;
  price = auabekery_menu[i].price;
  image = auabekery_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "미스터피자" })
  shop_id = shop._id;

  name = mrpizza_menu[i].name;
  price = mrpizza_menu[i].price;
  image = mrpizza_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "피자헛" })
  shop_id = shop._id;

  name = pizzahut_menu[i].name;
  price = pizzahut_menu[i].price;
  image = pizzahut_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "반올림피자샵" })
  shop_id = shop._id;

  name = banallrim_menu[i].name;
  price = banallrim_menu[i].price;
  image = banallrim_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "7번가피자" })
  shop_id = shop._id;

  name = bunga_menu[i].name;
  price = bunga_menu[i].price;
  image = bunga_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "파파존스" })
  shop_id = shop._id;

  name = papazonse_menu[i].name;
  price = papazonse_menu[i].price;
  image = papazonse_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "맥도날드" })
  shop_id = shop._id;

  name = mcdonald_menu[i].name;
  price = mcdonald_menu[i].price;
  image = mcdonald_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "버거킹" })
  shop_id = shop._id;

  name = burgerking_menu[i].name;
  price = burgerking_menu[i].price;
  image = burgerking_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}


for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "KFC" })
  shop_id = shop._id;

  name = kfc_menu[i].name;
  price = kfc_menu[i].price;
  image = kfc_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "맘스터치" })
  shop_id = shop._id;

  name = momstouch_menu[i].name;
  price = momstouch_menu[i].price;
  image = momstouch_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
   shop = await Shops.findOne({ name: "롯데리아" })
   shop_id = shop._id;

   name = lotteria_menu[i].name;
   price = lotteria_menu[i].price;
   image = lotteria_menu[i].image;

  await Menus.create({ shopId: shop_id, name, price, image });
}


for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "고래카레" })
  shop_id = shop._id;

  name = gorea_menu[i].name;
   price = gorea_menu[i].price;
   image = gorea_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "홍익돈까스" })
  shop_id = shop._id;

  name = hongik_menu[i].name;
  price = hongik_menu[i].price;
  image = hongik_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}


for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "도쿄라멘 3900" })
  shop_id = shop._id;

  name = tokyo_menu[i].name;
  price = tokyo_menu[i].price;
  image = tokyo_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "야미가" })
  shop_id = shop._id;

  name = yamiga_menu[i].name;
  price = yamiga_menu[i].price;
  image = yamiga_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "스시로" })
  shop_id = shop._id;

  name = shushiro_menu[i].name;
  price = shushiro_menu[i].price;
  image = shushiro_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "정쉐프탕수육" })
  shop_id = shop._id;

  name = jungchef_menu[i].name;
  price = jungchef_menu[i].price;
  image = jungchef_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "더시카고짬뽕" })
  shop_id = shop._id;

  name = thechikago_menu[i].name;
  price = thechikago_menu[i].price;
  image = thechikago_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "홍짜장" })
  shop_id = shop._id;

  name = hongzzazang_menu[i].name;
  price = hongzzazang_menu[i].price;
  image = hongzzazang_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "피슈마라홍탕" })
  shop_id = shop._id;

  name = pisumarahongtang_menu[i].name;
  price = pisumarahongtang_menu[i].price;
  image = pisumarahongtang_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}

for (let i = 0; i < 5; i ++) {
  shop = await Shops.findOne({ name: "홍콩반점" })
  shop_id = shop._id;

  name = hongkong_menu[i].name;
  price = hongkong_menu[i].price;
  image = hongkong_menu[i].image;
  await Menus.create({ shopId: shop_id, name, price, image });
}




    res.json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.json({ message: 'fail', err: err });
  }

  
});

export { menuPost };
