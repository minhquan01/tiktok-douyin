import './Follow.css'
import VideoFl from './VideoFl';


const dataVideo = [
    {
        avatar:'tattoo',
        video : 'tattoo',
        imageBg : 'tattoo',
        like: '17.8k',
        cmt: '220',
        share: '217',
        idName: '1984tattoostudio',
        title: 'oke oke',
        tag: '#fyp #xuhuong'
    },
    {
        avatar:'auto',
        video : 'auto',
        imageBg : 'auto',
        like: '13.7k',
        cmt: '230',
        share: '46',
        idName: 'AutoPro',
        title: 'Đường đường là một dân chơi, gì chứ xe là không được thiếu 🐧',
        tag: '#autopro #amm #Zoomcar #fyb #trend #car'
    },
    {
        avatar:'dhtrg',
        video : 'dhtrg',
        imageBg : 'dhtrg',
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