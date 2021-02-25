import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/lpottmayer.png" alt="Profile" />
            <div>
                <strong>Lucas Pottmayer</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Description" />
                    Level 1
                </p>
            </div>
        </div>
    );
}