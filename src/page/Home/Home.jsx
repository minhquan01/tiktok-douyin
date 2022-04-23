import './Home.css'

import Video from "./Video";


const dataVideo = [
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/60286e3f4ef94a4cb8c9b438ae99da25~c5_100x100.jpeg?x-expires=1650776400&x-signature=WSqJ%2BTQZXlml0W2XmCfdZvYgA8Y%3D',
        video : 'https://v16-webapp.tiktok.com/c1952a52a2c65a4ef1f5573e242fc570/625f35df/video/tos/useast2a/tos-useast2a-pve-0037-aiso/3ad2c8427864419993f040ae970faa85/?a=1988&br=2010&bt=1005&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZC.qwwe2NtTQml7Gb&l=2022041916211201024504314605E05712&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ0dGY6ZnBmOzMzZjgzM0ApOTs0Z2doNjszNzNmNTY1NGcucmxucjRvYmpgLS1kL2NzczI0NDFhLzAwYDNjLl4zMmA6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/c1c1b7150fd94942bfe55821d57964ec_1647101892?x-expires=1650711600&x-signature=nk4ziYUTKqVJoWiHW5PZaLU84EA%3D',
        like: '298k',
        cmt: '991',
        share: '4589',
        idName: '阮玉梅',
        title: '承诺不能战胜时间，但我们的努力可以。',
        tag: '#yumei05 #douyin #fyp'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/db5cc21f4e0eb7cdaa10f29ae3528b8d~c5_100x100.jpeg?x-expires=1650862800&x-signature=wv6ERMOb7W1grI8yUeXmoVAb3aM%3D',
        video : 'https://v16-webapp.tiktok.com/143577752a79bc06394ab6c44bb77079/625f36d7/video/tos/useast2a/tos-useast2a-pve-0037-aiso/7ceced7f972045ab9449a6cb1dc673c8/?a=1988&br=1344&bt=672&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zxuqwwe2NQVG2l7Gb&l=2022041916251301024524610522E3C831&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzxydzk6Zmk1PDMzZjgzM0ApZzo8ZjtmZGRlN2czNTw4OGc1cG1gcjRvaF9gLS1kL2NzczAxLTVeLV80YC8wNjFiMjU6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/ec64c0b4f1b14fdeb421ff03b5343c9f_1649815506?x-expires=1650711600&x-signature=dzPZbizZX94ruEZu134qztgdl4c%3D',
        like: '37.9k',
        cmt: '533',
        share: '598',
        idName: '𝑻𝒉𝒊𝒆̂𝒏 𝑽𝒊𝒐𝒍𝒆𝒕',
        title: '- Nếu như bạn cần động lực hãy xem bình luận 😌',
        tag: '#violettnt'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/68b6208957a710c61ae4cf0b01a2c4c0~c5_100x100.jpeg?x-expires=1650862800&x-signature=Ac4Gbfux4%2BQzh5yeWsPdXqQnwo8%3D',
        video : 'https://v16-webapp.tiktok.com/87adef5fb991de56ec159d6a4214f418/625edab9/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/02e723186c0e49e2865a6f72e6695677/?a=1988&br=3254&bt=1627&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZUFkwwe2Nylhml7Gb&l=2022041909521101024500414915AD9548&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttdTo6ZmZ0OzMzZjgzM0ApOjlkNjlmaGVpNzQ4ZjRoNWcvc2JtcjQwc3NgLS1kL2NzczRfYTEtYS1gYjMtX181XzQ6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/1d2a6bdc3a6e411ebbceccc536c0d470_1648340941?x-expires=1650711600&x-signature=BNyiNfk1uTs%2B9V4jmn157OUAuRg%3D',
        like: '310.1k',
        cmt: '6080',
        share: '794',
        idName: 'Azami..',
        title: 'gơ ka mười',
        tag: ''
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/83102ae04cfdb736054ff9ec842a7bc1~c5_100x100.jpeg?x-expires=1650862800&x-signature=EtbmpD%2FKezKrX1GbtlkwCw%2B%2Fue8%3D',
        video : 'https://v16-webapp.tiktok.com/9d3ec7292b5830b93ed7572fae1139a7/625ede1a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/9c74bc46aa024121bfcbf1ef40758ec5/?a=1988&br=3104&bt=1552&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zj_kwwe2Nr2hml7Gb&l=2022041910062401024402622906AFB989&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Bndzo6ZjozPDMzZjgzM0ApOzhlNjpmOTxmNzw6NTQ2OWcuazNpcjRnXmJgLS1kL2Nzcy0vMzFeLzQ1XzQzYzM1Ll86Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/3219557f365d4e638cf1f18d1584ad20?x-expires=1650711600&x-signature=01A44i5aLLTQGcewgaZPVYSsEyI%3Dhttps://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/3219557f365d4e638cf1f18d1584ad20?x-expires=1650711600&x-signature=01A44i5aLLTQGcewgaZPVYSsEyI%3D',
        like: '201.7k',
        cmt: '33.9k',
        share: '563',
        idName: 'tphuoc_06',
        title: 'Vẽ chữ C lên bàn phím, đó sẽ là biệt danh của bạn trong thế giới phép thuật 😳🔮',
        tag: ' #best_unit #lonely_team🎭 #devil🍵 #doraemon #animeedit #slowmo #tphuoc_06'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a6ce3b6d963ba0b6df6cee921575694f~c5_100x100.jpeg?x-expires=1650862800&x-signature=V%2FpaQUOcn68pqpDVkYQD505jmCM%3D',
        video : 'https://v16-webapp.tiktok.com/4aef7ecd8d2ccc60f78cc6af2c111e75/625edf24/video/tos/useast2a/tos-useast2a-pve-0037-aiso/f4616671df9148658e032aa89db30448/?a=1988&br=2994&bt=1497&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZpEkwwe2N_YBml7Gb&l=2022041910110701024504321314AE0764&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Q8eTk6Zmo3OzMzZjgzM0ApPDw7PDk8Mzs0NzU6ZTNoN2dxcGVfcjQwX19gLS1kL2NzczNiMWAxLl5hMjBgYS5eYy06Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/485b04dc6c90453e94e3cd7ebd74a441_1645627140?x-expires=1650711600&x-signature=a74H9Li6W5y8xGsCm%2B4%2B%2B73EpOo%3D',
        like: '1.7M',
        cmt: '15.6k',
        share: '2053',
        idName: '✨Hoàng Lan Anh✨',
        title: ':))) Ngủ chưa 🥱',
        tag: ''
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/13ea774abe2e63d4178ef6d677d4f76f~c5_100x100.jpeg?x-expires=1650862800&x-signature=suvTnMDkyFtD69aGFkQ6Mf7IJsU%3D', 
        video : 'https://v16-webapp.tiktok.com/54b63b3959b51de46e7225b9e56d5365/62627552/video/tos/useast2a/tos-useast2a-pve-0037-aiso/38cd4e113b174650beb97ae3f6b23655/?a=1988&br=1842&bt=921&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZSmQNwe2NeSUml7Gb&l=20220422032751010245243118008B0BA4&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2hwbWk6Zjk3PDMzZjgzM0ApPDw4OzQ3Zjw0NzZlPDVpPGdyM2ZocjRfL2FgLS1kL2Nzc2AxMGMyLS4uM2MzX2EwYi06Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/4faf5fe486d74027a26f4dba48915e52_1650082640?x-expires=1650711600&x-signature=zf1G2EPXsCv7UQ8yURbQSzQPDek%3D',
        like: '114.2k',
        cmt: '3208',
        share: '1325',
        idName: 'Toàn đồ đạc',
        title: 'Cô chưa khóc em khóc mẹ rồi',
        tag: '#boxstudio'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cf6d63edcee4ce81432e92c4dadffc65~c5_100x100.jpg?x-expires=1650686400&x-signature=U2wQL%2BQt8HliyTgK68diU%2FTHtOY%3D',
        video : 'https://v16-webapp.tiktok.com/d3127a4aacf4114f5139a5e69a07c876/6263c673/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/324cb4a930434c71a6d89c888edf0030/?a=1988&br=5620&bt=2810&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZTblNwe2NDKfml7Gb&l=2022042303265301024513320700835905&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am9qNjc6ZmY1PDMzZjgzM0ApaWVoNWVkNDxpNzY7NzxpM2dxLjVicjRvZDFgLS1kL2NzczU0XmNeXzIyNi4uYjIwNDA6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/8fd014759096410da0a31f60aad87147_1648896160?x-expires=1650711600&x-signature=0W6rStNdP0eviF3a0gv7w3JssSI%3D',
        like: '594.6k',
        cmt: '4132',
        share: '2425',
        idName: 'CiiN',
        title: 'Những lời đàm tiếu qua loa linh tinh, không thể nào mà cản bước được Ciin đi ĐL 🥲🥲 =)))))',
        tag: ''
    },
    {
        avatar:'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2b04e4db38cec38ed2ae0ddb4fd97b7d.jpg?x-expires=1650686400&x-signature=JlIV9liQhiBQNDuS12TFk%2FH40bI%3D',
        video : 'https://v16-webapp.tiktok.com/66c98bc58c0d0a40ee0e25382eee39fa/626284d4/video/tos/alisg/tos-alisg-pve-0037/29325902a6174d9f95f4ce9ce301e7b7/?a=1988&br=486&bt=243&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZUr7Nwe2NbTQml7Gb&l=202204220434170102450190691D920007&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzt0cmc6ZnIzPDMzODgzNEApPDo4Nzw6ZWQ6NzpoZTZoOGc1ZWYycjRfLmRgLS1kLy1zczItL2BiLmM2M2EzMTUwYTI6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/32ef10ff53b54b4d999196822d35d55c_1650458942?x-expires=1650711600&x-signature=L4WJJGD3E7dTm%2FSGLZZ%2B3qQSxPM%3D',
        like: '200.6k',
        cmt: '627',
        share: '3253',
        idName: '마일',
        title: '이거 코딩 누가한거야 ㅋㅋㅋㅋㅋㅋㅋ',
        tag: '#코딩'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/91c551509bfcee7da7dc5bee5dfd9c0e~c5_100x100.jpeg?x-expires=1650772800&x-signature=ufi3bmL2Qo7w9tAO7h8tDl%2BsBtc%3D',
        video : 'https://v16-webapp.tiktok.com/35c21cb6f1a8c42b8b5ce634df8330f4/62628797/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/ef6aa4d7306f450c89220bf7fe56a38a/?a=1988&br=1966&bt=983&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZvK7Nwe2NgYQml7Gb&l=2022042204463301024500505103910308&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ducWg6ZjNyPDMzZjgzM0ApPGRmaWg3Ozw5NzU7OjdoO2cvazBncjRnbGNgLS1kL2Nzcy5iXl9fNDNgMDMyMGJiYTU6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d62c802654ec4b0d894e68b9bb3d9d2e_1650429196?x-expires=1650711600&x-signature=foHqgg7%2B8Ii3DWVBQ15uakvoHkQ%3D',
        like: '538.2k',
        cmt: '3129',
        share: '782',
        idName: '𝓓𝓲𝓮̣̂𝓾 𝓛𝓲𝓷𝓱 🤍 ',
        title: '🤍',
        tag: ''
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b887d1f24d638422f26b3b03e4e71fe5~c5_100x100.jpeg?x-expires=1650772800&x-signature=oKeBIAS4FS0Ly33hx9PY6yIRmV0%3D',
        video : 'https://v16-webapp.tiktok.com/d9adee5308a0a12fe7988c82a8939708/6263c72c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/f77f501560204a79ae11d4e4ac2b5dfe/?a=1988&br=3892&bt=1946&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Z0flNwe2NClhml7Gb&l=202204230330010102450002292485D16F&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anFyO2Y6Zjg4PDMzZjgzM0ApNTk8Nzk6ZDxlN2k4Ozw6NGcwYzYvcjQwMWNgLS1kL2NzczA0YWFgNjUtYTEuMC42MTQ6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/5174e0123b454445b55e997d5ce0989d_1650348676?x-expires=1650711600&x-signature=5JUJFiVcBcYX5a9FqXxsAZ7V7xU%3D',
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