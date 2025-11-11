import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Train, Bus, Car } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            오시는 <span className="text-red-600">길</span>
          </h2>
          <p className="text-xl text-gray-600">
            아트프라자 4층에서 여러분을 기다립니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                {/* 실제로는 카카오맵 API나 구글맵을 사용하면 됩니다 */}
                <div className="relative h-[400px] bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 text-center">
                      <MapPin className="w-12 h-12 text-red-600 mx-auto mb-2" />
                      <p className="font-bold text-gray-900 text-lg">시그널휘트니스</p>
                      <p className="text-sm text-gray-600">아트프라자 4층</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">전화번호</h4>
                  <a
                    href="tel:031-123-4567"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    031-123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">운영시간</h4>
                  <p className="text-gray-600 text-sm">
                    평일 06:00 - 23:00
                    <br />
                    주말 08:00 - 20:00
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            {/* Address */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">주소</h3>
                    <p className="text-gray-700 text-lg">
                      경기도 평택시 장당동
                      <br />
                      아트프라자 4층
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">교통편</h3>

                <div className="space-y-6">
                  {/* 지하철 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Train className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">지하철</h4>
                      <p className="text-gray-600 text-sm">
                        송탄역 1번 출구에서 도보 10분
                      </p>
                    </div>
                  </div>

                  {/* 버스 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Bus className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">버스</h4>
                      <p className="text-gray-600 text-sm">
                        장당동 정류장 하차 (10, 20, 30번)
                      </p>
                    </div>
                  </div>

                  {/* 자가용 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Car className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">자가용</h4>
                      <p className="text-gray-600 text-sm">
                        아트프라자 지하 주차장 이용 가능
                        <br />
                        <span className="text-red-600 font-semibold">
                          회원 주차 2시간 무료
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours Detail */}
            <Card className="shadow-xl bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">운영 시간</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">월 - 금</span>
                    <span className="text-gray-900 font-bold">06:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">토요일</span>
                    <span className="text-gray-900 font-bold">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">일요일/공휴일</span>
                    <span className="text-gray-900 font-bold">08:00 - 18:00</span>
                  </div>
                  <div className="pt-4 border-t border-red-200">
                    <p className="text-sm text-gray-600">
                      * 명절 당일은 휴무입니다
                      <br />* 연중무휴 (설날, 추석 제외)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
