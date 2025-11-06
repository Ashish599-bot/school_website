import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900  p-6">
      <div className="relative flex gap-8">
        <div className="footer-brand flex flex-col w-[600px]">
          <p>
            T3 academy is a place where children develop essential life skills
            and values. students learn discipline, responsibility, cooperation,
            and respect for others. we don't just teach lesson, we build future
            leaders.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul className="hidden md:flex flex-col space-x-8 text-gray-600 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-gray-400 cursor-pointer shadow-lg text-white hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about_us"
                className="hover:text-gray-400 cursor-pointer shadow-lg text-white hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact_us"
                className="hover:text-gray-400 cursor-pointer shadow-lg text-white hover:underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="hover:text-gray-400 cursor-pointer shadow-lg text-white hover:underline"
              >
                {" "}
                Extra-Curricular
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact flex flex-col items-center justify-center">
          <p>Email: t3academy@education.gov.bt</p>
          <p>Phone: +975 17777771</p>
        </div>

        <div className="absolute right-10 top-10 footer-social flex gap-4 items-center justify-center">
          <a href="#">Facebook</a>
          <a href="#">Linkened</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="footer-legal">
        <p>© 2025 T3academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
