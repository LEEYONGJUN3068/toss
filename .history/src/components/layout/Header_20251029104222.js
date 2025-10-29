import Logo from '../icons/Logo';
import styles from './Header.module.scss';

function Header(){
    return(
        <header>
            <div className={styles.nav}>
                <Logo className={styles.logoImage} />
                <ul className={styles.nav_menu}>
                    <li><a href="">회사 소개</a></li>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">고객센터</a></li>
                    <li><a href="">자주 묻는 질문</a></li>
                    <li><a href="">토스인증서</a></li>
                    <li><a href="">채용</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;