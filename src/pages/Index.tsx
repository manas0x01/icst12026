import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import UniversityMap from "@/components/UniversityMap";
import CountdownTimer from "@/components/CountdownTimer";
import LogoCarousel from '@/components/LogoCarousel';
import Acknowledgement from '@/components/Acknowledgement';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Image Slider */}
      <ImageSlider />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-rose-300 font-semibold">🎓 Premier Academic Conference</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-rose-300 bg-clip-text text-transparent">ISCT 2026</h1>
          <h2 className="text-2xl mb-6 text-gray-300">International Conference on Intelligent Systems and Computational Technologies</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join us for the premier conference bringing together researchers, academicians, and industry professionals
            to share cutting-edge research in intelligent systems and computational technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Calendar className="h-5 w-5 text-rose-400" />
              <span>10-12 May, 2026 (Tentative)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-5 w-5 text-rose-400" />
              <span>Galgotias University, Greater Noida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="h-5 w-5 text-rose-400" />
              <span>500+ Participants Expected</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transform hover:scale-105 transition-all duration-300">
              <Link to="/registration">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/50 text-black hover:bg-white hover:text-slate-800 backdrop-blur-sm transition-all duration-300">
              <a href="https://cmt3.research.microsoft.com/ICCPCT2026/Submission/Manage" target="_blank" rel="noopener noreferrer">Submit Paper</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Conference Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-slate-800 flex items-center justify-center gap-3">
                  <Calendar className="h-6 w-6 text-rose-500" />
                  Important Dates
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Mark your calendar for these key conference milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <h4 className="font-semibold text-slate-800 mb-2">Abstract Submission Deadline</h4>
                    <p className="text-gray-700 text-lg">02 January 2026</p>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <h4 className="font-semibold text-rose-600 mb-2">Full Paper Submission Deadline</h4>
                    <p className="text-gray-700 text-lg">31 March 2026</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <h4 className="font-semibold text-slate-700 mb-2">Acceptance Notification</h4>
                    <p className="text-gray-700 text-lg">15 April 2026</p>
                  </div>
                  <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <h4 className="font-semibold text-violet-600 mb-2">Registration Deadline</h4>
                    <p className="text-gray-700 text-lg">20 April 2026</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <h4 className="font-semibold text-indigo-700 mb-2">Final Paper Submission</h4>
                    <p className="text-gray-700 text-lg">30 April 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">About ISCT 2026</h2>
            <p className="text-lg text-gray-600 mb-6">
              The International Conference on Intelligent Systems and Computational Technologies (ISCT 2026)
              is a premier forum for researchers, academicians, and industry professionals to present and
              discuss the most recent innovations, trends, and concerns in the field of intelligent systems
              and computational technologies.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              This conference provides an excellent opportunity for participants to learn about state-of-the-art
              research results and to discuss emerging areas of research. It also creates a platform for
              researchers to meet and discuss their ideas that will result in collaborative research in different areas.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="/call-for-papers">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Conference Tracks</h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            We welcome submissions in the following areas.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Track 1: Computing */}
            <Card className="h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-t-4 border-slate-400">
              <CardHeader>
                <CardTitle className="text-slate-800">Track 1: Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Big Data, Cloud Computing, and Quantum Computing</li>
                  <li>• AI, AIoT, IIoT, Deep Learning, and Machine Learning</li>
                  <li>• Cyber Security and Humanitarian Technologies</li>
                  <li>• Blockchain Applications</li>
                  <li>• AR, VR, and Metaverse</li>
                  <li>• Human-Computer Interface (HCI)</li>
                  <li>• Robotics, UAV, and Unmanned Vehicle Technologies</li>
                  <li>• Smart Manufacturing and Industry 5.0</li>
                  <li>• Healthcare Applications</li>
                  <li>• Cyber Physical Systems</li>
                  <li>• Software Engineering and Agile Development</li>
                  <li>• Multimedia and Web Services Agents</li>
                  <li>• Knowledge-based Systems</li>
                  <li>• Pervasive Computing and Ambient Intelligence</li>
                  <li>• Bioinformatics</li>
                  <li>• Heuristic and AI Planning Strategies and Tools</li>
                  <li>• Computational Theories of Learning</li>
                  <li>• Recent Trends and Developments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Track 2: Power */}
            <Card className="h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-t-4 border-rose-500">
              <CardHeader>
                <CardTitle className="text-rose-600">Track 2: Power</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Renewable Energy Technologies Including Hydrogen</li>
                  <li>• Renewable Energy Technologies (e.g., Solar, Wind, Hydro, Biomass)</li>
                  <li>• Integration of Renewable Energy Sources into the Grid</li>
                  <li>• Energy Storage Systems (e.g., Batteries, Supercapacitors, Flywheels)</li>
                  <li>• Energy Efficiency and Conservation Strategies</li>
                  <li>• Demand Response and Load Management</li>
                  <li>• Modern Power Electronics, Drives and Control, Electric Vehicles</li>
                  <li>• Electric Vehicles and Charging Infrastructure</li>
                  <li>• Power Semiconductor Devices and Applications</li>
                  <li>• Smart Grid Technologies and Power System Management</li>
                  <li>• Power System Modeling and Simulation</li>
                  <li>• Electric Power Generation and Distribution</li>
                  <li>• Power System Optimization and Smart Metering</li>
                  <li>• Distributed Generation and Microgrids</li>
                  <li>• High Voltage Engineering and Insulation Systems</li>
                  <li>• Power Quality and Reliability</li>
                  <li>• Advanced Power System Protection and Control</li>
                  <li>• Power System Management Technologies</li>
                  <li>• Power System Cybersecurity</li>
                  <li>• Artificial Intelligence for Power Systems and Smart Grid</li>
                  <li>• Smart Cities & Technologies for Sustainable Development</li>
                </ul>
              </CardContent>
            </Card>

            {/* Track 3: Communication */}
            <Card className="h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-t-4 border-slate-400">
              <CardHeader>
                <CardTitle className="text-slate-700">Track 3: Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Antennas and Propagation</li>
                  <li>• Radio Frequency and Microwave Engineering</li>
                  <li>• Optical Communication and Fiber Optics</li>
                  <li>• Satellite Communication Systems</li>
                  <li>• Wireless/Radio Access Technologies</li>
                  <li>• 5G Applications, Emerging 6G Technologies</li>
                  <li>• Mobile Communication and Network Architecture</li>
                  <li>• Communication Networks and Protocols</li>
                  <li>• Ad Hoc and Sensor Networks</li>
                  <li>• Wireless Sensor Networks</li>
                  <li>• Machine-to-Machine (M2M) Communication</li>
                  <li>• Multi-Access Edge Computing (MEC) and Cloud RAN</li>
                  <li>• Signal Processing for Communications</li>
                  <li>• Data Transmission and Coding Techniques</li>
                  <li>• Internet of Things (IoT)</li>
                  <li>• IoT Hardware Security</li>
                  <li>• Healthcare and Wireless Sensor Networks</li>
                  <li>• Network Security and Privacy</li>
                  <li>• Communication System Design and Optimization</li>
                  <li>• Communication in Smart Cities and Smart Grids</li>
                  <li>• Ubiquitous Computing and Communication</li>
                  <li>• Interference Management and Spectrum Sharing</li>
                  <li>• Communication for Autonomous Systems and Vehicles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        {/* Background image layer with reduced opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://www.galgotiasuniversity.edu.in/public/uploads/media/ZE6Pp0UjcqM3YePbTNhicYhR1rGh2DpcnSgKbFMH.webp')", opacity: 0.3 }}
        />

        {/* Foreground content stays fully visible */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
              {/* Text content on left */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Galgotias University</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Galgotias University is a leading private university in India, established in 2011 and located in
                  Greater Noida, Uttar Pradesh. Known for its state-of-the-art infrastructure and commitment to
                  academic excellence, the university offers world-class education across various disciplines.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With over 20,000+ students from 50+ countries, Galgotias University has established itself as a
                  global education hub. The university is equipped with modern laboratories, research facilities,
                  and industry partnerships that provide students with hands-on experience and exposure to cutting-edge technologies.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  The university's School of Computing Science & Engineering is particularly renowned for its
                  research contributions in areas such as Artificial Intelligence, Machine Learning, IoT,
                  Cybersecurity, and Data Science - making it the perfect venue for the International Conference on Intelligent Systems and Computational Technologies (ISCT 2026).
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a
                    href="https://www.galgotiasuniversity.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit University Website
                  </a>
                </Button>
              </div>

              {/* Campus image on right */}
              <div className="order-first lg:order-last">
                <img
                  src="https://www.galgotiasuniversity.edu.in/public/uploads/media/ZE6Pp0UjcqM3YePbTNhicYhR1rGh2DpcnSgKbFMH.webp"
                  alt="Galgotias University Campus"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <div>
        <LogoCarousel />
      </div>

      {/* Acknowledgement Section */}
      <Acknowledgement />

      {/* University Location Map */}
      <section className="py-16">
        <div className="container mx-100 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Conference Venue</h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Galgotias University, Plot No. 2, Sector 17-A, Yamuna Expressway, Greater Noida, Uttar Pradesh 203201, India
          </p>
          <UniversityMap />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
