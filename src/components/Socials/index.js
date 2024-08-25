import s from './style.module.sass'
import {soc} from './constant'
import Link from 'next/link'

export default function Socials () {
    return(
        <nav className={s.soc}>
            {soc.map((i, ind) => (
                <Link key={ind} href={i.url} title={i.label}>
                    {i.icon}
                </Link>
            ))}
        </nav>
    )
}