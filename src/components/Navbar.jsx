import { MdOutlineCloudUpload } from'react-icons/md'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return ( 
        <div className=" h-[60px] text-white border-b-[1px] border-[rgb(204,204,204,0.1)]">
            <div className='flex justify-between items-center h-full w-[95%] mx-auto'>
                <div className='w-[400px] hidden md:flex md:items-center md:justify-between border-2 border-solid border-[hsla(0,0%,100%,.9) rounded-[6px] px-[10px]'>
                    <input 
                    type='text'
                    placeholder="Tìm kiếm tài khoản và video"
                    className=" bg-transparent py-[7px] outline-none flex-grow-[1] "/>
                    <button className=' pl-[5px] pb-[10px] pt-[5px] h-full w-[40px] border-l-[1px] flex justify-center items-center border-[rgb(204,204,204,.4)]'><FaSearch/></button>
                </div>
                <div>
                    <ul className='flex ml-[5vw] sm:ml-[45vw] md:ml-0'>
                        <li className='relative w-[104px] flex'>
                            <div className='absolute content-[""] block h-[38px] [108px] right-[-1px] bg-[#00faf0] rounded-[6px]'></div>
                            <div className='flex items-center font-[600] text-[15px] z-10 bg-[#161722] border-2 border-solid border-[hsla(0,0%,100%,.9) rounded-[6px] flex-shrink-0 py-0 justify-center px-[14px] cursor-pointer relative w-[104px]'>
                                <MdOutlineCloudUpload className='z-10 mr-[5px] text-[17px]'/> 
                                <span>Tải lên</span>
                            </div>
                            <div className='absolute content-[""] block h-[38px] w-[107px] left-[-1px] bg-[#fe2c55] rounded-[6px]'></div>
                        </li>
                        <li>
                            <button className=' text-[16px] w-[104px] h-[38px] font-[700] leading-[23px] text-while rounded-[5px] ml-[20px] bg-[#fe2c55] '>
                                Đăng Nhập
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;