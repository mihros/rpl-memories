export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50 border-b border-white/10">

            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                {/* LOGO */}
                <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                    Kenangan
                </h1>

                {/* MENU */}
                <div className="flex gap-6 md:gap-10 text-white text-sm md:text-base">

                    <a
                        href="#about"
                        className="hover:text-zinc-400 transition duration-300"
                    >
                        Tentang
                    </a>
                    <a
                        href="#gallery"
                        className="hover:text-zinc-400 transition duration-300"
                    >
                        Gallery
                    </a>
                    <a
                        href="/yearbook"
                        className="hover:text-zinc-400 transition duration-300"
                    >
                        Yearbook
                    </a>

                    <a
                        href="#timeline"
                        className="hover:text-zinc-400 transition duration-300"
                    >
                        Timeline
                    </a>

                </div>

            </div>

        </nav>
    )
}