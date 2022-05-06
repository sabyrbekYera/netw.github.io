import s from './Zapis.module.css'
const Zapis = () => {
    return (
        <div className={s.allsight}>
            <div className={s.flexAllsight}>
                <div className={s.name}>
                    <div className={s.itemZapis}>
                        <h1>Yerassyl Sabyrbek</h1>
                        <p>Full stack developer</p>
                    </div>

                </div>
                <div className={s.text}>
                    {/* nachinaetsya zapis */}
                    <div className={s.itemZapis}>
                        <div className={s.block1}>
                            <h1>Personal Information</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                        </div>
                        <div className={s.block2}>
                            <div className={s.itemExpirence}><div className={s.envato0}><h1>Work Experiences</h1></div></div>
                            <div className={s.itemExpirence}><div className={s.envato1}><h2>Envato</h2>
                                <div className={s.textAndIcon}>
                                    <p>Seller - 1 February 2013 to present</p>
                                    <img src="/public" alt="" />
                                </div>
                            </div></div>
                            <div className={s.itemExpirence}><div className={s.envato2}><h2>Envato</h2><p>Seller - 1 February 2013 to present</p></div></div>
                            <div className={s.itemExpirence}><div className={s.envato3}><h2>Envato</h2><p>Seller - 1 February 2013 to present</p> </div></div>
                        </div>
                    </div>
                </div>
                {/* nachinaetsya status ob activite */}
                <div className={s.activity}>
                    <div className={s.itemActivty}>
                        <h2>Yerassyl's Activity</h2>
                    </div>
                    <div className={s.itemActivty}>
                        <h4>Sarah has shared an album</h4>
                        <p>a month ago</p>
                    </div>
                    <div className={s.itemActivty}>
                        <h4>Sarah Has posted a photo</h4>
                        <p>5 days ago</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Zapis