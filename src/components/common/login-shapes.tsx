import Image from "next/image";

// images
import bg_login from '@/assets/img/login/bg-login.webp';

export default function LoginShapes() {
    return (
        <div className="login__shape">
            <Image className="login__shape-2" src={bg_login} alt="man" />
        </div>
    )
}
