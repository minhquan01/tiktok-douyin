import './Follow.css'
import VideoFl from './VideoFl';


const dataVideo = [
    {
        avatar:'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b8b52e9ff81ffc1744d13622f2ac406f.jpeg?x-expires=1650776400&x-signature=6y%2Bw%2BpSthVr93ABplx2yjmFxZXI%3D',
        video : 'https://v16-webapp.tiktok.com/0308fb08d2c2b2ef109d5629945deb24/62628c31/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/cb06621c8768464cacd612519eb16317/?a=1988&br=2202&bt=1101&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZQd7Nwe2NM~Qml7Gb&l=202204220505490102450622020E9253C5&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajltbzo6ZnFoPDMzZjgzM0ApM2dmOjs6OGQ8NzhmZmdkN2dnaDZrcjRnLS5gLS1kL2NzczJgLWEvYmJgNWMtNmM2NDU6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/b836acd2324840a39ac0ca0da147253d_1648550073?x-expires=1650625200&x-signature=Vf4KMC2ZCDJyZvsQzloacBSen%2BI%3D',
        like: '17.8k',
        cmt: '220',
        share: '217',
        idName: '1984tattoostudio',
        title: 'oke oke',
        tag: '#fyp #xuhuong'
    },
    {
        avatar:'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/da416b2a5e3d1e2ab9e295d6d81085cf.jpeg?x-expires=1650776400&x-signature=FQGSjYqHXLuvhYyUAZXNGtTZMqc%3D',
        video : 'https://v16-webapp.tiktok.com/9ecbd8ecef3d1a0a292a437d4a1a6d06/62628c51/video/tos/useast2a/tos-useast2a-pve-0037-aiso/fc2fa7413adc4a80bfdde123be597e83/?a=1988&br=2572&bt=1286&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZQd7Nwe2NM~Qml7Gb&l=202204220505490102450622020E9253C5&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpyMzU6ZjozPDMzZjgzM0ApNGk8ODQ6ZWU1NzRlNzQ2ZWdlcW9hcjRfMmRgLS1kL2Nzcy9hNl8xYC1jMl81MC5eYy46Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/2914e8dbdcda4befa5ee6db741646fb3_1650459337~tplv-dmt-logom:tos-useast2a-pv-0037-aiso/92733f9f174e493e8a5b13e900bf4653.image?x-expires=1650625200&x-signature=KD5X0xIsee6CJhaKnXTHmOkfYlU%3D',
        like: '13.7k',
        cmt: '230',
        share: '46',
        idName: 'AutoPro',
        title: 'Đường đường là một dân chơi, gì chứ xe là không được thiếu 🐧',
        tag: '#autopro #amm #Zoomcar #fyb #trend #car'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4318364634ea72b8f0f1b55d36c6be57~c5_100x100.jpg?x-expires=1650690000&x-signature=zFWFG%2BRJROBqJa3aVWluENzrdSI%3D',
        video : 'https://v16-webapp.tiktok.com/bb4ed44c13fe2351df2df690e7dd15e8/62628fb7/video/tos/useast2a/tos-useast2a-pve-0037-aiso/acb043ee5ec84498a7127d3e1d43d70d/?a=1988&br=2296&bt=1148&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zl97Nwe2NuJQml7Gb&l=202204220521110102440492190D9266E0&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M215M2U6Zjs6OzMzZjgzM0ApNmloOzM7Ozw2NzM5PGZpNmdzYm1pcjQwbG5gLS1kL2Nzc2MyYi5gYTIuMl8xNjBjYDQ6Yw%3D%3D&vl=&vr=',
        imageBg : 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d18486ef558946ec982b1a52432153f8?x-expires=1650625200&x-signature=CPWL44uRZKwcBLKhXNgMZEszTUw%3D',
        like: '184.1k',
        cmt: '1459',
        share: '365',
        idName: '_dhtrg_',
        title: 'Đang thi giữa kì bận hong có thời gian làm vid lun á :(( mng xem tạm nhaa ',
        tag: '#fyp #xuhuong #trending #outfitideas'
    },
    
]

const Follow = () => {
    return ( 
        <div id='home-scroll' className=" overflow-scroll h-screen snap-y snap-mandatory ">
            {dataVideo.map((item,index) => (
            <VideoFl key={index} data={item}/>
            ))}
        </div>
     );
}
 
export default Follow;