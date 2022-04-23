import './New.css'

import bgNew from '../../assets/image/bgNew.png'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'

const dataNew1 = [
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0c396cd17fce7f07f81e8bcbcce313~c5_100x100.jpg?x-expires=1650711600&x-signature=AmR%2FjIE693ryyjc0GvY8ue%2FZSwE%3D',
        idName:'🚏 ASIAN GIRL',
        date:'14 tháng 03 lúc 13:07',
        tus:'Đoán xem em là ai nàoo?... 🙄',
        img:'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/c75d0f252f0c4676b010ccedeec4ca0f_1650595134?x-expires=1650704400&x-signature=mUse%2Fp9Up5Hqqc4112hXK4pwIQw%3D',
        like:'1.5k',
        cmt:'145'
    },
    {
        avatar:'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1658678408189953.jpeg?x-expires=1650798000&x-signature=2161gluYtsG88ZJoqgWjfg2iLv4%3D',
        idName:'Đoàn Văn Hậu',
        date:'24 tháng 02 lúc 09:24',
        tus:'Aloooooo  📞 😝',
        img:'https://video.fhan2-4.fna.fbcdn.net/v/t39.30808-6/278393882_2168064823349063_7543689442379489973_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ACcwKhwcZAQAX8Bxsvq&_nc_ht=video.fhan2-4.fna&oh=00_AT8gT-nGT7voSAiK1AozqkW5UJwp4mPSxIdlUIqaLxZzvA&oe=6268179F',
        like:'42k',
        cmt:'1.6k'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cc615efc29d58fdb09ce726e7fd48dd1~c5_100x100.jpeg?x-expires=1650798000&x-signature=ZudOVrF%2FVl1%2Fzio9daq2faXbsro%3D',
        idName:'Lê Minh Nhật',
        date:'06 tháng 04 lúc 11:22',
        tus:'Không làm liền là...',
        img:'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/a35543de1fa94cef836d570f6e7f2ecd_1627985630?x-expires=1650646800&x-signature=iRU%2F%2BHL%2Fz52JfY1X%2BCqkmIm4gzA%3D',
        like:'26k',
        cmt:'405'
    },
    {
        avatar:'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b38b8718cf2453688361b0404532b79b.jpeg?x-expires=1650798000&x-signature=vCQeY%2BIpY3%2BBMsMO7iMda1ZW8jU%3D',
        idName:'Jang Mi 🌹',
        date:'13 tháng 04 lúc 21:05',
        tus:'Haha…. Thì ra mùa xuân hoa nở là vì Bố kkkk',
        img:'https://vnn-imgs-f.vgcloud.vn/2019/02/20/09/jang-mi-mot-lan-vut-sang-nho-duyen-phan-roi-le-loi-3-nam.jpg',
        like:'1.2k',
        cmt:'85'
    },
    {
        avatar:'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/46d9c424d528917770b045c73e8bf9f2.jpeg?x-expires=1650798000&x-signature=0trMDpkDsXrGbtNjuy0ToaDVk20%3D',
        idName:'Ribi Sachi',
        date:'09 tháng 03 lúc 06:48',
        tus:'Chuyện tối qua ❤️',
        img:'https://video.fhan2-2.fna.fbcdn.net/v/t39.30808-6/278738500_554309976059680_8551022384141246438_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xjiX9HbLi4cAX-j7IRM&_nc_ht=video.fhan2-2.fna&oh=00_AT9CY87y5kIcSI-6H8EFaMjDKSIMPaDBESC0yUIGBgnC8w&oe=62685EDF',
        like:'11k',
        cmt:'298'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a362dd9070dfbaa1461a00dc2decc1f4~c5_100x100.jpeg?x-expires=1650798000&x-signature=G04yF%2BofzSjUKz6ZUMvt%2F6vB8EM%3D',
        idName:'Quỳnh Alee',
        date:'29 tháng 02 lúc 14:02',
        tus:'Thật tuỵtttttt🤣',
        img:'https://video.fhan2-2.fna.fbcdn.net/v/t39.30808-6/275439667_1290188284852486_144357321325447477_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=4kbsd6M41eAAX-vIYEK&_nc_ht=video.fhan2-2.fna&oh=00_AT9U-2MECasxplwnS1ZOjnOqAYDKMEhvpY5V0CAWJ_1WmQ&oe=6268486C',
        like:'32k',
        cmt:'815'
    },
];
const dataNew2 = [
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e2910177efceea4654dc11d87db343c7~c5_100x100.jpg?x-expires=1650715200&x-signature=Nb5PtlGWGCqbi6sYCv44q6iEsug%3D',
        idName:'🐻♡🐥',
        date:'12 tháng 04 lúc 07:06',
        tus:'Fann👉 Ny của NgThành 👉 Vợ yêu 🤭🐥😝',
        img:'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/c11c84892bb5474f83efb55e769b1ed5?x-expires=1650650400&x-signature=7G3hJIEFm1uHuSWYYn8Bp4X2Hwo%3D',
        like:'45.7k',
        cmt:'251'
    },
    {
        avatar:'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/115cca71265c94522079ac7e93a0274b.jpeg?x-expires=1650801600&x-signature=sU5M%2BPR5E8AtnQbgASXUstASIhw%3D',
        idName:'Son Tung M-TP',
        date:'19 tháng 04 lúc 15:41',
        tus:'Đừng có quên đăng hình áo NOAA kèm theo hashtag #CheapMomentwithMTP để cùng Tùng và SKY đón chờ dự án to đùng này của Tùng nhaaaa ♥️♥️♥️',
        img:'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e908eb12ff514eed946c11f784cf99de?x-expires=1650650400&x-signature=5mshfECf1%2FCOR7g7cFuMVuiVmYc%3D',
        like:'149.5k',
        cmt:'3531'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1650801600&x-signature=dy7XeQ7o9gXcfmPjC%2FGtG2wb53U%3D',
        idName:'Đào Lê Phương Hoa',
        date:'19 tháng 03 lúc 11:21',
        tus:'Bánh cuốn cuốn chiếu🤭',
        img:'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d9829343a5b04b41b8fec3f1a2976484_1650017679?x-expires=1650650400&x-signature=uLkllohlTeDlc2LkOt1PJI%2Fq8T0%3D',
        like:'336k',
        cmt:'1945'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d1faaa2f41e7fb89d5e950519da0425e~c5_100x100.jpeg?x-expires=1650805200&x-signature=yeHSPgoxQq1ytFRNbdMxy8L3NpI%3D',
        idName:'Ngô Đình Nam💦',
        date:'11 tháng 03 lúc 20:15',
        tus:'bạn ngầu vừa thôi được không? 🌝',
        img:'https://video.fhan2-3.fna.fbcdn.net/v/t39.30808-6/275616379_496784795329769_5380770462554818754_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=SgTqvCDVGCsAX8rsqqz&_nc_ht=video.fhan2-3.fna&oh=00_AT8BwRuqBgtP0nifOEi-Tgj4u6_fQj83t_j_Pn0qiXrYCw&oe=62679442',
        like:'27k',
        cmt:'468'
    },
    {
        avatar:'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8c5b0dfc85ba3eaa6db178505c5e22c1~c5_100x100.jpeg?x-expires=1650805200&x-signature=K9Wtmd2XfaJh66nF2KMg7u1tnsM%3D',
        idName:'Huỳnh Nhy',
        date:'27 tháng 01 lúc 10:15',
        tus:'Pinky no pinky',
        img:'https://video.fhan2-3.fna.fbcdn.net/v/t39.30808-6/272321492_1609797512695511_1828582030068008765_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4YWVWZBM2dQAX94ryiG&_nc_ht=video.fhan2-3.fna&oh=00_AT9lOIiyUiOYva68cnYUMSVIyiWVEUcnWY_R1lCxCySysw&oe=6267E0E8',
        like:'2.8k',
        cmt:'105'
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
                                                    <img src={item1.avatar} alt="" className='rounded-full w-12' />
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
                                                src={item1.img} />
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
                                                <img src={item2.avatar} alt="" className='rounded-full w-12' />
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
                                            src={item2.img} />
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