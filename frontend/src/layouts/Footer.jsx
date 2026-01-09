import {
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-40">
      <div className="max-w-7xl mx-auto px-20 py-20 grid grid-cols-4 gap-16">

        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-bold">
            Rao Coding School
          </div>

          <p className="opacity-70">
            Let’s connect with our socials
          </p>

          <div className="flex gap-4">
            <Instagram size={18} />
            <Linkedin size={18} />
            <MessageCircle size={18} />
            <Youtube size={18} />
            <Twitter size={18} />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="mb-6 font-semibold">COMPANY</h3>
          <ul className="flex flex-col gap-3 opacity-70">
            <li>About Us</li>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Pricing & Refund</li>
            <li>Hire From Us</li>
            <li>Submit Projects</li>
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h3 className="mb-6 font-semibold">COMMUNITY</h3>
          <ul className="flex flex-col gap-3 opacity-70">
            <li>Discord</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-6 font-semibold">Get In Touch</h3>

          <div className="flex flex-col gap-4 opacity-70 text-sm">
            <p>
              Online: 11am – 8pm <br />
              +91 99999 99999
            </p>

            <p>
              Offline: 11am – 8pm <br />
              +91 88888 88888
            </p>

            <p>hello@raocodingschool.com</p>

            <p>
              Your Address Line <br />
              City, State, Pincode
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center text-sm opacity-60">
        © 2025 Rao Coding School. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
