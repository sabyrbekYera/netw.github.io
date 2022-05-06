import { NavLink } from 'react-router-dom'
import s from './Razdel.module.css'
const Razdel = () => {
  return (
    <div className={s.razdelNew}>
      <div className={s.razdel}>
        <div className={s.flexRazdel}>
          <div className={s.Profile}>
            <div className={s.first}>
              <img src="" alt="" />
              <div>
                <NavLink
                  to="/profile"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Profile
                </NavLink>{' '}
              </div>
            </div>
          </div>
          <div className={s.Messages}>
            <div className={s.first}>
              <img src="" alt="" />
              <div>
                <NavLink
                  to="/messages"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Messages
                </NavLink>
              </div>
            </div>
          </div>

          <div className={s.News}>
            <div className={s.first}>
              <img src="" alt="" />
              <div>
                <NavLink
                  to="/videos"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  News
                </NavLink>
              </div>
            </div>
          </div>

          <div className={s.Settings}>
            <div className={s.first}>
              <img src="" alt="" />
              <div>
                <NavLink
                  to="/setting"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Settings
                </NavLink>
              </div>
            </div>
          </div>
          <div className={s.Goal}>
            <div className={s.first}>
              <img src="" alt="" />
              <div>
                <NavLink
                  to="/goal"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Goal
                </NavLink>
              </div>
            </div>
          </div>
          <div className={s.portfolio}>
            <div className={s.first}>
              <img src="" alt="" />
              <div>
                <NavLink
                  to="/myposts"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  My posts
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Razdel
