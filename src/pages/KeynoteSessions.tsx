import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Users, Calendar, MapPin, Award, BookOpen, ExternalLink, ArrowRight, Star, Globe, GraduationCap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const KeynoteSessions = () => {
  const speakers = [
    {
      name: "Dr. S.N. Singh",
      title: "Director",
      affiliation: "ABV-IIITM Gwalior, India",
      topic: "The Future of Artificial Intelligence in Computing: Challenges and Opportunities",
      day: "Day 1",
      time: "9:30 - 10:30 AM",
      image: "/ImportantPersons/snsingh.png",
      bio: "Dr. S.N. Singh is a renowned expert in power systems and artificial intelligence applications. His research focuses on intelligent algorithms for optimization and control of complex systems. He has published over 500 papers in international journals and conferences and is a Fellow of IEEE.",
      highlights: [
        "Fellow of IEEE and INAE",
        "500+ publications in international journals",
        "Expert in intelligent systems and optimization",
        "Former Professor at IIT Kanpur"
      ]
    },
    {
      name: "Prof. (Dr.) Yogesh S. Chauhan",
      title: "Professor",
      affiliation: "IIT Kanpur, India",
      topic: "Quantum Computing and Communication Networks: The Next Frontier",
      day: "Day 1",
      time: "1:30 - 2:30 PM",
      image: "/ImportantPersons/yogesh.png",
      bio: "Prof. Chauhan is a leading researcher in semiconductor devices and quantum computing. His work on compact modeling has been widely adopted in industry. He is a Fellow of IEEE and has received numerous awards for his contributions to computational electronics.",
      highlights: [
        "Fellow of IEEE",
        "Expert in semiconductor device modeling",
        "Pioneer in quantum computing research",
        "Recipient of prestigious research awards"
      ]
    },
    {
      name: "Prof. (Dr.) Akshay Rathore",
      title: "Professor",
      affiliation: "Singapore Institute of Technology, Singapore",
      topic: "Edge Computing and 5G Networks: Transforming Digital Infrastructure",
      day: "Day 2",
      time: "9:00 - 10:00 AM",
      image: "/ImportantPersons/akshayrathore.png",
      bio: "Prof. Rathore is an IEEE Fellow and an internationally recognized expert in power electronics and sustainable energy systems. His research interests include edge computing for smart grid applications and IoT-enabled energy management systems.",
      highlights: [
        "IEEE Fellow",
        "Expert in sustainable energy systems",
        "Smart grid and IoT applications",
        "International research collaborations"
      ]
    },
    {
      name: "Dr. Arnold Pears",
      title: "Education Society President",
      affiliation: "KTH Royal Institute of Technology, Sweden",
      topic: "Blockchain and Distributed Systems: Security in the Decentralized Era",
      day: "Day 2",
      time: "2:00 - 3:00 PM",
      image: "/ImportantPersons/ap.jpg",
      bio: "Dr. Pears is a distinguished academic in computer science education and distributed systems. His research explores pedagogical approaches in computing education and the application of blockchain technologies in educational contexts.",
      highlights: [
        "Education Society President at KTH",
        "Expert in distributed systems",
        "Blockchain technology researcher",
        "Computing education specialist"
      ]
    },
    {
      name: "Dr. Dipti Srinivasan",
      title: "Professor",
      affiliation: "National University of Singapore, Singapore",
      topic: "Sustainable Computing for the Future: Green AI and Energy-Efficient Systems",
      day: "Day 3",
      time: "9:00 - 10:00 AM",
      image: "/ImportantPersons/ds.jpg",
      bio: "Prof. Srinivasan is a leading researcher in computational intelligence and smart grid systems. Her work focuses on developing energy-efficient algorithms and sustainable computing architectures for large-scale distributed systems.",
      highlights: [
        "Smart grid systems expert",
        "Energy-efficient computing researcher",
        "Computational intelligence specialist",
        "Sustainable technology advocate"
      ]
    },
    {
      name: "Dr. Ankush Mittal",
      title: "Vice Chancellor",
      affiliation: "Galgotias University, India",
      topic: "Ethics in AI: Building Responsible Intelligent Systems",
      day: "Day 3",
      time: "3:30 - 4:30 PM",
      image: "/ImportantPersons/Ankush.webp",
      bio: "Dr. Mittal is an accomplished researcher in computer vision, machine learning, and ethical AI. As Vice Chancellor, he has championed research initiatives in responsible AI development and its societal implications.",
      highlights: [
        "Vice Chancellor at Galgotias University",
        "Computer vision and ML expert",
        "Ethical AI researcher",
        "Research leadership and innovation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Mic className="h-16 w-16 text-rose-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Keynote Sessions</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Distinguished keynote speakers from academia and industry sharing cutting-edge insights on 
            Intelligent Systems and Computational Technologies
          </p>
          <div className="mt-8 flex justify-center gap-4 text-sm flex-wrap">
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              May 15-17, 2026
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Main Auditorium, Galgotias University
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <Users className="h-4 w-4" />
              6 Distinguished Speakers
            </span>
          </div>
          <div className="mt-8">
            <Link to="/schedule/keynote">
              <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all">
                View Detailed Schedule
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Keynote Speakers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                World-renowned experts sharing their knowledge and vision on the future of 
                intelligent systems and computational technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {speakers.map((speaker, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-t-rose-500">
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    {speaker.image ? (
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-slate-300 flex items-center justify-center border-4 border-white shadow-lg">
                        <Users className="h-16 w-16 text-slate-500" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold bg-rose-100 text-rose-700 px-2 py-1 rounded">
                        {speaker.day}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {speaker.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{speaker.name}</h3>
                    <p className="text-sm text-rose-600 font-medium mb-2">{speaker.title}</p>
                    <p className="text-sm text-gray-500 mb-4">{speaker.affiliation}</p>
                    
                    <div className="bg-slate-50 p-3 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-slate-700 mb-1">Keynote Topic:</p>
                      <p className="text-sm text-gray-600 italic">{speaker.topic}</p>
                    </div>

                    <div className="space-y-2">
                      {speaker.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-8 border-l-4 border-l-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                  <Award className="h-6 w-6 text-rose-500" />
                  Keynote Session Format
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Mic className="h-5 w-5 text-rose-500" />
                      <h4 className="font-semibold text-slate-800">Presentation</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 45-50 minutes keynote address</li>
                      <li>• Comprehensive topic coverage</li>
                      <li>• Cutting-edge research insights</li>
                      <li>• Industry and academic perspectives</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-rose-500" />
                      <h4 className="font-semibold text-slate-800">Q&A Session</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 10-15 minutes interactive Q&A</li>
                      <li>• Direct interaction with experts</li>
                      <li>• In-depth discussion on topics</li>
                      <li>• Networking opportunities</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="h-5 w-5 text-rose-500" />
                      <h4 className="font-semibold text-slate-800">Accessibility</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Live streaming available</li>
                      <li>• Recordings for registered attendees</li>
                      <li>• Certificate of attendance</li>
                      <li>• Open to all registered participants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-t-4 border-t-rose-500">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-rose-500" />
                    Topics Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                      <span className="text-gray-600">Artificial Intelligence and Machine Learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                      <span className="text-gray-600">Quantum Computing and Communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                      <span className="text-gray-600">Edge Computing and 5G Networks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                      <span className="text-gray-600">Blockchain and Distributed Systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                      <span className="text-gray-600">Sustainable and Green Computing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-2"></div>
                      <span className="text-gray-600">Ethics in AI and Responsible Computing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-slate-800">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-slate-600" />
                    Important Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-rose-500 mt-1 flex-shrink-0" />
                      <span>All keynote sessions are open to registered participants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-rose-500 mt-1 flex-shrink-0" />
                      <span>Please arrive 10 minutes before the scheduled time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-rose-500 mt-1 flex-shrink-0" />
                      <span>Certificates of attendance will be provided</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-rose-500 mt-1 flex-shrink-0" />
                      <span>Networking sessions after each keynote</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-rose-500 mt-1 flex-shrink-0" />
                      <span>All timings are in Indian Standard Time (IST)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">View Complete Schedule</h3>
                    <p className="text-gray-300">
                      Access the detailed day-by-day keynote schedule with exact timings and session information.
                    </p>
                  </div>
                  <Link to="/schedule/keynote">
                    <Button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                      Detailed Schedule
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-rose-50 border border-rose-200 p-4 rounded-lg">
              <p className="text-sm text-rose-800 text-center">
                <strong>Note:</strong> All keynote timings are in Indian Standard Time (IST, UTC+5:30). 
                The schedule is subject to minor changes. Any updates will be communicated via email and the conference website.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KeynoteSessions;
