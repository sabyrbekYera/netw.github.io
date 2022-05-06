import { Route, Routes } from 'react-router-dom'
import Avatar from './avatar/Avatar'
import Profile from './Profile/Profile'
import VideoPage from './videos/Videos'
import Razdel from './razdely/Razdel'
import s from './SideBar.module.css'
import BothMesPer from './Messages/BothMesPer'
import Goal from './Goal/Goal'
import MyPosts from './MyPosts/MyPosts'
const SideBar = (props) => {
  const { Fullbaza } = props
  return (
    <div className={s.main}>
      <div className={s.sidebar}>
        <div className={s.flexsidebar}>
          <Avatar />
          <Razdel />
        </div>
      </div>
      <div className={s.MainContent}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/videos" element={<VideoPage />} />
          {/* <Route
            path="/messages/*"
            element={<BothMesPer Fullbaza={Fullbaza} dispatch={props.dispatch} /> }
          /> */}
          <Route path="/goal" element={<Goal />} />
          <Route
            path="/myposts"
            element={
              <MyPosts
                BazaPosts={Fullbaza.BazaPosts}
                dispatch={props.dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}
export default SideBar
