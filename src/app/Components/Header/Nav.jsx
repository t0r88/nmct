import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/">Нүүр хуудас</Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#">Сургуулийн тухай</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                Бидний тухай
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Хамт олон
              </Link>
            </li>                        
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li>                        
          </ul>
        </DropDown>
      </li>  

      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Сургалт хөтөлбөр
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Карьер төв
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Тэнхимүүд
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link href="/#" onClick={() => setMobileToggle(false)}>
        Бидний амжилт
        </Link>
      </li> 
      
      <li>
        <Link href="/#" onClick={() => setMobileToggle(false)}>
          Мэдээ
        </Link>
      </li>
    </ul>
  );
}
