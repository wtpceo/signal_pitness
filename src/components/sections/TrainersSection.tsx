import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const trainers = [
  {
    name: '김민수',
    role: '대표 트레이너',
    specialty: '바디프로필 전문',
    experience: '15년 경력',
    certifications: ['생활스포츠지도사', 'NSCA-CPT', '스포츠영양사'],
    image: '/images/trainers/trainer1.png',
  },
  {
    name: '박지영',
    role: '수석 트레이너',
    specialty: '다이어트 & 체형교정',
    experience: '12년 경력',
    certifications: ['생활스포츠지도사', 'ACSM-CPT', '필라테스 지도자'],
    image: '/images/trainers/trainer2.png',
  },
  {
    name: '이준호',
    role: '전문 트레이너',
    specialty: '근력 향상 & 재활',
    experience: '10년 경력',
    certifications: ['생활스포츠지도사', 'ISSA-CPT', '재활운동전문가'],
    image: '/images/trainers/trainer3.png',
  },
];

export default function TrainersSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-red-500">전문</span> 트레이너진
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            다년간의 풍부한 실전 경력을 갖춘 전문가들이 여러분의 목표 달성을 책임집니다
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                  {/* Badge */}
                  <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-600 z-20">
                    {trainer.experience}
                  </Badge>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-red-400 font-semibold mb-2">{trainer.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{trainer.specialty}</p>

                    {/* Certifications */}
                    <div className="space-y-1">
                      {trainer.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-red-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-400 text-xs">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-3xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">
              회원님 한 분 한 분을 <span className="text-red-500">전담</span>합니다
            </h3>
            <p className="text-gray-400 leading-relaxed">
              개인의 체형, 생활 습관, 운동 목표를 정밀하게 분석하여 가장 효율적인 솔루션을
              제시합니다. 운동 경험이 전혀 없어도 괜찮습니다. 친절하고 꼼꼼한 관리
              시스템을 통해 누구나 운동에 쉽게 재미를 붙일 수 있도록 곁에서 이끌어 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
