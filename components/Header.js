import Link from 'next/link'

const linkStyle = {
  
}

const Header = () => (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link href="/"><a style={linkStyle} className="navbar-brand">Awesome Podcast</a></Link>

            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link href="/"><a style={linkStyle} className="nav-link">About</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
)

export default Header