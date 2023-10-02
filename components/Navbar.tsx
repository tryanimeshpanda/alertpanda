import Image from 'next/image'
import Link from 'next/link'
import SigninButton from './SigninButton'

const navIcons = [
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav bg-gray-400">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Alert<span className='text-pink-900'>Panda🐼</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
          <SigninButton />
        </div>
      </nav>
    </header>
  )
}

export default Navbar