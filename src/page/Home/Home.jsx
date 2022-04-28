import './Home.css'

import Video from "./Video";


const dataVideo = [
    {
        avatar:'阮玉梅',
        video : '阮玉梅',
        imageBg :'阮玉梅' ,
        like: '298k',
        cmt: '991',
        share: '4589',
        idName: '阮玉梅',
        title: '承诺不能战胜时间，但我们的努力可以。',
        tag: '#yumei05 #douyin #fyp'
    },
    {
        avatar:'violet',
        video : 'violet',
        imageBg : 'violet',
        like: '37.9k',
        cmt: '533',
        share: '598',
        idName: '𝑻𝒉𝒊𝒆̂𝒏 𝑽𝒊𝒐𝒍𝒆𝒕',
        title: '- Nếu như bạn cần động lực hãy xem bình luận 😌',
        tag: '#violettnt'
    },
    {
        avatar:'azami',
        video : 'azami',
        imageBg : 'azami',
        like: '310.1k',
        cmt: '6080',
        share: '794',
        idName: 'Azami..',
        title: 'gơ ka mười',
        tag: ''
    },
    {
        avatar:'tphuoc',
        imageBg : 'tphuoc',
        video : 'tphuoc',
        like: '201.7k',
        cmt: '33.9k',
        share: '563',
        idName: 'tphuoc_06',
        title: 'Vẽ chữ C lên bàn phím, đó sẽ là biệt danh của bạn trong thế giới phép thuật 😳🔮',
        tag: ' #best_unit #lonely_team🎭 #devil🍵 #doraemon #animeedit #slowmo #tphuoc_06'
    },
    {
        avatar:'lananh',
        video : 'lananh',
        imageBg : 'lananh',
        like: '1.7M',
        cmt: '15.6k',
        share: '2053',
        idName: '✨Hoàng Lan Anh✨',
        title: ':))) Ngủ chưa 🥱',
        tag: ''
    },
    {
        avatar:'toan',
        video : 'toan',
        imageBg : 'toan',
        like: '114.2k',
        cmt: '3208',
        share: '1325',
        idName: 'Toàn đồ đạc',
        title: 'Cô chưa khóc em khóc mẹ rồi',
        tag: '#boxstudio'
    },
    {
        avatar:'ciin',
        video : 'ciin',
        imageBg : 'ciin',
        like: '594.6k',
        cmt: '4132',
        share: '2425',
        idName: 'CiiN',
        title: 'Những lời đàm tiếu qua loa linh tinh, không thể nào mà cản bước được Ciin đi ĐL 🥲🥲 =)))))',
        tag: ''
    },
    {
        avatar:'mile',
        video : 'mile',
        imageBg : 'mile',
        like: '200.6k',
        cmt: '627',
        share: '3253',
        idName: '마일',
        title: '이거 코딩 누가한거야 ㅋㅋㅋㅋㅋㅋㅋ',
        tag: '#코딩'
    },
    {
        avatar:'dieulinh',
        video : 'dieulinh',
        imageBg : 'dieulinh',
        like: '538.2k',
        cmt: '3129',
        share: '782',
        idName: '𝓓𝓲𝓮̣̂𝓾 𝓛𝓲𝓷𝓱 🤍 ',
        title: '🤍',
        tag: ''
    },
    {
        avatar:'thao',
        video : 'thao',
        imageBg : 'thao',
        like: '756.5k',
        cmt: '3171',
        share: '3562',
        idName: 'thou đin khùm🇻🇳',
        title: 'Tranh thủ 15 phút ra chơi quay toptop kiểu 😃',
        tag: '#tuilathouthou #trending #tiktokdanceVN #viral #fyp #foryou #lecirque #TikTokDieuKy'
    },
    
]

const Home = () => {
    return ( 
        <div id='home-scroll' className=" overflow-scroll h-screen snap-y snap-mandatory ">
            {dataVideo.map((item,index) => (
            <Video key={index} data={item}/>
            ))}
        </div>
     );
}
 
export default Home;