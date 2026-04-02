import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Award, Building2, GraduationCap, Users, Globe, Mail } from "lucide-react";

const MessageAICTE = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="h-12 w-12 text-rose-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Message from Chairman</h1>
          <p className="text-xl text-rose-400 font-semibold">All India Council for Technical Education (AICTE)</p>
          <div className="mt-6 flex justify-center gap-4 text-sm flex-wrap">
            <span className="bg-white/10 px-4 py-2 rounded-full">Government of India</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Ministry of Education</span>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="md:col-span-1 border-t-4 border-t-rose-500">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border-4 border-rose-200 shadow-lg overflow-hidden">
                      <img 
                        src="/ImportantPersons/chairman-aicte.jpg" 
                        alt="Prof. T. G. Sitharam"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">Prof. T. G. Sitharam</h3>
                    <p className="text-rose-600 font-medium mb-2">Chairman, AICTE</p>
                    <p className="text-sm text-gray-500 mb-4">All India Council for Technical Education</p>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Award className="h-4 w-4 text-rose-500" />
                        <span>Chairman, AICTE</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <GraduationCap className="h-4 w-4 text-rose-500" />
                        <span>Former Director, IIT Guwahati</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Globe className="h-4 w-4 text-rose-500" />
                        <span>New Delhi, India</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 border-l-4 border-l-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                    <Quote className="h-6 w-6 text-rose-500" />
                    Message from the Chairman
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    It gives me immense pleasure to extend my heartfelt greetings to all participants of the 
                    <strong className="text-slate-800"> International Conference on Intelligent Systems and Computational Technologies (ISCT 2026)</strong>, 
                    being hosted by Galgotias University, Greater Noida. This prestigious conference brings together 
                    renowned researchers, academicians, industry experts, and students from across the globe to share 
                    knowledge and innovations in the field of intelligent systems and computational technologies.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    In the rapidly evolving landscape of technology, artificial intelligence, machine learning, and 
                    computational systems have emerged as transformative forces shaping our future. This conference 
                    serves as a vital platform for fostering collaboration between academia and industry, encouraging 
                    research that addresses real-world challenges and contributes to the nation's technological advancement.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    AICTE has always been committed to promoting quality technical education and research in India. 
                    We believe that conferences like ISCT 2026 play a crucial role in nurturing innovation, facilitating 
                    knowledge exchange, and building networks that drive progress. The theme of this conference aligns 
                    perfectly with our vision of creating a technically skilled workforce capable of meeting global standards.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    I commend the efforts of the organizing committee at Galgotias University for their dedication 
                    in bringing together such a distinguished gathering of experts. I am confident that the discussions, 
                    presentations, and interactions during this conference will lead to meaningful collaborations and 
                    groundbreaking research outcomes.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    I extend my best wishes to all participants for a successful and enriching conference experience. 
                    May this event inspire innovative ideas, foster lasting partnerships, and contribute significantly 
                    to the advancement of intelligent systems and computational technologies.
                  </p>

                  <div className="pt-6 border-t">
                    <p className="text-slate-800 font-semibold">Warm regards,</p>
                    <p className="text-xl font-bold text-slate-800 mt-2">Prof. T. G. Sitharam</p>
                    <p className="text-rose-600">Chairman, AICTE</p>
                    <p className="text-sm text-gray-500">All India Council for Technical Education</p>
                    <p className="text-sm text-gray-500">Ministry of Education, Government of India</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 border-t-4 border-t-slate-800">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-rose-500" />
                  About AICTE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The All India Council for Technical Education (AICTE) is the statutory body and a national-level 
                  council for technical education, under the Department of Higher Education, Ministry of Education, 
                  Government of India. Established in November 1945, AICTE is responsible for proper planning and 
                  coordinated development of the technical education system in India.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800">10,000+</p>
                    <p className="text-sm text-gray-600">Affiliated Institutions</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <GraduationCap className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800">40+ Lakh</p>
                    <p className="text-sm text-gray-600">Students Enrolled</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <Award className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800">75+ Years</p>
                    <p className="text-sm text-gray-600">Of Excellence</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Contact AICTE</h3>
                    <p className="text-gray-300 text-sm">
                      Nelson Mandela Marg, Vasant Kunj, New Delhi-110070
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-rose-400" />
                    <span className="text-sm">www.aicte-india.org</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-rose-50 border border-rose-200 p-4 rounded-lg">
              <p className="text-sm text-rose-800 text-center">
                <strong>AICTE - Empowering Technical Education in India</strong><br />
                Promoting quality education, research, and innovation in technical disciplines across the nation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MessageAICTE;
