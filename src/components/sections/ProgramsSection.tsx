import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dumbbell, Scale, Camera, ActivitySquare } from 'lucide-react';

const programs = [
  {
    icon: Dumbbell,
    title: 'PT (퍼스널 트레이닝)',
    badge: '인기',
    description: '전문 트레이너의 1:1 맞춤 관리로 효율적인 운동 효과를 경험하세요.',
    features: [
      '개인 맞춤 운동 프로그램',
      '실시간 자세 교정',
      '목표 달성 집중 관리',
      '식단 컨설팅',
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    color: 'red',
  },
  {
    icon: Scale,
    title: '다이어트 프로그램',
    badge: '추천',
    description: '건강한 식습관과 올바른 운동 습관으로 요요 없는 근본적인 변화를 만듭니다.',
    features: [
      '체계적인 식단 관리',
      '유산소 + 근력 운동',
      '주기적 체성분 분석',
      '요요 방지 관리',
    ],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    color: 'orange',
  },
  {
    icon: Camera,
    title: '바디프로필',
    badge: 'HOT',
    description: '인생의 가장 멋진 순간을 기록하는 바디프로필 촬영을 전문적으로 지원합니다.',
    features: [
      '3개월 집중 관리',
      '촬영 D-DAY 완벽 컨디션',
      '포즈 및 표정 코칭',
      '성공 사례 다수',
    ],
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    color: 'blue',
  },
  {
    icon: ActivitySquare,
    title: '체형교정',
    badge: '전문',
    description: '잘못된 자세와 운동 습관을 바로잡아 건강한 신체 균형을 만듭니다.',
    features: [
      '체형 분석 및 진단',
      '교정 운동 프로그램',
      '통증 완화 케어',
      '올바른 자세 교육',
    ],
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
    color: 'green',
  },
];

const badgeColors = {
  red: 'bg-red-100 text-red-600 hover:bg-red-100',
  orange: 'bg-orange-100 text-orange-600 hover:bg-orange-100',
  blue: 'bg-blue-100 text-blue-600 hover:bg-blue-100',
  green: 'bg-green-100 text-green-600 hover:bg-green-100',
};

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">전문</span> 프로그램
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 목적에 맞춘 전문적인 프로그램으로 확실한 변화를 만듭니다
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0"
              >
                <CardHeader className="relative">
                  {/* Image */}
                  <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Badge */}
                    <Badge
                      className={`absolute top-4 right-4 ${
                        badgeColors[program.color as keyof typeof badgeColors]
                      }`}
                    >
                      {program.badge}
                    </Badge>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <svg
                          className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                  >
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            어떤 프로그램이 나에게 맞을까요? 전문 상담을 통해 최적의 프로그램을 추천해 드립니다.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full shadow-lg"
          >
            무료 상담 신청하기
          </Button>
        </div>
      </div>
    </section>
  );
}
