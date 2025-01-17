import React from 'react';

function Footer() {
  return (
    <footer class="footer">
        <div class="footer__content container">
            <address class="footer__contacts">
                Центр разработки в Уфе. <br />
                Адрес: ул. Менделеева, 134/7, БЦ «Территория 3000».
                Телефон: <a className='footer__link' href="tel:+7 347 246-16-44">+7 347 246-16-44</a>
            </address>
            <div class="footer__logo">
                <a href="https://tensor.ru/">
                    <img src="/assets/images/logo/logo_tensor.PNG" alt="логотип Тензор" />
                </a>
            </div>
            <div class="footer__socialLinks">
                <a href="https://vk.com/tensor_company" class="footer__item">
                    <img src="/assets/images/icons/vk.PNG" alt="логотип VK" />
                </a>
                <a href="instagram.com/tensor_company/" class="footer__item">
                    <img src="/assets/images/icons/inst.PNG" alt="логотип Inst" />
                </a>
                <a href="#" class="footer__item">
                    <img src="/assets/images/icons/tg.PNG" alt="логотип TG" />
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
