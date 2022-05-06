import s from './Videos.module.css'
const VideoPage =() =>{
    return(
        <div className={s.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dz_EZg8jB8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default VideoPage