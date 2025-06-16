import dataNav from "@/assets/data/navBar/NavBar.json"
import Link from "next/link";

export default function NavBar(){


    return (<>
    <nav>
        <ul>
          <li>
              <Link href={dataNav.home.link}>{dataNav.home.title}</Link>
          </li>
            <li>
                <Link href={dataNav.club.link}>{dataNav.club.title}</Link>
            </li>
            <li>
                {dataNav.team.title}
                <ul>
                        {dataNav.team.items.map((item, index) => (
                    <li key={index}>
                            <Link href={dataNav.team.link[index]}>{item}</Link>
                    </li>
                        ))}
                </ul>
            </li>
            <li>
                <Link href={dataNav.match.link}>{dataNav.match.title}</Link>
            </li>
            <li>
                <Link href={dataNav.actuality.link}>{dataNav.actuality.title}</Link>
            </li>
            <li>
                <Link href={dataNav.partner.link}>{dataNav.partner.title}</Link>
            </li>


        </ul>

    </nav>
    </>)
}