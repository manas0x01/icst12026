import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">ISCT 2026</h3>
            <p className="text-gray-300 mb-4">
              International Conference on Intelligent Systems and Computational Technologies
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-rose-400" />
              <span className="text-sm">10-12 May, 2026 (Tentative)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-rose-400" />
              <span className="text-sm">Galgotias University, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/call-for-papers" className="hover:text-rose-400 transition-colors">Call for Papers</a></li>
              <li><a href="/registration" className="hover:text-rose-400 transition-colors">Registration</a></li>
              <li><a href="/program" className="hover:text-rose-400 transition-colors">Program</a></li>
              <li><a href="/speakers" className="hover:text-rose-400 transition-colors">Speakers</a></li>
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-400">Important Dates</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Paper Submission: Will update</li>
              <li>Review Results: Will update</li>
              <li>Final Submission: Will update</li>
              <li>Registration: Will update</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-400">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-sm">isct@galgotiasuniversity.edu.in</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 International Conference on Intelligent Systems and Computational Technologies (ISCT 2026). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
