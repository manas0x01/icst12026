import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, User, Presentation, FileText, AlertCircle } from "lucide-react";

const PresentationSchedule = () => {
  const SessionCard = ({ time, title, location, type, papers, chair }: any) => (
    <Card className="mb-4 border-l-4 border-l-rose-500 hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-rose-50 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 text-rose-500" />
                <span className="text-sm font-semibold text-rose-700">{time}</span>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                type === "Technical Session" ? "bg-blue-100 text-blue-700" :
                type === "Oral Presentation" ? "bg-green-100 text-green-700" :
                type === "Poster Presentation" ? "bg-purple-100 text-purple-700" :
                type === "Break" ? "bg-gray-100 text-gray-700" :
                "bg-slate-100 text-slate-700"
              }`}>{type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
            {chair && (
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Session Chair:</span> {chair}
              </p>
            )}
          </div>
          
          {papers && papers.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Paper Presentations
              </h4>
              <ul className="space-y-2">
                {papers.map((paper: any, index: number) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium text-slate-700">Paper {paper.id}:</span> {paper.title}
                    <br />
                    <span className="text-xs text-gray-500 italic">Authors: {paper.authors}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
            <Presentation className="h-12 w-12 text-rose-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Presentation Schedule</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive schedule of paper presentations, technical sessions, and poster exhibitions
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm flex-wrap">
            <span className="bg-white/10 px-4 py-2 rounded-full">May 15-17, 2026</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Hall A, Hall B & Exhibition Hall</span>
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

              <TabsContent value="day1" className="space-y-4">
                <Card className="mb-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Day 1 - May 15, 2026: Machine Learning & AI</CardTitle>
                  </CardHeader>
                </Card>

                <SessionCard
                  time="8:00 - 9:00 AM"
                  title="Registration & Welcome Coffee"
                  location="Conference Lobby"
                  type="Registration"
                />

                <SessionCard
                  time="9:00 - 9:30 AM"
                  title="Opening Ceremony & Welcome Address"
                  location="Main Auditorium"
                  type="Ceremony"
                  chair="Conference Chairs"
                />

                <SessionCard
                  time="11:00 - 12:30 PM"
                  title="Technical Session 1A: Machine Learning Algorithms"
                  location="Hall A"
                  type="Technical Session"
                  chair="Prof. (Dr.) Vineeta Khemchandani"
                  papers={[
                    { id: "001", title: "Deep Reinforcement Learning for Autonomous Navigation Systems", authors: "A. Kumar, B. Singh, C. Sharma" },
                    { id: "002", title: "Ensemble Methods for Improved Fraud Detection in Financial Transactions", authors: "D. Patel, E. Gupta" },
                    { id: "003", title: "Transfer Learning Approaches for Medical Image Classification", authors: "F. Khan, G. Reddy, H. Verma" },
                    { id: "004", title: "Bayesian Optimization for Hyperparameter Tuning in Neural Networks", authors: "I. Das, J. Mishra" }
                  ]}
                />

                <SessionCard
                  time="11:00 - 12:30 PM"
                  title="Technical Session 1B: IoT Security & Privacy"
                  location="Hall B"
                  type="Technical Session"
                  chair="Prof. (Dr.) Sudhir Kr. Singh"
                  papers={[
                    { id: "005", title: "Lightweight Cryptographic Protocols for Resource-Constrained IoT Devices", authors: "K. Sharma, L. Kumar" },
                    { id: "006", title: "Blockchain-Based Secure Data Sharing in IoT Networks", authors: "M. Singh, N. Patel, O. Jain" },
                    { id: "007", title: "Anomaly Detection in Industrial IoT Using Machine Learning", authors: "P. Gupta, Q. Rao" },
                    { id: "008", title: "Privacy-Preserving Authentication Schemes for Smart Home Systems", authors: "R. Verma, S. Yadav" }
                  ]}
                />

                <SessionCard
                  time="12:30 - 1:30 PM"
                  title="Lunch Break"
                  location="Conference Restaurant"
                  type="Break"
                />

                <SessionCard
                  time="2:30 - 4:00 PM"
                  title="Technical Session 2A: Deep Learning Applications"
                  location="Hall A"
                  type="Technical Session"
                  chair="Prof. (Dr.) Deepak Soni"
                  papers={[
                    { id: "009", title: "Attention Mechanisms in Transformer Models for Natural Language Processing", authors: "T. Mehta, U. Sharma" },
                    { id: "010", title: "Generative Adversarial Networks for Synthetic Data Generation", authors: "V. Agarwal, W. Gupta" },
                    { id: "011", title: "Convolutional Neural Networks for Real-Time Object Detection", authors: "X. Singh, Y. Kumar, Z. Ahmad" },
                    { id: "012", title: "Recurrent Neural Networks for Time Series Forecasting in Stock Markets", authors: "AA. Patel, BB. Sharma" }
                  ]}
                />

                <SessionCard
                  time="2:30 - 4:00 PM"
                  title="Technical Session 2B: Cloud Computing Architectures"
                  location="Hall B"
                  type="Technical Session"
                  chair="Prof. (Dr.) Sonia Setia"
                  papers={[
                    { id: "013", title: "Serverless Computing: Performance Analysis and Optimization", authors: "CC. Verma, DD. Singh" },
                    { id: "014", title: "Container Orchestration Strategies for Microservices Deployment", authors: "EE. Kumar, FF. Rao" },
                    { id: "015", title: "Edge-Cloud Collaboration Framework for Low-Latency Applications", authors: "GG. Yadav, HH. Patel" },
                    { id: "016", title: "Energy-Efficient Resource Allocation in Data Centers", authors: "II. Mishra, JJ. Gupta" }
                  ]}
                />

                <SessionCard
                  time="4:00 - 4:30 PM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="4:30 - 6:00 PM"
                  title="Panel Discussion: Ethics in AI and Computing"
                  location="Main Auditorium"
                  type="Panel"
                  chair="Industry and Academic Leaders"
                />
              </TabsContent>

              <TabsContent value="day2" className="space-y-4">
                <Card className="mb-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Day 2 - May 16, 2026: Computer Vision & Distributed Systems</CardTitle>
                  </CardHeader>
                </Card>

                <SessionCard
                  time="10:00 - 10:30 AM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 3A: Computer Vision & Image Processing"
                  location="Hall A"
                  type="Technical Session"
                  chair="Prof. (Dr.) Anupam Baliyan"
                  papers={[
                    { id: "017", title: "Real-Time Facial Recognition System Using Siamese Networks", authors: "KK. Singh, LL. Kumar" },
                    { id: "018", title: "Image Super-Resolution Using Deep Convolutional Networks", authors: "MM. Sharma, NN. Patel" },
                    { id: "019", title: "Autonomous Vehicle Perception: Multi-Sensor Fusion Techniques", authors: "OO. Gupta, PP. Verma, QQ. Yadav" },
                    { id: "020", title: "Medical Image Segmentation Using U-Net Architecture", authors: "RR. Kumar, SS. Singh" }
                  ]}
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 3B: Blockchain & Distributed Systems"
                  location="Hall B"
                  type="Technical Session"
                  chair="Prof. (Dr.) Trapti Shrivastava"
                  papers={[
                    { id: "021", title: "Consensus Mechanisms for Scalable Blockchain Networks", authors: "TT. Agarwal, UU. Mishra" },
                    { id: "022", title: "Smart Contract Security: Vulnerability Analysis and Prevention", authors: "VV. Reddy, WW. Sharma" },
                    { id: "023", title: "Distributed Ledger Technology for Supply Chain Management", authors: "XX. Patel, YY. Gupta" },
                    { id: "024", title: "Interoperability Solutions for Cross-Chain Communication", authors: "ZZ. Kumar, AAA. Singh" }
                  ]}
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Workshop: Hands-on Machine Learning with TensorFlow"
                  location="Lab 1"
                  type="Workshop"
                  chair="Google AI Team"
                />

                <SessionCard
                  time="12:00 - 1:00 PM"
                  title="Lunch Break"
                  location="Conference Restaurant"
                  type="Break"
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 4A: Natural Language Processing"
                  location="Hall A"
                  type="Technical Session"
                  chair="Prof. (Dr.) Shipra Shukla"
                  papers={[
                    { id: "025", title: "BERT-Based Sentiment Analysis for Social Media Data", authors: "BBB. Verma, CCC. Kumar" },
                    { id: "026", title: "Named Entity Recognition in Low-Resource Languages", authors: "DDD. Singh, EEE. Patel" },
                    { id: "027", title: "Abstractive Text Summarization Using Sequence-to-Sequence Models", authors: "FFF. Sharma, GGG. Gupta" },
                    { id: "028", title: "Multilingual Question Answering System Architecture", authors: "HHH. Mishra, III. Reddy" }
                  ]}
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 4B: Cybersecurity & Network Defense"
                  location="Hall B"
                  type="Technical Session"
                  chair="Prof. (Dr.) Jitendra"
                  papers={[
                    { id: "029", title: "Zero-Day Attack Detection Using Behavioral Analysis", authors: "JJJ. Patel, KKK. Singh" },
                    { id: "030", title: "Network Traffic Classification Using Deep Packet Inspection", authors: "LLL. Kumar, MMM. Sharma" },
                    { id: "031", title: "Ransomware Detection and Mitigation Strategies", authors: "NNN. Gupta, OOO. Verma" },
                    { id: "032", title: "Secure Multi-Party Computation for Privacy-Preserving Analytics", authors: "PPP. Yadav, QQQ. Kumar" }
                  ]}
                />

                <SessionCard
                  time="2:30 - 3:00 PM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="3:00 - 4:30 PM"
                  title="Industry Session: Technology Transfer & Innovation"
                  location="Main Auditorium"
                  type="Industry"
                  chair="Industry Partners Panel"
                />

                <SessionCard
                  time="4:30 - 6:00 PM"
                  title="Poster Session & Exhibition"
                  location="Exhibition Hall"
                  type="Poster"
                  papers={[
                    { id: "P001", title: "AI-Driven Crop Yield Prediction System", authors: "RRR. Singh" },
                    { id: "P002", title: "Blockchain for Academic Credential Verification", authors: "SSS. Patel" },
                    { id: "P003", title: "Smart Traffic Management Using IoT Sensors", authors: "TTT. Kumar" },
                    { id: "P004", title: "Voice-Based Authentication for Mobile Banking", authors: "UUU. Sharma" }
                  ]}
                />
              </TabsContent>

              <TabsContent value="day3" className="space-y-4">
                <Card className="mb-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Day 3 - May 17, 2026: Quantum & Emerging Technologies</CardTitle>
                  </CardHeader>
                </Card>

                <SessionCard
                  time="10:00 - 10:30 AM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 5A: Quantum Computing Applications"
                  location="Hall A"
                  type="Technical Session"
                  chair="Prof. (Dr.) Shashi Bhusan"
                  papers={[
                    { id: "033", title: "Quantum Machine Learning Algorithms for Pattern Recognition", authors: "VVV. Gupta, WWW. Singh" },
                    { id: "034", title: "Quantum Cryptography for Unconditional Security", authors: "XXX. Kumar, YYY. Patel" },
                    { id: "035", title: "Variational Quantum Eigensolver for Optimization Problems", authors: "ZZZ. Sharma, AAAA. Verma" },
                    { id: "036", title: "Quantum Error Correction Codes for Fault-Tolerant Computing", authors: "BBBB. Mishra, CCCC. Rao" }
                  ]}
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 5B: Smart Cities & IoT"
                  location="Hall B"
                  type="Technical Session"
                  chair="Prof. (Dr.) Meenakshi Awasthi"
                  papers={[
                    { id: "037", title: "Intelligent Waste Management System Using IoT", authors: "DDDD. Singh, EEEE. Kumar" },
                    { id: "038", title: "Smart Grid Energy Management Using Predictive Analytics", authors: "FFFF. Patel, GGGG. Sharma" },
                    { id: "039", title: "Air Quality Monitoring Network with Edge Computing", authors: "HHHH. Gupta, IIII. Verma" },
                    { id: "040", title: "Intelligent Parking Management Using Computer Vision", authors: "JJJJ. Yadav, KKKK. Kumar" }
                  ]}
                />

                <SessionCard
                  time="12:00 - 1:00 PM"
                  title="Lunch Break"
                  location="Conference Restaurant"
                  type="Break"
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 6A: Big Data Analytics"
                  location="Hall A"
                  type="Technical Session"
                  chair="Prof. (Dr.) Vipin Rai"
                  papers={[
                    { id: "041", title: "Real-Time Stream Processing Using Apache Kafka and Spark", authors: "LLLL. Mishra, MMMM. Singh" },
                    { id: "042", title: "Distributed Graph Processing for Social Network Analysis", authors: "NNNN. Patel, OOOO. Kumar" },
                    { id: "043", title: "Data Lake Architecture for Enterprise Analytics", authors: "PPPP. Sharma, QQQQ. Gupta" },
                    { id: "044", title: "Federated Learning for Privacy-Preserving Big Data Analysis", authors: "RRRR. Verma, SSSS. Reddy" }
                  ]}
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 6B: Human-Computer Interaction"
                  location="Hall B"
                  type="Technical Session"
                  chair="Prof. (Dr.) Jagjit Singh Dhatterwal"
                  papers={[
                    { id: "045", title: "Gesture-Based Interaction for Virtual Reality Environments", authors: "TTTT. Kumar, UUUU. Singh" },
                    { id: "046", title: "Eye Tracking for Attention Analysis in E-Learning", authors: "VVVV. Patel, WWWW. Sharma" },
                    { id: "047", title: "Voice User Interface Design for Elderly Users", authors: "XXXX. Gupta, YYYY. Verma" },
                    { id: "048", title: "Brain-Computer Interface for Assistive Technologies", authors: "ZZZZ. Yadav, AAAAA. Kumar" }
                  ]}
                />

                <SessionCard
                  time="2:30 - 3:00 PM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="3:00 - 4:00 PM"
                  title="Best Paper Awards & Recognition Ceremony"
                  location="Main Auditorium"
                  type="Awards"
                />

                <SessionCard
                  time="4:00 - 4:30 PM"
                  title="Closing Ceremony & Future Conferences"
                  location="Main Auditorium"
                  type="Ceremony"
                  chair="Organizing Committee"
                />
              </TabsContent>
            </Tabs>

            <Card className="mt-8 border-t-4 border-t-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-rose-500" />
                  Presentation Guidelines & Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Oral Presentation Format</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Presentation Duration: 15 minutes + 5 minutes Q&A</li>
                      <li>• Slide Format: 16:9 aspect ratio, PDF or PowerPoint</li>
                      <li>• Submit slides 24 hours before your session</li>
                      <li>• Laptops and projection equipment provided</li>
                      <li>• Arrive 10 minutes before your scheduled time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Poster Presentation Format</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Poster Size: A0 (841 x 1189 mm) portrait orientation</li>
                      <li>• Set-up Time: 30 minutes before poster session</li>
                      <li>• Presenters must stand by their posters during the session</li>
                      <li>• Printing services available at venue (additional charges)</li>
                      <li>• Poster mounting materials provided</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Author Registration Requirement
                  </h4>
                  <p className="text-sm text-amber-700">
                    At least one author must register and attend the conference to present the paper. 
                    Failure to present will result in exclusion from the conference proceedings.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Session Chairs</h4>
                  <p className="text-sm text-gray-600">
                    Each technical session is chaired by an expert in the field. Session chairs will 
                    introduce speakers, manage time, and moderate Q&A. Please coordinate with your 
                    session chair regarding any special requirements.
                  </p>
                </div>

                <div className="bg-rose-50 p-4 rounded-lg">
                  <p className="text-sm text-rose-800">
                    <strong>Note:</strong> All presentation timings are in Indian Standard Time (IST, UTC+5:30). 
                    The schedule is subject to minor changes. Any updates will be communicated via email. 
                    For technical issues or last-minute changes, contact the conference helpdesk at the venue.
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

export default PresentationSchedule;
