import React, {FC} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
	open: boolean
	handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
	//  с помощью хука useLocation()
	const location = useLocation();
	const sidebarClass = s.sidebar
		+ (open ? ' ' + s.open : '')

	// без хука useLocation()
	// const sidebarClass = `${s.sidebar}${open ? ` ${s.open}` : ''}${
	//    open ? ` ${s.active}` : ''
	// }`;
	return (
		<>
			{/*затемнение справа от открытого меню*/}
			{open && <div className={s.background} onClick={handleClose}/>}

			<aside className={sidebarClass}>
				<button className={s.close} onClick={handleClose}>
					<img
						src={closeIcon}
						alt="close sidebar"
						id={'hw5-menu-close'}
					/>
				</button>

				<nav id={'hw5-menu'} className={s.nav}>
					<NavLink
						id={'hw5-pre-junior-link'}
						to={PATH.PRE_JUNIOR}
						onClick={handleClose}
						// className={...} // делает студент
						className={location.pathname === PATH.PRE_JUNIOR ? s.active : s.nav }
						// className={open ? s.active : s.nav }
						// className={({isActive}) => isActive ? s.active : s.nav }
					>
						Pre-junior
					</NavLink>
					<NavLink
						id={'hw5-junior-link'}
						to={PATH.JUNIOR}
						onClick={handleClose}
						// className={...} // делает студент
						className={location.pathname === PATH.JUNIOR ? s.active : s.nav }
						// className={open ? s.active : s.nav }
						// className={({isActive}) => isActive ? s.active : s.nav  }

					>
						Junior
					</NavLink>
					<NavLink
						id={'hw5-junior-plus-link'}
						to={PATH.JUNIOR_PLUS}
						onClick={handleClose}
						// className={...} // делает студент
						className={location.pathname === PATH.JUNIOR_PLUS ? s.active : s.nav}
						// className={open ? s.active : s.nav }
						// className={({isActive}) => isActive ? s.active : s.nav  }
					>
						Junior Plus
					</NavLink>
				</nav>
			</aside>
		</>
	)
}
