import React from 'react'
import s from './Header.module.scss'
import organizer from "../images/organizer.png";
import socialnetwork from "../images/socialnetwork.png";
import git from "../images/git.ico";
import mail from "../images/mail.ico";
import test from "../images/test.ico";


export const Footer = () => {

	return (
		<div className={s.footerWrapper}>
			<footer className={s.footer}>
				<div>
					<a className={s.link}  target='_blank' rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/testFree">
						<img className={s.linkImg} src={test} alt="Test 1"/><span className={s.linkTitle}>Test_1</span>
					</a>
				</div>
				<div className={s.LinkWrapper}>
					<div className={s.linkLineWrapper}>
						<a className={s.link}  target='_blank' rel='noopener noreferrer'
							 href="https://sphinx7777.github.io/reactTypeScript">
							<img className={s.linkImg} src={organizer} alt="ToDo"/><span className={s.linkTitle}>ToDo</span>
						</a>
						<a className={s.link} target='_blank' rel='noopener noreferrer'
										 href="https://sphinx7777.github.io/SocialNetvork">
							<img className={s.linkImg} src={socialnetwork} alt="Social network"/><span className={s.linkTitle}>Social_Network</span>
						</a>
						<a className={s.link} target='_blank' rel='noopener noreferrer'
									 href="https://github.com/Sphinx7777?tab=repositories">
						<img className={s.linkImg} src={git} alt="Гитхаб"/><span className={s.linkTitle}>Git</span>
					</a>
					</div>
				</div>
				<div>
					<a className={s.linkPost} target='_blank' rel='noopener noreferrer'
									 href="mailto:Spamoglot13@gmail.com">
						<img className={s.linkImg} src={mail} alt="Social network"/><span className={s.linkTitle}>Spamoglot13@gmail.com</span>
					</a>
				</div>
			</footer>
			<div>
				Локальный экономический кризис , работаю по 18 часов в день <br/>
				Сделано отрывками за воскресенье что успел без редакса на хуках :
				<br/>Все add Sublist и Remove (кроме удаления списка целиком) <br/>
				Текстовые поля add Sublist  и addSublist In Sublist (кроме нового списка целиком) <br/>
				DoubleClick на именах всех Sublist открывает и закрывает описание <br/>
				(в дальнейшем будет независимое редактирование всех описаний) <br/>
				Каждое движение сохраняется в localStorage <br/>
				Дальше осталась только усидчивость и поэтапное добавление опционала в useReducer <br/>
			</div>
		</div>
	)
};

