import express, { Request, Response, NextFunction, Router } from "express";
import Shops from "../schemas/store";

const storePost = express.Router();

storePost.post("/", async (req, res) => {
  // const { name, category, image, orders, avgStar, countStar }
  // : { name: string, category: string, image: string, orders: number, avgStar: string, countStar: number} = req.body;

  const chicken_shops = [
    {
      name: "bhc",
      image:
        "https://www.kedglobal.com/data/ked/image/2020/12/17/ked202012170014.jpg",
      category: "chicken",
    },
    {
      name: "교촌치킨",
      image: "https://www.seoulfn.com/news/photo/202103/412309_187543_1220.gif",
      category: "chicken",
    },
    {
      name: "푸라닭치킨",
      image:
        "https://www.foodnews.news/data/photos/20201252/art_16086061717036_c9011e.jpg",
      category: "chicken",
    },
    {
      name: "굽네치킨",
      image:
        "https://image.happymoney.co.kr/extimage/allianceProduct/20191128134627.png",
      category: "chicken",
    },
    {
      name: "bbq",
      image:
        "https://lh3.googleusercontent.com/proxy/Aszn2h6kS-FbB1LIfIV4vI5Tw8FQMQ-mbDWXBfy4BKyAGpQ-UIUt7uO_6AFynBfKXfefurLPJU_KLTLBoWY-5SqaUTMkBRNGRiwBjBrplmFRgjCk62yBB1U",
      category: "chicken",
    },
  ];

  const jokbal_shops = [
    {
      name: "더맛있는족발보쌈",
      image: "https://cdn.imweb.me/thumbnail/20210324/e9c3958dd079c.png",
      category: "jokbal",
    },
    {
      name: "원할머니보쌈족발",
      image:
        "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99BEC53D5D27DC62270998",
      category: "jokbal",
    },
    {
      name: "삼대족발",
      image:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDNfMTA1/MDAxNTgwNjYwNTIwMjQy.Z0h0cn4QY8cWdxTJdXzvj082maqBacOhxAVDO2SMI8Eg.lfOXDA3Y4uC0i-Kba_dny74v0PjR2jxyQbuoxs73_fUg.JPEG.tokkibubu617/AF88226B-EC0F-4A2A-BC24-2B63C9B3A4C6.jpg?type=w800",
      category: "jokbal",
    },
    {
      name: "장충동왕족발보쌈",
      image: "https://t1.daumcdn.net/cfile/blog/2127B43F5152B39F31",
      category: "jokbal",
    },
    {
      name: "가장맛있는족발",
      image:
        "https://www.shuttledelivery.co.kr/uploads/_a926fcdfa5c045b39ca0439d6ef55f5d.jpg",
      category: "jokbal",
    },
  ];

  const bunsik_shops = [
    {
      name: "신전떡볶이",
      image: "http://sinjeon.co.kr/img/common/f_logo.png",
      category: "bunsik",
    },
    {
      name: "엽기떡볶이",
      image: "https://www.yupdduk.com/images/logo61.png",
      category: "bunsik",
    },
    {
      name: "명랑핫도그",
      image: "https://t1.daumcdn.net/cfile/tistory/9914B14C5B23F82701",
      category: "bunsik",
    },
    {
      name: "삼첩분식",
      image: "http://www.samcheop.com/images/common/logo.png",
      category: "bunsik",
    },
    {
      name: "청년다방",
      image: "http://www.youngdabang.com/img/common/bi.png",
      category: "bunsik",
    },
  ];

  const dessert_shops = [
    {
      name: "메가커피",
      image: "http://www.megacoffee.me/images/main/top_logo.png",
      category: "dessert",
    },
    {
      name: "앤티앤스프레즐",
      image: "http://auntieannes.co.kr/wp-content/uploads/2019/10/logo.png",
      category: "dessert",
    },
    {
      name: "던킨",
      image:
        "https://www.dunkindonuts.co.kr/assets/images/common/logo_dunkindonuts.png",
      category: "dessert",
    },
    {
      name: "배스킨라빈스",
      image:
        "http://www.baskinrobbins.co.kr/assets/images/common/logo_baskinrobbins.png",
      category: "dessert",
    },
    {
      name: "아우어베이커리",
      image: "http://www.ourbakery.co.kr/img/logo_w.png",
      category: "dessert",
    },
  ];

  const japanese_shops = [
    {
      name: "고래카레",
      image:
        "https://www.kedglobal.com/data/ked/image/2020/12/17/ked202012170014.jpg",
      category: "japanese",
    },
    {
      name: "스시로",
      image: "https://www.seoulfn.com/news/photo/202103/412309_187543_1220.gif",
      category: "japanese",
    },
    {
      name: "야미가",
      image: "http://www.yummyga.co.kr/img/logo.png",
      category: "japanese",
    },
    {
      name: "도쿄라멘 3900",
      image: "https://cdn.imweb.me/thumbnail/20210616/4ae1e3787360b.png",
      category: "japanese",
    },
    {
      name: "홍익돈까스",
      image:
        "https://contents.sixshop.com/uploadedFiles/39154/default/image_1515140031985.png",
      category: "japanese",
    },
  ];

  const chinese_shops = [
    {
      name: "홍콩반점",
      image: "http://www.theborn.co.kr/wp-content/uploads/2017/06/logo.png",
      category: "chinese",
    },
    {
      name: "피슈마라홍탕",
      image: "https://cdn.imweb.me/thumbnail/20210630/3e6c703af351a.png",
      category: "chinese",
    },
    {
      name: "홍짜장",
      image: "https://cdn.imweb.me/thumbnail/20210630/3e6c703af351a.png",
      category: "chinese",
    },
    {
      name: "더시카고짬뽕",
      image: "http://chicagojjamppong.com/default/img/aa/brandstory/3.jpg",
      category: "chinese",
    },
    {
      name: "정쉐프탕수육",
      image:
        "https://modo-phinf.pstatic.net/20190626_157/1561475623904nAjMI_JPEG/mosaPbRksF.jpeg?type=f564_336",
      category: "chinese",
    },
  ];

  const fastfood_shops = [
    {
      name: "맥도날드",
      image: "https://www.mcdonalds.co.kr/upload/main/banner/1625725439435.png",
      category: "fastfood",
    },
    {
      name: "버거킹",
      image:
        "https://pbs.twimg.com/media/Cb3PD_fUsAADQjh?format=png&name=small",
      category: "fastfood",
    },
    {
      name: "KFC",
      image:
        "https://cdn.concreteplayground.com/content/uploads/2020/04/Family-Feast-KFC-supplied-1920x1080.jpg",
      category: "fastfood",
    },
    {
      name: "맘스터치",
      image:
        "http://cdn.bizwatch.co.kr/news/photo/2020/11/17/19bbef5c61047aa896e499ed81f2f064.jpg",
      category: "fastfood",
    },
    {
      name: "롯데리아",
      image: "http://image2.lotteimall.com/goods/89/96/65/1591659689_L.jpg",
      category: "fastfood",
    },
  ];

  const pizza_shops = [
    {
      name: "미스터피자",
      image: "https://www.kfoodtimes.com/news/photo/201808/5854_8961_3344.PNG",
      category: "pizza",
    },
    {
      name: "피자헛",
      image: "https://t1.daumcdn.net/cfile/tistory/997031445CAC12BD36",
      category: "pizza",
    },
    {
      name: "반올림피자샵",
      image:
        "http://shc7496.cafe24.com/web/product/big/201701/318_shop1_818662.jpg",
      category: "pizza",
    },
    {
      name: "7번가피자",
      image:
        "http://www.dailygrid.net/news/photo/202003/360434_257881_2518.png",
      category: "pizza",
    },
    {
      name: "파파존스",
      image: "https://newsimg.sedaily.com/2017/02/09/1OC11IFHOE_1.jpg",
      category: "pizza",
    },
  ];

  try {
    for (let i = 0; i < 5; i++) {
      await Shops.create(chicken_shops[i]);
      await Shops.create(jokbal_shops[i]);
      await Shops.create(bunsik_shops[i]);
      await Shops.create(dessert_shops[i]);

      await Shops.create(japanese_shops[i]);
      await Shops.create(chinese_shops[i]);
      await Shops.create(fastfood_shops[i]);
      await Shops.create(pizza_shops[i]);
    }

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "fail", err: err });
  }
});

export { storePost };
