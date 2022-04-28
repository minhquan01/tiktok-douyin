
import { AiFillHeart, AiFillMessage, AiOutlinePlus } from 'react-icons/ai'
import { IoMdShareAlt } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa'
import { BsPauseFill } from 'react-icons/bs'
import { HiVolumeUp } from 'react-icons/hi'
import { useEffect, useRef, useState } from 'react'
import useElementOnScreen from '../../components/useElementOnScreen'
import '../Home/Home.css'




const Video = ({ data }) => {
    const videoRef = useRef();
    const volumeRef = useRef()
    const progressBar = useRef();
    const animationRef = useRef();
    const [playing, setPlaying] = useState(false);
    const [liked, setLiked] = useState(false)
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


    useEffect(() => {
        const seconds = Math.floor(videoRef.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [videoRef?.current?.loadedmetadata, videoRef?.current?.readyState])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`

    }

    const handlePlay = () => {
        if(playing) {
            videoRef.current.pause()
            setPlaying(!playing)
            videoRef.current.volume = volumeRef.current.value /100
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            videoRef.current.play()
            setPlaying(!playing)
            videoRef.current.volume = volumeRef.current.value /100
            cancelAnimationFrame(animationRef.current);
        }
    };
    
  const whilePlaying = () => {
    progressBar.current.value = videoRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    videoRef.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }


  const changeVolume = () => {
      videoRef.current.volume = volumeRef.current.value /100
  }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }
    const isVisibile = useElementOnScreen(options, videoRef)
    useEffect(() => {
        if (isVisibile) {
          if (!playing) {        
            videoRef.current.play();
            setPlaying(true)
            videoRef.current.currentTime=0;
            videoRef.current.volume = volumeRef.current.value /100
            videoRef.current.focus();
            animationRef.current = requestAnimationFrame(whilePlaying);
          }
        }
        else {
          if (playing) {        
            videoRef.current.pause();
            setPlaying(false)
            videoRef.current.currentTime=0;
            videoRef.current.volume = volumeRef.current.value /100
            videoRef.current.focus();
            cancelAnimationFrame(animationRef.current);
          }
        }
      }, [isVisibile]);
    const handlePlayControl = () => {
        if(playing) {
            videoRef.current.pause()
            setPlaying(!playing)
            videoRef.current.volume = volumeRef.current.value /100
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            videoRef.current.play()
            setPlaying(!playing)
            videoRef.current.volume = volumeRef.current.value /100
            cancelAnimationFrame(animationRef.current);
        }
    }
    

    return (
            <div
            className='relative snap-start h-[100vh] cursor-pointer'
            onDoubleClick={() => setLiked(!liked)}
            >
            {!playing && <FaPlay className='z-50 absolute h-[90%] text-center left-[40vw] opacity-60 text-[70px] outline-none align-baseline p-0 m-0 box-border' onClick={handlePlay}/>}
            <div className='h-[10px]'></div>
            <div className="w-[95%] h-[calc(96vh-60px)] mx-auto -z-10  ">
                <div className=" h-full relative overflow-hidden rounded-[10px]">
                    {/* BackGround */}
                    <div className='h-full absolute top-0 left-0 right-0 bottom-0 object-cover '
                    style={{
                        backgroundImage: `url(${require('../../assets/image/Home/img/' + data.imageBg + '.jpg')})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(60px)',
                        WebkitFilter: 'blur(60px)'               
                    }}>
                    </div>
                    {/* Video */}
                    <div className='z-20 absolute top-0 w-full'>
                        <video
                        className='h-[83vh] w-screen left-0 outline-none absolute top-0 bottom-0 align-baseline p-0 m-0 box-border' 
                        onClick={handlePlay}
                        ref={videoRef}
                        loop
                        src={require('../../assets/image/Home/video/' + data.video + '.mp4')}
                        />

                    </div>
                    {/* Title */}
                    <div className='absolute z-30 bottom-[10%] left-[2%]'>
                        <h1 className='text-white font-[700] text-[20px] hover:text-[#fe2c55]'>@{data.idName}</h1>
                        <span className='flex flex-col items-start flex-wrap max-w-[100vw] md:max-w-[30vw] text-[17px]'>
                            <p className='text-white cursor-text'>{data.title}</p> 
                            <p className='text-[#ffe601] font-[500]'>{data.tag}</p>
                        </span>
                    </div>
                    {/* Action */}
                    <div className='absolute z-30 bottom-[30%] right-[2%] flex flex-col items-center'>
                        <div className='mb-[20px] relative'>
                            <img className='rounded-full w-[50px] hover:scale-[1.1] transition-all cursor-pointer ' src={require('../../assets/image/Home/img/avatar/' + data.avatar + '.jpeg')} alt="" />
                            <AiOutlinePlus className='absolute bottom-[-9px] cursor-pointer text-[18px] left-0 mx-auto right-0 p-[3px] hover:scale-[1.1] transition-all align-bottom bg-[#fe2c55] rounded-full'/>
                        </div>
                        <div>
                            <div className='cursor-pointer my-[10px] flex flex-col items-center'>
                                <AiFillHeart
                                className='text-[30px] drop-shadow-md hover:scale-[1.1] transition-all'
                                onClick={() => setLiked(!liked)} 
                                style={liked ? {
                                    color:'#fe2c55'
                                } : {
                                    color:'#fff'
                                }}       
                                />
                                <span className='font-[500] '>{data.like}</span>
                            </div>
                            <div className='cursor-pointer my-[10px] flex flex-col items-center'>
                                <AiFillMessage className='text-[30px] drop-shadow-md hover:scale-[1.1] transition-all'/>
                                <span className='font-[500]'>{data.cmt}</span>
                            </div>
                            <div className='cursor-pointer my-[10px] flex flex-col items-center'>
                                <IoMdShareAlt className='text-[30px] drop-shadow-md hover:scale-[1.1] transition-all'/>
                                <span className='font-[500]'>{data.share}</span>
                            </div>

                        </div>
                    </div>
                    <div className='absolute w-full bottom-0 z-50 h-[30px] bg-[rgba(0,0,0,.4)]'>
                        <div className='absolute top-[-18px] w-full'>
                            <input type="range" className='progressBar' defaultValue='0' ref={progressBar} onChange={changeRange}/>
                        </div>
                        <div className='flex justify-between h-full items-center'>
                            <div className='flex'>
                                <div className='flex items-center ml-[12px]' onClick={handlePlayControl}>
                                    {!playing ? <FaPlay/> : <BsPauseFill className='text-[20px] ml-[-2px]'/>}
                                </div>
                                <div className='flex items-center ml-[10px] '>
                                    <span>{calculateTime(currentTime)}</span>
                                    <span>/</span>
                                    <span>{calculateTime(duration)}</span>
                                </div>
                            </div>
                            <div className='flex items-center mr-[5px]'>
                                <HiVolumeUp className='text-[24px] mr-[5px]'/>
                                <input type="range" defaultValue='20' className='progressBar' onChange={changeVolume} ref={volumeRef}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Video;