import './New.css'

import bgNew from '../../assets/image/bgNew.png'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'

const dataNew1 = [
    {
        avatar:'asian',
        idName:'🚏 ASIAN GIRL',
        date:'14 tháng 03 lúc 13:07',
        tus:'Đoán xem em là ai nàoo?... 🙄',
        img:'asian',
        like:'1.5k',
        cmt:'145'
    },
    {
        avatar:'vanhau',
        idName:'Đoàn Văn Hậu',
        date:'24 tháng 02 lúc 09:24',
        tus:'Aloooooo  📞 😝',
        img:'vanhau',
        like:'42k',
        cmt:'1.6k'
    },
    {
        avatar:'minhnhat',
        idName:'Lê Minh Nhật',
        date:'06 tháng 04 lúc 11:22',
        tus:'Không làm liền là...',
        img:'minhnhat',
        like:'26k',
        cmt:'405'
    },
    {
        avatar:'jangmi',
        idName:'Jang Mi 🌹',
        date:'13 tháng 04 lúc 21:05',
        tus:'Haha…. Thì ra mùa xuân hoa nở là vì Bố kkkk',
        img:'jangmi',
        like:'1.2k',
        cmt:'85'
    },
    {
        avatar:'ribi',
        idName:'Ribi Sachi',
        date:'09 tháng 03 lúc 06:48',
        tus:'Chuyện tối qua ❤️',
        img:'ribi',
        like:'11k',
        cmt:'298'
    },
    {
        avatar:'khanhhuyen',
        idName:'Quỳnh Alee',
        date:'29 tháng 02 lúc 14:02',
        tus:'Phạt em gấp đôiii🤣',
        img:'khanhhuyen',
        like:'32k',
        cmt:'815'
    },
];
const dataNew2 = [
    {
        avatar:'thanh',
        idName:'🐻♡🐥',
        date:'12 tháng 04 lúc 07:06',
        tus:'Fann👉 Ny của NgThành 👉 Vợ yêu 🤭🐥😝',
        img:'thanh',
        like:'45.7k',
        cmt:'251'
    },
    {
        avatar:'mtp',
        idName:'Son Tung M-TP',
        date:'28 tháng 04 lúc 19:41',
        tus:'Tui đang ở đâyyy … Ngay đây trước màn hình cùng với tất cả các bạn đâyyy ….❤️❤️❤️',
        img:'mtp',
        like:'149.5k',
        cmt:'3531'
    },
    {
        avatar:'phuonghoa',
        idName:'Đào Lê Phương Hoa',
        date:'19 tháng 03 lúc 11:21',
        tus:'Bánh cuốn cuốn chiếu🤭',
        img:'phuonghoa',
        like:'336k',
        cmt:'1945'
    },
    {
        avatar:'nam',
        idName:'Ngô Đình Nam💦',
        date:'11 tháng 03 lúc 20:15',
        tus:'bạn ngầu vừa thôi được không? 🌝',
        img:'nam',
        like:'27k',
        cmt:'468'
    },
    {
        avatar:'nhy',
        idName:'Huỳnh Nhy',
        date:'27 tháng 01 lúc 10:15',
        tus:'Pinky no pinky',
        img:'nhy',
        like:'2.8k',
        cmt:'105'
    },
    {
        avatar:'ciin',
        idName:'Bùi Thảo Ly',
        date:'15 tháng 04 lúc 15:40',
        tus:'Đi giao lưu 1-2 hôm rùi thì hôm nay cũng kêu gọi vote cho chương trình thuiiiii',
        img:'ciin',
        like:'6.5k',
        cmt:'145'
    },
]

const New = () => {
    return ( 
        <div id='new-scroll' className="w-[95%] mx-auto h-[91vh] overflow-y-scroll text-black">
               <div className='md:flex md:pb-[20px] md:gap-4'>
                    <div className='w-[100%] md:w-[50%]'>
                            {dataNew1.map((item1, index) => (
                                    <div 
                                    key={index}
                                    className='bg-[rgb(255,255,255,.8)] rounded-[6px] py-[5px] my-[10px]'
                                    style={{
                                        backgroundImage: `url(${bgNew})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',             
                                    }}
                                    >
                                        <div className='m-5'>
                                            <div className='flex items-center'>
                                                <div className='mr-[10px]'>
                                                    <img src={require('../../assets/image/New/img/avatar/' + item1.avatar + '.jpeg')} alt="" className='rounded-full w-12' />
                                                </div>
                                                <div>
                                                    <div className='flex items-center'>
                                                    <h1 className='font-[700] text-[20px]' >{item1.idName}</h1>
                                                    <span className='mx-[5px] text-[20px]'>•</span>
                                                    <span className='text-[20px] font-[700] text-[#fe2c55] cursor-pointer  '
                                                    >
                                                        Follow
                                                    </span>
                                                    </div>
                                                    <div>
                                                        <span className='text-[14px] text-[rgb(0,0,0,.7)]'>{item1.date}</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <h1 className='text-[18px] mt-[15px]'>{item1.tus}</h1>
                                                <img className='my-[10px] rounded-[6px]'
                                                src={require('../../assets/image/New/img/' + item1.img + '.jpg')} />
                                                <div className='flex text-[24px]'>
                                                    <span className='flex items-center mr-[30px] cursor-pointer'>
                                                        <AiOutlineHeart/>
                                                        <p className='text-[18px] ml-[5px]'>{item1.like}</p>
                                                    </span>
                                                    <span className='flex items-center cursor-pointer'>
                                                        <AiOutlineMessage/>
                                                        <p className='text-[18px] ml-[5px]'>{item1.cmt}</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                    </div>
                    <div className='w-[100%] md:w-[50%]'>
                            {dataNew2.map((item2, index) => (
                                <div 
                                key={index}
                                className='bg-[rgb(255,255,255,.8)] rounded-[6px] py-[5px] my-[10px]'
                                style={{
                                    backgroundImage: `url(${bgNew})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',             
                                }}
                                >
                                    <div className='m-5'>
                                        <div className='flex items-center'>
                                            <div className='mr-[10px]'>
                                                <img src={require('../../assets/image/New/img/avatar/' + item2.avatar + '.jpeg')} alt="" className='rounded-full w-12' />
                                            </div>
                                            <div>
                                                <div className='flex items-center'>
                                                <h1 className='font-[700] text-[20px]' >{item2.idName}</h1>
                                                <span className='mx-[5px] text-[20px]'>•</span>
                                                <span className='text-[20px] font-[700] text-[#fe2c55] cursor-pointer  '
                                                >
                                                    Follow
                                                </span>
                                                </div>
                                                <div>
                                                    <span className='text-[14px] text-[rgb(0,0,0,.7)]'>{item2.date}</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <h1 className='text-[18px] mt-[15px]'>{item2.tus}</h1>
                                            <img className='my-[10px] rounded-[6px]'
                                            src={require('../../assets/image/New/img/' + item2.img + '.jpg')} />
                                            <div className='flex text-[24px]'>
                                                <span className='flex items-center mr-[30px] cursor-pointer'>
                                                    <AiOutlineHeart/>
                                                    <p className='text-[18px] ml-[5px]'>{item2.like}</p>
                                                </span>
                                                <span className='flex items-center cursor-pointer'>
                                                    <AiOutlineMessage/>
                                                    <p className='text-[18px] ml-[5px]'>{item2.cmt}</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
               </div>
        </div>
     );
}
 
export default New;