'use client';
import { Email, Phone, User } from '@/components/svg';
import useGlobalContext from '@/hooks/use-global-context';
import Link from 'next/link';

export default function HeaderTopArea() {
  const { userInfo, handleLogout } = useGlobalContext();
  console.log(userInfo,'userInfo');
  return (
    <div className="tp-header-top tp-header-border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tp-header-info">
              <ul>
                <li>
                  <a href="mailto:info@housey.com">
                    <Email />
                    info@rjresort.com
                  </a>
                </li>
                <li>
                  <a href="tel:+9999999999">
                    <Phone />
                    +9999999999
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-header-top-right d-flex justify-content-end align-items-center">
              {/* <div className="tp-header-usd tp-header-border-right tp-header-usd-spacing mr-20">
                <span className="tp-header-selected-usd">EN</span>
                <ul className="tp-header-usd-list">
                  <li>Spanish</li>
                  <li>English</li>
                  <li>Canada</li>
                </ul>
              </div> */}
              <div className="tp-header-acount tp-header-usd tp-header-border-right">
                {userInfo?.user?.email ? (
                  <a className='pointer' onClick={handleLogout}>
                    <User />
                    {" "}{userInfo.user.username}
                  </a>
                ) : <Link href="/login">
                  <User />
                  {" "}Login
                </Link>
                }
              </div>
              <div className="tp-header-acount tp-header-usd ms-3">
                {userInfo?.user?.email ? (
                  <a className='pointer' onClick={handleLogout}>
                    <User />
                    {" "}{userInfo.user.username}
                  </a>
                ) : <Link href="/register">
                  <User />
                  {" "}Sign Up
                </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
