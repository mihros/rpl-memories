export default function Yearbook() {

    const students = [
        {
            name: "Alfiana Nur Sadevi",
            image: "/images/student-01.jpeg",
            quote: "Tetap semangat mengejar mimpi.",
        },

        {
            name: "Bagas Fawaz Wahyudi",
            image: "/images/student-02.jpeg",
            quote: "Persahabatan tidak akan terlupakan.",
        },

        {
            name: "Bunga Aulia Agustina",
            image: "/images/student-03.jpeg",
            quote: "Kenangan sekolah selamanya indah.",
        },

        {
            name: "Elsya Syahrani Aulia Putri",
            image: "/images/student-04.jpeg",
            quote: "Tetap semangat mengejar mimpi.",
        },

        {
            name: "Indriani",
            image: "/images/student-05.jpeg",
            quote: "Persahabatan tidak akan terlupakan.",
        },

        {
            name: "Mochammad Zulfa Al Audy",
            image: "/images/student-06.jpeg",
            quote: "Kenangan sekolah selamanya indah.",
        },

        {
            name: "Muhamad Mihros Qolbi A",
            image: "/images/student-07.jpeg",
            quote: "Tetap semangat mengejar mimpi.",
        },

        {
            name: "Muhamad Raffi Ramadhan",
            image: "/images/student-08.jpeg",
            quote: "Persahabatan tidak akan terlupakan.",
        },

        {
            name: "Nabila Galuh Candra Kirana",
            image: "/images/student-09.jpeg",
            quote: "Kenangan sekolah selamanya indah.",
        },

        {
            name: "Nita Nur Fadilah",
            image: "/images/student-10.jpeg",
            quote: "Tetap semangat mengejar mimpi.",
        },

        {
            name: "Novida Zahra Aulia",
            image: "/images/student-11.jpeg",
            quote: "Persahabatan tidak akan terlupakan.",
        },

        {
            name: "Nur Habib Ramadhan",
            image: "/images/student-12.jpeg",
            quote: "Kenangan sekolah selamanya indah.",
        },

        {
            name: "Nur Laily Rahma Dhini",
            image: "/images/student-13.jpeg",
            quote: "Tetap semangat mengejar mimpi.",
        },

        {
            name: "Nurul Izzah Lailatul Maghfiroh",
            image: "/images/student-14.jpeg",
            quote: "Persahabatan tidak akan terlupakan.",
        },

        {
            name: "Putri Amelia",
            image: "/images/student-15.jpeg",
            quote: "Kenangan sekolah selamanya indah.",
        },

        {
            name: "Raditya Surya Lesmana",
            image: "/images/student-16.jpeg",
            quote: "Tetap semangat mengejar mimpi.",
        },

        {
            name: "Retika Putri Megasari",
            image: "/images/student-17.jpeg",
            quote: "Persahabatan tidak akan terlupakan.",
        },

        {
            name: "Rival Nanda Dianysah",
            image: "/images/student-18.jpeg",
            quote: "Kenangan sekolah selamanya indah.",
        },

        {
            name: "Zahrakirana Budi Febriyanti",
            image: "/images/student-19.jpeg",
            quote: "Kenangan sekolah selamanya indah.",
        },
    ]

    return (
        <main className="min-h-screen bg-black text-white px-6 py-20">

            <h1 className="text-5xl font-bold text-center mb-20">
                Digital Yearbook
            </h1>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {students.map((student, index) => (

                    <div
                        key={index}
                        className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-500"
                    >

                        <img
                            src={student.image}
                            alt={student.name}
                            className="w-full h-96 object-cover"
                        />

                        <div className="p-6">

                            <h2 className="text-2xl font-bold mb-3">
                                {student.name}
                            </h2>

                            <p className="text-zinc-400 italic">
                                "{student.quote}"
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </main>
    )
}