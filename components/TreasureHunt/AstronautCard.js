import React from 'react';
import styles from '../Preloader/style.module.scss';

const AstronautCard = ({ onClose }) => {
  return (
    <div className={styles.cardOverlay}>
      <div className={styles.card}>
        <img
          src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
          alt=""
          className={styles.image}
        />
        <div className={styles.heading}>OMG!! You Found Me</div>
        <div className={styles.taskInstructions}>
          <p>Do these tasks to get awesome perks!!!</p>
          <div>
          <ol>
            <li>1.Follow me on X</li>
            <li>2.Post a photo of this event on X</li>
            <li>3.Create a meme about this event and post it on X</li>
          </ol></div>
          <p>Don't forget to tag me!</p>
        </div>
        <div className={styles.icons}>
          <a href="https://www.instagram.com/w3kerala/?igshid=YmMyMTA2M2Y%3D" className={styles.instagram}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
          <a href="https://x.com/Web3_kerala?t=mXEe8xnEgLw2LQX8tJkKjA&s=09" className={styles.x}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
          <a href="https://chat.whatsapp.com/Jp7px9EvNbN0v4UNNTdBjY" className={styles.discord}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.97 9.862 9.846 9.961 9.647C10.061 9.449 10.011 9.276 9.936 9.127C9.862 8.978 9.268 7.515 9.02 6.92C8.779 6.341 8.534 6.416 8.352 6.408C8.178 6.401 7.98 6.4 7.782 6.4C7.584 6.4 7.262 6.474 6.99 6.772C6.717 7.069 5.95 7.788 5.95 9.251C5.95 10.714 7.014 12.127 7.163 12.325C7.312 12.524 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.556C16.375 17.471 17.563 16.837 17.811 16.143C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM12.042 21.785H12.037C10.246 21.7849 8.493 21.2757 6.961 20.309L6.605 20.0945L2.857 21.043L3.824 17.387L3.588 17.017C2.53 15.4291 1.97591 13.5727 1.979 11.674C1.98 6.271 6.637 1.615 12.046 1.615C14.652 1.615 17.108 2.6325 18.962 4.488C19.8772 5.3994 20.6055 6.48385 21.1074 7.67769C21.6094 8.87153 21.8751 10.1511 21.89 11.445C21.888 16.848 17.231 21.504 12.041 21.504L12.042 21.785ZM20.485 3.967C19.3759 2.85339 18.0681 1.96818 16.6296 1.35953C15.1911 0.750872 13.6497 0.430939 12.092 0.416C5.489 0.416 0.106 5.796 0.104 12.399C0.099 14.556 0.651 16.663 1.701 18.509L0 24L5.646 22.334C7.42504 23.2887 9.42251 23.796 11.454 23.795H11.459C18.062 23.795 23.445 18.414 23.447 11.811C23.4611 10.2545 23.141 8.71431 22.5322 7.27668C21.9234 5.83904 21.0387 4.53175 19.926 3.422L20.485 3.967Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AstronautCard;