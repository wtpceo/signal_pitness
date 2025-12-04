import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Train, Bus, Car } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            오시는 <span className="text-red-500">길</span>
          </h2>
          <p className="text-xl text-gray-400">
            아트프라자 4층에서 여러분을 기다립니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">주소</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      경기도 평택시 장당동
                      <br />
                      아트프라자 4층
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Hours Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-bold text-white mb-2">전화번호</h4>
                  <a
                    href="tel:031-123-4567"
                    className="text-gray-400 hover:text-red-500 transition-colors text-lg"
                  >
                    031-123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-bold text-white mb-2">운영시간</h4>
                  <div className="text-gray-400 text-sm space-y-1">
                    <p>평일 06:00 - 23:00</p>
                    <p>주말 08:00 - 20:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transport Info */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">교통편 안내</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Train className="w-6 h-6 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">지하철</h4>
                      <p className="text-gray-400 text-sm">송탄역 1번 출구에서 도보 10분</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Bus className="w-6 h-6 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">버스</h4>
                      <p className="text-gray-400 text-sm">장당동 정류장 하차 (10, 20, 30번)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="w-6 h-6 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">주차</h4>
                      <p className="text-gray-400 text-sm">
                        건물 지하 주차장 이용 가능 <span className="text-red-500">(2시간 무료)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Map */}
          <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.666386866666!2d127.056666!3d37.056666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAzJzI0LjAiTiAxMjfCsDAzJzI0LjAiRQ!5e0!3m2!1sko!2skr!4v1635730000000!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
