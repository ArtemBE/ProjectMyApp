import React from 'react'

export default function Footer() {
    return (
        <footer id="contacts__anchor">
            <div className="container footer-container">
                <div className="footer-links">
                    <a href="https://www.youtube.com/"><img src="./images/footer2/vk.svg" alt="Failed to load"/></a>
                    <a href="https://www.youtube.com/"><img src="./images/footer2/yt.svg" alt="Failed to load"/></a>
                    <a href="https://www.youtube.com/"><img src="./images/footer2/ok.svg" alt="Failed to load"/></a>
                    <a href="https://www.youtube.com/"><img src="./images/footer2/tg.svg" alt="Failed to load"/></a>
                </div>
                <p>
                    Упоминание в рекламных материалах сайта sndstore.ru означает, 
                    что рекламодателем (или одним из рекламодателей) таких 
                    материалов является ПАО «СндКом», если в самих рекламных 
                    материалах прямо не установлено иное.
                    <br/><br/>
                    Посещая сайт sndstore.ru, вы предоставляете<br/>
                    <strong>согласие на обработку данных</strong> в соответствии 
                    с политикой конфиденциальности.
                </p>
            </div>
        </footer>
    )
}
