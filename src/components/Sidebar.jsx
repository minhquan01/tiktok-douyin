
import { Link } from 'react-router-dom'
import Logo from '../assets/image/logo.png'
import { AiFillHome } from 'react-icons/ai'
import { FiUsers, FiCompass} from 'react-icons/fi'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { RiMessage3Line, RiHeart2Line } from 'react-icons/ri'
import { VscFeedback } from 'react-icons/vsc'
import { FaTiktok, FaPager  } from 'react-icons/fa'

const navbars = [
    {
        name:'Trang Chủ',
        path:'/',
        icon: <AiFillHome/>
    },
    {
        name:'Đang Follow',
        path:'/follow',
        icon: <FiUsers/>
    },
    {
        name:'Bảng Tin',
        path:'/news',
        icon: <FaPager/>
    },
    {
        name:'LIVE',
        path:'/live',
        icon: <HiOutlineVideoCamera />
    },
    {
        name:'Tin Nhắn',
        path:'/message',
        icon: <RiMessage3Line/>
    },
    {
        name:' Khám Phá',
        path:'/discover',
        icon: <FiCompass/>
    },
    {
        name:'Video đã thích',
        path:'/like',
        icon: <RiHeart2Line />
    },
    {
        name:'Phản hồi',
        path:'/feedback',
        icon: <VscFeedback />
    },
    {
        name:'Bảng Xếp Hạng',
        path:'/charts',
        icon: <FaTiktok />
    },
]

 
const Sidebar = () => {
    return (
        <div className='bg-[#060716] text-[#87878f] h-full'>
            <div className='w-[100%] md:w-[85%] md:float-right'>
                <img className='w-[80%] mx-auto md:mx-0 pt-[20px] md:pt-0 md:w-[60%] md:mt-[20px] mb-[10px]' src={Logo} alt="logo" />
                <ul>
                    {navbars.map((navbar, index) => (
                        <li key={index} 
                        className='font-[600] text-[30px] md:text-[20px] md:py-[5px] md:my-[5px] hover:text-[#c8c8ca] last:border-b-[1px] last:w-[100%] md:last:w-[85%] last:border-[#ccc]'
                        style={window.location.pathname === navbar.path ? {color: 'rgb(254,44,86,0.7)'} : {}}
                        onClick={() => {
                            window.location.pathname = navbar.path;
                        }}
                        >
                            <Link to={navbar.path} className='flex items-center justify-center md:justify-start my-[30px] md:my-0 '>
                                {navbar.icon}
                                <span className='ml-[5px] hidden md:block'>{navbar.name}</span>
                            </Link>
                        </li>
                    ))}
                   
                </ul>
                <ul className='md:flex md:flex-wrap text-[16px] font-[500] mt-[10px] hidden '>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Giới thiệu</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Bảng tin</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Liên hệ</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Sự nghiệp</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">ByteDance</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">TikTok for Good</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Quảng cáo</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Developers</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Transparency</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">TikTok Rewards</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Trợ giúp</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">An toàn</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Điều khoản</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Quyền riêng tư</a>
                    </li>
                    <li className='px-[3px] py-[1px] hover:underline'>
                        <a href="/">Creator Portal</a>
                    </li>
                    
                </ul>
                <p className='text-center md:text-left md:ml-[20px] mt-[20px] md:mt-0'>© 2022 TikTok</p>
            </div>
        </div>
     );
}
 
export default Sidebar;