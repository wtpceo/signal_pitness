import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const trainers = [
  {
    name: '정재희',
    role: '대표',
    specialty: '재활 · 체형교정 · 통증케어',
    experience: 'Director',
    image: '/images/trainers/trainer1.png',
    certifications: [
      '2015 WBC Fitness Summer Championship -75kg 5위',
      '2016 피트니스스타 보디빌딩대회 -70kg 6위',
      '2016 NABBA KOREA 보디빌딩 -70kg Top 10',
      '2016 피트니스스타 보디빌딩대회 -75kg 6위',
      '생활체육 지도자 보디빌딩 2급',
      'ACSM-CPT(미국스포츠의학회) Certificate',
      'PRIME D Weight Training Specialist 수료',
      'Trigger Point 교육 수료',
      '근골격계 교정운동 기능해부학 수료',
      '임상운동학 Part 단기(cervical), 견갑대 수료',
      '2015 통합체형 교정 및 통증 완화 수료',
      '2015 통일문화제 교육부장관상 통합대상',
    ],
  },
  {
    name: '홍예인',
    role: '트레이너',
    specialty: '힙 디자인 · 바디프로필',
    experience: 'Senior',
    image: '/images/trainers/trainer2.png',
    certifications: [
      '2022 NPCA 충청도 주니어 1위',
      '2022 NPCA 충청도 오픈 입상',
      '2021 퓨어 엘리트 코리아 오픈 입상',
      '2020 INFC 비키니 루키 입상',
      '생활스포츠지도사 2급 보디빌딩',
      '기능해부학 교육 / 근막이완 스트레칭 교육',
      '스포츠마사지 / 스포츠테이핑',
      '힙 디자인 교육 수료',
    ],
  },
  {
    name: '이준봉',
    role: '트레이너',
    specialty: '기능성 트레이닝 · 재활',
    experience: 'Professional',
    image: '/images/trainers/trainer3.png',
    certifications: [
      '한국인재교육원 RTS (운동 기능 처방사)',
      '생활체육지도자 2급 (보디빌딩)',
      '스포츠 영양 생리학 수료',
      '스포츠 테이핑 / 촉진해부학 세미나 수료',
      '유아체육 2급 / 입시체육지도자 2급',
      '태권도 3단 자격증',
      '응급 처치 & 심폐 소생술 교육 과정 수료',
      'TRX / Cardio training 세미나 수료',
      '건강한 웨이트트레이닝 세미나 수료',
    ],
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
              className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-2 group overflow-hidden flex flex-col h-full"
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-80 overflow-hidden flex-shrink-0">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-600 shadow-lg">
                    {trainer.experience}
                  </Badge>
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col flex-grow bg-gray-800">
                  <div className="mb-4">
                    <div className="flex items-end gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                      <span className="text-red-500 font-medium mb-1">{trainer.role}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{trainer.specialty}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-700 w-full my-4" />

                  {/* Certifications - Scrollable if too long, or just list */}
                  <div className="space-y-2 text-sm text-gray-300 flex-grow">
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        <span className="leading-snug text-xs lg:text-sm text-gray-400">
                          {cert}
                        </span>
                      </div>
                    ))}
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
