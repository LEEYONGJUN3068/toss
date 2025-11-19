import styles from "../main/MoneyManagementSection.module.scss";

function AssetOverviewSection(){
    return(
        <div className={styles.MoneyManagementSection}>
            <h2>홈 · 소비</h2>
            <h3>
                내 돈 관리,<br/>
                지출부터 일정까지<br/>
                똑똑하게
            </h3>
        </div>
    )
}

export default AssetOverviewSection;