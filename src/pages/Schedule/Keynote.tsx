import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, User, Mic, Calendar, Award } from "lucide-react";

const KeynoteSchedule = () => {
  const KeynoteCard = ({ time, title, speaker, affiliation, location, day, bio }: any) => (
    <Card className="mb-6 border-l-4 border-l-rose-500 hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <div className="flex items-center gap-2 bg-rose-50 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 text-rose-500" />
                <span className="text-sm font-semibold text-rose-700">{time}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">{day}</span>
              </div>
              <span className="text-xs bg-rose-500 text-white px-3 py-1 rounded-full font-medium">KEYNOTE</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
            
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-slate-100 p-2 rounded-full">
                <User className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{speaker}</p>
                <p className="text-sm text-gray-600">{affiliation}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
            
            {bio && (
              <div className="bg-slate-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Mic className="h-12 w-12 text-rose-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Keynote Schedule</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Distinguished speakers sharing cutting-edge insights on Intelligent Systems and Computational Technologies
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">May 15-17, 2026</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Main Auditorium</span>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="day1">Day 1 - May 15</TabsTrigger>
                <TabsTrigger value="day2">Day 2 - May 16</TabsTrigger>
                <TabsTrigger value="day3">Day 3 - May 17</TabsTrigger>
              </TabsList>

              <TabsContent value="day1" className="space-y-6">
                <Card className="mb-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-rose-400" />
                      Day 1: Opening Keynotes - The Future of Intelligent Computing
                    </CardTitle>
                  </CardHeader>
                </Card>

                <KeynoteCard
                  time="9:30 - 10:30 AM"
                  day="Friday, May 15, 2026"
                  title="The Future of Artificial Intelligence in Computing: Challenges and Opportunities"
                  speaker="Dr. S.N. Singh"
                  affiliation="Director, ABV-IIITM Gwalior, India"
                  location="Main Auditorium"
                  bio="Dr. S.N. Singh is a renowned expert in power systems and artificial intelligence applications. His research focuses on intelligent algorithms for optimization and control of complex systems. He has published over 500 papers in international journals and conferences."
                />

                <KeynoteCard
                  time="1:30 - 2:30 PM"
                  day="Friday, May 15, 2026"
                  title="Quantum Computing and Communication Networks: The Next Frontier"
                  speaker="Prof. (Dr.) Yogesh S. Chauhan"
                  affiliation="Professor, IIT Kanpur, India"
                  location="Main Auditorium"
                  bio="Prof. Chauhan is a leading researcher in semiconductor devices and quantum computing. His work on compact modeling has been widely adopted in industry. He is a Fellow of IEEE and has received numerous awards for his contributions to computational electronics."
                />
              </TabsContent>

              <TabsContent value="day2" className="space-y-6">
                <Card className="mb-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-rose-400" />
                      Day 2: Advanced Computing Paradigms
                    </CardTitle>
                  </CardHeader>
                </Card>

                <KeynoteCard
                  time="9:00 - 10:00 AM"
                  day="Saturday, May 16, 2026"
                  title="Edge Computing and 5G Networks: Transforming Digital Infrastructure"
                  speaker="Prof. (Dr.) Akshay Rathore"
                  affiliation="Professor, Singapore Institute of Technology, Singapore"
                  location="Main Auditorium"
                  bio="Prof. Rathore is an IEEE Fellow and an internationally recognized expert in power electronics and sustainable energy systems. His research interests include edge computing for smart grid applications and IoT-enabled energy management systems."
                />

                <KeynoteCard
                  time="2:00 - 3:00 PM"
                  day="Saturday, May 16, 2026"
                  title="Blockchain and Distributed Systems: Security in the Decentralized Era"
                  speaker="Dr. Arnold Pears"
                  affiliation="Education Society President, KTH Royal Institute of Technology, Sweden"
                  location="Main Auditorium"
                  bio="Dr. Pears is a distinguished academic in computer science education and distributed systems. His research explores pedagogical approaches in computing education and the application of blockchain technologies in educational contexts."
                />
              </TabsContent>

              <TabsContent value="day3" className="space-y-6">
                <Card className="mb-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-rose-400" />
                      Day 3: Sustainable and Responsible Computing
                    </CardTitle>
                  </CardHeader>
                </Card>

                <KeynoteCard
                  time="9:00 - 10:00 AM"
                  day="Sunday, May 17, 2026"
                  title="Sustainable Computing for the Future: Green AI and Energy-Efficient Systems"
                  speaker="Dr. Dipti Srinivasan"
                  affiliation="Professor, National University of Singapore, Singapore"
                  location="Main Auditorium"
                  bio="Prof. Srinivasan is a leading researcher in computational intelligence and smart grid systems. Her work focuses on developing energy-efficient algorithms and sustainable computing architectures for large-scale distributed systems."
                />

                <KeynoteCard
                  time="3:30 - 4:30 PM"
                  day="Sunday, May 17, 2026"
                  title="Ethics in AI: Building Responsible Intelligent Systems"
                  speaker="Dr. Ankush Mittal"
                  affiliation="Vice Chancellor, Galgotias University, India"
                  location="Main Auditorium"
                  bio="Dr. Mittal is an accomplished researcher in computer vision, machine learning, and ethical AI. As Vice Chancellor, he has championed research initiatives in responsible AI development and its societal implications."
                />
              </TabsContent>
            </Tabs>

            <Card className="mt-8 border-t-4 border-t-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <Mic className="h-5 w-5 text-rose-500" />
                  Keynote Sessions Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Session Format</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• 45-50 minutes keynote presentation</li>
                      <li>• 10-15 minutes Q&A session</li>
                      <li>• Live streaming available</li>
                      <li>• Recording will be provided to registered attendees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Important Guidelines</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• All keynote sessions are open to registered participants</li>
                      <li>• Please arrive 10 minutes before the scheduled time</li>
                      <li>• Certificates of attendance will be provided</li>
                      <li>• Networking sessions after each keynote</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-rose-800">
                    <strong>Note:</strong> All keynote timings are in Indian Standard Time (IST, UTC+5:30). 
                    The schedule is subject to minor changes. Any updates will be communicated via email and the conference website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KeynoteSchedule;
