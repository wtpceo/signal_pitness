import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: '압도적인 시설',
    subtitle: '지역 최고 수준의 프리미엄 헬스장',
    description:
      '센터에 들어서는 순간, 운동하고 싶은 마음을 불러일으키는 깔끔하고 쾌적한 인테리어가 회원님을 맞이합니다. 다양한 운동 목적에 맞춘 최신 운동기구들이 완벽하게 완비되어 있습니다.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    highlights: ['최신 운동기구 완비', '쾌적한 인테리어', '다양한 운동 공간'],
  },
  {
    icon: Users,
    title: '전문 트레이너진',
    subtitle: '차원이 다른 일대일 맞춤 관리',
    description:
      '다년간의 풍부한 실전 경력을 갖춘 전문 트레이너들이 회원님 한 분 한 분을 전담합니다. 개인의 체형, 생활 습관, 운동 목표를 정밀하게 분석하여 가장 효율적인 솔루션을 제시합니다.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    highlights: ['다년간 경력 트레이너', '1:1 맞춤 프로그램', '목표 달성 집중 관리'],
  },
  {
    icon: Shield,
    title: '완벽한 케어 시스템',
    subtitle: '안심하고 운동에만 집중',
    description:
      '보이지 않는 곳까지 세심하게 관리하는 완벽한 바이러스 케어 시스템으로 언제나 안심하고 운동에만 집중할 수 있습니다. 친절하고 꼼꼼한 관리 시스템을 통해 누구나 운동에 쉽게 재미를 붙일 수 있습니다.',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80',
    highlights: ['바이러스 케어', '체계적 관리', '지속적 동기부여'],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            시그널휘트니스만의 <span className="text-red-600">특별함</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            많은 분들이 시그널휘트니스 장당점을 선택하는 이유입니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-red-600 font-semibold text-lg">
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-red-600"
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
                        </div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <CardContent className="p-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
