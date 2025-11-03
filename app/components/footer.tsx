
export default function Footer() {
    return (
        <footer className="bg-blue-900  p-6">
            <div className="relative flex gap-8">
                <div className="footer-brand flex flex-col w-[600px]">
                    <p>T3 academy is a place where children develop essential life skills and values. students learn discipline, responsibility, cooperation, and respect for others. we don't just teach lesson, we build future leaders.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-contact flex flex-col items-center justify-center">
                    <p>Email: t3academy@education.bt</p>
                    <p>Phone: +975 17775550</p>
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
    )
}