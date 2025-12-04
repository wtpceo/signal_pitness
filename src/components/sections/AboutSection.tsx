import { Badge } from '@/components/ui/badge';

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-100">About Us</Badge>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              당신의 고민을
              <br />
              <span className="text-red-600">명쾌하게 해결</span>합니다
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                운동은 시작이 반이라는 말이 있습니다. 하지만 그 시작조차 망설여지거나,
                큰마음 먹고 등록해도 매번 작심삼일로 끝나기 일쑤입니다.
              </p>
              <p>
                평택이나 송탄 지역에서 내 몸에 꼭 맞고 꾸준히 다닐 수 있는 헬스장을
                찾는 것부터가 큰 숙제처럼 느껴집니다.
              </p>
              <p className="text-gray-900 font-semibold text-xl">
                이제 그 고민을 명쾌하게 해결해 드립니다.
              </p>
              <p>
                여러분의 '작심삼일'을 '작심평생'의 건강한 습관으로 바꾸어 드리는 곳,
                바로 <span className="font-bold text-red-600">시그널휘트니스 장당점</span>입니다.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">압도적인 시설</h4>
                  <p className="text-sm text-gray-600">지역 최고 수준</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">전문 트레이너</h4>
                  <p className="text-sm text-gray-600">1:1 맞춤 관리</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">목표 달성</h4>
                  <p className="text-sm text-gray-600">체계적 관리</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">쾌적한 환경</h4>
                  <p className="text-sm text-gray-600">완벽한 바이러스 케어</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"
                alt="Gym Equipment"
                className="rounded-2xl shadow-xl h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80"
                alt="Personal Training"
                className="rounded-2xl shadow-xl h-64 w-full object-cover sm:mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                alt="Fitness Equipment"
                className="rounded-2xl shadow-xl h-64 w-full object-cover sm:-mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80"
                alt="Gym Interior"
                className="rounded-2xl shadow-xl h-64 w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🏆</div>
                <div>
                  <div className="text-2xl font-bold text-red-600">평택/송탄</div>
                  <div className="text-gray-600">프리미엄 헬스장</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
