import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: '김*희',
    age: '30대 여성',
    program: '다이어트 프로그램',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    review:
      '평택고덕헬스장 중에서 시설이 단연 최고예요. 트레이너님들도 정말 친절하시고 운동 자세 하나하나 꼼꼼하게 봐주셔서 3개월만에 10kg 감량 성공했어요!',
    result: '3개월 -10kg 달성',
  },
  {
    name: '이*수',
    age: '40대 남성',
    program: '바디프로필',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    review:
      '송탄에서 PT 받고 바디프로필까지 찍었습니다. 처음엔 자신이 없었는데 트레이너님이 끝까지 포기하지 않게 도와주셔서 인생 최고의 몸 만들었어요. 감사합니다!',
    result: '바디프로필 성공',
  },
  {
    name: '박*영',
    age: '20대 여성',
    program: '체형교정 + PT',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    review:
      '거북목이랑 골반 틀어짐 때문에 고민이었는데, 체형교정 프로그램 받고 나서 자세도 좋아지고 통증도 많이 줄었어요. 다른 송탄헬스장과는 확실히 다릅니다.',
    result: '체형 개선 성공',
  },
  {
    name: '최*호',
    age: '30대 남성',
    program: 'PT (근력 향상)',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    review:
      '운동을 평생 안 해봤는데, 여기서 처음 시작했어요. 이렇게 꼼꼼한 관리는 처음이라 매번 운동이 기대됩니다. 벌써 6개월째 다니고 있어요!',
    result: '6개월 꾸준히 운동 중',
  },
  {
    name: '정*미',
    age: '40대 여성',
    program: '다이어트 프로그램',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    review:
      '산후 다이어트로 고민하다가 등록했는데 정말 잘한 것 같아요. 식단 관리부터 운동까지 체계적으로 관리해주셔서 요요 없이 건강하게 감량했습니다.',
    result: '산후 다이어트 성공',
  },
  {
    name: '한*준',
    age: '20대 남성',
    program: 'PT + 바디프로필',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    review:
      '시설도 깨끗하고 기구도 다양해서 좋아요. 트레이너님이 목표에 맞춰서 운동 계획을 세워주시니까 확실히 효과가 빠르게 나타나네요. 강력 추천합니다!',
    result: '근육량 증가 성공',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            회원님들의 <span className="text-red-600">생생한</span> 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            시그널휘트니스 회원님들의 진심 어린 이야기를 들어보세요
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">(200+ 리뷰)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.age}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Program Badge */}
                <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {review.program}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed text-sm">{review.review}</p>

                {/* Result */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">{review.result}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            다음 성공 사례의 주인공은 <span className="text-red-600">당신</span>입니다
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            지금 바로 시작하고 당신만의 성공 스토리를 만들어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:031-123-4567"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              전화 상담
            </a>
            <a
              href="http://pf.kakao.com/_example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
              </svg>
              카카오톡 상담
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
