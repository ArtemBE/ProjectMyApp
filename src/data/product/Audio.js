import addKey from "../../scripts/key";
const audio = [
{
    name: 'Наушники True Wireless Accesstyle Denim TWS',
    color: 'blue',
    type: 'Внутриканальные наушники',
    producer: 'Accesstyle',
    img: './images/всеТовары/audio/AccesstyleDenimTWS_blue.png',
    price: 1990,
},
{
    name: 'Наушники Anker Soundcore Life Tune',
    color: 'black',
    type: 'Накладные наушники',
    producer: 'Anker',
    img: './images/всеТовары/audio/AnkerSoundcoreLifeTune_black.png',
    price: 8190,
},
{
    name: 'Apple AirPods 2',
    color: 'white',
    type: 'Наушники вкладыши',
    producer: 'Apple',
    img: './images/всеТовары/audio/AppleAirpods2_white.png',
    price: 12990,
},
{
    name: 'HONOR Беспроводные наушники HONOR Choice Earbuds X5',
    color: 'white',
    type: 'Внутриканальные наушники',
    producer: 'Honor',
    img: './images/всеТовары/audio/HonorChoiseEarbudsX5_white.jpg',
    price: 1768,
},
{
    name: 'Беспроводные наушники Huawei FreeBuds 5i TWS',
    color: 'black',
    type: 'Внутриканальные наушники',
    producer: 'Huawei',
    img: './images/всеТовары/audio/HuaweiFreeBuds5i_black.png',
    price: 7187,
},
{
    name: 'Беспроводные наушники Huawei FreeBuds 5i TWS',
    color: 'blue',
    type: 'Внутриканальные наушники',
    producer: 'Huawei',
    img: './images/всеТовары/audio/HuaweiFreeBuds5i_blue.png',
    price: 7187,
},
{
    name: 'Наушники Huawei FreeBuds Pro 2',
    color: 'blue',
    type: 'Внутриканальные наушники',
    producer: 'Huawei',
    img: './images/всеТовары/audio/HuaweiFreeBudsPro2_blue.png',
    price: 15990,
},
{
    name: 'Наушники Huawei FreeBuds Pro 2',
    color: 'grey',
    type: 'Внутриканальные наушники',
    producer: 'Huawei',
    img: './images/всеТовары/audio/HuaweiFreeBudsPro2_grey.png',
    price: 15990,
},
{
    name: 'Беспроводные наушники HUAWEI FreeBuds SE',
    color: 'white',
    type: 'Внутриканальные наушники',
    producer: 'Huawei',
    img: './images/всеТовары/audio/HuaweiFreeBudsSE_white.png',
    price: 2951,
},
{
    name: 'Беспроводные наушники JBL Tune 115 TWS',
    color: 'black',
    type: 'Внутриканальные наушники',
    producer: 'JBL',
    img: './images/всеТовары/audio/JBL-Tune115TWS_black.jpg',
    price: 5990,
},
{
    name: 'Беспроводные наушники JBL Wave 200TWS',
    color: 'black',
    type: 'Внутриканальные наушники',
    producer: 'JBL',
    img: './images/всеТовары/audio/JBL-vide200TWS_black.png',
    price: 3990,
},
{
    name: 'Bluetooth-гарнитура JBL Tune 720BT',
    color: 'blue',
    type: 'Накладные наушники',
    producer: 'JBL',
    img: './images/всеТовары/audio/JBL-Tune270bt_blue.png',
    price: 7990,
},
{
    name: 'Беспроводные наушники realme Buds Air 3 Neo',
    color: 'blue',
    type: 'Внутриканальные наушники',
    producer: 'Realme',
    img: './images/всеТовары/audio/RealmeBudsAir3Neo_blue.png',
    price: 2199,
},
{
    name: 'Беспроводные наушники Xiaomi Redmi Buds 4 Lite',
    color: 'white',
    type: 'Наушники вкладыши',
    producer: 'Xiaomi',
    img: './images/всеТовары/audio/RedmiBuds4Lite_white.png',
    price: 1299,
},
{
    name: 'Беспроводные наушники Xiaomi Mi True Wireless Earphones 2 Basic',
    color: 'white',
    type: 'Внутриканальные наушники',
    producer: 'Xiaomi',
    img: './images/всеТовары/audio/XiaomiMiTrueWirelessEarbuds_white.jpg',
    price: 1790,
},
{
    name: 'Беспроводные наушники Xiaomi Redmi Buds 3 Global, USB Type-C',
    color: 'white',
    type: 'Наушники вкладыши',
    producer: 'Xiaomi',
    img: './images/всеТовары/audio/XiaomiRedmiBuds3white.png',
    price: 1294,
},
]

audio.forEach(item=>item.category='audio');
addKey(audio);
export default audio;