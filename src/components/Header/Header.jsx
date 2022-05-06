import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>

            <div className={s.containerHeader}>
                <div className={s.manipulationLogo}>
                    <div className={s.logo}>
                        <img src="https://i.pinimg.com/736x/ea/3e/2c/ea3e2c326fcc28c669b11c85a8260dd4.jpg" alt="logo" />
                    </div>
                </div>
                <div className={s.manipulationSearch}>
                    <div className={s.search}>
                        <input type="text" placeholder='Search friends,photos,videos' />
                       
                    </div>
                </div>
                <div className={s.manipulationNav}>
                    <nav className={s.navbar}>
                        <a href='#' className={s.nav}>Profile</a>                  
                        <a href='#' className={s.nav}>Direct</a>               
                        <a href='#' className={s.nav}>Comments</a>
                        <a href='#' className={s.nav}>Likes</a>
                    </nav>
                </div>
            </div>
        </header>
    )

}
export default Header