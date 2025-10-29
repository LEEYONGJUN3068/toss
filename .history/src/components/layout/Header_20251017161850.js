import Logo from '../icons/Logo';
import styles from './Header.module.scss';

function Header(){
    return(
        <nav className={styles.nav}>
            <Logo></Logo>
            <ul className={styles.nav_menu}>
                <li>회사 소개</li>
                <li>공지사항</li>
                <li>고객센터</li>
                <li>자주 묻는 질문</li>
                <li>토스인증서</li>
                <li>채용</li>
            </ul>
        </nav>
    )
}

export default Header;