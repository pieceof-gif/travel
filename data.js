// data.js — 여행지 정적 데이터 (index.html에서 자동 추출)
// 주의: 직접 편집하지 마세요. extract_data.py로 재생성하세요.

// ── const v1_0_9_DEST_DATA ──
var v1_0_9_DEST_DATA = [
        {
          id: 'lisbon', name: '포르투갈 · 리스본', sub: '유럽 최고 가성비',
          score: 45, isTop: true, photo: '',
          airfare: '120만원', hotel: '60만원', hotelSub: '1박 평균 12만원',
          daily: '7만원', dailySub: '서유럽 대비 저렴',
          alert: '-', news: '노마드 증가', newsSub: '물가 소폭 상승', disaster: '없음', disasterSub: '',
          temp: '18–24°C', tempSub: '쾌적한 봄 날씨', fx: 'EUR 강세', fxSub: '환전 타이밍 주의',
          baseAir: 110, baseHotel: 12, baseHotelLow: 2, baseHotelHigh: 40, minDays: 5, minBudget: 140,
          sights: {
            low: [
              { name: '알파마 지구 골목 산책', price: '무료', link: 'https://maps.google.com/?q=Alfama+Lisbon' },
              { name: '28번 노란 트램 외경 감상', price: '무료', link: 'https://maps.google.com/?q=Tram+28+Lisbon' },
              { name: '벨렘 탑 외관 산책', price: '무료', link: 'https://maps.google.com/?q=Belem+Tower+Lisbon' }
            ],
            mid: [
              { name: '상 조르즈 성 전망', price: '약 0.8만원', link: 'https://maps.google.com/?q=São+Jorge+Castle+Lisbon' },
              { name: '제로니무스 수도원', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=jeronimos+monastery+lisbon' },
              { name: '벨렘 탑 입장', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=belem+tower+lisbon' }
            ],
            high: [
              { name: '신트라 왕궁 프라이빗 투어', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=sintra+private+tour&locale_autoredirect_optout=true' },
              { name: '파두 VIP 디너 쇼', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=lisbon+fado+dinner+show&locale_autoredirect_optout=true' },
              { name: '도우루 와이너리 헬기 투어', price: '약 40만원', link: 'https://www.getyourguide.com/s/?q=douro+valley+helicopter+tour&locale_autoredirect_optout=true' }
            ]
          },
          exps: {
            low: [
              { name: '에그타르트 원조 맛보기', price: '약 0.3만원', link: 'https://maps.google.com/?q=Pasteis+de+Belem+Lisboa' },
              { name: '알파마 무료 파두 선율 감상', price: '무료', link: 'https://maps.google.com/?q=Alfama+Fado+Lisbon' },
              { name: '리스본 미라도루 전망대 산책', price: '무료', link: 'https://maps.google.com/?q=Miradouro+da+Graca+Lisbon' }
            ],
            mid: [
              { name: '신트라 당일 투어', price: '약 3만원', link: 'https://www.getyourguide.com/s/?q=sintra+day+trip+from+lisbon&locale_autoredirect_optout=true' },
              { name: '파두 공연 감상', price: '약 3만원', link: 'https://www.getyourguide.com/s/?q=lisbon+fado+show&locale_autoredirect_optout=true' },
              { name: '리스본 리베이라 식도락 투어', price: '약 4만원', link: 'https://www.airbnb.co.kr/s/Lisbon--Portugal/experiences?query=food+tour' }
            ],
            high: [
              { name: '파두 VIP 디너 & 현지 가이드', price: '약 10만원', link: 'https://www.airbnb.co.kr/s/Lisbon--Portugal/experiences?query=fado+dinner' },
              { name: '요트 선셋 크루즈', price: '약 8만원', link: 'https://www.getyourguide.com/s/?q=lisbon+sunset+yacht+cruise&locale_autoredirect_optout=true' },
              { name: '포르투갈 와이너리 프라이빗 테이스팅', price: '약 12만원', link: 'https://www.getyourguide.com/s/?q=douro+valley+wine+tour&locale_autoredirect_optout=true' }
            ]
          },
          food: {
            low: [
              { name: '파스테이스 데 벨렘', desc: '에그타르트 원조 · 한 개 €0.3, 현금만 가능', link: 'https://maps.google.com/?q=Pasteis+de+Belem+Lisboa' },
              { name: '메르카두 다 히베이라', desc: '재래시장 · 현지인 저렴한 점심 €4~', link: 'https://maps.google.com/?q=Mercado+da+Ribeira+Lisbon' },
              { name: '타임아웃 마켓 리스보아', desc: '푸드홀 · 다양한 현지 요리 €6~', link: 'https://maps.google.com/?q=Time+Out+Market+Lisboa' }
            ],
            mid: [
              { name: '세르베하리아 하미루', desc: '현지 최고 해산물 레스토랑', link: 'https://maps.google.com/?q=Cervejaria+Ramiro+Lisbon' },
              { name: '타임아웃 마켓 리스보아', desc: '현지 스타 셰프 집결 푸드홀', link: 'https://maps.google.com/?q=Time+Out+Market+Lisboa' },
              { name: '솔 에 페스카', desc: '독특한 통조림 바 · 현지 식문화 체험', link: 'https://maps.google.com/?q=Sol+e+Pesca+Lisbon' }
            ],
            high: [
              { name: '벨칸토 (Belcanto)', desc: '미슐랭 2스타 · 호세 아빌레스 셰프', link: 'https://maps.google.com/?q=Belcanto+Lisbon' },
              { name: '세르베하리아 하미루', desc: '현지 최고 해산물 · 고급 다이닝', link: 'https://maps.google.com/?q=Cervejaria+Ramiro+Lisbon' },
              { name: '클루브 드 자르날리스타스', desc: '외교관·셀럽 즐겨 찾는 프라이빗 레스토랑', link: 'https://maps.google.com/?q=Clube+de+Jornalistas+Lisbon' }
            ]
          },
          hotels: {
            low: [
              { name: 'Lisbon Lounge Hostel', stars: 2, desc: '리스본 최고 평점 호스텔 · 배낭여행자 1위', priceRange: '약 2-3만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Lisbon+Lounge+Hostel&dest_type=city' },
              { name: 'Sunset Destination Hostel', stars: 2, desc: '루프탑 선셋 포함 · 리스본 평점 최상위', priceRange: '약 2-4만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sunset+Destination+Hostel+Lisbon&dest_type=city' }
            ],
            mid: [
              { name: 'My Story Hotel Rossio', stars: 4, desc: '구시가 중심, 한국인 후기 최고', priceRange: '약 9-13만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=My+Story+Hotel+Rossio+Lisbon&dest_type=city' },
              { name: 'Hotel do Chiado', stars: 4, desc: '알파마 인근, 루프탑 전망 우수', priceRange: '약 14-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+do+Chiado+Lisbon&dest_type=city' }
            ],
            high: [
              { name: 'Bairro Alto Hotel', stars: 5, desc: '리스본 최고급 부티크 · 시아두 테라스 뷰', priceRange: '약 40-65만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Bairro+Alto+Hotel+Lisbon&dest_type=city' },
              { name: 'Tivoli Avenida Liberdade', stars: 5, desc: '도심 대로변 최고급 · 루프탑 풀장 포함', priceRange: '약 30-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Tivoli+Avenida+Liberdade+Lisboa&dest_type=city' }
            ]
          },
          hotelTips: [
            'Booking.com 지니어스 회원 가입 시 10% 추가 할인',
            '화요일·수요일 예약 시 평균 8% 저렴',
            '구시가(알파마·시아두) 지역 숙소가 관광 동선 최적',
            '리스본 카드 포함 패키지 숙소 비교 권장'
          ],
          cheapFlights: [
            { label: '핀에어 (헬싱키 경유)', desc: '약 16시간 · 왕복 70만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/lis/' },
            { label: '터키항공 (이스탄불 경유)', desc: '약 16시간 · 왕복 65만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/lis/' }
          ],
          flightTips: [
            '직항 없음 · 헬싱키·이스탄불·도하 경유가 가장 저렴',
            '출발 2-3개월 전 화요일 오전 예약 시 평균 15% 절약',
            '네이버 항공 가격 알림 기능 활용 권장',
            '스카이스캐너 전체 월 검색으로 최저가 날짜 확인'
          ]
        },
        {
          id: 'danang', name: '베트남 · 다낭', sub: '가장 편안한 휴양',
          score: 88, isTop: false, photo: '',
          airfare: '35만원', hotel: '45만원', hotelSub: '1박 평균 9만원',
          daily: '4만원', dailySub: '매우 저렴한 물가',
          alert: '여행유의', alertSub: '외교부 1단계', news: '우기 시작', newsSub: '더위 주의', disaster: '우기', disasterSub: '홍수 위험',
          temp: '28–33°C', tempSub: '덥고 습함 · 우기 직전',
          fx: 'VND 안정적', fxSub: '변동 거의 없음',
          baseAir: 30, baseHotel: 5, baseHotelLow: 1, baseHotelHigh: 20, minDays: 3, minBudget: 40,
          sights: {
            low: [
              { name: '미케 비치 해안 절경', price: '무료', link: 'https://maps.google.com/?q=My+Khe+Beach+Da+Nang' },
              { name: '다낭 성당 외관 감상', price: '무료', link: 'https://maps.google.com/?q=Da+Nang+Cathedral' },
              { name: '한 시장 구경', price: '무료', link: 'https://maps.google.com/?q=Han+Market+Da+Nang' }
            ],
            mid: [
              { name: '바나 힐스 골든 브릿지', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=ba+na+hills+golden+bridge' },
              { name: '오행산 신비로운 동굴', price: '약 0.5만원', link: 'https://www.klook.com/ko/search/?query=marble+mountains+da+nang' },
              { name: '호이안 구시가 탐방', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=hoi+an+old+town' }
            ],
            high: [
              { name: '바나 힐스 VIP 프라이빗 투어', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=ba+na+hills+private+tour' },
              { name: '호이안 프라이빗 보트 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=hoi+an+private+boat' },
              { name: '씨푸드 씰링 다이닝 크루즈', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=da+nang+dinner+cruise' }
            ]
          },
          exps: {
            low: [
              { name: '한 시장 야시장 투어', price: '약 1만원', link: 'https://www.airbnb.co.kr/s/Da-Nang--Vietnam/experiences?query=night+market+tour' },
              { name: '다낭 해변 일몰 감상', price: '무료', link: 'https://maps.google.com/?q=My+Khe+Beach+Da+Nang' },
              { name: '용다리 주말 불쇼 관람', price: '무료', link: 'https://maps.google.com/?q=Dragon+Bridge+Da+Nang' }
            ],
            mid: [
              { name: '전통 아오자이 & 현지 쿠킹 클래스', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Da-Nang--Vietnam/experiences?query=cooking+class' },
              { name: '용다리 야경 크루즈', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=dragon+bridge+river+cruise+da+nang' },
              { name: '호이안 랜턴 투어 (현지 가이드)', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Hoi-An--Vietnam/experiences?query=lantern+tour' }
            ],
            high: [
              { name: '럭셔리 스파 & 프리미엄 마사지', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+da+nang' },
              { name: '호이안 프라이빗 투어 + 런치', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=hoi+an+private+tour+from+da+nang' },
              { name: '다낭 씨푸드 VIP 야간 투어', price: '약 5만원', link: 'https://www.airbnb.co.kr/s/Da-Nang--Vietnam/experiences?query=seafood+night+tour' }
            ]
          },
          food: {
            low: [
              { name: '반미 퐁 (Bánh Mì Phượng)', desc: '다낭 최고 반미 · 1개 약 0.5만원', link: 'https://maps.google.com/?q=Banh+Mi+Phuong+Da+Nang' },
              { name: '미 꽝 바 무아', desc: '현지인 저렴한 비빔국수 · 0.5만원부터', link: 'https://maps.google.com/?q=Mi+Quang+Ba+Mua+Da+Nang' },
              { name: '한 시장 먹거리', desc: '현지 시장 간식 · 국수·반세오 최저가', link: 'https://maps.google.com/?q=Han+Market+Da+Nang' }
            ],
            mid: [
              { name: '마담 란 (Madame Lan)', desc: '베트남 전통 요리 · 현지인·관광객 모두 인정', link: 'https://maps.google.com/?q=Madame+Lan+Da+Nang' },
              { name: '미 꽝 바 무아', desc: '다낭식 비빔국수 · 현지인 필수 맛집', link: 'https://maps.google.com/?q=Mi+Quang+Ba+Mua+Da+Nang' },
              { name: '반미 퐁', desc: '다낭 최고 반미 샌드위치 · 줄 서서 먹는 맛집', link: 'https://maps.google.com/?q=Banh+Mi+Phuong+Da+Nang' }
            ],
            high: [
              { name: '루나 퍼블 (Luna Pub)', desc: '미케비치 오션뷰 · 씨푸드 파인다이닝', link: 'https://maps.google.com/?q=Luna+Pub+Da+Nang' },
              { name: '인터컨티넨탈 리조트 레스토랑', desc: '절벽 위 최고급 씨뷰 다이닝', link: 'https://maps.google.com/?q=InterContinental+Da+Nang+Restaurant' },
              { name: '씨푸드 하우스 미케비치', desc: '신선한 왕새우·랍스터 · 비치뷰 다이닝', link: 'https://maps.google.com/?q=Seafood+Restaurant+My+Khe+Da+Nang' }
            ]
          },
          hotels: {
            low: [
              { name: 'Kosen Hostel Da Nang', stars: 2, desc: '해변 도보 10분 · 한국인 호스텔 인기 1위', priceRange: '약 1-2만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Kosen+Hostel+Da+Nang&dest_type=city' },
              { name: 'The Long Hostel Da Nang', stars: 2, desc: '도심 배낭여행자 추천 · 자전거 무료 대여', priceRange: '약 1.5-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=The+Long+Hostel+Da+Nang&dest_type=city' }
            ],
            mid: [
              { name: 'Brilliant Hotel', stars: 4, desc: '강변 위치, 뷔페 포함 · 가성비 최고', priceRange: '약 7-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Brilliant+Hotel+Da+Nang&dest_type=city' },
              { name: 'Hyatt Regency Da Nang', stars: 5, desc: '미케비치 바로 앞 · 스파·풀 포함', priceRange: '약 15-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hyatt+Regency+Da+Nang+Resort&dest_type=city' }
            ],
            high: [
              { name: 'Fusion Suites Da Nang Beach', stars: 5, desc: '올인클루시브 · 스파 무제한 포함', priceRange: '약 22-38만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Fusion+Suites+Da+Nang+Beach&dest_type=city' },
              { name: 'InterContinental Danang Sun Peninsula', stars: 5, desc: '절벽 위 최고급 리조트 · 아시아 Top10', priceRange: '약 55-90만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=InterContinental+Danang+Sun+Peninsula&dest_type=city' }
            ]
          },
          hotelTips: [
            'Agoda·Booking.com 가격 비교 필수 (최대 30% 차이)',
            '미케비치(My Khe) vs 안방비치(An Bang) 지역 선택 중요',
            '한국어 가능 직원 여부 예약 전 확인 권장',
            '체크인 시 동(VND) 현금 지불 시 할인 가능한 숙소 多'
          ],
          cheapFlights: [
            { label: '비엣젯항공 (직항)', desc: '4.5시간 직항 LCC · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dad/' },
            { label: '제주항공 (직항)', desc: '4.5시간 직항 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dad/' }
          ],
          flightTips: [
            '다낭 직항 LCC 다수 · 1-2개월 전 예약이 최적 타이밍',
            '비엣젯·제주·티웨이 비교 필수 · 최대 30% 차이 발생',
            '새벽 출발편이 오후 편 대비 평균 10-15% 저렴',
            '다낭은 비수기(5-10월) 항공권 특가 자주 등장'
          ]
        },
        {
          id: 'jeju', name: '제주도 (국내)', sub: '언제든 떠나는 힐링',
          score: 82, isTop: false, photo: '',
          airfare: '12만원', hotel: '35만원', hotelSub: '1박 평균 7만원',
          daily: '8만원', dailySub: '국내 물가 기준',
          alert: '-', news: '-', newsSub: '', disaster: '없음', disasterSub: '',
          temp: '12–18°C', tempSub: '봄 날씨 · 벚꽃 시즌',
          fx: '국내 물가 상승', fxSub: '환율 무관',
          baseAir: 8, baseHotel: 4, baseHotelLow: 1.5, baseHotelHigh: 32, minDays: 1, minBudget: 20,
          sights: {
            low: [
              { name: '섭지코지 유채꽃길', price: '무료', link: 'https://map.naver.com/v5/search/섭지코지' },
              { name: '함덕 서우봉 해변', price: '무료', link: 'https://map.naver.com/v5/search/함덕서우봉해변' },
              { name: '사려니 숲길 트레킹', price: '무료', link: 'https://map.naver.com/v5/search/사려니숲길' }
            ],
            mid: [
              { name: '성산 일출봉', price: '약 0.3만원', link: 'https://map.naver.com/v5/search/성산일출봉' },
              { name: '만장굴 용암 동굴', price: '약 0.4만원', link: 'https://map.naver.com/v5/search/만장굴' },
              { name: '천지연 폭포', price: '약 0.2만원', link: 'https://map.naver.com/v5/search/천지연폭포' }
            ],
            high: [
              { name: '성산 일출 헬기 투어', price: '약 15만원', link: 'https://map.naver.com/v5/search/제주헬기투어' },
              { name: '제주 요트 투어 & 스노클링', price: '약 8만원', link: 'https://map.naver.com/v5/search/제주요트투어' },
              { name: '우도 프라이빗 섬 투어', price: '약 5만원', link: 'https://map.naver.com/v5/search/우도투어' }
            ]
          },
          exps: {
            low: [
              { name: '올레길 트레킹', price: '무료', link: 'https://map.naver.com/v5/search/제주올레길' },
              { name: '제주 해변 스노클링', price: '무료', link: 'https://map.naver.com/v5/search/제주해변스노클링' },
              { name: '목장 카페 동물 체험', price: '약 1만원', link: 'https://map.naver.com/v5/search/제주+목장카페' }
            ],
            mid: [
              { name: '승마 체험', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=jeju+horse+riding' },
              { name: '제주 해녀 체험 & 해산물 시식', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Jeju-Island--South-Korea/experiences?query=haenyeo+diving' },
              { name: '제주 한라산 가이드 트레킹', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Jeju-Island--South-Korea/experiences?query=hallasan+hiking' }
            ],
            high: [
              { name: '프라이빗 요트 선셋 크루즈', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=jeju+yacht+cruise' },
              { name: '제주 골프 라운드', price: '약 15만원', link: 'https://map.naver.com/v5/search/제주골프장' },
              { name: '헬기 투어 + 프라이빗 다이닝', price: '약 25만원', link: 'https://www.airbnb.co.kr/s/Jeju-Island--South-Korea/experiences?query=helicopter+tour' }
            ]
          },
          food: {
            low: [
              { name: '올래국수', desc: '제주 고기국수 · 현지인이 즐겨 찾는 맛집', link: 'https://map.naver.com/v5/search/올래국수+제주시' },
              { name: '동문시장 야시장', desc: '다양한 저렴한 먹거리 · 흑돼지 꼬치 등', link: 'https://map.naver.com/v5/search/동문시장+제주' },
              { name: '제주 전통시장 국수 거리', desc: '저렴한 현지 고기국수 · 1만원 이하', link: 'https://map.naver.com/v5/search/제주국수거리' }
            ],
            mid: [
              { name: '돈사돈', desc: '제주 흑돼지 전문 · 한국인 후기 최고', link: 'https://map.naver.com/v5/search/돈사돈+제주' },
              { name: '올래국수', desc: '제주 고기국수 · 현지인이 즐겨 찾는 맛집', link: 'https://map.naver.com/v5/search/올래국수+제주시' },
              { name: '어부의 딸', desc: '해녀 직접 채취 해산물 · 신선도 최고', link: 'https://map.naver.com/v5/search/어부의딸+제주' }
            ],
            high: [
              { name: '본플레이스', desc: '제주 파인다이닝 · 제철 식재료 코스', link: 'https://map.naver.com/v5/search/본플레이스+제주' },
              { name: '제주 고급 흑돼지 코스', desc: '특수부위 코스요리 · 프리미엄 흑돼지', link: 'https://map.naver.com/v5/search/제주흑돼지코스요리' },
              { name: '더 포도 호텔 레스토랑', desc: '뷰 + 제철 식재료 파인다이닝', link: 'https://map.naver.com/v5/search/더포도호텔+제주' }
            ]
          },
          hotels: {
            low: [
              { name: '제주 호스텔 · 게스트하우스 (최저가)', stars: 2, desc: '도심 배낭여행자 게스트하우스 · 평점 상위 필터', priceRange: '약 1.5-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Jeju&nflt=class%3D0%3Bclass%3D1&order=bayesian_review_score' },
              { name: '에어비앤비 제주 게스트하우스', stars: 2, desc: '현지 호스트 · 감성 숙소 · 후기 다수', priceRange: '약 2-4만원/박', link: 'https://www.airbnb.co.kr/s/%EC%A0%9C%EC%A3%BC%EB%8F%84/homes?price_max=50000' }
            ],
            mid: [
              { name: '라마다 앙코르 제주 서귀포', stars: 4, desc: '서귀포 한라산 전망, 가성비 우수', priceRange: '약 12-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ramada+Encore+Jeju+Seogwipo&dest_type=city' },
              { name: '제주 신화월드 호텔', stars: 4, desc: '테마파크 포함 패키지 · 가족여행 추천', priceRange: '약 10-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Jeju+Shinhwa+World+Marriott&dest_type=city' }
            ],
            high: [
              { name: '그랜드 조선 제주', stars: 5, desc: '중문 해변 바로 앞, 한국인 호텔 픽 1위', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Grand+Josun+Jeju&dest_type=city' },
              { name: '롯데호텔 제주', stars: 5, desc: '중문 단지 최고급 · 스파·골프 포함', priceRange: '약 20-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Lotte+Hotel+Jeju&dest_type=city' }
            ]
          },
          hotelTips: [
            '여기어때·야놀자 앱 전용 특가 할인 자주 발생',
            '제주 서쪽(애월·한림) vs 동쪽(성산·우도) 동선 먼저 확정',
            '성수기(7-8월, 추석·설) 최소 2개월 전 예약 필수',
            '렌터카 포함 패키지가 개별 예약보다 평균 15% 저렴'
          ],
          cheapFlights: [
            { label: '제주항공·진에어 (김포↔제주)', desc: '1시간 국내선 · 왕복 8만원대', link: 'https://www.skyscanner.co.kr/transport/flights/gmp/cju/' },
            { label: '티웨이항공 (인천↔제주)', desc: '1시간 직항 · 왕복 8만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cju/' }
          ],
          flightTips: [
            '제주 항공편은 75일 전 예약이 통계적으로 최저가',
            '네이버 항공 특가 알림 설정 후 가격 하락 시 구매',
            '김포-제주가 인천 출발보다 평균 1-2만원 저렴',
            '비수기(11월, 1-2월) 편도 5만원 이하 자주 등장'
          ]
        },
        {
          id: 'taipei', name: '대만 · 타이베이', sub: '가성비 최우수',
          score: 95, isTop: false, photo: '',
          airfare: '25만원', hotel: '30만원', hotelSub: '1박 평균 6만원',
          daily: '5만원', dailySub: '음식·교통 저렴',
          alert: '-', news: '-', newsSub: '', disaster: '태풍', disasterSub: '6-11월 주의',
          temp: '20–26°C', tempSub: '따뜻하고 맑음', fx: 'TWD 안정적', fxSub: '변동 거의 없음',
          baseAir: 20, baseHotel: 5, baseHotelLow: 1, baseHotelHigh: 20, minDays: 2, minBudget: 35,
          sights: {
            low: [
              { name: '시먼딩 번화가 산책', price: '무료', link: 'https://maps.google.com/?q=Ximending+Taipei' },
              { name: '용산사 야경 감상', price: '무료', link: 'https://maps.google.com/?q=Longshan+Temple+Taipei' },
              { name: '중정기념당 외관', price: '무료', link: 'https://maps.google.com/?q=Chiang+Kai-shek+Memorial+Hall+Taipei' }
            ],
            mid: [
              { name: '타이베이 101 전망대', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=taipei+101+observatory' },
              { name: '고궁박물원', price: '약 0.9만원', link: 'https://maps.google.com/?q=National+Palace+Museum+Taipei' },
              { name: '예류 지질공원', price: '약 0.8만원', link: 'https://www.klook.com/ko/search/?query=yehliu+geopark+taiwan' }
            ],
            high: [
              { name: '타이베이 101 VIP 프라이빗 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=taipei+101+vip+tour' },
              { name: '타이루거 협곡 프라이빗 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=taroko+gorge+private+tour' },
              { name: '알리산 국립공원 럭셔리 일일 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=alishan+day+tour+taipei' }
            ]
          },
          exps: {
            low: [
              { name: '스린 야시장 먹거리', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=shilin+night+market+food+tour' },
              { name: '닝샤 야시장 체험', price: '약 1만원', link: 'https://maps.google.com/?q=Ningxia+Night+Market+Taipei' },
              { name: '망고빙수 & 누가 크래커', price: '약 0.5만원', link: 'https://maps.google.com/?q=Ice+Monster+Taipei' }
            ],
            mid: [
              { name: '지우펀 당일 투어 (현지 가이드)', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Taipei--Taiwan/experiences?query=jiufen+tour' },
              { name: '대만 전통 쿠킹 클래스', price: '약 4만원', link: 'https://www.airbnb.co.kr/s/Taipei--Taiwan/experiences?query=cooking+class' },
              { name: '스린 야시장 현지인 푸드 투어', price: '약 1만원', link: 'https://www.airbnb.co.kr/s/Taipei--Taiwan/experiences?query=shilin+night+market+food+tour' }
            ],
            high: [
              { name: '만다린 오리엔탈 스파 체험', price: '약 15만원', link: 'https://maps.google.com/?q=Mandarin+Oriental+Taipei+Spa' },
              { name: '대만 차 농장 프라이빗 투어', price: '약 10만원', link: 'https://www.airbnb.co.kr/s/Taipei--Taiwan/experiences?query=tea+farm+private+tour' },
              { name: '타이루거 협곡 프라이빗 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=taroko+gorge+private+tour+from+taipei' }
            ]
          },
          food: {
            low: [
              { name: '닝샤 야시장', desc: '현지인 추천 야시장 · 저렴하고 다양한 간식', link: 'https://maps.google.com/?q=Ningxia+Night+Market+Taipei' },
              { name: '푸항 더우장', desc: '1956년 창업 아침 명소 · 두유·쌀국수 저렴', link: 'https://maps.google.com/?q=Fuhang+Soy+Milk+Taipei' },
              { name: '스린 야시장 길거리 음식', desc: '대만 간식 총집합 · 1만원으로 배부르게', link: 'https://maps.google.com/?q=Shilin+Night+Market+Taipei' }
            ],
            mid: [
              { name: '딘타이펑 본점 (鼎泰豐)', desc: '세계 최고 샤오롱바오 · 예약 필수', link: 'https://maps.google.com/?q=Din+Tai+Fung+Xinyi+Taipei' },
              { name: '푸항 더우장 (阜杭豆漿)', desc: '1956년 창업 · 아침 두유·쌀국수 맛집', link: 'https://maps.google.com/?q=Fuhang+Soy+Milk+Taipei' },
              { name: '닝샤 야시장', desc: '현지인 추천 야시장 · 저렴하고 다양한 간식', link: 'https://maps.google.com/?q=Ningxia+Night+Market+Taipei' }
            ],
            high: [
              { name: 'RAW by André Chiang', desc: '미슐랭 1스타 · 대만 최고 모던 파인다이닝', link: 'https://maps.google.com/?q=RAW+Restaurant+Taipei' },
              { name: 'Le Palais 頤宮', desc: '미슐랭 3스타 · 타이베이 최고급 광둥 요리', link: 'https://maps.google.com/?q=Le+Palais+Taipei' },
              { name: '딘타이펑 플래그십 (VIP 셰프 테이블)', desc: '예약제 특별 코스 · 최고급 샤오롱바오', link: 'https://maps.google.com/?q=Din+Tai+Fung+Xinyi+Taipei' }
            ]
          },
          hotels: {
            low: [
              { name: 'Star Hostel Taipei Main Station', stars: 2, desc: '타이베이역 바로 앞 · 이동 최적 · 9점대 평점', priceRange: '약 1.5-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Star+Hostel+Taipei+Main+Station&dest_type=city' },
              { name: 'Meander Taipei Hostel', stars: 2, desc: '시먼딩 도보 5분 · 한국인 후기 최다', priceRange: '약 1-2만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Meander+Taipei+Hostel&dest_type=city' }
            ],
            mid: [
              { name: 'Caesar Park Hotel Taipei', stars: 4, desc: '시먼딩 도보 5분, 한국인 평점 우수', priceRange: '약 10-16만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Caesar+Park+Hotel+Taipei&dest_type=city' },
              { name: 'Just Sleep 정의점', stars: 3, desc: 'MRT 도보 1분, 가성비 베스트', priceRange: '약 6-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Just+Sleep+Zhengyi+Taipei&dest_type=city' }
            ],
            high: [
              { name: 'Mandarin Oriental Taipei', stars: 5, desc: '타이베이 최고급 · 스파·파인다이닝 포함', priceRange: '약 35-55만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Taipei&dest_type=city' },
              { name: 'Grand Hyatt Taipei', stars: 5, desc: '신이 쇼핑지구 중심 · 최고급 풀장', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Grand+Hyatt+Taipei&dest_type=city' }
            ]
          },
          hotelTips: [
            'MRT 노선 도보 5분 이내 숙소 선택이 이동 효율 최고',
            '다핑린(大坪林)·공관(公館) 지역은 시내 대비 20-30% 저렴',
            '한국어 리뷰 많은 Booking.com 필터링 적극 활용',
            '타이베이 패스(교통+관광 통합권) 호텔 로비에서 구매 가능'
          ],
          cheapFlights: [
            { label: '티웨이·진에어 (직항)', desc: '2.5시간 · 왕복 22만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/tpe/' },
            { label: '이스타항공 (직항)', desc: '2.5시간 직항 · 왕복 22만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/tpe/' }
          ],
          flightTips: [
            '타이베이 직항 LCC 경쟁 치열 · 얼리버드 30-45일 전 최저가',
            '타오위안(TPE) 입항 후 MRT 공항철도로 시내 40분 이동',
            '구정 전후 성수기에는 60일 이상 전 예약 강력 권장',
            '카카오페이·토스 결제 시 LCC 앱 추가 할인 적용 가능'
          ]
        },
        {
          id: 'osaka', name: '일본 · 오사카', sub: '미식과 쇼핑',
          score: 92, isTop: false, photo: '',
          airfare: '22만원', hotel: '45만원', hotelSub: '1박 평균 9만원',
          daily: '10만원', dailySub: '엔저 효과',
          alert: '-', news: '엔저 지속', newsSub: '', disaster: '없음', disasterSub: '',
          temp: '13–19°C', tempSub: '온화한 봄', fx: 'JPY 역대 최저', fxSub: '환전 추천',
          baseAir: 18, baseHotel: 8, baseHotelLow: 1.5, baseHotelHigh: 28, minDays: 2, minBudget: 38,
          sights: {
            low: [
              { name: '도톤보리 글리코상 야경', price: '무료', link: 'https://maps.google.com/?q=Dotonbori+Glico+Sign+Osaka' },
              { name: '신사이바시 스지 상가 산책', price: '무료', link: 'https://maps.google.com/?q=Shinsaibashi+Osaka' },
              { name: '오사카성 외관 공원 산책', price: '무료', link: 'https://maps.google.com/?q=Osaka+Castle+Park' }
            ],
            mid: [
              { name: '오사카성 관람', price: '약 0.8만원', link: 'https://maps.google.com/?q=Osaka+Castle+Japan' },
              { name: '아베노 하루카스 전망대', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=abeno+harukas+osaka' },
              { name: '유니버설 스튜디오', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=universal+studios+japan' }
            ],
            high: [
              { name: 'USJ 익스프레스 VIP 패스', price: '약 25만원', link: 'https://www.klook.com/ko/search/?query=universal+studios+japan+express+pass' },
              { name: '교토·나라 프라이빗 당일 투어', price: '약 20만원', link: 'https://www.airbnb.co.kr/s/Kyoto--Japan/experiences?query=kyoto+nara+private+tour' },
              { name: '오사카 미슐랭 스시 오마카세', price: '약 20만원', link: 'https://www.airbnb.co.kr/s/Osaka--Japan/experiences?query=michelin+sushi+omakase' }
            ]
          },
          exps: {
            low: [
              { name: '도톤보리 야경 산책', price: '무료', link: 'https://maps.google.com/?q=Dotonbori+Osaka' },
              { name: '덴덴타운 구경 (아키하바라급)', price: '무료', link: 'https://maps.google.com/?q=Den+Den+Town+Osaka' },
              { name: '구로몬 이치바 시장 구경', price: '무료', link: 'https://maps.google.com/?q=Kuromon+Ichiba+Market+Osaka' }
            ],
            mid: [
              { name: '오코노미야키 쿠킹 클래스 (현지 주부)', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Osaka--Japan/experiences?query=okonomiyaki+cooking+class' },
              { name: '우메다 스카이 빌딩 전망대', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=umeda+sky+building+osaka' },
              { name: '현지인과 함께하는 도톤보리 식도락 투어', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Osaka--Japan/experiences?query=dotonbori+food+tour' }
            ],
            high: [
              { name: '전통 다도 체험 (프라이빗)', price: '약 8만원', link: 'https://www.airbnb.co.kr/s/Osaka--Japan/experiences?query=tea+ceremony' },
              { name: '교토 기온 프라이빗 투어', price: '약 15만원', link: 'https://www.airbnb.co.kr/s/Kyoto--Japan/experiences?query=gion+private+tour' },
              { name: '오사카 미슐랭 현지 가이드 식도락 투어', price: '약 10만원', link: 'https://www.airbnb.co.kr/s/Osaka--Japan/experiences?query=michelin+food+tour' }
            ]
          },
          food: {
            low: [
              { name: '이치란 라멘 도톤보리점', desc: '혼밥 전용 칸막이 · 진한 돈코츠 1천엔', link: 'https://maps.google.com/?q=Ichiran+Ramen+Dotonbori+Osaka' },
              { name: '타코야키 포장마차 (야타이)', desc: '원조 타코야키 8개 400엔 · 길거리 소울푸드', link: 'https://maps.google.com/?q=Takoyaki+Dotonbori+Osaka' },
              { name: '도톤보리 길거리 음식', desc: '크레페·타코야키·꼬치 · 모두 500엔 이하', link: 'https://maps.google.com/?q=Dotonbori+Street+Food+Osaka' }
            ],
            mid: [
              { name: '이치란 라멘 도톤보리점', desc: '혼밥 전용 칸막이 · 진한 돈코츠 라멘', link: 'https://maps.google.com/?q=Ichiran+Ramen+Dotonbori+Osaka' },
              { name: '쿠로몬 이치바 시장', desc: '오사카 부엌 · 신선한 해산물 시식', link: 'https://maps.google.com/?q=Kuromon+Ichiba+Market+Osaka' },
              { name: '와나카 타코야키', desc: '오사카 원조 타코야키 명소', link: 'https://maps.google.com/?q=Wanaka+Takoyaki+Osaka' }
            ],
            high: [
              { name: '카이세키 오마카세', desc: '미슐랭 가이드 · 전통 일본 코스 요리', link: 'https://maps.google.com/?q=Kaiseki+Osaka+Michelin' },
              { name: '스시 오마카세 (최고급)', desc: '최고급 에도마에 스시 · 예약 필수', link: 'https://maps.google.com/?q=Omakase+Sushi+Osaka+Michelin' },
              { name: '스테이크 야키니쿠 (와규)', desc: '오사카 최고급 와규 · A5 등급 풀코스', link: 'https://maps.google.com/?q=Wagyu+Yakiniku+Osaka' }
            ]
          },
          hotels: {
            low: [
              { name: 'Osaka Guesthouse Chill', stars: 2, desc: '난바 도보 10분 · 9점대 평점 · 한국인 다수', priceRange: '약 1.5-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Osaka+Guesthouse+Chill&dest_type=city' },
              { name: 'First Cabin Midosuji Namba', stars: 2, desc: '프리미엄 캡슐호텔 · 난바역 직결', priceRange: '약 1.5-2만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=First+Cabin+Midosuji+Namba&dest_type=city' }
            ],
            mid: [
              { name: '크로스 호텔 오사카', stars: 4, desc: '신사이바시 인근, 한국인 인기 1위', priceRange: '약 10-16만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Cross+Hotel+Osaka&dest_type=city' },
              { name: '도미 인 프리미엄 난바', stars: 3, desc: '난바 중심, 온천 대욕장 포함', priceRange: '약 8-13만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Dormy+Inn+Premium+Namba+Osaka&dest_type=city' }
            ],
            high: [
              { name: 'Conrad Osaka', stars: 5, desc: '우메다 최고급 타워 호텔 · 시내 전망', priceRange: '약 30-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Conrad+Osaka&dest_type=city' },
              { name: 'St. Regis Osaka', stars: 5, desc: '혼마치 최고급 · 클럽 라운지 포함', priceRange: '약 35-60만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=St+Regis+Osaka&dest_type=city' }
            ]
          },
          hotelTips: [
            '난바(難波)·신사이바시 지역이 관광·맛집 동선 최적',
            '엔저 지속 중 · 현금 결제 시 일부 숙소 5% 추가 할인',
            '여행 2-3개월 전 얼리버드 요금으로 최대 40% 절약 가능',
            '도미인 체인은 온천 포함 가성비 최고 · 한국인 선호 높음'
          ],
          cheapFlights: [
            { label: '제주항공·진에어 (직항)', desc: '2시간 · 왕복 22만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kix/' },
            { label: '피치항공 (LCC)', desc: '2시간 직항 · 왕복 22만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kix/' }
          ],
          flightTips: [
            '엔저로 숙박·현지 비용 절약 · 항공도 LCC 경쟁 치열',
            '피치항공 앱 직접 예약 시 최저가 나오는 경우 많음',
            '오사카+교토+나라 권역 묶음 여행 시 JR패스 고려',
            '출발 45-60일 전 화요일 오전 검색 시 최저가 빈도 높음'
          ]
        },
        {
          id: 'tokyo', name: '일본 · 도쿄', sub: '엔저 시대 미식·쇼핑',
          score: 90, isTop: false, photo: '',
          airfare: '25만원', hotel: '70만원', hotelSub: '1박 평균 14만원',
          daily: '8만원', dailySub: '엔저로 체감 물가 낮음',
          alert: '-', news: '엔저 지속', newsSub: '물가 절감', disaster: '없음', disasterSub: '',
          temp: '12–20°C', tempSub: '봄꽃 시즌 · 쾌적', fx: 'JPY 역대 약세', fxSub: '환전 최적기',
          baseAir: 20, baseHotel: 10, baseHotelLow: 2, baseHotelHigh: 40, minDays: 3, minBudget: 60,
          sights: {
            low: [
              { name: '시부야 스크램블 교차로', price: '무료', link: 'https://maps.google.com/?q=Shibuya+Scramble+Crossing+Tokyo' },
              { name: '아사쿠사 센소지 사원', price: '무료', link: 'https://maps.google.com/?q=Senso-ji+Asakusa+Tokyo' },
              { name: '우에노 공원 산책', price: '무료', link: 'https://maps.google.com/?q=Ueno+Park+Tokyo' }
            ],
            mid: [
              { name: '도쿄 스카이트리 전망대', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=tokyo+skytree+observation' },
              { name: '팀랩 보더리스', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=teamlab+borderless+tokyo' },
              { name: '하코네 당일 투어', price: '약 5만원', link: 'https://www.getyourguide.com/s/?q=hakone+day+trip+tokyo' }
            ],
            high: [
              { name: '도쿄 헬리콥터 야간 시티 투어', price: '약 30만원', link: 'https://www.getyourguide.com/s/?q=tokyo+helicopter+night+tour' },
              { name: '닛코 프라이빗 당일 투어', price: '약 20만원', link: 'https://www.getyourguide.com/s/?q=nikko+private+tour+from+tokyo' },
              { name: '후지산 프라이빗 투어', price: '약 25만원', link: 'https://www.getyourguide.com/s/?q=mount+fuji+private+tour+tokyo' }
            ]
          },
          exps: {
            low: [
              { name: '하라주쿠 다케시타 거리 탐방', price: '무료', link: 'https://maps.google.com/?q=Takeshita+Street+Harajuku+Tokyo' },
              { name: '아키하바라 전자상가 구경', price: '무료', link: 'https://maps.google.com/?q=Akihabara+Electric+Town+Tokyo' },
              { name: '시모기타자와 빈티지 마켓', price: '무료', link: 'https://maps.google.com/?q=Shimokitazawa+Tokyo' }
            ],
            mid: [
              { name: '스시 장인 쿠킹 클래스', price: '약 5만원', link: 'https://www.airbnb.co.kr/s/Tokyo--Japan/experiences?query=sushi+cooking+class' },
              { name: '쓰키지 새벽 시장 투어', price: '약 3만원', link: 'https://www.getyourguide.com/s/?q=tsukiji+market+tour+tokyo' },
              { name: '닌자 체험 투어', price: '약 4만원', link: 'https://www.airbnb.co.kr/s/Tokyo--Japan/experiences?query=ninja+experience' }
            ],
            high: [
              { name: '도쿄 미슐랭 오마카세 디너', price: '약 20만원', link: 'https://www.airbnb.co.kr/s/Tokyo--Japan/experiences?query=michelin+omakase+dinner' },
              { name: '기모노 착용 아사쿠사 프라이빗 투어', price: '약 8만원', link: 'https://www.getyourguide.com/s/?q=kimono+asakusa+private+tour+tokyo' },
              { name: '도쿄 베이 선셋 디너 크루즈', price: '약 15만원', link: 'https://www.getyourguide.com/s/?q=tokyo+bay+dinner+cruise' }
            ]
          },
          food: {
            low: [
              { name: '이치란 라멘 (신주쿠)', desc: '혼밥 칸막이 라멘 · 1천엔대 · 24시간', link: 'https://maps.google.com/?q=Ichiran+Ramen+Shinjuku+Tokyo' },
              { name: '요시노야 규동', desc: '규동 원조 · 500엔부터 · 전국 체인', link: 'https://maps.google.com/?q=Yoshinoya+Tokyo' },
              { name: '아메요코 야시장', desc: '우에노 재래시장 · 신선 해산물 저렴', link: 'https://maps.google.com/?q=Ameyoko+Market+Tokyo' }
            ],
            mid: [
              { name: '쓰키지 장외 시장', desc: '참치 덮밥·스시 · 신선도 최상', link: 'https://maps.google.com/?q=Tsukiji+Outer+Market+Tokyo' },
              { name: '오모이데 요코초 (신주쿠)', desc: '추억의 골목 · 야키토리·이자카야', link: 'https://maps.google.com/?q=Omoide+Yokocho+Shinjuku+Tokyo' },
              { name: '덴푸라 텐동 (아사쿠사)', desc: '에도 전통 텐동 · 2천엔대', link: 'https://maps.google.com/?q=Tempura+Daikokuya+Asakusa+Tokyo' }
            ],
            high: [
              { name: '스키야바시 지로 (오노 지로)', desc: '세계 최고 스시 오마카세 · 예약 수개월 대기', link: 'https://maps.google.com/?q=Sukiyabashi+Jiro+Tokyo' },
              { name: '류긴 (미슐랭 3스타)', desc: '일본 최고급 카이세키 · 2만엔~', link: 'https://maps.google.com/?q=Nihonryori+RyuGin+Tokyo' },
              { name: '만다린 오리엔탈 38층 레스토랑', desc: '도쿄 스카이라인 뷰 · 프랑스 파인 다이닝', link: 'https://maps.google.com/?q=Mandarin+Oriental+Tokyo+Restaurant' }
            ]
          },
          hotels: {
            low: [
              { name: 'Khaosan Tokyo Kabuki', stars: 2, desc: '아사쿠사 중심 · 최고 평점 호스텔', priceRange: '약 2-3만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Khaosan+Tokyo+Kabuki&dest_type=city' },
              { name: 'First Cabin Akihabara', stars: 2, desc: '프리미엄 캡슐호텔 · 아키하바라역 도보 2분', priceRange: '약 2-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=First+Cabin+Akihabara&dest_type=city' }
            ],
            mid: [
              { name: '도미 인 프리미엄 아사쿠사', stars: 3, desc: '아사쿠사 핵심 · 온천 대욕장 포함', priceRange: '약 10-16만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Dormy+Inn+Premium+Asakusa&dest_type=city' },
              { name: '호텔 메트로폴리탄 마루노우치', stars: 4, desc: '도쿄역 직결 · 이동 편의 최고', priceRange: '약 14-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Metropolitan+Tokyo+Marunouchi&dest_type=city' }
            ],
            high: [
              { name: 'Aman Tokyo', stars: 5, desc: '도쿄 최고급 · 오테마치 타워 33-38층', priceRange: '약 100-200만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Aman+Tokyo&dest_type=city' },
              { name: 'Mandarin Oriental Tokyo', stars: 5, desc: '마루노우치 최고급 · 미슐랭 레스토랑 다수', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Tokyo&dest_type=city' }
            ]
          },
          hotelTips: [
            '신주쿠·아사쿠사·도쿄역 주변이 교통·관광 최적 위치',
            '엔저 지속 중 · 현지 결제는 무조건 엔화(현금) 선택',
            '도미인 체인 온천 포함 가성비 최고 · 한국인 선호 압도적',
            '여행 60-90일 전 얼리버드 예약 시 최대 40% 절약'
          ],
          cheapFlights: [
            { label: '제주항공·진에어 (직항)', desc: '2.5시간 · 왕복 40만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/nrt/' },
            { label: '대한항공·아시아나 (직항)', desc: '2.5시간 직항 · 왕복 40만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hnd/' }
          ],
          flightTips: [
            'LCC 기준 왕복 15-25만원 특가 자주 발생 · 알림 설정 필수',
            '하네다는 도심 접근성 최고 · 나리타는 보통 더 저렴',
            '엔저로 항공 외 모든 비용 절감 · 지금이 최적 여행 시기',
            '스카이스캐너 알림 → 화요일 오전 최저가 자주 포착'
          ]
        },
        {
          id: 'bangkok', name: '태국 · 방콕', sub: '미식과 야시장의 도시',
          score: 83, isTop: false, photo: '',
          airfare: '40만원', hotel: '45만원', hotelSub: '1박 평균 9만원',
          daily: '4만원', dailySub: '바트화 안정 · 매우 저렴',
          alert: '여행유의', alertSub: '외교부 1단계', news: '관광 호황', newsSub: '항공 경쟁', disaster: '우기', disasterSub: '홍수 주의',
          temp: '32–36°C', tempSub: '덥고 건조한 건기', fx: 'THB 안정적', fxSub: '바트화 변동 낮음',
          baseAir: 35, baseHotel: 6, baseHotelLow: 1, baseHotelHigh: 25, minDays: 3, minBudget: 55,
          sights: {
            low: [
              { name: '카오산 로드 야경 산책', price: '무료', link: 'https://maps.google.com/?q=Khao+San+Road+Bangkok' },
              { name: '짜뚜짝 주말 시장', price: '무료', link: 'https://maps.google.com/?q=Chatuchak+Weekend+Market+Bangkok' },
              { name: '차이나타운 야오와랏 거리', price: '무료', link: 'https://maps.google.com/?q=Yaowarat+Chinatown+Bangkok' }
            ],
            mid: [
              { name: '왓 프라깨우 (에메랄드 사원)', price: '약 0.8만원', link: 'https://maps.google.com/?q=Wat+Phra+Kaew+Bangkok' },
              { name: '수상버스 짜오프라야강 투어', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=chao+phraya+river+cruise+bangkok' },
              { name: '아유타야 당일 투어', price: '약 3만원', link: 'https://www.getyourguide.com/s/?q=ayutthaya+day+trip+bangkok' }
            ],
            high: [
              { name: '방콕 야간 헬리콥터 투어', price: '약 30만원', link: 'https://www.getyourguide.com/s/?q=bangkok+helicopter+night+tour' },
              { name: '플로팅 마켓 프라이빗 보트 투어', price: '약 8만원', link: 'https://www.getyourguide.com/s/?q=floating+market+private+tour+bangkok' },
              { name: '만다린 오리엔탈 선셋 리버 크루즈', price: '약 15만원', link: 'https://www.getyourguide.com/s/?q=mandarin+oriental+bangkok+cruise' }
            ]
          },
          exps: {
            low: [
              { name: '야시장 음식 탐방', price: '약 0.5만원', link: 'https://maps.google.com/?q=Rot+Fai+Night+Market+Bangkok' },
              { name: '왓 아룬 (새벽 사원) 일출 감상', price: '약 0.3만원', link: 'https://maps.google.com/?q=Wat+Arun+Bangkok' },
              { name: '무에타이 현장 관람 (야외)', price: '무료', link: 'https://maps.google.com/?q=Lumpinee+Muay+Thai+Stadium+Bangkok' }
            ],
            mid: [
              { name: '타이 전통 요리 클래스', price: '약 4만원', link: 'https://www.airbnb.co.kr/s/Bangkok--Thailand/experiences?query=thai+cooking+class' },
              { name: '무에타이 경기 관람 (실내)', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=muay+thai+fight+bangkok' },
              { name: '방콕 야시장 야경 투어', price: '약 3만원', link: 'https://www.getyourguide.com/s/?q=bangkok+night+market+tour' }
            ],
            high: [
              { name: '만다린 오리엔탈 애프터눈 티', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=mandarin+oriental+bangkok+afternoon+tea' },
              { name: '럭셔리 타이 스파 데이 패키지', price: '약 12만원', link: 'https://www.getyourguide.com/s/?q=bangkok+luxury+spa+package' },
              { name: '짜오프라야강 프라이빗 요트 선셋', price: '약 20만원', link: 'https://www.getyourguide.com/s/?q=chao+phraya+private+yacht+sunset+bangkok' }
            ]
          },
          food: {
            low: [
              { name: '팟타이 (노점상)', desc: '방콕 소울푸드 · 50바트~ (약 0.2만원)', link: 'https://maps.google.com/?q=Pad+Thai+Street+Food+Bangkok' },
              { name: '야오와랏 중화 야시장', desc: '해산물·딤섬 저렴 · 현지인 최고 맛집', link: 'https://maps.google.com/?q=Yaowarat+Road+Night+Market+Bangkok' },
              { name: '아이콘 시암 푸드홀', desc: '수상시장 재현 · 에어컨 쾌적 · 야경 포함', link: 'https://maps.google.com/?q=ICONSIAM+Bangkok' }
            ],
            mid: [
              { name: '쏨탐 파파야 샐러드 전문점', desc: '태국 국민 음식 · 현지인 맛집', link: 'https://maps.google.com/?q=Som+Tam+Restaurant+Bangkok' },
              { name: '로트 파이 야시장 (Train Night Market)', desc: '빈티지 야시장 · 다양한 태국 음식', link: 'https://maps.google.com/?q=Train+Night+Market+Ratchada+Bangkok' },
              { name: '아이콘 시암 쑥시암 푸드홀', desc: '다양한 태국 요리 집합 · 강변 야경', link: 'https://maps.google.com/?q=ICONSIAM+Sooksiam+Bangkok' }
            ],
            high: [
              { name: '가간 아난드 (아시아 최고)', desc: '세계 50대 레스토랑 · 인도·타이 퓨전', link: 'https://maps.google.com/?q=Gaggan+Anand+Bangkok' },
              { name: 'Le Normandie (미슐랭 2스타)', desc: '만다린 오리엔탈 내 · 프랑스 파인 다이닝', link: 'https://maps.google.com/?q=Le+Normandie+Mandarin+Oriental+Bangkok' },
              { name: 'Nahm (미슐랭 1스타)', desc: '정통 타이 코스 요리 · 반도 호텔 내', link: 'https://maps.google.com/?q=Nahm+Bangkok' }
            ]
          },
          hotels: {
            low: [
              { name: 'Lub d Bangkok Siam', stars: 2, desc: '방콕 최고 평점 부티크 호스텔 · 수영장 포함', priceRange: '약 1.5-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Lub+d+Bangkok+Siam&dest_type=city' },
              { name: 'Bed Phrase Hostel Khaosan', stars: 2, desc: '카오산로드 도보 1분 · 루프탑 바 있음', priceRange: '약 1-2만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Bangkok+hostel+Khaosan&dest_type=city' }
            ],
            mid: [
              { name: 'Chatrium Hotel Riverside', stars: 4, desc: '짜오프라야강 뷰 · 수영장·스파 포함', priceRange: '약 7-12만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Chatrium+Hotel+Riverside+Bangkok&dest_type=city' },
              { name: 'Centara Grand CentralWorld', stars: 5, desc: '쇼핑몰 직결 · 방콕 도심 핵심', priceRange: '약 9-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Centara+Grand+CentralWorld+Bangkok&dest_type=city' }
            ],
            high: [
              { name: 'Mandarin Oriental Bangkok', stars: 5, desc: '아시아 최고 호텔 · 147년 역사', priceRange: '약 50-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Bangkok&dest_type=city' },
              { name: 'Capella Bangkok', stars: 5, desc: '강변 최고급 빌라형 · 무결점 서비스', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Capella+Bangkok&dest_type=city' }
            ]
          },
          hotelTips: [
            '수쿰빗·실롬·리버사이드 지역이 교통·관광 동선 최적',
            'BTS 스카이트레인 역 도보 5분 이내 숙소 선택 권장',
            '방콕 호텔은 수영장 포함 여부가 만족도 핵심 요소',
            '4성급 호텔도 한국 대비 50% 수준 · 고급 숙소 강력 추천'
          ],
          cheapFlights: [
            { label: '대한항공·아시아나 (직항)', desc: '5시간 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bkk/' },
            { label: '티웨이·진에어 (LCC 직항)', desc: '5시간 직항 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bkk/' }
          ],
          flightTips: [
            '직항 5시간 · LCC 경쟁 치열로 특가 자주 발생',
            '왕복 30-45만원대 특가 → 스카이스캐너 알림 필수',
            '수완나품·돈므앙 두 공항 취항 · 위치 반드시 확인',
            '출발 6-8주 전 화요일 검색 시 최저가 빈도 높음'
          ]
        },
        {
          id: 'bali', name: '인도네시아 · 발리', sub: '신들의 섬 · 힐링 리조트',
          score: 80, isTop: false, photo: '',
          airfare: '50만원', hotel: '50만원', hotelSub: '1박 평균 10만원',
          daily: '4만원', dailySub: '루피아 약세 · 초가성비',
          alert: '-', news: '관광 급증', newsSub: '비자 무료', disaster: '없음', disasterSub: '',
          temp: '28–32°C', tempSub: '열대 건기 · 맑고 쾌적', fx: 'IDR 약세', fxSub: '루피아 약세 · 여행 비용 절감',
          baseAir: 42, baseHotel: 7, baseHotelLow: 1.5, baseHotelHigh: 30, minDays: 4, minBudget: 70,
          sights: {
            low: [
              { name: '우붓 왕궁 (Puri Saren)', price: '무료', link: 'https://maps.google.com/?q=Ubud+Palace+Bali' },
              { name: '따나롯 사원 일몰 감상', price: '약 0.5만원', link: 'https://maps.google.com/?q=Tanah+Lot+Temple+Bali' },
              { name: '우붓 논 테라스 (Tegallalang)', price: '약 0.3만원', link: 'https://maps.google.com/?q=Tegallalang+Rice+Terrace+Bali' }
            ],
            mid: [
              { name: '케차크 댄스 공연 (울루와뚜)', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=kecak+dance+uluwatu+bali' },
              { name: '발리 스윙 (Bali Swing)', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=bali+swing+ubud' },
              { name: '캉구 서핑 레슨 (입문)', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=canggu+surfing+lesson+bali' }
            ],
            high: [
              { name: '발리 화산 선라이즈 하이킹 + 온천', price: '약 8만원', link: 'https://www.getyourguide.com/s/?q=mount+batur+sunrise+hike+bali' },
              { name: '프라이빗 빌라 스파 데이 패키지', price: '약 15만원', link: 'https://www.getyourguide.com/s/?q=bali+luxury+villa+spa' },
              { name: '발리 프라이빗 요트 선셋 크루즈', price: '약 20만원', link: 'https://www.getyourguide.com/s/?q=bali+private+yacht+sunset+cruise' }
            ]
          },
          exps: {
            low: [
              { name: '우붓 야시장 (Ubud Night Market)', price: '약 0.5만원', link: 'https://maps.google.com/?q=Ubud+Night+Market+Bali' },
              { name: '요가 수업 (우붓 스튜디오)', price: '약 1만원', link: 'https://www.airbnb.co.kr/s/Ubud--Bali--Indonesia/experiences?query=yoga+class' },
              { name: '발리 커피 농장 투어 (루왁)', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=bali+coffee+plantation+tour' }
            ],
            mid: [
              { name: '발리 전통 쿠킹 클래스', price: '약 4만원', link: 'https://www.airbnb.co.kr/s/Ubud--Bali--Indonesia/experiences?query=balinese+cooking+class' },
              { name: '화이트워터 래프팅 (아융강)', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=bali+river+rafting+ayung' },
              { name: '우붓 자전거 투어', price: '약 3만원', link: 'https://www.getyourguide.com/s/?q=ubud+cycling+tour+bali' }
            ],
            high: [
              { name: 'Como Shambhala 스파 리트리트', price: '약 25만원', link: 'https://www.getyourguide.com/s/?q=bali+luxury+spa+retreat' },
              { name: '발리 스쿠버 다이빙 (에메랄드 바다)', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=bali+scuba+diving' },
              { name: '발리 헬리콥터 투어', price: '약 35만원', link: 'https://www.getyourguide.com/s/?q=bali+helicopter+tour' }
            ]
          },
          food: {
            low: [
              { name: '나시고렝 (노점상)', desc: '발리 국민 볶음밥 · 1만 루피아~ (약 0.09만원)', link: 'https://maps.google.com/?q=Nasi+Goreng+Ubud+Bali' },
              { name: '우붓 야시장 음식 탐방', desc: '사테·미고렝·과일 주스 저렴', link: 'https://maps.google.com/?q=Ubud+Night+Market+Bali' },
              { name: '와룽 (Warung) 현지 식당', desc: '현지인 밥집 · 2-3만원으로 배불리', link: 'https://maps.google.com/?q=Warung+Local+Food+Bali' }
            ],
            mid: [
              { name: '모카이 레스토랑 (우붓)', desc: '유기농 발리 요리 · 논밭 전망', link: 'https://maps.google.com/?q=Moksa+Restaurant+Ubud+Bali' },
              { name: '스미냑 키친 (Seminyak)', desc: '인스타 핫플 · 아보카도 토스트·브런치', link: 'https://maps.google.com/?q=Seminyak+Kitchen+Bali' },
              { name: '사바 비치 클럽', desc: '해변 뷰 · 해산물·발리 요리 인기', link: 'https://maps.google.com/?q=Sarong+Restaurant+Seminyak+Bali' }
            ],
            high: [
              { name: 'Locavore (세계 50대 레스토랑)', desc: '인도네시아 식재료 파인 다이닝 · 예약 필수', link: 'https://maps.google.com/?q=Locavore+Restaurant+Ubud+Bali' },
              { name: 'Merah Putih (스미냑)', desc: '인도네시아 전통 고급 요리 · 건물이 예술', link: 'https://maps.google.com/?q=Merah+Putih+Restaurant+Seminyak+Bali' },
              { name: 'Métis Restaurant', desc: '스미냑 최고급 프랑스·아시안 퓨전', link: 'https://maps.google.com/?q=Metis+Restaurant+Seminyak+Bali' }
            ]
          },
          hotels: {
            low: [
              { name: '우붓 게스트하우스 (논밭 전망)', stars: 2, desc: '우붓 게스트하우스 · 논밭 전망·아침 포함', priceRange: '약 2-4만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ubud+guesthouse+Bali&dest_type=city' },
              { name: '스미냑 부티크 게스트하우스', stars: 2, desc: '수영장 포함 · 해변 도보 10분', priceRange: '약 2-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Seminyak+guesthouse+Bali&dest_type=city' }
            ],
            mid: [
              { name: 'Alaya Resort Ubud', stars: 4, desc: '우붓 중심 · 인피니티풀·논밭 전망', priceRange: '약 9-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Alaya+Resort+Ubud+Bali&dest_type=city' },
              { name: 'W Bali Seminyak', stars: 5, desc: '스미냑 해변 인접 · 트렌디한 인피니티풀', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=W+Bali+Seminyak&dest_type=city' }
            ],
            high: [
              { name: 'Four Seasons Bali Sayan', stars: 5, desc: '우붓 정글 속 최고급 · 빌라 인피니티풀', priceRange: '약 70-150만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Bali+Sayan&dest_type=city' },
              { name: 'COMO Uma Ubud', stars: 5, desc: '세계 최고 스파 리조트 · 명상·요가 포함', priceRange: '약 50-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=COMO+Uma+Ubud+Bali&dest_type=city' }
            ]
          },
          hotelTips: [
            '우붓(자연·힐링)과 스미냑/캉구(해변·나이트라이프)는 완전히 다른 분위기',
            '연인 여행 시 프라이빗 풀빌라 · 한국 대비 50% 수준',
            '발리 리조트는 인피니티풀 여부가 만족도 핵심 요소',
            '우붓 숙소는 계곡 전망·논밭 전망 차이 예약 전 확인 필수'
          ],
          cheapFlights: [
            { label: '에어아시아·스쿠트 (경유)', desc: '7시간 · 왕복 45만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dps/' },
            { label: '가루다·싱가포르항공 (경유)', desc: '약 10시간 · 왕복 45만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dps/' }
          ],
          flightTips: [
            '직항 없음 · 싱가포르·KL·자카르타 경유 8-11시간',
            '에어아시아 경유편 왕복 40-55만원대 자주 발생',
            '싱가포르 스탑오버 시 창이공항 무료 투어 활용 가능',
            '발리 고시즌(7-8월, 12월)은 최소 3개월 전 예약 필수'
          ]
        },
        {
          id: 'chiangmai', name: '태국 · 치앙마이', sub: '코끼리·자연·북태국 문화',
          score: 75, isTop: false, photo: '',
          airfare: '45만원', hotel: '30만원', hotelSub: '1박 평균 6만원',
          daily: '3만원', dailySub: '북태국 물가 매우 저렴',
          alert: '-', news: '스모그 주의', newsSub: '연기 시즌', disaster: '없음', disasterSub: '',
          temp: '28–35°C', tempSub: '방콕보다 선선 · 건기 쾌적', fx: 'THB 안정적', fxSub: '바트화 변동 낮음',
          baseAir: 38, baseHotel: 4, baseHotelLow: 0.8, baseHotelHigh: 20, minDays: 3, minBudget: 55,
          sights: {
            low: [
              { name: '선데이 나이트 바자르 산책', price: '무료', link: 'https://maps.google.com/?q=Sunday+Walking+Street+Chiang+Mai' },
              { name: '님만 헤민 힙스터 거리', price: '무료', link: 'https://maps.google.com/?q=Nimman+Road+Chiang+Mai' },
              { name: '왓 치앙만 사원', price: '무료', link: 'https://maps.google.com/?q=Wat+Chiang+Man+Chiang+Mai' }
            ],
            mid: [
              { name: '도이 수텝 사원', price: '약 0.5만원', link: 'https://maps.google.com/?q=Doi+Suthep+Temple+Chiang+Mai' },
              { name: '코끼리 보호 공원 방문', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=elephant+sanctuary+chiang+mai' },
              { name: '치앙마이 구시가 사원 투어', price: '약 1만원', link: 'https://www.getyourguide.com/s/?q=chiang+mai+old+city+temple+tour' }
            ],
            high: [
              { name: '코끼리 하루 케어 프로그램', price: '약 8만원', link: 'https://www.getyourguide.com/s/?q=elephant+care+chiang+mai+full+day' },
              { name: '치앙라이 + 골든 트라이앵글 투어', price: '약 6만원', link: 'https://www.getyourguide.com/s/?q=chiang+rai+golden+triangle+tour' },
              { name: '정글 트레킹 + 홈스테이', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=chiang+mai+jungle+trekking+homestay' }
            ]
          },
          exps: {
            low: [
              { name: '치앙마이 야시장 음식 탐방', price: '약 0.5만원', link: 'https://maps.google.com/?q=Chiang+Mai+Night+Bazaar' },
              { name: '타이 전통 마사지 (1시간)', price: '약 1만원', link: 'https://maps.google.com/?q=Traditional+Thai+Massage+Chiang+Mai' },
              { name: '왓 치디 루앙 저녁 산책', price: '무료', link: 'https://maps.google.com/?q=Wat+Chedi+Luang+Chiang+Mai' }
            ],
            mid: [
              { name: '타이 북부 요리 쿠킹 클래스', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Chiang-Mai--Thailand/experiences?query=northern+thai+cooking+class' },
              { name: '집라인 어드벤처 (플라잉 스쿼럴)', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=chiang+mai+zipline+flight+of+the+gibbon' },
              { name: '치앙마이 야경 카트 레이싱', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=chiang+mai+go+kart' }
            ],
            high: [
              { name: '코끼리 케어 + 타이 쿠킹 콤보', price: '약 12만원', link: 'https://www.getyourguide.com/s/?q=elephant+care+cooking+class+chiang+mai' },
              { name: '럭셔리 웰니스 스파 리트리트', price: '약 15만원', link: 'https://www.getyourguide.com/s/?q=chiang+mai+luxury+spa+wellness' },
              { name: '치앙라이 프라이빗 1일 투어', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=chiang+rai+private+day+tour' }
            ]
          },
          food: {
            low: [
              { name: '카오소이 (Khao Soi)', desc: '치앙마이 대표 카레 국수 · 50바트 · 아침 최고', link: 'https://maps.google.com/?q=Khao+Soi+Restaurant+Chiang+Mai' },
              { name: '선데이 마켓 길거리 음식', desc: '구운 옥수수·망고 찹쌀밥 · 50바트 이하', link: 'https://maps.google.com/?q=Sunday+Night+Market+Chiang+Mai' },
              { name: '와룽 덮밥 (현지 식당)', desc: '로컬 밥집 · 60바트 · 고기 덮밥', link: 'https://maps.google.com/?q=Khao+Man+Gai+Chiang+Mai' }
            ],
            mid: [
              { name: '카오소이 라뫄이 (유명 맛집)', desc: '치앙마이 최고 카오소이 · 현지인 즐겨 찾는 곳', link: 'https://maps.google.com/?q=Khao+Soi+Lamduan+Faham+Chiang+Mai' },
              { name: '님만 헤민 카페 거리', desc: '스페셜티 커피·브런치 · 힙스터 밀집', link: 'https://maps.google.com/?q=Nimmanhaemin+Cafe+Chiang+Mai' },
              { name: '치앙마이 나이트 바자르', desc: '북부 타이 음식 총집합 · 로컬 분위기', link: 'https://maps.google.com/?q=Chiang+Mai+Night+Bazaar' }
            ],
            high: [
              { name: 'The House by Ginger', desc: '구도시 중심 고급 타이 요리 · 콜로니얼 건물', link: 'https://maps.google.com/?q=The+House+By+Ginger+Chiang+Mai' },
              { name: 'Dash! Restaurant', desc: '현대적 치앙마이 요리 · 현지인 파인 다이닝 1위', link: 'https://maps.google.com/?q=Dash+Restaurant+Chiang+Mai' },
              { name: 'Rachamankha 레스토랑', desc: '구시가 최고급 코스 요리 · 정원 다이닝', link: 'https://maps.google.com/?q=Rachamankha+Restaurant+Chiang+Mai' }
            ]
          },
          hotels: {
            low: [
              { name: 'Deejai Backpacker', stars: 2, desc: '구시가 내 최고 평점 호스텔 · 자전거 무료', priceRange: '약 1-1.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Deejai+Backpacker+Chiang+Mai&dest_type=city' },
              { name: '구시가 부티크 게스트하우스', stars: 2, desc: '인테리어 예쁜 게스트하우스 · 구시가 도보권', priceRange: '약 1.5-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=chiangmai+guest+house+old+city&dest_type=city' }
            ],
            mid: [
              { name: 'Tamarind Village', stars: 4, desc: '구시가 란나 스타일 부티크 · 대나무 수영장', priceRange: '약 8-14만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Tamarind+Village+Chiang+Mai&dest_type=city' },
              { name: '137 Pillars House', stars: 5, desc: '님만 최고급 부티크 · 콜로니얼 빌라 스타일', priceRange: '약 20-30만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=137+Pillars+House+Chiang+Mai&dest_type=city' }
            ],
            high: [
              { name: 'Four Seasons Chiang Mai', stars: 5, desc: '논밭 전망 최고급 · 메이림 계곡 리조트', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Chiang+Mai&dest_type=city' },
              { name: 'Dhara Dhevi', stars: 5, desc: '란나 왕국 재현 · 세계 Top 10 리조트', priceRange: '약 80-150만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Dhara+Dhevi+Chiang+Mai&dest_type=city' }
            ]
          },
          hotelTips: [
            '구시가(올드시티) 내부 숙소가 사원 투어 동선 최적',
            '님만헤민 지역은 카페·레스토랑 밀집 · 젊은 층 선호',
            '4-5성 리조트도 방콕 대비 30-40% 저렴 · 고급 숙소 강력 추천',
            '코끼리 투어 예정이면 메이림 지역 숙소 고려'
          ],
          cheapFlights: [
            { label: '대한항공·아시아나 (방콕 경유)', desc: '약 9시간 · 왕복 40만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cnx/' },
            { label: '에어아시아 (KL 경유)', desc: '약 10시간 · 왕복 40만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cnx/' }
          ],
          flightTips: [
            '직항 없음 · 방콕 또는 KL 경유 7-9시간',
            '에어아시아 방콕-치앙마이 국내선 매우 저렴',
            '방콕+치앙마이 묶음 일정 · 방콕 인·치앙마이 아웃 추천',
            '치앙마이 단독 여행 시 방콕 레이오버 2일 추가 강추'
          ]
        },
        {
          id: 'singapore', name: '싱가포르', sub: '아시아 허브 · 미식 파라다이스',
          score: 65, isTop: false, photo: '',
          airfare: '55만원', hotel: '90만원', hotelSub: '1박 평균 18만원',
          daily: '10만원', dailySub: '호커센터 활용 시 식비 절감',
          alert: '-', news: '허브 성장', newsSub: '항공편 최다', disaster: '없음', disasterSub: '',
          temp: '28–33°C', tempSub: '연중 덥고 습함', fx: 'SGD 강세', fxSub: '싱가포르 달러 강세 유지',
          baseAir: 45, baseHotel: 14, baseHotelLow: 7, baseHotelHigh: 60, minDays: 3, minBudget: 120,
          sights: {
            low: [
              { name: '마리나베이 야경 (무료 뷰포인트)', price: '무료', link: 'https://maps.google.com/?q=Marina+Bay+Singapore+Viewpoint' },
              { name: '가든스 바이 더 베이 (외부)', price: '무료', link: 'https://maps.google.com/?q=Gardens+by+the+Bay+Singapore' },
              { name: '차이나타운·리틀 인디아 산책', price: '무료', link: 'https://maps.google.com/?q=Chinatown+Singapore' }
            ],
            mid: [
              { name: '가든스 바이 더 베이 (실내 온실)', price: '약 2.5만원', link: 'https://www.klook.com/ko/search/?query=gardens+by+the+bay+ticket' },
              { name: '마리나베이 샌즈 스카이파크', price: '약 2.5만원', link: 'https://www.klook.com/ko/search/?query=marina+bay+sands+skypark+singapore' },
              { name: '센토사 섬 유니버설 스튜디오', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=universal+studios+singapore' }
            ],
            high: [
              { name: 'MBS 인피니티풀 (투숙객)', price: '약 30만원(숙박)', link: 'https://www.booking.com/searchresults.ko.html?ss=Marina+Bay+Sands+Singapore' },
              { name: '싱가포르 F1 나이트 레이스 (시즌)', price: '약 20만원+', link: 'https://www.klook.com/ko/search/?query=singapore+f1+grand+prix+ticket' },
              { name: '센토사 프라이빗 요트 크루즈', price: '약 25만원', link: 'https://www.getyourguide.com/s/?q=singapore+private+yacht+cruise+sentosa' }
            ]
          },
          exps: {
            low: [
              { name: '맥스웰 호커 센터 탐방', price: '약 0.5만원', link: 'https://maps.google.com/?q=Maxwell+Food+Centre+Singapore' },
              { name: '부기스 스트리트 쇼핑', price: '무료', link: 'https://maps.google.com/?q=Bugis+Street+Singapore' },
              { name: '머라이언 공원 & 에스플러네이드 야경', price: '무료', link: 'https://maps.google.com/?q=Merlion+Park+Singapore' }
            ],
            mid: [
              { name: '싱가포르 음식 문화 투어 (호커 센터)', price: '약 5만원', link: 'https://www.airbnb.co.kr/s/Singapore/experiences?query=hawker+centre+food+tour' },
              { name: 'S.E.A. 아쿠아리움 + 어드벤처 코브', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=sea+aquarium+singapore' },
              { name: '리버 크루즈 + 클락 키 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=singapore+river+cruise' }
            ],
            high: [
              { name: '래플스 호텔 싱가포르 슬링 & 애프터눈 티', price: '약 12만원', link: 'https://www.getyourguide.com/s/?q=raffles+hotel+singapore+afternoon+tea' },
              { name: '주얼 창이 + VIP 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=jewel+changi+airport+singapore' },
              { name: '슈퍼트리 프라이빗 이벤트', price: '약 20만원', link: 'https://www.getyourguide.com/s/?q=gardens+by+the+bay+private+experience' }
            ]
          },
          food: {
            low: [
              { name: '맥스웰 호커 센터', desc: '로컬 하이난 치킨라이스 · 3-5SGD (약 0.3만원)', link: 'https://maps.google.com/?q=Maxwell+Food+Centre+Singapore' },
              { name: '라오파삿 (Lau Pa Sat) 야시장', desc: '사테·해산물·현지 분위기 최고', link: 'https://maps.google.com/?q=Lau+Pa+Sat+Singapore' },
              { name: '티옹 바루 마켓', desc: '현지인 브런치 성지 · 유명 주전부리 집합', link: 'https://maps.google.com/?q=Tiong+Bahru+Market+Singapore' }
            ],
            mid: [
              { name: '점보 시푸드 레스토랑', desc: '칠리크랩 원조 · 현지 최고 인기', link: 'https://maps.google.com/?q=Jumbo+Seafood+Clarke+Quay+Singapore' },
              { name: '뉴튼 호커 센터', desc: '야경 속 시푸드 · 가이드북 단골 맛집', link: 'https://maps.google.com/?q=Newton+Food+Centre+Singapore' },
              { name: '딘타이펑 (Din Tai Fung)', desc: '원조 딤섬 · 싱가포르점이 본점급 품질', link: 'https://maps.google.com/?q=Din+Tai+Fung+Singapore' }
            ],
            high: [
              { name: 'Odette (세계 1위 역대)', desc: '미슐랭 3스타 · 현대 프랑스 요리 최정상', link: 'https://maps.google.com/?q=Odette+Restaurant+Singapore' },
              { name: 'Burnt Ends (미슐랭 1스타)', desc: '장작 불 그릴 파인 다이닝 · 예약 수주 대기', link: 'https://maps.google.com/?q=Burnt+Ends+Singapore' },
              { name: '래플스 호텔 다이닝', desc: '역사적 건물 내 최고급 코스 요리', link: 'https://maps.google.com/?q=Raffles+Hotel+Restaurant+Singapore' }
            ]
          },
          hotels: {
            low: [
              { name: 'The Beary Best! Bugis', stars: 2, desc: '부기스 중심 · 싱가포르 최고 평점 호스텔', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Beary+Best+Bugis+Singapore&dest_type=city' },
              { name: 'Wink Hostel', stars: 2, desc: '클락 키 근처 · 캡슐형 디자인 호스텔', priceRange: '약 4-7만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Wink+Hostel+Singapore&dest_type=city' }
            ],
            mid: [
              { name: 'Swissotel The Stamford', stars: 5, desc: '시티홀역 직결 · 73층 전망 최고', priceRange: '약 20-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Swissotel+The+Stamford+Singapore&dest_type=city' },
              { name: 'Hotel Clover 769', stars: 3, desc: '오차드 로드 근처 · 쇼핑 최적 위치', priceRange: '약 14-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Clover+769+Singapore&dest_type=city' }
            ],
            high: [
              { name: 'Marina Bay Sands', stars: 5, desc: '인피니티풀·카지노·쇼핑몰 · 싱가포르 상징', priceRange: '약 45-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Marina+Bay+Sands+Singapore&dest_type=city' },
              { name: 'Capella Singapore (센토사)', stars: 5, desc: 'G7 정상회담 장소 · 세계 최고 럭셔리', priceRange: '약 70-150만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Capella+Singapore+Sentosa&dest_type=city' }
            ]
          },
          hotelTips: [
            '오차드·시티홀·마리나베이 지역이 관광·쇼핑 최적',
            '호커 센터 적극 활용 시 식비 70% 절약 가능',
            'MRT 에즈링크 카드 구입 → 교통비 현금 대비 50% 절약',
            '싱가포르는 호텔이 비쌈 · 고급 숙소도 1박 전략 추천'
          ],
          cheapFlights: [
            { label: '스쿠트·에어아시아 (직항 LCC)', desc: '6시간 · 왕복 45만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/sin/' },
            { label: '싱가포르항공 (직항)', desc: '6시간 · 왕복 32만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/sin/' }
          ],
          flightTips: [
            '직항 6시간 · 스쿠트 LCC 직항 왕복 45-60만원대 자주',
            '창이공항 주얼 환승 거점으로 경유도 추천 옵션',
            '60-90일 전 예약 시 LCC 최저가 확보 가능',
            '싱가포르 스탑오버 → 발리·방콕·세부 연계 이상적'
          ]
        },
        {
          id: 'cebu', name: '필리핀 · 세부', sub: '다이빙과 해변 낙원',
          score: 74, isTop: false, photo: '',
          airfare: '45만원', hotel: '40만원', hotelSub: '1박 평균 8만원',
          daily: '3.5만원', dailySub: '필리핀 물가 저렴',
          alert: '여행유의', alertSub: '외교부 1단계', news: '다이빙 성수기', newsSub: '건기 최적', disaster: '태풍', disasterSub: '시즌 주의',
          temp: '28–33°C', tempSub: '열대 건기 · 맑은 해변', fx: 'PHP 안정적', fxSub: '페소 안정적',
          baseAir: 38, baseHotel: 5, baseHotelLow: 1.5, baseHotelHigh: 22, minDays: 3, minBudget: 60,
          sights: {
            low: [
              { name: '마젤란 십자가 & 산토니뇨 성당', price: '무료', link: 'https://maps.google.com/?q=Magellan+Cross+Cebu' },
              { name: '막탄 섬 해변 산책 (공공 해변)', price: '무료', link: 'https://maps.google.com/?q=Magellan+Bay+Mactan+Cebu' },
              { name: 'IT 파크 야경 산책', price: '무료', link: 'https://maps.google.com/?q=IT+Park+Cebu+Philippines' }
            ],
            mid: [
              { name: '오슬롭 고래상어 스노클링', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=oslob+whale+shark+cebu' },
              { name: '막탄 섬 스노클링 호핑 투어', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=mactan+island+hopping+cebu' },
              { name: '카와산 폭포 캐냐닝 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=kawasan+falls+canyoneering+cebu' }
            ],
            high: [
              { name: '세부 스쿠버 다이빙 패키지 (3일)', price: '약 20만원', link: 'https://www.getyourguide.com/s/?q=cebu+scuba+diving+package' },
              { name: '프라이빗 요트 섬 호핑 투어', price: '약 15만원', link: 'https://www.getyourguide.com/s/?q=cebu+private+yacht+island+hopping' },
              { name: '세부 헬리콥터 섬 투어', price: '약 30만원', link: 'https://www.getyourguide.com/s/?q=cebu+helicopter+island+tour' }
            ]
          },
          exps: {
            low: [
              { name: '카보 시장 해산물 쇼핑', price: '약 0.5만원', link: 'https://maps.google.com/?q=Carbon+Market+Cebu' },
              { name: '세부 역사 도보 투어 (구시가)', price: '무료', link: 'https://maps.google.com/?q=Heritage+Walk+Cebu+City' },
              { name: '해변 일몰 감상 및 바 투어', price: '무료', link: 'https://maps.google.com/?q=Mactan+Beach+Sunset+Cebu' }
            ],
            mid: [
              { name: '필리핀 전통 요리 쿠킹 클래스', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Cebu--Philippines/experiences?query=filipino+cooking+class' },
              { name: '이슬라 마고 워터파크', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=isla+mago+water+park+cebu' },
              { name: 'OW 다이빙 체험 (입문)', price: '약 6만원', link: 'https://www.getyourguide.com/s/?q=cebu+open+water+diving+course' }
            ],
            high: [
              { name: '막탄 리조트 선셋 바비큐 디너', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=mactan+resort+sunset+dinner+cebu' },
              { name: '고래상어 + 사르가오 섬 연계 투어', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=cebu+whale+shark+siargao+tour' },
              { name: '세부 럭셔리 스파 + 해산물 디너', price: '약 12만원', link: 'https://www.getyourguide.com/s/?q=cebu+luxury+spa+seafood+dinner' }
            ]
          },
          food: {
            low: [
              { name: '레촌 (Lechon · 통돼지구이)', desc: '세부 명물 · 100페소~ (약 0.3만원)', link: 'https://maps.google.com/?q=Rico+Lechon+Cebu' },
              { name: 'Zubuchon 레촌 전문점', desc: '앤서니 부르댕 극찬 세계 최고 돼지', link: 'https://maps.google.com/?q=Zubuchon+Cebu' },
              { name: '카보 시장 해산물 볶음', desc: '킬로 단위 저렴 · 현지인 노점 최저가', link: 'https://maps.google.com/?q=Carbon+Market+Cebu' }
            ],
            mid: [
              { name: 'Zubuchon 세부 레촌 전문점', desc: '세부 최고 레촌 · 반드시 먹어야 할 1위', link: 'https://maps.google.com/?q=Zubuchon+Cebu' },
              { name: '막탄 비치 뷰 레스토랑', desc: '해변 뷰 · 해산물·필리핀 요리', link: 'https://maps.google.com/?q=Mactan+Beachfront+Restaurant+Cebu' },
              { name: '아얄라 센터 세부 푸드코트', desc: '다양한 로컬·패스트푸드 · 에어컨 쾌적', link: 'https://maps.google.com/?q=Ayala+Center+Cebu+Food' }
            ],
            high: [
              { name: 'Abacá Restaurant (막탄)', desc: '미슐랭 가이드 · 세부 최고급 파인 다이닝', link: 'https://maps.google.com/?q=Abaca+Restaurant+Mactan+Cebu' },
              { name: 'Mesa Filipino Restaurant', desc: '고급 필리핀 전통 요리 코스 · 세련된 분위기', link: 'https://maps.google.com/?q=Mesa+Filipino+Moderne+Cebu' },
              { name: '막탄 리조트 씨푸드 뷔페', desc: '해변 리조트 디너 뷔페 · 랍스터·구이 포함', link: 'https://maps.google.com/?q=Mactan+Resort+Seafood+Buffet+Cebu' }
            ]
          },
          hotels: {
            low: [
              { name: 'Z Hostel Cebu', stars: 2, desc: '루프탑 바 포함 · 세부시티 중심', priceRange: '약 1-2만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Z+Hostel+Cebu&dest_type=city' },
              { name: '세부 저가 부티크 호텔', stars: 2, desc: 'IT파크 근처 · 깔끔한 저가 호텔', priceRange: '약 1.5-2.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=budget+hotel+cebu+city&dest_type=city' }
            ],
            mid: [
              { name: 'Crimson Resort Mactan', stars: 5, desc: '막탄 해변 인피니티풀 · 한국인 선호 압도적', priceRange: '약 8-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Crimson+Resort+Mactan+Cebu&dest_type=city' },
              { name: 'Plantation Bay Resort', stars: 4, desc: '막탄 최대 인피니티풀 · 워터파크급 수영장', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Plantation+Bay+Resort+Cebu&dest_type=city' }
            ],
            high: [
              { name: 'Shangri-La Mactan', stars: 5, desc: '막탄 해변 최고급 · 프라이빗 비치 포함', priceRange: '약 25-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Shangri-La+Mactan+Cebu&dest_type=city' },
              { name: 'Nustar Resort Cebu', stars: 5, desc: '신축 최고급 · 카지노·해변 복합 리조트', priceRange: '약 20-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Nustar+Resort+Cebu&dest_type=city' }
            ]
          },
          hotelTips: [
            '세부시티(관광·맛집)와 막탄섬(해변·리조트)은 전혀 다른 경험',
            '한국인 대부분 막탄섬 리조트 선택 · 해변+수영장이 핵심',
            '크림슨 리조트: 가성비+프라이빗 비치 한국인 1위',
            '고래상어(오슬롭) 투어는 새벽 출발 필수 · 전날 남부 숙박 추천'
          ],
          cheapFlights: [
            { label: '제주항공·에어부산 (직항)', desc: '4시간 · 왕복 35만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ceb/' },
            { label: '대한항공 (직항)', desc: '4시간 · 왕복 40만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ceb/' }
          ],
          flightTips: [
            '직항 4시간 · LCC 왕복 40-55만원대 특가 정기 발생',
            '태풍 시즌(6-11월) 여행 취소 보험 필수',
            '세부→보라카이 국내선 연계 가능 (경유 여행 추천)',
            '막탄 공항은 세부시티에서 차로 30분 · 공항픽업 사전 예약 권장'
          ]
        },
        {
          id: 'nhatrang', name: '베트남 · 나트랑', sub: '맑은 바다와 초가성비 해변',
          score: 77, isTop: false, photo: '',
          airfare: '40만원', hotel: '35만원', hotelSub: '1박 평균 7만원',
          daily: '3만원', dailySub: '베트남 물가 매우 저렴',
          alert: '여행유의', alertSub: '외교부 1단계', news: '관광 급증', newsSub: '물가 상승세', disaster: '우기', disasterSub: '태풍 주의',
          temp: '27–33°C', tempSub: '맑은 건기 · 해변 최적', fx: 'VND 안정적', fxSub: '동화 약세 유지 · 가성비 UP',
          baseAir: 32, baseHotel: 4, baseHotelLow: 1, baseHotelHigh: 18, minDays: 3, minBudget: 45,
          sights: {
            low: [
              { name: '나트랑 해변 (Nha Trang Beach)', price: '무료', link: 'https://maps.google.com/?q=Nha+Trang+Beach+Vietnam' },
              { name: '포나가르 참 사원', price: '약 0.2만원', link: 'https://maps.google.com/?q=Po+Nagar+Cham+Towers+Nha+Trang' },
              { name: '롱선 사원 (와불 좌상)', price: '무료', link: 'https://maps.google.com/?q=Long+Son+Pagoda+Nha+Trang' }
            ],
            mid: [
              { name: '머드 스파 온천 (탑바)', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=nha+trang+mud+bath+hot+spring' },
              { name: '섬 호핑 투어 (4섬)', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=nha+trang+4+island+hopping' },
              { name: '빈펄 랜드 종일 이용권', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=vinpearl+land+nha+trang+ticket' }
            ],
            high: [
              { name: '나트랑 프라이빗 요트 선셋 크루즈', price: '약 12만원', link: 'https://www.getyourguide.com/s/?q=nha+trang+private+yacht+sunset' },
              { name: '스쿠버 다이빙 체험 (입문)', price: '약 6만원', link: 'https://www.getyourguide.com/s/?q=nha+trang+scuba+diving' },
              { name: '달랏 + 나트랑 연계 2박 투어', price: '약 15만원', link: 'https://www.getyourguide.com/s/?q=nha+trang+da+lat+tour' }
            ]
          },
          exps: {
            low: [
              { name: '나트랑 야시장 음식 탐방', price: '약 0.5만원', link: 'https://maps.google.com/?q=Nha+Trang+Night+Market' },
              { name: '해변 일몰 감상 및 바 투어', price: '무료', link: 'https://maps.google.com/?q=Nha+Trang+Beach+Sunset' },
              { name: '나트랑 전통 마사지 (1시간)', price: '약 1만원', link: 'https://maps.google.com/?q=Nha+Trang+Spa+Massage' }
            ],
            mid: [
              { name: '스노클링 + 해산물 BBQ 보트 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=nha+trang+snorkeling+tour' },
              { name: '나트랑 쿠킹 클래스', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Nha-Trang--Vietnam/experiences?query=cooking+class' },
              { name: '머드 스파 + 마사지 반나절', price: '약 2만원', link: 'https://maps.google.com/?q=Thap+Ba+Hot+Spring+Nha+Trang' }
            ],
            high: [
              { name: '빈펄 골프 클럽 1라운드', price: '약 15만원', link: 'https://www.getyourguide.com/s/?q=vinpearl+golf+nha+trang' },
              { name: '프라이빗 섬 스노클링 + 럭셔리 피크닉', price: '약 10만원', link: 'https://www.getyourguide.com/s/?q=nha+trang+private+island+snorkeling' },
              { name: '나트랑 럭셔리 스파 + 해산물 디너', price: '약 12만원', link: 'https://www.getyourguide.com/s/?q=nha+trang+luxury+spa+seafood+dinner' }
            ]
          },
          food: {
            low: [
              { name: '반쎄오 (Bánh Xèo)', desc: '베트남 부침개 · 2만동 (약 0.1만원)', link: 'https://maps.google.com/?q=Banh+Xeo+Nha+Trang' },
              { name: '분보후에 (Bún Bò Huế)', desc: '매콤 소고기 국수 · 3-4만동 · 아침 최고', link: 'https://maps.google.com/?q=Bun+Bo+Hue+Nha+Trang' },
              { name: '나트랑 야시장 해산물 꼬치', desc: '가재·새우·오징어 꼬치 · 10만동~', link: 'https://maps.google.com/?q=Nha+Trang+Night+Market+Seafood' }
            ],
            mid: [
              { name: 'Lanterns Restaurant', desc: '현지 베트남 요리 + 쿠킹 클래스 유명', link: 'https://maps.google.com/?q=Lanterns+Restaurant+Nha+Trang' },
              { name: 'Sailing Club Restaurant', desc: '비치프론트 · 선셋 뷰 해산물', link: 'https://maps.google.com/?q=Sailing+Club+Nha+Trang' },
              { name: '현지인 최고 씨푸드 (킬로 주문)', desc: '랍스터·게·새우 킬로 단위 저렴', link: 'https://maps.google.com/?q=Truc+Linh+Restaurant+Nha+Trang' }
            ],
            high: [
              { name: 'Ana Mandara Resort 레스토랑', desc: '나트랑 최고급 씨뷰 · 베트남 코스', link: 'https://maps.google.com/?q=Ana+Mandara+Resort+Restaurant+Nha+Trang' },
              { name: '루이지아나 브루하우스 (해변 뷰)', desc: '나트랑 최고 비치프론트 · 신선 랍스터', link: 'https://maps.google.com/?q=Louisiana+Brewhouse+Nha+Trang' },
              { name: '인터컨티넨탈 비치프론트 다이닝', desc: '씨뷰 최고급 코스 디너 · 베트남 파인 다이닝', link: 'https://maps.google.com/?q=InterContinental+Nha+Trang+Restaurant' }
            ]
          },
          hotels: {
            low: [
              { name: 'Mojzo Inn Boutique Hotel', stars: 3, desc: '나트랑 최고 평점 부티크 · 수영장·조식 포함', priceRange: '약 3-6만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mojzo+Inn+Nha+Trang&dest_type=city' },
              { name: '나트랑 호스텔 (해변 5분)', stars: 2, desc: '구시가 중심 · 해변 도보 5분 · 저가 호스텔', priceRange: '약 0.8-1.5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=backpacker+hostel+nha+trang+vietnam&dest_type=city' }
            ],
            mid: [
              { name: 'Novotel Nha Trang', stars: 4, desc: '비치프론트 · 나트랑 최고 위치 인피니티풀', priceRange: '약 8-14만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Novotel+Nha+Trang&dest_type=city' },
              { name: 'Mia Resort Nha Trang', stars: 5, desc: '프라이빗 비치 부티크 리조트 · 인기 급상승', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mia+Resort+Nha+Trang&dest_type=city' }
            ],
            high: [
              { name: 'InterContinental Nha Trang', stars: 5, desc: '나트랑 최고급 · 해변 직접 연결 인피니티풀', priceRange: '약 25-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=InterContinental+Nha+Trang&dest_type=city' },
              { name: 'Ana Mandara Resort', stars: 5, desc: '빈티지 콜로니얼 최고급 · 가든 빌라 해변', priceRange: '약 20-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ana+Mandara+Resort+Nha+Trang&dest_type=city' }
            ]
          },
          hotelTips: [
            '나트랑 해변 주변(쩐푸 거리) 숙소가 관광·맛집 동선 최적',
            '다낭 대비 조용하고 깨끗한 해변 · 물이 투명',
            '빈펄 리조트(섬 내)는 케이블카로만 이동 · 별도 예산 필요',
            '해변 직접 연결 리조트 vs 해변 도보 숙소 가격 차이 확인'
          ],
          cheapFlights: [
            { label: '베트남항공·뱀부항공 (직항)', desc: '4.5시간 · 왕복 35만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cxr/' },
            { label: '제주항공·진에어 (직항)', desc: '5시간 직항 · 왕복 35만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cxr/' }
          ],
          flightTips: [
            '직항 4.5시간 · 다낭보다 저렴한 경우 많음',
            '왕복 35-45만원대 특가 발생 빈도 높음',
            '나트랑+달랏 묶음 여행 추천 · 버스 3시간 거리',
            '우기(9-12월) 태풍 리스크 · 여행 취소보험 필수'
          ]
        },
      {
        id: 'fukuoka', name: '후쿠오카', sub: '일본 규슈 · 가장 가까운 일본', score: 88, isTop: true,
        photo: 'https://images.unsplash.com/photo-1576769562804-455f110e3c0d?w=800&q=80',
        airfare: '18만원~', hotel: '호텔 합리적', hotelSub: '3성급 5-8만원대', daily: '소비 적음', dailySub: '1일 5-8만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '엔저 지속', newsSub: '환율 유리', disaster: '없음', disasterSub: '',
        temp: '봄·가을 최적', tempSub: '3-5월 / 9-11월 여행 추천',
        fx: '엔화', fxSub: '엔저로 환율 유리 지속',
        baseAir: 18, baseHotel: 6, baseHotelLow: 5, baseHotelHigh: 12, minDays: 3, minBudget: 30,
        sights: {
          low: [
            { name: '오호리 공원', price: '무료', link: 'https://maps.google.com/?q=Ohori+Park+Fukuoka' },
            { name: '후쿠오카성 터', price: '무료', link: 'https://maps.google.com/?q=Fukuoka+Castle+Ruins' },
            { name: '텐진 지하상가', price: '무료', link: 'https://maps.google.com/?q=Tenjin+Underground+Shopping+Fukuoka' }
          ],
          mid: [
            { name: '모지코 레트로 거리', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=mojiko+retro+fukuoka' },
            { name: '다자이후 텐만구', price: '무료', link: 'https://maps.google.com/?q=Dazaifu+Tenmangu+Shrine' },
            { name: '야나가와 뱃놀이', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=yanagawa+boat+cruise+fukuoka' }
          ],
          high: [
            { name: '나가사키 당일치기 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=nagasaki+day+trip+fukuoka' },
            { name: '유후인 온천 1박 패키지', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=yufuin+onsen+hot+spring' },
            { name: '아소 화산 지대 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=aso+volcano+tour+fukuoka' }
          ]
        },
        exps: {
          low: [
            { name: '나카스 포장마차 라멘', price: '약 0.9만원', link: 'https://maps.google.com/?q=Nakasu+Yatai+Fukuoka' },
            { name: '하카타 전통시장 산책', price: '무료', link: 'https://maps.google.com/?q=Hakata+Market+Fukuoka' },
            { name: '모모치 해변 산책', price: '무료', link: 'https://maps.google.com/?q=Momochi+Beach+Fukuoka' }
          ],
          mid: [
            { name: '야나가와 뱃놀이 체험', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Fukuoka--Japan/experiences?query=yanagawa+boat+ride' },
            { name: '하카타 전통 공예 체험', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Fukuoka--Japan/experiences?query=hakata+traditional+craft' },
            { name: '규슈 오픈탑 버스 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=fukuoka+bus+tour' }
          ],
          high: [
            { name: '유후인 전용 료칸 1박', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=yufuin+ryokan' },
            { name: '벳푸 온천 체험 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=beppu+onsen+tour' },
            { name: '나가사키 크루즈 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=nagasaki+cruise' }
          ]
        },
        food: {
          low: [
            { name: '이치란 라멘 본점', desc: '하카타 라멘 원조 · 1그릇 900엔', link: 'https://maps.google.com/?q=Ichiran+Hakata+Fukuoka' },
            { name: '요시노야 규동', desc: '규동 체인 · 가성비 최강', link: 'https://maps.google.com/?q=Yoshinoya+Fukuoka' },
            { name: '나카스 포장마차', desc: '편의점 도시락·오니기리 · 현지 분위기', link: 'https://maps.google.com/?q=Nakasu+Yatai+Fukuoka' }
          ],
          mid: [
            { name: '하카타 모츠나베 정식', desc: '하카타 명물 곱창전골', link: 'https://maps.google.com/?q=Motsu+Nabe+Hakata+Fukuoka' },
            { name: '하카타 우동 타로', desc: '하카타 명물 우동', link: 'https://maps.google.com/?q=Hakata+Udon+Fukuoka' },
            { name: '텐진 이자카야', desc: '텐진 이자카야 코스', link: 'https://maps.google.com/?q=Tenjin+Izakaya+Fukuoka' }
          ],
          high: [
            { name: '가이세키 요리 료칸', desc: '미슐랭 카이세키 코스 요리', link: 'https://maps.google.com/?q=Kaiseki+Restaurant+Fukuoka' },
            { name: '유후인 료칸 조식', desc: '유후인 전통 일본식 조식', link: 'https://maps.google.com/?q=Yufuin+Ryokan+Breakfast' },
            { name: '하카타 고급 스시', desc: '오마카세 스시 코스', link: 'https://maps.google.com/?q=Omakase+Sushi+Fukuoka' }
          ]
        },
        hotels: {
          low: [
            { name: '하카타역 주변 비즈니스호텔', stars: 3, desc: '역 도보 5분 · 가성비 상위권', priceRange: '약 5-8만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hakata+Station+Fukuoka&dest_type=city' },
            { name: '텐진 캡슐호텔', stars: 2, desc: '텐진 중심 캡슐호텔 · 3천엔대', priceRange: '약 3-4만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Capsule+Hotel+Tenjin+Fukuoka&dest_type=city' }
          ],
          mid: [
            { name: '캐널시티 주변 3성급', stars: 3, desc: '쇼핑몰 도보 2분 · 관광 최적', priceRange: '약 8-12만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Canal+City+Hotel+Fukuoka&dest_type=city' },
            { name: '오호리 공원 인근 관광호텔', stars: 3, desc: '공원 전망 · 조식 포함 옵션', priceRange: '약 9-14만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ohori+Park+Hotel+Fukuoka&dest_type=city' }
          ],
          high: [
            { name: 'JR 규슈 호텔 블로썸 하카타', stars: 4, desc: '하카타역 도보 2분 · 최고급 시설', priceRange: '약 20-30만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=JR+Kyushu+Hotel+Blossom+Fukuoka&dest_type=city' },
            { name: '솔라리아 니시테츠 호텔', stars: 4, desc: '텐진 중심가 · 쇼핑 접근성 최고', priceRange: '약 18-28만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Solaria+Nishitetsu+Hotel+Fukuoka&dest_type=city' }
          ]
        },
        hotelTips: ['하카타역 도보 10분 내 추천', '텐진 지역이 쇼핑·식당 접근성 최고', '주말 숙박비 평일보다 30% 높음', '벳푸·유후인은 별도 숙박 필요'],
        cheapFlights: [
          { label: '제주항공·에어부산 (직항)', desc: '1.5시간 · 왕복 15만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/fuk/' },
          { label: '진에어·티웨이 (직항)', desc: '1.5시간 직항 · 왕복 15만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/fuk/' }
        ],
        flightTips: ['직항 1.5시간 · 일본 최단거리 도시', 'LCC 왕복 15-20만원 특가 자주 발생', '부산 출발 시 페리도 옵션 (3.5시간)', '후쿠오카+벳푸+유후인 3박4일 코스 인기']
      },
      {
        id: 'sapporo', name: '삿포로', sub: '일본 홋카이도 · 설경과 맥주의 도시', score: 82, isTop: false,
        photo: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80',
        airfare: '25만원~', hotel: '호텔 합리적', hotelSub: '3성급 6-10만원대', daily: '소비 적음', dailySub: '1일 6-9만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '엔저 지속', newsSub: '환율 유리', disaster: '폭설', disasterSub: '결빙 주의',
        temp: '겨울 설경', tempSub: '2월 눈축제 · 여름도 선선',
        fx: '엔화', fxSub: '엔저로 환율 유리 지속',
        baseAir: 25, baseHotel: 7, baseHotelLow: 6, baseHotelHigh: 15, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '오도리 공원', price: '무료', link: 'https://maps.google.com/?q=Odori+Park+Sapporo' },
            { name: '삿포로 시계탑', price: '무료', link: 'https://maps.google.com/?q=Sapporo+Clock+Tower' },
            { name: '홋카이도 대학 캠퍼스 산책', price: '무료', link: 'https://maps.google.com/?q=Hokkaido+University+Sapporo' }
          ],
          mid: [
            { name: '삿포로 맥주 박물관', price: '약 0.7만원', link: 'https://www.klook.com/ko/search/?query=sapporo+beer+museum' },
            { name: '모이와야마 전망대', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=mt+moiwa+sapporo' },
            { name: '오타루 운하 당일치기', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=otaru+canal+tour' }
          ],
          high: [
            { name: '니세코 스키 리조트', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=niseko+ski+resort' },
            { name: '후라노 라벤더 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=furano+lavender+tour' },
            { name: '아사히카와 동물원', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=asahiyama+zoo+hokkaido' }
          ]
        },
        exps: {
          low: [
            { name: '오도리 공원 눈축제 관람', price: '무료', link: 'https://maps.google.com/?q=Odori+Park+Snow+Festival+Sapporo' },
            { name: '스스키노 야시장 야경', price: '무료', link: 'https://maps.google.com/?q=Susukino+Sapporo' },
            { name: '홋카이도 대학 자전거 투어', price: '무료', link: 'https://www.airbnb.co.kr/s/Sapporo--Japan/experiences?query=hokkaido+university+cycling' }
          ],
          mid: [
            { name: '삿포로 눈 축제 체험', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=sapporo+snow+festival' },
            { name: '오타루 유리공예 체험', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Otaru--Japan/experiences?query=glass+craft+experience' },
            { name: '후라노 치즈·버터 체험', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=furano+cheese+butter+experience' }
          ],
          high: [
            { name: '니세코 스키·스노보드', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=niseko+ski+snowboard' },
            { name: '요이치 위스키 증류소 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=yoichi+whisky+distillery+hokkaido' },
            { name: '시레토코 국립공원 크루즈', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=shiretoko+national+park+cruise' }
          ]
        },
        food: {
          low: [
            { name: '삿포로 미소라멘', desc: '삿포로 라멘 원조 · 1그릇 1200엔', link: 'https://maps.google.com/?q=Sapporo+Ramen+Yokocho' },
            { name: '스스키노 편의점 홋카이도 우유', desc: '홋카이도 신선 우유 · 저렴한 간식', link: 'https://maps.google.com/?q=Susukino+Sapporo' },
            { name: '회전초밥 체인점', desc: '카이텐스시 · 1접시 110엔부터', link: 'https://maps.google.com/?q=Kaiten+Sushi+Sapporo' }
          ],
          mid: [
            { name: '게 요리 전문점 (카니)', desc: '홋카이도 대게 · 제철 해산물 풍성', link: 'https://maps.google.com/?q=Kani+Restaurant+Sapporo' },
            { name: '징기스칸 양고기 BBQ', desc: '삿포로 명물 양고기 구이', link: 'https://maps.google.com/?q=Jingisukan+Sheep+BBQ+Sapporo' },
            { name: '홋카이도 신선 해산물 정식', desc: '아침 시장 해산물 정식', link: 'https://maps.google.com/?q=Nijo+Market+Sapporo' }
          ],
          high: [
            { name: '스프 카레 고급 레스토랑', desc: '삿포로 명물 프리미엄 스프카레', link: 'https://maps.google.com/?q=Soup+Curry+Restaurant+Sapporo' },
            { name: '미슐랭 오마카세 스시', desc: '오마카세 스시 코스', link: 'https://maps.google.com/?q=Omakase+Sushi+Sapporo' },
            { name: '홋카이도 와규 스테이크', desc: '홋카이도 흑모와규 프리미엄', link: 'https://maps.google.com/?q=Wagyu+Steak+Sapporo' }
          ]
        },
        hotels: {
          low: [
            { name: '삿포로역 주변 비즈니스호텔', stars: 3, desc: '역 도보 5분 · 가성비 상위권', priceRange: '약 6-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sapporo+Station+Hotel&dest_type=city' },
            { name: '스스키노 게스트하우스', stars: 2, desc: '스스키노 중심 · 배낭여행자 인기', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Susukino+Hostel+Sapporo&dest_type=city' }
          ],
          mid: [
            { name: 'JR 타워 호텔 니폰', stars: 4, desc: '삿포로역 바로 위 · 최고 접근성', priceRange: '약 12-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=JR+Tower+Hotel+Nikko+Sapporo&dest_type=city' },
            { name: '삿포로 그랜드호텔', stars: 4, desc: '오도리 공원 인근 · 클래식 명문 호텔', priceRange: '약 10-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sapporo+Grand+Hotel&dest_type=city' }
          ],
          high: [
            { name: '팍스 삿포로', stars: 5, desc: '중심가 프리미엄 호텔 · 스파 포함', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Portiom+Sapporo&dest_type=city' },
            { name: '홋카이도 전통 료칸', stars: 5, desc: '온천 포함 · 일본 전통 숙박 경험', priceRange: '약 30-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ryokan+Hokkaido+Sapporo&dest_type=city' }
          ]
        },
        hotelTips: ['삿포로역·오도리역 근처 추천', '2월 눈축제 시즌 숙박 3개월 전 예약', '니세코 스키는 현지 숙박 필수', '오타루 당일치기로 숙박비 절약 가능'],
        cheapFlights: [
          { label: '진에어·제주항공 (직항)', desc: '직항 2.5시간 · LCC 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cts/' },
          { label: '아시아나·대한항공 (직항)', desc: '2.5시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cts/' }
        ],
        flightTips: ['직항 2.5시간 · 인천·부산 출발', '2월 눈축제 시즌 항공권 2-3개월 전 예약', '여름(7-8월) 항공권 저렴하고 날씨 쾌적', '삿포로+오타루+후라노 4박5일 코스 추천']
      },
      {
        id: 'okinawa', name: '오키나와', sub: '일본 남서부 · 산호초 청록 바다', score: 85, isTop: true,
        photo: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
        airfare: '22만원~', hotel: '호텔 합리적', hotelSub: '3성급 7-12만원대', daily: '소비 보통', dailySub: '1일 6-10만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '엔저 지속', newsSub: '환율 유리', disaster: '태풍', disasterSub: '9-10월 주의',
        temp: '열대 해양성', tempSub: '연중 온난 · 4-6월 바다 최적',
        fx: '엔화', fxSub: '엔저로 환율 유리 지속',
        baseAir: 22, baseHotel: 8, baseHotelLow: 7, baseHotelHigh: 18, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '나하 공설시장', price: '무료', link: 'https://maps.google.com/?q=Naha+Public+Market+Okinawa' },
            { name: '국제거리 산책', price: '무료', link: 'https://maps.google.com/?q=Kokusai+Street+Naha+Okinawa' },
            { name: '슈리성 공원 외곽', price: '무료', link: 'https://maps.google.com/?q=Shuri+Castle+Naha+Okinawa' }
          ],
          mid: [
            { name: '슈리성 내부 관람', price: '약 0.9만원', link: 'https://maps.google.com/?q=Shuri+Castle+Okinawa' },
            { name: '추라우미 수족관', price: '약 2.7만원', link: 'https://www.klook.com/ko/search/?query=churaumi+aquarium+okinawa' },
            { name: '나하 국제거리 쇼핑', price: '무료', link: 'https://maps.google.com/?q=Kokusai+Street+Shopping+Okinawa' }
          ],
          high: [
            { name: '케라마 제도 스노클링 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=kerama+islands+snorkeling+okinawa' },
            { name: '이리오모테 정글 트레킹', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=iriomote+island+trekking' },
            { name: '미야코지마 리조트 스테이', price: '약 15만원', link: 'https://www.booking.com/searchresults.ko.html?ss=Miyakojima+Resort+Okinawa&dest_type=city' }
          ]
        },
        exps: {
          low: [
            { name: '국제거리 아와모리 시음', price: '무료', link: 'https://maps.google.com/?q=Kokusai+Street+Naha+Okinawa' },
            { name: '나하 공영 해변 스노클링', price: '무료', link: 'https://maps.google.com/?q=Naha+Beach+Okinawa' },
            { name: '류큐 전통마을 산책', price: '무료', link: 'https://maps.google.com/?q=Ryukyu+Village+Okinawa' }
          ],
          mid: [
            { name: '케라마 섬 당일 스노클링', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=kerama+day+trip+snorkeling' },
            { name: '북부 마을 문화 투어', price: '약 4만원', link: 'https://www.airbnb.co.kr/s/Okinawa--Japan/experiences?query=village+culture+tour' },
            { name: '오키나와 요리 체험', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Okinawa--Japan/experiences?query=okinawa+cooking+class' }
          ],
          high: [
            { name: '미야코지마 다이빙 라이선스', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+diving+license' },
            { name: '전세 보트 스노클링', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=private+boat+snorkeling+okinawa' },
            { name: '이리오모테 카누 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=iriomote+kayak+canoe' }
          ]
        },
        food: {
          low: [
            { name: '오키나와 소바', desc: '오키나와 명물 소바 · 700엔', link: 'https://maps.google.com/?q=Okinawa+Soba+Naha' },
            { name: '타코라이스', desc: '오키나와 퓨전 명물 · 600엔', link: 'https://maps.google.com/?q=Taco+Rice+Okinawa' },
            { name: '포크 타마고 오니기리', desc: '편의점 오키나와 명물 주먹밥', link: 'https://maps.google.com/?q=Pork+Tamago+Onigiri+Okinawa' }
          ],
          mid: [
            { name: '해산물 이자카야 코스', desc: '오키나와 신선 해산물 이자카야', link: 'https://maps.google.com/?q=Seafood+Izakaya+Naha+Okinawa' },
            { name: '오키나와 스테이크', desc: '오키나와 A1 스테이크 명물', link: 'https://maps.google.com/?q=Steak+Restaurant+Okinawa' },
            { name: '국제거리 레스토랑', desc: '다양한 현지 음식점 · 국제거리', link: 'https://maps.google.com/?q=Kokusai+Street+Restaurant+Okinawa' }
          ],
          high: [
            { name: '고급 이탈리안·프렌치 오션뷰', desc: '오션뷰 레스토랑 · 파인다이닝', link: 'https://maps.google.com/?q=Fine+Dining+Ocean+View+Okinawa' },
            { name: '미슐랭 오키나와 요리', desc: '오키나와 전통 고급 요리코스', link: 'https://maps.google.com/?q=Ryukyuan+Cuisine+Restaurant+Okinawa' },
            { name: '리조트 씨푸드 뷔페', desc: '리조트 레스토랑 씨푸드 뷔페', link: 'https://maps.google.com/?q=Resort+Seafood+Buffet+Okinawa' }
          ]
        },
        hotels: {
          low: [
            { name: '나하 시내 게스트하우스', stars: 2, desc: '국제거리 도보 5분 · 배낭여행자 인기', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Naha+Guesthouse+Okinawa&dest_type=city' },
            { name: '국제거리 주변 비즈니스호텔', stars: 3, desc: '국제거리 도보 3분 · 가성비 우수', priceRange: '약 6-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Naha+Okinawa&dest_type=city' }
          ],
          mid: [
            { name: '오키나와 선셋 비치 호텔', stars: 4, desc: '선셋 비치 앞 · 해수욕장 도보 1분', priceRange: '약 12-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sunset+Beach+Hotel+Okinawa&dest_type=city' },
            { name: '나하 코스트 호텔', stars: 4, desc: '나하 시내 최고급 · 스파 포함', priceRange: '약 10-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Coast+Naha+Okinawa&dest_type=city' }
          ],
          high: [
            { name: '더 부세나 테라스', stars: 5, desc: '오키나와 최고급 풀빌라 리조트', priceRange: '약 35-60만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=The+Busena+Terrace+Okinawa&dest_type=city' },
            { name: '오키나와 만코 리조트', stars: 5, desc: '인피니티풀 · 프라이빗 비치 보유', priceRange: '약 30-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Okinawa+Marriott+Resort+Spa&dest_type=city' }
          ]
        },
        hotelTips: ['남부 나하 시내 vs 북부 리조트 선택', '렌터카 필수 (버스 불편)', '4-6월 물 맑고 붐비지 않아 최적', '태풍 시즌(9-10월) 여행 취소보험 권장'],
        cheapFlights: [
          { label: '제주항공·티웨이 (직항)', desc: '직항 2시간 · LCC 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/oka/' },
          { label: '진에어·에어서울 (직항)', desc: '2시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/oka/' }
        ],
        flightTips: ['직항 2시간 · LCC 왕복 20-25만원대', '봄(4-5월) 항공권 + 해변 최적 시즌', '태풍 시즌 항공권 저렴하지만 리스크 있음', '오키나와 본섬+이시가키 섬 분리 여행 추천']
      },
      {
        id: 'kyoto', name: '교토', sub: '일본 전통 문화 · 사찰과 기모노', score: 87, isTop: true,
        photo: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
        airfare: '22만원~', hotel: '호텔 보통', hotelSub: '3성급 8-15만원대', daily: '소비 보통', dailySub: '1일 7-11만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '엔저 지속', newsSub: '환율 유리', disaster: '없음', disasterSub: '',
        temp: '봄·가을 최적', tempSub: '3-5월 벚꽃 / 10-11월 단풍',
        fx: '엔화', fxSub: '엔저로 환율 유리 지속',
        baseAir: 22, baseHotel: 9, baseHotelLow: 8, baseHotelHigh: 20, minDays: 3, minBudget: 40,
        sights: {
          low: [
            { name: '후시미이나리 타이샤', price: '무료', link: 'https://maps.google.com/?q=Fushimi+Inari+Shrine+Kyoto' },
            { name: '철학의 길 산책', price: '무료', link: 'https://maps.google.com/?q=Philosopher+Path+Kyoto' },
            { name: '니조성 외곽 산책', price: '무료', link: 'https://maps.google.com/?q=Nijo+Castle+Kyoto' }
          ],
          mid: [
            { name: '킨카쿠지 황금 사원', price: '약 0.5만원', link: 'https://maps.google.com/?q=Kinkakuji+Golden+Pavilion+Kyoto' },
            { name: '아라시야마 대나무숲', price: '무료', link: 'https://maps.google.com/?q=Arashiyama+Bamboo+Grove+Kyoto' },
            { name: '기온 거리 야경', price: '무료', link: 'https://maps.google.com/?q=Gion+District+Kyoto' }
          ],
          high: [
            { name: '게이샤 쇼타임 & 가이세키 디너', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=geisha+performance+kyoto' },
            { name: '우지 차 농장 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=uji+tea+farm+tour+kyoto' },
            { name: '나라 사슴 공원 반일 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=nara+deer+park+day+trip+kyoto' }
          ]
        },
        exps: {
          low: [
            { name: '기온 거리 무료 산책', price: '무료', link: 'https://maps.google.com/?q=Gion+District+Kyoto' },
            { name: '후시미이나리 야간 산책', price: '무료', link: 'https://maps.google.com/?q=Fushimi+Inari+Night+Walk+Kyoto' },
            { name: '니시키 시장 시식', price: '무료', link: 'https://maps.google.com/?q=Nishiki+Market+Kyoto' }
          ],
          mid: [
            { name: '기모노 대여 체험', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=kimono+rental+kyoto' },
            { name: '말차 다도 체험', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=matcha+tea+ceremony+kyoto' },
            { name: '교토 자전거 시티투어', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Kyoto--Japan/experiences?query=cycling+city+tour' }
          ],
          high: [
            { name: '전통 가이세키 저녁', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=kaiseki+dinner+kyoto' },
            { name: '게이샤 공연 관람', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=geisha+show+kyoto' },
            { name: '교토 럭셔리 료칸 1박', price: '약 30만원', link: 'https://www.booking.com/searchresults.ko.html?ss=Luxury+Ryokan+Kyoto&dest_type=city' }
          ]
        },
        food: {
          low: [
            { name: '니시키 시장 꼬치', desc: '반찬 골목 시장 · 1개 300-500엔', link: 'https://maps.google.com/?q=Nishiki+Market+Kyoto' },
            { name: '오반자이 정식', desc: '교토 가정식 정식 · 1000엔대', link: 'https://maps.google.com/?q=Obanzai+Kyoto+Restaurant' },
            { name: '이치란 라멘 (교토점)', desc: '라멘 체인 교토점', link: 'https://maps.google.com/?q=Ichiran+Ramen+Kyoto' }
          ],
          mid: [
            { name: '두부 요리 전문점', desc: '교토 명물 두부 요리 코스', link: 'https://maps.google.com/?q=Tofu+Restaurant+Kyoto' },
            { name: '말차 파르페 카페', desc: '말차 디저트 · 교토 인스타 명소', link: 'https://maps.google.com/?q=Matcha+Parfait+Cafe+Kyoto' },
            { name: '교토 오반자이 코스', desc: '교토 전통 채식 코스', link: 'https://maps.google.com/?q=Obanzai+Course+Kyoto' }
          ],
          high: [
            { name: '가이세키 오마카세', desc: '교토 최고급 카이세키 코스', link: 'https://maps.google.com/?q=Kaiseki+Omakase+Kyoto' },
            { name: '기온 고급 일식', desc: '기온 거리 프리미엄 일식당', link: 'https://maps.google.com/?q=Gion+Fine+Dining+Kyoto' },
            { name: '료칸 조석 포함 코스', desc: '전통 료칸 조석 포함 코스요리', link: 'https://maps.google.com/?q=Ryokan+Breakfast+Dinner+Kyoto' }
          ]
        },
        hotels: {
          low: [
            { name: '교토역 주변 게스트하우스', stars: 2, desc: '역 도보 5분 · 배낭여행자 인기', priceRange: '약 4-6만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Kyoto+Station+Hostel&dest_type=city' },
            { name: '기온 지역 비즈니스호텔', stars: 3, desc: '기온 도보 10분 · 가성비 우수', priceRange: '약 7-11만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Gion+Business+Hotel+Kyoto&dest_type=city' }
          ],
          mid: [
            { name: '교토 하나미코지 호텔', stars: 4, desc: '기온 하나미코지 도보 2분', priceRange: '약 14-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Hanamikoji+Kyoto&dest_type=city' },
            { name: '아라시야마 온천 호텔', stars: 4, desc: '아라시야마 강변 · 온천 포함', priceRange: '약 15-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Arashiyama+Onsen+Hotel+Kyoto&dest_type=city' }
          ],
          high: [
            { name: '아만쿄토 료칸', stars: 5, desc: '세계 최고 럭셔리 료칸 · 완전 프라이빗', priceRange: '약 100-150만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Aman+Kyoto+Ryokan&dest_type=city' },
            { name: '기온 후루몬야 료칸', stars: 5, desc: '기온 전통거리 · 일본 전통 숙박', priceRange: '약 30-60만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Gion+Ryokan+Kyoto&dest_type=city' }
          ]
        },
        hotelTips: ['교토역 주변이 이동 편리', '기온·아라시야마 근처는 감성적', '벚꽃·단풍 시즌 숙박 3-4개월 전 예약', '오사카 숙박 후 교토 당일치기도 가능'],
        cheapFlights: [
          { label: '제주항공·진에어 (오사카 KIX 입국)', desc: '2시간 · 왕복 22만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kix/' },
          { label: 'LCC 오사카·나고야 도착', desc: '2.5시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ngoy/' }
        ],
        flightTips: ['오사카(간사이 공항) 도착 후 교토 JR 75분', '직항 1.5시간 + 이동 · 실질 3시간 내', '오사카+교토+나라 3박4일 패키지 효율적', '벚꽃(3-4월) 항공권 최소 2개월 전 예약']
      },
      {
        id: 'miyakojima', name: '미야코지마', sub: '오키나와 남쪽 · 산호초 에메랄드빛 바다', score: 83, isTop: false,
        photo: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
        airfare: '30만원~', hotel: '호텔 합리적', hotelSub: '3성급 7-13만원대', daily: '소비 보통', dailySub: '1일 5-9만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '엔저 지속', newsSub: '환율 유리', disaster: '태풍', disasterSub: '8-9월 주의',
        temp: '', tempSub: '',
        fx: '엔화', fxSub: '엔저로 환율 유리 지속',
        baseAir: 30, baseHotel: 9, baseHotelLow: 7, baseHotelHigh: 22, minDays: 4, minBudget: 50,
        sights: {
          low: [
            { name: '요나하마에하마 해변', price: '무료', link: 'https://maps.google.com/?q=Yonaha+Maehama+Beach+Miyakojima' },
            { name: '우에노 독일 마을', price: '무료', link: 'https://maps.google.com/?q=Ueno+German+Village+Miyakojima' },
            { name: '이라부 대교 드라이브', price: '무료', link: 'https://maps.google.com/?q=Irabu+Bridge+Miyakojima' }
          ],
          mid: [
            { name: '스노클링 투어 (시모지섬)', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+snorkeling+tour' },
            { name: '이라부섬 당일 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=irabu+island+miyakojima' },
            { name: '요나하마에하마 선셋 크루즈', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+sunset+cruise' }
          ],
          high: [
            { name: '다이빙 라이선스 취득', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+diving+license' },
            { name: '전세 보트 스노클링', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+private+boat+snorkeling' },
            { name: '헬기 투어 (산호초 조망)', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+helicopter+tour' }
          ]
        },
        exps: {
          low: [
            { name: '요나하마에하마 자전거 라이딩', price: '무료', link: 'https://maps.google.com/?q=Yonaha+Maehama+Beach+Miyakojima' },
            { name: '이라부 대교 일몰 감상', price: '무료', link: 'https://maps.google.com/?q=Irabu+Bridge+Miyakojima' },
            { name: '시모지공항 히든 비치 트레일', price: '무료', link: 'https://maps.google.com/?q=Shimoji+Airport+Miyakojima' }
          ],
          mid: [
            { name: '카이트서핑 체험', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+kitesurfing' },
            { name: '시카이드 다이빙 체험', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+sea+kayak+diving' },
            { name: '성게 잡기 어촌 체험', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Miyakojima--Japan/experiences?query=sea+urchin+fishing' }
          ],
          high: [
            { name: '전세 요트 1일 크루즈', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+private+yacht' },
            { name: '나이트 다이빙', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+night+diving' },
            { name: '산호초 드론 촬영 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=miyakojima+drone+tour' }
          ]
        },
        food: {
          low: [
            { name: '미야코 소바', desc: '미야코지마 명물 소바 · 700-900엔', link: 'https://maps.google.com/?q=Miyako+Soba+Miyakojima' },
            { name: '야에야마 카미카스 정식', desc: '현지 정식 · 저렴하고 푸짐', link: 'https://maps.google.com/?q=Miyakojima+Local+Restaurant' },
            { name: '해산물 시장 직구', desc: '현지 어시장 · 신선한 해산물 직구', link: 'https://maps.google.com/?q=Miyakojima+Fish+Market' }
          ],
          mid: [
            { name: '해산물 이자카야 코스', desc: '갓 잡은 참치·도미 이자카야 코스', link: 'https://maps.google.com/?q=Miyakojima+Seafood+Izakaya' },
            { name: '참치 해체쇼 디너', desc: '미야코지마 명물 참치 해체 퍼포먼스', link: 'https://maps.google.com/?q=Miyakojima+Tuna+Show+Dinner' },
            { name: '류큐 요리 정식', desc: '오키나와 전통 요리 · 현지 식재료', link: 'https://maps.google.com/?q=Ryukyuan+Cuisine+Miyakojima' }
          ],
          high: [
            { name: '리조트 씨푸드 뷔페', desc: '오션뷰 리조트 뷔페 · 신선 해산물', link: 'https://maps.google.com/?q=Miyakojima+Resort+Seafood+Buffet' },
            { name: '오마카세 참치 코스', desc: '현지 어부→파인다이닝 코스', link: 'https://maps.google.com/?q=Miyakojima+Omakase+Tuna' },
            { name: '비치사이드 그릴 BBQ', desc: '해변 프라이빗 BBQ 다이닝', link: 'https://maps.google.com/?q=Miyakojima+Beach+BBQ' }
          ]
        },
        hotels: {
          low: [
            { name: '미야코지마 게스트하우스', stars: 2, desc: '시내 중심 · 자전거 대여 가능', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Guesthouse+Miyakojima&dest_type=city' },
            { name: '비즈니스 호텔 미야코', stars: 3, desc: '공항 20분 · 조식 포함 가성비', priceRange: '약 6-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Miyakojima&dest_type=city' }
          ],
          mid: [
            { name: '아야루마리 카이조쿠', stars: 4, desc: '요나하마에하마 해변 도보 5분', priceRange: '약 10-16만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Miyakojima+Beach&dest_type=city' },
            { name: '미야코지마 도키멕케', stars: 4, desc: '바다 전망 자쿠지룸 · 조식 포함', priceRange: '약 12-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Miyakojima+Ocean+View+Hotel&dest_type=city' }
          ],
          high: [
            { name: '시기라 베이사이드 스위트', stars: 5, desc: '프라이빗 비치 · 인피니티풀 리조트', priceRange: '약 30-55만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Shigira+Bay+Resort+Miyakojima&dest_type=city' },
            { name: '더 셀프 산사라 리조트', stars: 5, desc: '자연속 빌라스타일 · 스파 포함', priceRange: '약 35-60만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sansara+Resort+Miyakojima&dest_type=city' }
          ]
        },
        hotelTips: ['렌터카 필수 (시내도 버스 드문 섬)', '요나하마에하마 해변 근처 숙소 추천', '3-6월 물 맑고 태풍 없는 최적 시즌', '성수기(7-8월) 2개월 전 예약 필수'],
        cheapFlights: [
          { label: '진에어 (인천→시모지시마 직항)', desc: '직항 2.5시간 · LCC 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/shi/' },
          { label: '제주항공 (직항 운항시)', desc: '2.5시간 직항 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/shi/' }
        ],
        flightTips: ['시모지시마(SHI) 공항 도착 = 미야코지마 직결', '인천 직항 2.5시간 · 진에어 운항', '3-5월 항공권 저렴 + 날씨 최적 시즌', '렌터카 공항에서 바로 픽업 추천']
      },
      {
        id: 'phuquoc', name: '푸꾸옥', sub: '베트남 섬 · 에메랄드 바다', score: 79, isTop: false,
        photo: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&q=80',
        airfare: '22만원~', hotel: '호텔 저렴', hotelSub: '3성급 4-8만원대', daily: '소비 매우 적음', dailySub: '1일 4-7만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '물가 안정', newsSub: '물가 저렴', disaster: '우기', disasterSub: '7-10월 주의',
        temp: '열대 해양성', tempSub: '11-4월 건기 · 맑고 선명한 바다',
        fx: '베트남 동', fxSub: '원화 강세 · 현지 물가 매우 저렴',
        baseAir: 22, baseHotel: 5, baseHotelLow: 4, baseHotelHigh: 12, minDays: 4, minBudget: 35,
        sights: {
          low: [
            { name: '사오 해변 산책', price: '무료', link: 'https://maps.google.com/?q=Sao+Beach+Phu+Quoc' },
            { name: '야시장 구경', price: '무료', link: 'https://maps.google.com/?q=Phu+Quoc+Night+Market' },
            { name: '즈엉동 시장', price: '무료', link: 'https://maps.google.com/?q=Duong+Dong+Market+Phu+Quoc' }
          ],
          mid: [
            { name: '빈원더스 테마파크', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=vinwonders+phu+quoc' },
            { name: '섬 호핑 스노클링 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=phu+quoc+island+hopping+snorkeling' },
            { name: '푸꾸옥 야시장 투어', price: '약 1만원', link: 'https://maps.google.com/?q=Phu+Quoc+Night+Market' }
          ],
          high: [
            { name: '빈펄 리조트 풀빌라', price: '약 25만원', link: 'https://www.booking.com/searchresults.ko.html?ss=Vinpearl+Resort+Phu+Quoc&dest_type=city' },
            { name: '선월드 케이블카+놀이공원', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=sun+world+phu+quoc' },
            { name: '북부 자연 트레킹 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=phu+quoc+north+nature+tour' }
          ]
        },
        exps: {
          low: [
            { name: '야시장 씨푸드', price: '약 2만원', link: 'https://maps.google.com/?q=Phu+Quoc+Night+Market' },
            { name: '해변 무료 선베딩', price: '무료', link: 'https://maps.google.com/?q=Sao+Beach+Phu+Quoc' },
            { name: '로컬 시장 산책', price: '무료', link: 'https://maps.google.com/?q=Duong+Dong+Market+Phu+Quoc' }
          ],
          mid: [
            { name: '섬 호핑 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=phu+quoc+island+hopping' },
            { name: '씨푸드 레스토랑 코스', price: '약 5만원', link: 'https://maps.google.com/?q=Seafood+Restaurant+Phu+Quoc' },
            { name: '선셋 바 스팟', price: '약 2만원', link: 'https://maps.google.com/?q=Sunset+Bar+Phu+Quoc' }
          ],
          high: [
            { name: '프라이빗 비치 리조트 체험', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=private+beach+phu+quoc' },
            { name: '요트 선셋 크루즈', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=yacht+sunset+cruise+phu+quoc' },
            { name: '프리미엄 스노클링 투어', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=premium+snorkeling+phu+quoc' }
          ]
        },
        food: {
          low: [
            { name: '반미 샌드위치', desc: '길거리 반미 · 1개 5천원', link: 'https://maps.google.com/?q=Banh+Mi+Phu+Quoc' },
            { name: '로컬 쌀국수', desc: '현지 쌀국수 · 6천원대', link: 'https://maps.google.com/?q=Pho+Restaurant+Phu+Quoc' },
            { name: '야시장 구이 씨푸드', desc: '야시장 해산물 구이', link: 'https://maps.google.com/?q=Phu+Quoc+Night+Market+Seafood' }
          ],
          mid: [
            { name: '해산물 레스토랑', desc: '푸꾸옥 신선 씨푸드 전문점', link: 'https://maps.google.com/?q=Seafood+Restaurant+Phu+Quoc' },
            { name: '베트남 전통 코스', desc: '베트남 전통 요리 코스', link: 'https://maps.google.com/?q=Vietnamese+Restaurant+Phu+Quoc' },
            { name: '카페 레지던스 브런치', desc: '감성 카페 브런치', link: 'https://maps.google.com/?q=Cafe+Brunch+Phu+Quoc' }
          ],
          high: [
            { name: '리조트 씨푸드 뷔페', desc: '리조트 프리미엄 씨푸드 뷔페', link: 'https://maps.google.com/?q=Resort+Seafood+Buffet+Phu+Quoc' },
            { name: '프라이빗 다이닝', desc: '해변 프라이빗 다이닝 경험', link: 'https://maps.google.com/?q=Private+Dining+Phu+Quoc' },
            { name: '럭셔리 선셋 디너', desc: '선셋 뷰 파인 다이닝', link: 'https://maps.google.com/?q=Sunset+Fine+Dining+Phu+Quoc' }
          ]
        },
        hotels: {
          low: [
            { name: '롱비치 근처 게스트하우스', stars: 2, desc: '롱비치 도보 5분 · 저렴한 배낭 숙소', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Long+Beach+Guesthouse+Phu+Quoc&dest_type=city' },
            { name: '즈엉동 시내 소형 호텔', stars: 2, desc: '시내 중심 · 시장 도보 3분', priceRange: '약 4-7만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Duong+Dong+Hotel+Phu+Quoc&dest_type=city' }
          ],
          mid: [
            { name: '라 베란다 리조트', stars: 4, desc: '프렌치 콜로니얼 스타일 · 성인 전용', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=La+Veranda+Resort+Phu+Quoc&dest_type=city' },
            { name: '파라다이스 빌라', stars: 4, desc: '해변 바로 앞 빌라 · 수영장 포함', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Paradise+Villa+Phu+Quoc&dest_type=city' }
          ],
          high: [
            { name: '빈펄 리조트 & 스파', stars: 5, desc: '최대 리조트 복합단지 · 테마파크 포함', priceRange: '약 30-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Vinpearl+Resort+Phu+Quoc&dest_type=city' },
            { name: '프리미어 빌리지 리조트', stars: 5, desc: '사오비치 프라이빗 풀빌라 · 한국인 Top1', priceRange: '약 40-70만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Premier+Village+Resort+Phu+Quoc&dest_type=city' }
          ]
        },
        hotelTips: ['롱비치(Long Beach) 지역이 식당·상점 접근성 최고', '북부 해변은 조용하고 깨끗함', '빌라 타입 숙소도 합리적 가격', '건기(11-4월)에 방문해야 맑은 바다 경험'],
        cheapFlights: [
          { label: '비엣젯·뱀부항공 (직항)', desc: '직항 5시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pqc/' },
          { label: '베트남항공 (직항)', desc: '5시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pqc/' }
        ],
        flightTips: ['직항 5시간 · 인천 출발 LCC 다수', '왕복 25-35만원 특가 자주 발생', '푸꾸옥+호치민 경유 조합 가능', '건기(11-4월) 항공권 성수기 요금 주의']
      },
      {
        id: 'hochiminh', name: '호치민', sub: '베트남 남부 · 역동적인 도시 여행', score: 74, isTop: false,
        photo: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
        airfare: '20만원~', hotel: '호텔 저렴', hotelSub: '3성급 4-7만원대', daily: '소비 매우 적음', dailySub: '1일 4-7만원',
        alert: '여행유의', alertSub: '날치기 주의', news: '물가 안정', newsSub: '물가 저렴', disaster: '없음', disasterSub: '',
        temp: '열대 계절풍', tempSub: '건기(12-4월) 방문 추천',
        fx: '베트남 동', fxSub: '원화 강세 · 현지 물가 매우 저렴',
        baseAir: 20, baseHotel: 5, baseHotelLow: 4, baseHotelHigh: 10, minDays: 4, minBudget: 30,
        sights: {
          low: [
            { name: '벤탄 시장', price: '무료', link: 'https://maps.google.com/?q=Ben+Thanh+Market+Ho+Chi+Minh' },
            { name: '통일궁 외관', price: '무료', link: 'https://maps.google.com/?q=Reunification+Palace+Ho+Chi+Minh' },
            { name: '노트르담 성당', price: '무료', link: 'https://maps.google.com/?q=Notre+Dame+Cathedral+Ho+Chi+Minh' }
          ],
          mid: [
            { name: '구찌 터널 반일 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=cu+chi+tunnels+ho+chi+minh' },
            { name: '메콩강 크루즈 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=mekong+delta+cruise+ho+chi+minh' },
            { name: '전쟁박물관 입장', price: '약 0.5만원', link: 'https://maps.google.com/?q=War+Remnants+Museum+Ho+Chi+Minh' }
          ],
          high: [
            { name: '메콩 델타 1박 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=mekong+delta+overnight+tour' },
            { name: '무이네 사막 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=mui+ne+sand+dunes+tour' },
            { name: '달랏 당일 투어', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=dalat+day+trip+ho+chi+minh' }
          ]
        },
        exps: {
          low: [
            { name: '로컬 쌀국수 식당', price: '약 0.5만원', link: 'https://maps.google.com/?q=Pho+Restaurant+Ho+Chi+Minh' },
            { name: '벤탄 야시장 탐방', price: '무료', link: 'https://maps.google.com/?q=Ben+Thanh+Night+Market+Ho+Chi+Minh' },
            { name: '오토바이 거리 투어', price: '약 1만원', link: 'https://www.airbnb.co.kr/s/Ho-Chi-Minh-City--Vietnam/experiences?query=motorbike+street+tour' }
          ],
          mid: [
            { name: '구찌 터널 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=cu+chi+tunnels+tour' },
            { name: '메콩강 보트 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=mekong+boat+tour' },
            { name: '루프탑 바 야경', price: '약 2만원', link: 'https://maps.google.com/?q=Rooftop+Bar+Ho+Chi+Minh' }
          ],
          high: [
            { name: '메콩 델타 홈스테이', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=mekong+delta+homestay' },
            { name: '베트남 요리 클래스', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=vietnamese+cooking+class+ho+chi+minh' },
            { name: '할리데이비슨 시티 투어', price: '약 8만원', link: 'https://www.airbnb.co.kr/s/Ho-Chi-Minh-City--Vietnam/experiences?query=harley+davidson+city+tour' }
          ]
        },
        food: {
          low: [
            { name: '반미 (Bánh Mì)', desc: '길거리 반미 · 3천원대', link: 'https://maps.google.com/?q=Banh+Mi+Ho+Chi+Minh' },
            { name: '분짜·쌀국수', desc: '현지 분짜·포 · 5천원대', link: 'https://maps.google.com/?q=Bun+Cha+Pho+Ho+Chi+Minh' },
            { name: '반쎄오', desc: '바삭한 베트남 팬케이크 · 6천원대', link: 'https://maps.google.com/?q=Banh+Xeo+Ho+Chi+Minh' }
          ],
          mid: [
            { name: '1군 전통 레스토랑', desc: '베트남 전통 요리 코스 · 1군 중심', link: 'https://maps.google.com/?q=Vietnamese+Restaurant+District+1+Ho+Chi+Minh' },
            { name: '루프탑 씨푸드', desc: '루프탑 씨푸드 레스토랑', link: 'https://maps.google.com/?q=Rooftop+Seafood+Ho+Chi+Minh' },
            { name: '페이스트리 카페', desc: '프렌치 베이커리 카페 · 호치민 명소', link: 'https://maps.google.com/?q=French+Pastry+Cafe+Ho+Chi+Minh' }
          ],
          high: [
            { name: '스카이바 파인 다이닝', desc: '랜드마크 81 스카이바 · 최고층 뷰', link: 'https://maps.google.com/?q=Skybar+Fine+Dining+Ho+Chi+Minh' },
            { name: '파인 다이닝 베트남 퀴진', desc: '미슐랭 가이드 추천 베트남 요리', link: 'https://maps.google.com/?q=Fine+Dining+Ho+Chi+Minh' },
            { name: '호치민 오마카세', desc: '일식 오마카세 코스', link: 'https://maps.google.com/?q=Omakase+Ho+Chi+Minh' }
          ]
        },
        hotels: {
          low: [
            { name: '1군 배낭여행자 호스텔', stars: 2, desc: '팜응우라오 거리 · 배낭여행자 밀집', priceRange: '약 2-4만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hostel+District+1+Ho+Chi+Minh&dest_type=city' },
            { name: '팜응우라오 거리 소형 호텔', stars: 2, desc: '여행자 거리 중심 · 저렴한 소형 호텔', priceRange: '약 4-7만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Pham+Ngu+Lao+Hotel+Ho+Chi+Minh&dest_type=city' }
          ],
          mid: [
            { name: '호치민 리버사이드 호텔', stars: 4, desc: '사이공 강변뷰 · 루프탑 수영장', priceRange: '약 10-16만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Riverside+Hotel+Ho+Chi+Minh&dest_type=city' },
            { name: '레벨23 부티크호텔', stars: 4, desc: '1군 중심 부티크 · 루프탑 바 유명', priceRange: '약 12-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Level23+Boutique+Hotel+Ho+Chi+Minh&dest_type=city' }
          ],
          high: [
            { name: '인터컨티넨탈 사이공', stars: 5, desc: '1군 최고급 · 스파·레스토랑 포함', priceRange: '약 28-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=InterContinental+Saigon+Ho+Chi+Minh&dest_type=city' },
            { name: '파크 하얏트 사이공', stars: 5, desc: '파스퇴르 거리 · 파인다이닝 유명', priceRange: '약 30-55만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Park+Hyatt+Saigon+Ho+Chi+Minh&dest_type=city' }
          ]
        },
        hotelTips: ['1군 지역이 관광명소 도보 접근 최고', '팜응우라오 거리 배낭여행자 밀집 구역', '오토바이 날치기 주의 · 가방 앞으로 착용', '그랩(Grab) 앱 필수 · 택시 흥정 불필요'],
        cheapFlights: [
          { label: '제주항공·비엣젯 (직항)', desc: '직항 5시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/sgn/' },
          { label: '진에어·티웨이 (직항)', desc: '5시간 직항 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/sgn/' }
        ],
        flightTips: ['직항 5시간 · LCC 왕복 20-30만원', '호치민+푸꾸옥 연계 5박6일 추천', '건기(12-4월)가 여행하기 최적', '비행 직후 시차 없어 피로도 낮음']
      },
      {
        id: 'hanoi', name: '하노이', sub: '베트남 수도 · 역사와 문화의 도시', score: 74, isTop: false,
        photo: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800&q=80',
        airfare: '22만원~', hotel: '호텔 저렴', hotelSub: '3성급 4-7만원대', daily: '소비 매우 적음', dailySub: '1일 4-7만원',
        alert: '여행유의', alertSub: '오토바이 주의', news: '물가 안정', newsSub: '물가 저렴', disaster: '없음', disasterSub: '',
        temp: '아열대', tempSub: '봄(3-4월)·가을(10-11월) 최적',
        fx: '베트남 동', fxSub: '원화 강세 · 현지 물가 매우 저렴',
        baseAir: 22, baseHotel: 5, baseHotelLow: 4, baseHotelHigh: 10, minDays: 4, minBudget: 30,
        sights: {
          low: [
            { name: '호안끼엠 호수 산책', price: '무료', link: 'https://maps.google.com/?q=Hoan+Kiem+Lake+Hanoi' },
            { name: '구시가지 36거리', price: '무료', link: 'https://maps.google.com/?q=Old+Quarter+Hanoi' },
            { name: '호치민 묘소 외관', price: '무료', link: 'https://maps.google.com/?q=Ho+Chi+Minh+Mausoleum+Hanoi' }
          ],
          mid: [
            { name: '하롱베이 1박 크루즈', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=halong+bay+overnight+cruise' },
            { name: '문묘 유교 사원', price: '약 0.4만원', link: 'https://maps.google.com/?q=Temple+of+Literature+Hanoi' },
            { name: '하노이 오페라하우스', price: '무료 외관', link: 'https://maps.google.com/?q=Hanoi+Opera+House' }
          ],
          high: [
            { name: '하롱베이 럭셔리 크루즈 2박', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=halong+bay+luxury+cruise+2+nights' },
            { name: '닌빈 당일 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=ninh+binh+day+trip+hanoi' },
            { name: '사파 트레킹 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=sapa+trekking+tour+hanoi' }
          ]
        },
        exps: {
          low: [
            { name: '구시가지 야경 산책', price: '무료', link: 'https://maps.google.com/?q=Old+Quarter+Hanoi+Night' },
            { name: '호안끼엠 거리 공연', price: '무료', link: 'https://maps.google.com/?q=Hoan+Kiem+Lake+Hanoi' },
            { name: '하노이 로컬 시장', price: '무료', link: 'https://maps.google.com/?q=Dong+Xuan+Market+Hanoi' }
          ],
          mid: [
            { name: '하롱베이 크루즈 투어', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=halong+bay+cruise+tour' },
            { name: '베트남 요리 클래스', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=vietnamese+cooking+class+hanoi' },
            { name: '사이클링 구시가지 투어', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Hanoi--Vietnam/experiences?query=cycling+old+quarter+tour' }
          ],
          high: [
            { name: '사파 소수민족 트레킹', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=sapa+ethnic+minority+trekking' },
            { name: '하롱베이 VIP 크루즈', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=halong+bay+vip+luxury+cruise' },
            { name: '닌빈 배 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=ninh+binh+boat+tour' }
          ]
        },
        food: {
          low: [
            { name: '분짜 (Bún Chả)', desc: '하노이 명물 숯불 분짜 · 5천원', link: 'https://maps.google.com/?q=Bun+Cha+Hanoi' },
            { name: '포 하노이 (Phở)', desc: '하노이식 쌀국수 · 4천원', link: 'https://maps.google.com/?q=Pho+Hanoi' },
            { name: '반미 (Bánh Mì)', desc: '바삭한 베트남 바게트 · 3천원', link: 'https://maps.google.com/?q=Banh+Mi+Hanoi' }
          ],
          mid: [
            { name: '구시가지 전통 레스토랑', desc: '구시가지 베트남 전통 코스', link: 'https://maps.google.com/?q=Traditional+Vietnamese+Restaurant+Hanoi' },
            { name: '하노이 전통 코스 정식', desc: '하노이 전통 코스 정식 레스토랑', link: 'https://maps.google.com/?q=Hanoi+Traditional+Course+Dinner' },
            { name: '루프탑 카페', desc: '하노이 감성 루프탑 카페', link: 'https://maps.google.com/?q=Rooftop+Cafe+Hanoi' }
          ],
          high: [
            { name: '소피텔 메트로폴 다이닝', desc: '하노이 최고급 호텔 레스토랑', link: 'https://maps.google.com/?q=Sofitel+Metropole+Restaurant+Hanoi' },
            { name: '파인 다이닝 베트남 퀴진', desc: '미슐랭 추천 베트남 요리', link: 'https://maps.google.com/?q=Fine+Dining+Vietnamese+Hanoi' },
            { name: '하노이 오마카세', desc: '일식 오마카세 코스', link: 'https://maps.google.com/?q=Omakase+Restaurant+Hanoi' }
          ]
        },
        hotels: {
          low: [
            { name: '구시가지 게스트하우스', stars: 2, desc: '36거리 도보 · 배낭여행자 인기', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Old+Quarter+Hostel+Hanoi&dest_type=city' },
            { name: '호안끼엠 근처 소형 호텔', stars: 2, desc: '호수 도보 10분 · 가성비 우수', priceRange: '약 4-7만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hoan+Kiem+Hotel+Hanoi&dest_type=city' }
          ],
          mid: [
            { name: '하노이 스마트호텔', stars: 4, desc: '구시가지 중심 · 실용적 4성급', priceRange: '약 10-16만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Smart+Hotel+Hanoi&dest_type=city' },
            { name: '메이플우드 부티크', stars: 4, desc: '감성 부티크 호텔 · 하노이 인기', priceRange: '약 12-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Maplewood+Boutique+Hotel+Hanoi&dest_type=city' }
          ],
          high: [
            { name: '소피텔 메트로폴 하노이', stars: 5, desc: '1901년 역사 · 하노이 No.1 럭셔리', priceRange: '약 35-60만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sofitel+Metropole+Hanoi&dest_type=city' },
            { name: '인터컨티넨탈 하노이', stars: 5, desc: '최신 시설 · 스파·수영장 포함', priceRange: '약 28-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=InterContinental+Hanoi&dest_type=city' }
          ]
        },
        hotelTips: ['구시가지 내 숙소가 도보 관광 최적', '호안끼엠 호수 주변 위치 추천', '그랩(Grab) 이용 시 저렴하고 안전', '하롱베이 투어는 구시가지 여행사 이용'],
        cheapFlights: [
          { label: '제주항공·티웨이 (직항)', desc: '직항 5시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/han/' },
          { label: '베트남항공·비엣젯 (직항)', desc: '5시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/han/' }
        ],
        flightTips: ['직항 5시간 · LCC 왕복 20-30만원', '하노이+하롱베이 4박5일 코스 인기', '봄(3-4월)·가을(10-11월) 최적 날씨', '하노이+다낭 국내선 연결 가능']
      },
      {
        id: 'boracay', name: '보라카이', sub: '필리핀 · 세계 최고 화이트 비치', score: 78, isTop: false,
        photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        airfare: '25만원~', hotel: '호텔 저렴', hotelSub: '3성급 5-9만원대', daily: '소비 적음', dailySub: '1일 5-8만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '물가 안정', newsSub: '물가 저렴', disaster: '태풍', disasterSub: '겨울 주의',
        temp: '열대 해양성', tempSub: '건기(11-4월) 화이트비치 최적',
        fx: '필리핀 페소', fxSub: '원화 강세 · 현지 물가 저렴',
        baseAir: 25, baseHotel: 6, baseHotelLow: 5, baseHotelHigh: 15, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '화이트비치 산책', price: '무료', link: 'https://maps.google.com/?q=White+Beach+Boracay' },
            { name: 'D몰 구경', price: '무료', link: 'https://maps.google.com/?q=D+Mall+Boracay' },
            { name: '일몰 감상 스팟', price: '무료', link: 'https://maps.google.com/?q=Sunset+Boracay+Station+2' }
          ],
          mid: [
            { name: '아일랜드 호핑 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=island+hopping+boracay' },
            { name: '스노클링·다이빙 체험', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=snorkeling+diving+boracay' },
            { name: '헬미테이지 산 트레킹', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=boracay+hiking+mount+luho' }
          ],
          high: [
            { name: '파라사일링 체험', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=parasailing+boracay' },
            { name: '요트 선셋 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=yacht+sunset+tour+boracay' },
            { name: '인접 섬 프라이빗 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=private+island+tour+boracay' }
          ]
        },
        exps: {
          low: [
            { name: '화이트비치 무료 선베딩', price: '무료', link: 'https://maps.google.com/?q=White+Beach+Boracay' },
            { name: '야시장 탐방', price: '무료', link: 'https://maps.google.com/?q=Boracay+Night+Market' },
            { name: '선셋 감상', price: '무료', link: 'https://maps.google.com/?q=Willy+s+Rock+Boracay' }
          ],
          mid: [
            { name: '아일랜드 호핑 스노클링', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=island+hopping+snorkeling+boracay' },
            { name: '윈드서핑 레슨', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=windsurfing+lesson+boracay' },
            { name: '야간 파이어쇼', price: '약 2만원', link: 'https://maps.google.com/?q=Fire+Show+Boracay' }
          ],
          high: [
            { name: '프라이빗 요트 하루 대절', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=private+yacht+charter+boracay' },
            { name: '스카이다이빙 체험', price: '약 25만원', link: 'https://www.klook.com/ko/search/?query=skydiving+boracay' },
            { name: '프리미엄 다이빙 코스', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=premium+diving+course+boracay' }
          ]
        },
        food: {
          low: [
            { name: '로컬 BBQ 이니하우', desc: '보라카이 명물 BBQ · 8천원', link: 'https://maps.google.com/?q=Inihawin+BBQ+Boracay' },
            { name: '치킨아도보 현지 식당', desc: '필리핀 명물 치킨 요리', link: 'https://maps.google.com/?q=Chicken+Adobo+Boracay' },
            { name: 'D몰 푸드코트', desc: 'D몰 내 다양한 분식 음식점', link: 'https://maps.google.com/?q=D+Mall+Food+Court+Boracay' }
          ],
          mid: [
            { name: '화이트비치 씨푸드 레스토랑', desc: '보라카이 신선 해산물 전문점', link: 'https://maps.google.com/?q=Seafood+Restaurant+White+Beach+Boracay' },
            { name: '선셋 뷰 이탈리안', desc: '선셋 뷰포인트 이탈리안 레스토랑', link: 'https://maps.google.com/?q=Italian+Restaurant+Sunset+Boracay' },
            { name: '칵테일 바 디너', desc: '선셋 보면서 칵테일 디너', link: 'https://maps.google.com/?q=Cocktail+Bar+Boracay' }
          ],
          high: [
            { name: '아지오 레스토랑 파인다이닝', desc: '보라카이 최고 파인다이닝', link: 'https://maps.google.com/?q=Aggio+Restaurant+Boracay' },
            { name: '리조트 씨푸드 뷔페', desc: '샹그릴라 씨푸드 딜리셔스 뷔페', link: 'https://maps.google.com/?q=Shangri+La+Boracay+Restaurant' },
            { name: 'VIP 선셋 디너', desc: '프라이빗 VIP 선셋 다이닝', link: 'https://maps.google.com/?q=VIP+Sunset+Dinner+Boracay' }
          ]
        },
        hotels: {
          low: [
            { name: '스테이션 2 게스트하우스', stars: 2, desc: '화이트비치 도보 5분 · 배낭여행자 인기', priceRange: '약 4-7만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Station+2+Boracay+Hostel&dest_type=city' },
            { name: 'D몰 근처 소형 호텔', stars: 2, desc: 'D몰 쇼핑몰 도보 · 편리한 위치', priceRange: '약 5-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Near+D+Mall+Boracay&dest_type=city' }
          ],
          mid: [
            { name: '크리스탈 코브 리조트', stars: 4, desc: '화이트비치 계단식 풀장 · 성인 전용', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Crystal+Cove+Island+Resort+Boracay&dest_type=city' },
            { name: '아르마 리조트', stars: 4, desc: '스테이션 1 프라이빗 해변 · 수영장 포함', priceRange: '약 15-24만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Arma+Resort+Boracay&dest_type=city' }
          ],
          high: [
            { name: '샹그릴라 보라카이', stars: 5, desc: '보라카이 최고급 프라이빗 해변 리조트', priceRange: '약 35-65만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Shangri+La+Boracay&dest_type=city' },
            { name: '크라운 리젠시 리조트', stars: 5, desc: '스테이션 2 훌륭한 풀 리조트 · 인피니티풀', priceRange: '약 25-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Crown+Regency+Resort+Boracay&dest_type=city' }
          ]
        },
        hotelTips: ['스테이션 2 지역이 화이트비치 접근성 최고', '건기(11-4월) 예약은 2-3개월 전 필수', '스테이션 1은 조용하고 프라이빗 분위기', '태풍 시즌(11-12월) 여행 취소보험 필수'],
        cheapFlights: [
          { label: '세부퍼시픽·필리핀항공 (칼리보)', desc: '4.5시간 · 왕복 28만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mph/' },
          { label: '제주항공 (직항)', desc: '4.5시간 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mph/' }
        ],
        flightTips: ['칼리보(KLO) 공항이 저렴 · 이리오일로(ILO)도 가능', '직항 4.5시간 · LCC 왕복 25-35만원', '마닐라 경유 시 이동 복잡 · 직항 추천', '건기 성수기(12-3월) 항공권 2개월 전 예약']
      },
      {
        id: 'phuket', name: '푸켓', sub: '태국 남부 · 에메랄드 해변과 나이트라이프', score: 81, isTop: false,
        photo: 'https://images.unsplash.com/photo-1589394815349-30b3a6e3a9de?w=800&q=80',
        airfare: '22만원~', hotel: '호텔 보통', hotelSub: '3성급 6-12만원대', daily: '소비 적음', dailySub: '1일 5-9만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '물가 안정', newsSub: '물가 저렴', disaster: '우기', disasterSub: '해변 주의',
        temp: '열대 해양성', tempSub: '건기(11-4월) 해변 최적 시즌',
        fx: '태국 바트', fxSub: '원화 강세 · 현지 물가 저렴',
        baseAir: 22, baseHotel: 7, baseHotelLow: 5, baseHotelHigh: 18, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '빠똥 해변 산책', price: '무료', link: 'https://maps.google.com/?q=Patong+Beach+Phuket' },
            { name: '올드타운 구경', price: '무료', link: 'https://maps.google.com/?q=Phuket+Old+Town' },
            { name: '왓 찰롱 사원', price: '무료', link: 'https://maps.google.com/?q=Wat+Chalong+Phuket' }
          ],
          mid: [
            { name: '피피섬 당일 투어', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=phi+phi+island+day+tour+phuket' },
            { name: '제임스본드 섬 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=james+bond+island+phuket' },
            { name: '팡아만 카누 투어', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=phang+nga+bay+canoe+tour+phuket' }
          ],
          high: [
            { name: '프라이빗 요트 선셋 투어', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=yacht+sunset+tour+phuket' },
            { name: '수린 해변 프라이빗 다이빙', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=surin+beach+diving+phuket' },
            { name: '라차 섬 스노클링', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=racha+island+snorkeling+phuket' }
          ]
        },
        exps: {
          low: [
            { name: '빠똥 나이트 바자르', price: '무료', link: 'https://maps.google.com/?q=Patong+Night+Bazaar+Phuket' },
            { name: '방라로드 야경 산책', price: '무료', link: 'https://maps.google.com/?q=Bangla+Road+Patong+Phuket' },
            { name: '해변 타이 마사지', price: '약 1만원', link: 'https://maps.google.com/?q=Thai+Massage+Patong+Phuket' }
          ],
          mid: [
            { name: '피피섬 스노클링', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=phi+phi+island+snorkeling' },
            { name: '화이트워터 래프팅', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=white+water+rafting+phuket' },
            { name: '태국 요리 클래스', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=thai+cooking+class+phuket' }
          ],
          high: [
            { name: '요트 프라이빗 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=private+yacht+tour+phuket' },
            { name: '골프 라운딩', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=golf+course+phuket' },
            { name: '고급 스파 체험', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+phuket' }
          ]
        },
        food: {
          low: [
            { name: '팟타이 로컬 식당', desc: '태국 볶음 국수 · 5천원대', link: 'https://maps.google.com/?q=Pad+Thai+Local+Restaurant+Phuket' },
            { name: '쏨땀 파파야 샐러드', desc: '태국 명물 샐러드 · 매콤 상큼', link: 'https://maps.google.com/?q=Som+Tam+Papaya+Salad+Phuket' },
            { name: '야시장 BBQ', desc: '야시장 구이 해산물 타입', link: 'https://maps.google.com/?q=Night+Market+BBQ+Phuket' }
          ],
          mid: [
            { name: '해산물 시장 씨푸드 구이', desc: '라와이 시장 신선 해산물 직화', link: 'https://maps.google.com/?q=Rawai+Seafood+Market+Phuket' },
            { name: '태국 정통 코스 레스토랑', desc: '태국 전통 코스 레스토랑', link: 'https://maps.google.com/?q=Thai+Course+Restaurant+Phuket' },
            { name: '루프탑 선셋 바', desc: '루소 판타 루프탑 바 야경', link: 'https://maps.google.com/?q=Rooftop+Bar+Phuket' }
          ],
          high: [
            { name: '로얄 파라곤 파인다이닝', desc: '마리나 부틱 레스토랑', link: 'https://maps.google.com/?q=Royal+Phuket+Marina+Restaurant' },
            { name: '오션뷰 씨푸드 고급 레스토랑', desc: '카론 힐 오션뷰 파인다이닝', link: 'https://maps.google.com/?q=Ocean+View+Seafood+Restaurant+Phuket' },
            { name: '리조트 타이 퀴진', desc: '반얀트리 리조트 정통 타이 요리', link: 'https://maps.google.com/?q=Banyan+Tree+Phuket+Restaurant' }
          ]
        },
        hotels: {
          low: [
            { name: '빠똥 게스트하우스', stars: 2, desc: '방라로드 도보 · 배낭여행자 인기', priceRange: '약 4-7만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Patong+Guesthouse+Phuket&dest_type=city' },
            { name: '카론 비치 소형 호텔', stars: 2, desc: '카론 해변 도보 · 조용한 환경', priceRange: '약 5-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Karon+Beach+Hotel+Phuket&dest_type=city' }
          ],
          mid: [
            { name: '노보텔 빈티지 파크 푸켓', stars: 4, desc: '하버 중심 · 청년 개념 디자인', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Novotel+Vintage+Park+Phuket&dest_type=city' },
            { name: '인디고 호텔 올드타운', stars: 4, desc: '올드타운 중심 유럽풍 부티크', priceRange: '약 14-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Indigo+Phuket+Old+Town&dest_type=city' }
          ],
          high: [
            { name: '아나만타라 리조트 마이카오 푸켓', stars: 5, desc: '마이카우 해변 수상빌라 · 풀빌라', priceRange: '약 50-90만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Anantara+Phuket+Villas&dest_type=city' },
            { name: '반얀트리 푸켓', stars: 5, desc: '수린 해안 프라이빗 풀빌라 · 모던', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Banyan+Tree+Phuket&dest_type=city' }
          ]
        },
        hotelTips: ['빠똥(Patong) 나이트라이프 중심', '카타·카론 해변은 조용하고 가족 적합', '라와이·수린 지역은 고급 리조트 밀집', '우기(5-10월) 파도 높아 해수욕 제한'],
        cheapFlights: [
          { label: '에어아시아·비엣젯 (직항)', desc: '직항 6시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hkt/' },
          { label: '타이항공·진에어 (직항)', desc: '6시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hkt/' }
        ],
        flightTips: ['직항 6시간 · LCC 왕복 25-35만원', '방콕+푸켓 조합 7박8일 추천', '건기 성수기(12-3월) 항공권 2개월 전 예약', '피피섬은 당일치기 또는 숙박 가능']
      },
      {
        id: 'hongkong', name: '홍콩', sub: '동서양의 교차점 · 쇼핑과 야경', score: 70, isTop: false,
        photo: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?w=800&q=80',
        airfare: '28만원~', hotel: '호텔 비쌈', hotelSub: '3성급 12-20만원대', daily: '소비 보통', dailySub: '1일 8-14만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: 'HKD 강세', newsSub: '물가 상승 추세', disaster: '없음', disasterSub: '',
        temp: '아열대', tempSub: '10-3월 쾌적 · 여름 고온다습',
        fx: '홍콩 달러', fxSub: 'HKD 고정환율 · 물가 높은 편',
        baseAir: 28, baseHotel: 13, baseHotelLow: 11, baseHotelHigh: 25, minDays: 3, minBudget: 55,
        sights: {
          low: [
            { name: '빅토리아 피크 야경 (트램)', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=victoria+peak+tram+hongkong' },
            { name: '템플스트리트 야시장', price: '무료', link: 'https://maps.google.com/?q=Temple+Street+Night+Market+Hong+Kong' },
            { name: '침사추이 해변 산책로', price: '무료', link: 'https://maps.google.com/?q=Tsim+Sha+Tsui+Promenade+Hong+Kong' }
          ],
          mid: [
            { name: '빅토리아 피크 전망대', price: '약 0.5만원', link: 'https://maps.google.com/?q=Victoria+Peak+Hong+Kong' },
            { name: '란타우섬 천단대불', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=tian+tan+big+buddha+hong+kong' },
            { name: '리펄스베이 해변', price: '약 1만원', link: 'https://maps.google.com/?q=Repulse+Bay+Beach+Hong+Kong' }
          ],
          high: [
            { name: '디즈니랜드 홍콩', price: '약 11만원', link: 'https://www.klook.com/ko/search/?query=hong+kong+disneyland' },
            { name: '오션파크', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=ocean+park+hong+kong' },
            { name: '헬기 투어 야경', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=helicopter+tour+night+hong+kong' }
          ]
        },
        exps: {
          low: [
            { name: '몽콕 야시장 쇼핑', price: '무료', link: 'https://maps.google.com/?q=Mong+Kok+Night+Market+Hong+Kong' },
            { name: '홍콩 트램 (딩딩) 탑승', price: '약 0.4만원', link: 'https://maps.google.com/?q=Hong+Kong+Tram+Ding+Ding' },
            { name: '스타의 거리 야경 산책', price: '무료', link: 'https://maps.google.com/?q=Avenue+of+Stars+Hong+Kong' }
          ],
          mid: [
            { name: '란타우섬 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=lantau+island+tour+hong+kong' },
            { name: '홍콩 페리 투어', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=hong+kong+ferry+tour' },
            { name: '마카오 당일치기', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=macau+day+trip+hong+kong' }
          ],
          high: [
            { name: '마카오 카지노 호텔', price: '약 25만원', link: 'https://www.booking.com/searchresults.ko.html?ss=Macau+Casino+Hotel&dest_type=city' },
            { name: '헬리콥터 투어', price: '약 25만원', link: 'https://www.klook.com/ko/search/?query=helicopter+tour+hong+kong' },
            { name: '럭셔리 선상 디너', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=luxury+dinner+cruise+hong+kong' }
          ]
        },
        food: {
          low: [
            { name: '완탄면 차찬텡', desc: '홍콩 명물 완탄면 · 8천원대', link: 'https://maps.google.com/?q=Wonton+Noodle+Cha+Chaan+Teng+Hong+Kong' },
            { name: '딤섬 푸드코트', desc: '원익 딤섬 푸드코트', link: 'https://maps.google.com/?q=Dim+Sum+Food+Court+Hong+Kong' },
            { name: '에그 타르트', desc: '홍콩 명물 에그 타르트 · 1개 5천원', link: 'https://maps.google.com/?q=Egg+Tart+Hong+Kong' }
          ],
          mid: [
            { name: '야우마테이 딤섬 레스토랑', desc: '양촌 딤섬 전문 레스토랑', link: 'https://maps.google.com/?q=Yau+Ma+Tei+Dim+Sum+Restaurant+Hong+Kong' },
            { name: '사이쿵 씨푸드', desc: '사이쿵 마을 신선 해산물 전문점', link: 'https://maps.google.com/?q=Sai+Kung+Seafood+Hong+Kong' },
            { name: '란콰이퐁 바 거리', desc: '란콰이퐁 웨스턴 바 및 뒷골목거리', link: 'https://maps.google.com/?q=Lan+Kwai+Fong+Hong+Kong' }
          ],
          high: [
            { name: '미슐랭 광둥식 레스토랑', desc: '홍콩 미슐랭 고급 광둥오', link: 'https://maps.google.com/?q=Michelin+Cantonese+Restaurant+Hong+Kong' },
            { name: '루프탑 파인다이닝', desc: '카필 루프탑 파인다이닝', link: 'https://maps.google.com/?q=Rooftop+Fine+Dining+Hong+Kong' },
            { name: '페닌슐라 하이티', desc: '페닌슐라 호텔 하이티 코스', link: 'https://maps.google.com/?q=Peninsula+Hong+Kong+Afternoon+Tea' }
          ]
        },
        hotels: {
          low: [
            { name: '침사추이 소형 호텔', stars: 3, desc: '침사추이 도보 10분 · 가성비 우수', priceRange: '약 9-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Tsim+Sha+Tsui+Hotel+Hong+Kong&dest_type=city' },
            { name: '몽콕 게스트하우스', stars: 2, desc: '쇼핑 군심 · 나탈스 부소시장 상권인구', priceRange: '약 8-14만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mong+Kok+Guesthouse+Hong+Kong&dest_type=city' }
          ],
          mid: [
            { name: '롤린스 호텔 침사추이', stars: 4, desc: '일복지식구 이동 편리 · 하버 전망', priceRange: '약 18-28만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Roulins+Hotel+Tsim+Sha+Tsui&dest_type=city' },
            { name: '홍콩 스카이시티 매리어트', stars: 4, desc: '공항 연결 · 라운지 접수 우수', priceRange: '약 20-32만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hong+Kong+Skycity+Marriott&dest_type=city' }
          ],
          high: [
            { name: '페닌슐라 홍콩', stars: 5, desc: 'Asia 최고 호텔 · 무세포이운트 전망', priceRange: '약 55-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Peninsula+Hong+Kong&dest_type=city' },
            { name: '만다린 오리엔탈 홍콩', stars: 5, desc: '센트럴 홍콩섬 · 성인 전용 분위기', priceRange: '약 45-85만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Hong+Kong&dest_type=city' }
          ]
        },
        hotelTips: ['침사추이·몽콕 지역이 쇼핑·관광 허브', '홍콩섬(센트럴) 은 업무·고급 지구', '숙박비가 비싸 3박 이내 일정 추천', '마카오 페리 이동 시 페리 터미널 근처 숙박 유리'],
        cheapFlights: [
          { label: '캐세이퍼시픽·홍콩항공 (직항)', desc: '직항 3.5시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hkg/' },
          { label: '제주항공·진에어 (직항)', desc: '3.5시간 직항 · 왕복 15만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hkg/' }
        ],
        flightTips: ['직항 3.5시간 · LCC 왕복 15-20만원', '홍콩+마카오 3박4일 조합 인기', '옥토퍼스 카드(교통카드) 공항에서 즉시 구입', '마카오는 페리 1시간 · 별도 비자 불필요']
      },
      {
        id: 'guam', name: '괌', sub: '미국령 · 가까운 미국, 청록 바다', score: 73, isTop: false,
        photo: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
        airfare: '30만원~', hotel: '호텔 보통', hotelSub: '3성급 10-16만원대', daily: '소비 보통', dailySub: '1일 7-12만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '달러 강세', newsSub: '환율 불리', disaster: '태풍', disasterSub: '7-11월 주의',
        temp: '열대 해양성', tempSub: '연중 온난 · 12-5월 건기 추천',
        fx: '미국 달러', fxSub: '달러 결제 · 환율 변동 체크',
        baseAir: 30, baseHotel: 11, baseHotelLow: 9, baseHotelHigh: 20, minDays: 4, minBudget: 55,
        sights: {
          low: [
            { name: '투몬 비치 산책', price: '무료', link: 'https://maps.google.com/?q=Tumon+Beach+Guam' },
            { name: 'DFS 갤러리아 구경', price: '무료', link: 'https://maps.google.com/?q=DFS+Galleria+Guam' },
            { name: '아가냐 성당', price: '무료', link: 'https://maps.google.com/?q=Agana+Cathedral+Guam' }
          ],
          mid: [
            { name: '아웃리거 리조트 수상 액티비티', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=water+sports+guam' },
            { name: '사랑의 절벽 전망', price: '약 0.5만원', link: 'https://maps.google.com/?q=Lovers+Point+Guam' },
            { name: '피에스타 음식 축제', price: '약 3만원', link: 'https://maps.google.com/?q=Chamorro+Village+Guam' }
          ],
          high: [
            { name: '언더워터 월드 아쿠아리움', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=underwater+world+aquarium+guam' },
            { name: '스카이다이빙 체험', price: '약 25만원', link: 'https://www.klook.com/ko/search/?query=skydiving+guam' },
            { name: '골프 라운딩', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=golf+guam' }
          ]
        },
        exps: {
          low: [
            { name: '투몬 해변 스노클링', price: '무료', link: 'https://maps.google.com/?q=Tumon+Beach+Snorkeling+Guam' },
            { name: '섬 북부 드라이브', price: '무료', link: 'https://maps.google.com/?q=Guam+North+Drive' },
            { name: '야간 쇼핑몰 투어', price: '무료', link: 'https://maps.google.com/?q=Micronesia+Mall+Guam' }
          ],
          mid: [
            { name: '제트 스키·바나나 보트', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=jet+ski+banana+boat+guam' },
            { name: '세일링 투어', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=sailing+tour+guam' },
            { name: '스쿠버 다이빙 체험', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=scuba+diving+guam' }
          ],
          high: [
            { name: '프라이빗 비치 파티', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=private+beach+party+guam' },
            { name: '헬기 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=helicopter+tour+guam' },
            { name: '딥 씨 낚시', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=deep+sea+fishing+guam' }
          ]
        },
        food: {
          low: [
            { name: '차모로 전통 음식', desc: '현지 차모로 음식 · 1만원대', link: 'https://maps.google.com/?q=Chamorro+Village+Food+Guam' },
            { name: '맥도날드·KFC 패스트푸드', desc: '미국 패스트푸드 · 저렴한 한 끼', link: 'https://maps.google.com/?q=McDonalds+Guam' },
            { name: '야시장 BBQ', desc: '차모로 야시장 BBQ', link: 'https://maps.google.com/?q=Chamorro+Village+Night+Market+Guam' }
          ],
          mid: [
            { name: '해산물 레스토랑', desc: '투몬 해산물 전문 레스토랑', link: 'https://maps.google.com/?q=Seafood+Restaurant+Tumon+Guam' },
            { name: '미국식 스테이크하우스', desc: '미국령 스타일 스테이크', link: 'https://maps.google.com/?q=Steakhouse+Guam' },
            { name: '투몬 뷔페', desc: '리조트 뷔페 · 투몬 중심', link: 'https://maps.google.com/?q=Buffet+Tumon+Guam' }
          ],
          high: [
            { name: '로이스 레스토랑 파인다이닝', desc: '괌 최고급 파인다이닝 레스토랑', link: 'https://maps.google.com/?q=Roy+s+Restaurant+Guam' },
            { name: '리조트 씨푸드 뷔페', desc: '하얏트 씨푸드 뷔페 코스', link: 'https://maps.google.com/?q=Hyatt+Regency+Guam+Restaurant' },
            { name: '선셋 크루즈 디너', desc: '선셋 크루즈 디너 코스', link: 'https://www.klook.com/ko/search/?query=sunset+cruise+dinner+guam' }
          ]
        },
        hotels: {
          low: [
            { name: '투몬 지역 소형 호텔', stars: 3, desc: '투몬 비치 중심 · 가성비 우수', priceRange: '약 8-13만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Tumon+Hotel+Guam&dest_type=city' },
            { name: '비즈니스 이코노미 호텔', stars: 2, desc: '실용적 비즈니스 호텔 · 아가냐 인근', priceRange: '약 6-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Economy+Hotel+Guam&dest_type=city' }
          ],
          mid: [
            { name: '괌 플라자 리조트', stars: 4, desc: '투몬 중심 · 수영장·스파 포함', priceRange: '약 14-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Guam+Plaza+Resort&dest_type=city' },
            { name: '아웃리거 괌 비치 리조트', stars: 4, desc: '비치프런트 · 수상액티비티 패키지', priceRange: '약 16-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Outrigger+Guam+Beach+Resort&dest_type=city' }
          ],
          high: [
            { name: '하얏트 리젠시 괌', stars: 5, desc: '투몬 최고급 · 인피니티풀·스파 포함', priceRange: '약 30-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hyatt+Regency+Guam&dest_type=city' },
            { name: '두짓 비치 리조트', stars: 5, desc: '태국계 럭셔리 리조트 · 비치프런트', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Dusit+Beach+Resort+Guam&dest_type=city' }
          ]
        },
        hotelTips: ['투몬(Tumon) 지역이 쇼핑·해변 중심', '리조트 내 액티비티 패키지 알뜰', '렌터카 있으면 섬 전체 투어 편리', '태풍 시즌(7-11월) 항공 취소 리스크'],
        cheapFlights: [
          { label: '유나이티드항공·제주항공 (직항)', desc: '직항 4시간 · 왕복 35만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/gum/' },
          { label: '아시아나·대한항공 (직항)', desc: '4시간 · 왕복 35만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/gum/' }
        ],
        flightTips: ['직항 4시간 · 가장 가까운 미국 영토', 'LCC 왕복 35-45만원대', 'ESTA 전자여행허가 사전 신청 필수', '괌+사이판 연계 여행 가능']
      },
      {
        id: 'hawaii', name: '하와이', sub: '미국 · 태평양의 낙원', score: 72, isTop: false,
        photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        airfare: '65만원~', hotel: '호텔 비쌈', hotelSub: '3성급 18-30만원대', daily: '소비 많음', dailySub: '1일 15-25만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '달러 강세', newsSub: '환율 불리', disaster: '화산', disasterSub: '화산 주의',
        temp: '열대 해양성', tempSub: '연중 쾌적 · 4-9월 서핑 최적',
        fx: '미국 달러', fxSub: '달러 결제 · 환율 변동 체크',
        baseAir: 65, baseHotel: 22, baseHotelLow: 18, baseHotelHigh: 40, minDays: 7, minBudget: 150,
        sights: {
          low: [
            { name: '와이키키 비치', price: '무료', link: 'https://maps.google.com/?q=Waikiki+Beach+Hawaii' },
            { name: '다이아몬드 헤드 트레킹', price: '약 0.6만원', link: 'https://www.klook.com/ko/search/?query=diamond+head+hiking+hawaii' },
            { name: '할레이와 마을 드라이브', price: '무료', link: 'https://maps.google.com/?q=Haleiwa+Town+Hawaii' }
          ],
          mid: [
            { name: '오아후 노스쇼어 서핑 관람', price: '무료', link: 'https://maps.google.com/?q=North+Shore+Oahu+Hawaii' },
            { name: '진주만 추모관', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=pearl+harbor+memorial+hawaii' },
            { name: '돌 파인애플 농장', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=dole+pineapple+plantation+hawaii' }
          ],
          high: [
            { name: '마우이 헬기 투어', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=maui+helicopter+tour+hawaii' },
            { name: '빅아일랜드 화산 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=big+island+volcano+tour+hawaii' },
            { name: '카타마란 스노클링 크루즈', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=catamaran+snorkeling+cruise+hawaii' }
          ]
        },
        exps: {
          low: [
            { name: '와이키키 일몰 감상', price: '무료', link: 'https://maps.google.com/?q=Waikiki+Sunset+Hawaii' },
            { name: '할레이와 새우 트럭', price: '약 1.5만원', link: 'https://maps.google.com/?q=Shrimp+Truck+Haleiwa+Hawaii' },
            { name: '알라 모아나 쇼핑센터', price: '무료', link: 'https://maps.google.com/?q=Ala+Moana+Center+Hawaii' }
          ],
          mid: [
            { name: '서핑 레슨 (오아후)', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=surfing+lesson+oahu+hawaii' },
            { name: '돌고래 스노클링', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=dolphin+snorkeling+hawaii' },
            { name: '루아우 하와이 전통 공연', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=luau+traditional+show+hawaii' }
          ],
          high: [
            { name: '마우이 선라이즈 할레아칼라 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=haleakala+sunrise+tour+maui' },
            { name: '카약·스노클링 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=kayak+snorkeling+tour+hawaii' },
            { name: '빅아일랜드 마우나케아 별빛 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=mauna+kea+stargazing+tour+big+island' }
          ]
        },
        food: {
          low: [
            { name: '포케 볼', desc: '하와이 명물 포케 볼 · 1.5만원', link: 'https://maps.google.com/?q=Poke+Bowl+Honolulu+Hawaii' },
            { name: '로코모코', desc: '하와이식 달걀+햄버거 덮밥 · 1.2만원', link: 'https://maps.google.com/?q=Loco+Moco+Hawaii' },
            { name: '푸드트럭 갈릭 새우', desc: '노스쇼어 명물 갈릭 새우 트럭', link: 'https://maps.google.com/?q=Garlic+Shrimp+Truck+North+Shore+Hawaii' }
          ],
          mid: [
            { name: '알라 모아나 레스토랑', desc: '알라 모아나 쇼핑몰 내 다양한 레스토랑', link: 'https://maps.google.com/?q=Ala+Moana+Restaurant+Hawaii' },
            { name: '거닌스 햄버거', desc: '하와이 명물 수제 버거 · 와이키키', link: 'https://maps.google.com/?q=Gunnies+Burger+Waikiki+Hawaii' },
            { name: '파인애플 룸 다이닝', desc: '돌 농장 레스토랑 파인애플 요리', link: 'https://maps.google.com/?q=Pineapple+Room+Restaurant+Hawaii' }
          ],
          high: [
            { name: '노부 와이키키 파인다이닝', desc: '노부 셰프의 일식 융합 파인다이닝', link: 'https://maps.google.com/?q=Nobu+Waikiki+Hawaii' },
            { name: '르 메르 리조트 디너', desc: '포시즌스 오아후 해변 레스토랑', link: 'https://maps.google.com/?q=La+Mer+Restaurant+Honolulu+Hawaii' },
            { name: '선셋 크루즈 디너', desc: '와이키키 선셋 디너 크루즈', link: 'https://www.klook.com/ko/search/?query=sunset+dinner+cruise+waikiki+hawaii' }
          ]
        },
        hotels: {
          low: [
            { name: '호놀룰루 에어비앤비', stars: 2, desc: '와이키키 인근 · 합리적 가격', priceRange: '약 12-20만원/박', link: 'https://www.airbnb.co.kr/s/Honolulu--Hawaii/homes' },
            { name: '와이키키 소형 호텔', stars: 3, desc: '와이키키 비치 도보 · 기본 시설', priceRange: '약 15-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Waikiki+Hotel+Honolulu&dest_type=city' }
          ],
          mid: [
            { name: '힐튼 하와이안 빌리지', stars: 4, desc: '와이키키 최대 리조트 · 라군 수영장', priceRange: '약 28-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hilton+Hawaiian+Village&dest_type=city' },
            { name: '아웃리거 와이키키', stars: 4, desc: '비치프런트 · 서프보드 렌탈 포함', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Outrigger+Waikiki+Beach+Resort&dest_type=city' }
          ],
          high: [
            { name: '모아나 서프라이더 웨스틴', stars: 5, desc: '하와이 최초 호텔 · 역사적 건물', priceRange: '약 45-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Moana+Surfrider+Westin+Waikiki&dest_type=city' },
            { name: '포시즌스 리조트 오아후', stars: 5, desc: '코올리나 해변 · 최고급 풀빌라', priceRange: '약 60-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Resort+Oahu&dest_type=city' }
          ]
        },
        hotelTips: ['와이키키 지역이 해변·쇼핑 중심', '카일루아·노스쇼어는 렌터카 필수', '최소 7박 이상 여유롭게 일정 잡기', 'ESTA 전자여행허가 사전 신청 필수'],
        cheapFlights: [
          { label: '하와이안항공 (직항)', desc: '9.5시간 · 왕복 80만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hnl/' },
          { label: '대한항공·아시아나 (직항)', desc: '직항 9.5시간 · 왕복 80만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/hnl/' }
        ],
        flightTips: ['직항 9.5시간 · 왕복 80-120만원', '성수기(6-8월) 항공권 3-4개월 전 예약', '이웃 섬(마우이·빅아일랜드) 국내선 추가', 'ESTA 사전 신청 · 왕복 항공+호텔 패키지 유리']
      },
      {
        id: 'paris', name: '파리', sub: '프랑스 · 예술과 낭만의 도시', score: 58, isTop: false,
        photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
        airfare: '80만원~', hotel: '호텔 비쌈', hotelSub: '3성급 18-30만원대', daily: '소비 많음', dailySub: '1일 15-25만원',
        alert: '여행유의', alertSub: '소매치기 주의', news: '유로 강세', newsSub: '물가 높음', disaster: '없음', disasterSub: '',
        temp: '서유럽 대륙성', tempSub: '봄(4-5월)·가을(9-10월) 최적',
        fx: '유로', fxSub: '유로 강세 · 고물가 도시',
        baseAir: 80, baseHotel: 20, baseHotelLow: 17, baseHotelHigh: 45, minDays: 7, minBudget: 180,
        sights: {
          low: [
            { name: '에펠탑 외관', price: '무료', link: 'https://maps.google.com/?q=Eiffel+Tower+Paris' },
            { name: '노트르담 성당', price: '무료', link: 'https://maps.google.com/?q=Notre+Dame+Cathedral+Paris' },
            { name: '몽마르트르 언덕 산책', price: '무료', link: 'https://maps.google.com/?q=Montmartre+Hill+Paris' }
          ],
          mid: [
            { name: '루브르 박물관', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=louvre+museum+paris' },
            { name: '베르사유 궁전', price: '약 2.5만원', link: 'https://www.klook.com/ko/search/?query=versailles+palace+paris' },
            { name: '오르세 미술관', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=orsay+museum+paris' }
          ],
          high: [
            { name: '에펠탑 정상 야간', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=eiffel+tower+top+night+paris' },
            { name: '센강 크루즈', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=seine+river+cruise+paris' }
          ]
        },
        exps: {
          low: [
            { name: '마레 지구 갤러리 탐방', price: '무료', link: 'https://maps.google.com/?q=Le+Marais+Paris' },
            { name: '몽마르트르 화가 거리', price: '무료', link: 'https://maps.google.com/?q=Place+du+Tertre+Montmartre+Paris' },
            { name: '튈르리 공원 피크닉', price: '무료', link: 'https://maps.google.com/?q=Tuileries+Garden+Paris' }
          ],
          mid: [
            { name: '센강 유람선 크루즈', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=seine+river+cruise+paris' },
            { name: '몽생미셸 당일 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=mont+saint+michel+day+trip+paris' },
            { name: '베르사유 궁전 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=versailles+guided+tour+paris' }
          ],
          high: [
            { name: '루브르 야간 프라이빗 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=louvre+private+night+tour' },
            { name: '오페라 가르니에 공연', price: '약 10만원', link: 'https://maps.google.com/?q=Opera+Garnier+Paris' },
            { name: '와인 산지 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=champagne+wine+region+tour+paris' }
          ]
        },
        food: {
          low: [
            { name: '바게트 샌드위치', desc: '파리 명물 바게트 샌드위치 · 5천원', link: 'https://maps.google.com/?q=Baguette+Sandwich+Paris' },
            { name: '크레페 카르티에 라탱', desc: '라틴 지구 명물 크레페 · 8천원', link: 'https://maps.google.com/?q=Crepe+Quartier+Latin+Paris' },
            { name: '벼룩시장 스낵', desc: '클리냥쿠르 벼룩시장 간식', link: 'https://maps.google.com/?q=Porte+de+Clignancourt+Flea+Market+Paris' }
          ],
          mid: [
            { name: '비스트로 3코스 런치', desc: '파리 전통 비스트로 3코스', link: 'https://maps.google.com/?q=Bistro+Paris+France' },
            { name: '파리 카페 크루아상', desc: '파리 감성 카페 크루아상', link: 'https://maps.google.com/?q=Cafe+Croissant+Paris' },
            { name: '마레 팔라펠', desc: '마레 지구 유대식 팔라펠', link: 'https://maps.google.com/?q=Falafel+Le+Marais+Paris' }
          ],
          high: [
            { name: '미슐랭 3스타 레스토랑', desc: '파리 최고급 미슐랭 파인다이닝', link: 'https://maps.google.com/?q=Michelin+3+Star+Restaurant+Paris' },
            { name: '조엘 로부숑 디너', desc: '전설적 셰프의 파인다이닝 코스', link: 'https://maps.google.com/?q=Joel+Robuchon+Restaurant+Paris' },
            { name: '골든 트라이앵글 럭셔리', desc: '상젤리제 황금 구역 고급 레스토랑', link: 'https://maps.google.com/?q=Golden+Triangle+Restaurant+Paris' }
          ]
        },
        hotels: {
          low: [
            { name: '마레 구역 부티크 호스텔', stars: 2, desc: '마레 지구 · 도보 관광 최적', priceRange: '약 10-16만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Le+Marais+Hostel+Paris&dest_type=city' },
            { name: '10구 소형 부티크호텔', stars: 3, desc: '메트로 접근 편리 · 감성 인테리어', priceRange: '약 14-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Boutique+Hotel+10th+Arrondissement+Paris&dest_type=city' }
          ],
          mid: [
            { name: '호텔 드 루브르', stars: 4, desc: '루브르 박물관 맞은편 · 파리 중심', priceRange: '약 28-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+du+Louvre+Paris&dest_type=city' },
            { name: '르 마리 스트라스부르 호텔', stars: 4, desc: '마레 지구 감성 부티크 호텔', priceRange: '약 22-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Le+Marais+Hotel+Paris&dest_type=city' }
          ],
          high: [
            { name: '파리 리츠 호텔', stars: 5, desc: '방돔 광장 · 파리 최고급 역사 호텔', priceRange: '약 100-200만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ritz+Paris&dest_type=city' },
            { name: '르 브리스톨', stars: 5, desc: '포부르 생토노레 · 독보적 럭셔리', priceRange: '약 80-160만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Le+Bristol+Paris&dest_type=city' }
          ]
        },
        hotelTips: ['1·2·3구 역사 중심부 추천', '메트로 근처 숙소가 이동 편리', '소매치기 주의 · 귀중품 분산 보관', '파리 패스(Paris Pass) 구입으로 관광지 절약'],
        cheapFlights: [
          { label: '에어프랑스·대한항공 (직항)', desc: '직항 12시간 · 왕복 90만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cdg/' },
          { label: '에미레이트·카타르항공 (경유)', desc: '약 15시간 · 왕복 60만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/cdg/' }
        ],
        flightTips: ['직항 12시간 · 왕복 90-130만원', '경유 항공 이용 시 60-80만원대 가능', '파리+런던+암스테르담 유럽 루트 인기', '쉥겐 비자 무필요 (90일 이내 무비자)']
      },
      {
        id: 'kualalumpur', name: '쿠알라룸푸르', sub: '말레이시아 수도 · 다문화와 쇼핑 천국', score: 66, isTop: false,
        photo: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
        airfare: '25만원~', hotel: '호텔 저렴', hotelSub: '3성급 5-10만원대', daily: '소비 적음', dailySub: '1일 5-9만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '물가 안정', newsSub: '물가 저렴', disaster: '없음', disasterSub: '',
        temp: '열대 우림', tempSub: '연중 고온다습 · 실내 냉방 쾌적',
        fx: '말레이시아 링깃', fxSub: '원화 강세 · 현지 물가 저렴',
        baseAir: 25, baseHotel: 6, baseHotelLow: 5, baseHotelHigh: 15, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '페트로나스 트윈타워 외관', price: '무료', link: 'https://maps.google.com/?q=Petronas+Twin+Towers+Kuala+Lumpur' },
            { name: 'KLCC 파크', price: '무료', link: 'https://maps.google.com/?q=KLCC+Park+Kuala+Lumpur' },
            { name: '부킷 빈탕 쇼핑 거리', price: '무료', link: 'https://maps.google.com/?q=Bukit+Bintang+Kuala+Lumpur' }
          ],
          mid: [
            { name: '페트로나스 타워 전망대', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=petronas+tower+observation+deck' },
            { name: '바투 동굴 힌두 사원', price: '무료', link: 'https://maps.google.com/?q=Batu+Caves+Kuala+Lumpur' },
            { name: 'KL 버드 파크', price: '약 2.5만원', link: 'https://www.klook.com/ko/search/?query=kl+bird+park+kuala+lumpur' }
          ],
          high: [
            { name: '겐팅 하이랜드 카지노 리조트', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=genting+highlands+resort+kuala+lumpur' },
            { name: '랑카위 섬 1박 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=langkawi+island+tour' },
            { name: 'KL 타워 360도 전망대', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=kl+tower+observation+deck' }
          ]
        },
        exps: {
          low: [
            { name: '차이나타운 쁘땅 거리 탐방', price: '무료', link: 'https://maps.google.com/?q=Petaling+Street+Chinatown+Kuala+Lumpur' },
            { name: '페탈링 자야 야시장', price: '무료', link: 'https://maps.google.com/?q=Petaling+Jaya+Night+Market' },
            { name: '무르데카 광장 산책', price: '무료', link: 'https://maps.google.com/?q=Merdeka+Square+Kuala+Lumpur' }
          ],
          mid: [
            { name: '바투 동굴 힌두 축제 체험', price: '무료', link: 'https://maps.google.com/?q=Batu+Caves+Festival+Kuala+Lumpur' },
            { name: '말레이 요리 클래스', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=malay+cooking+class+kuala+lumpur' },
            { name: '부킷 빈탕 나이트 투어', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=bukit+bintang+night+tour+kuala+lumpur' }
          ],
          high: [
            { name: '랑카위 리조트 1박', price: '약 25만원', link: 'https://www.booking.com/searchresults.ko.html?ss=Langkawi+Resort&dest_type=city' },
            { name: '고급 스파 트리트먼트', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+kuala+lumpur' },
            { name: 'KL 루프탑 칵테일 바', price: '약 5만원', link: 'https://maps.google.com/?q=Rooftop+Bar+Kuala+Lumpur' }
          ]
        },
        food: {
          low: [
            { name: '나시르막', desc: '말레이 명물 코코넛 라이스 · 5천원', link: 'https://maps.google.com/?q=Nasi+Lemak+Kuala+Lumpur' },
            { name: '차 크웨테오', desc: '말레이식 볶음 면 · 6천원', link: 'https://maps.google.com/?q=Char+Kway+Teow+Kuala+Lumpur' },
            { name: '로티 차나이', desc: '인도식 플랫브레드 커리 · 3천원', link: 'https://maps.google.com/?q=Roti+Canai+Kuala+Lumpur' }
          ],
          mid: [
            { name: '페트로나스 쇼핑몰 레스토랑', desc: 'KLCC 쇼핑몰 내 다양한 레스토랑', link: 'https://maps.google.com/?q=KLCC+Suria+Food+Court+Kuala+Lumpur' },
            { name: '말레이 씨푸드 코스', desc: '말레이 전통 씨푸드 코스', link: 'https://maps.google.com/?q=Malay+Seafood+Restaurant+Kuala+Lumpur' },
            { name: '부킷 빈탕 퓨전 다이닝', desc: '부킷 빈탕 현대 퓨전 레스토랑', link: 'https://maps.google.com/?q=Fusion+Dining+Bukit+Bintang+Kuala+Lumpur' }
          ],
          high: [
            { name: '스카이 다이닝 페트로나스 전망', desc: '타워 내 전망 파인다이닝', link: 'https://maps.google.com/?q=Sky+Dining+Petronas+Kuala+Lumpur' },
            { name: 'THIRTY8 루프탑 바', desc: '그랜드 하얏트 38층 루프탑 바', link: 'https://maps.google.com/?q=THIRTY8+Rooftop+Restaurant+KL' },
            { name: '고급 말레이 퀴진', desc: '만다린 오리엔탈 전통 말레이 요리', link: 'https://maps.google.com/?q=Mandarin+Oriental+Restaurant+Kuala+Lumpur' }
          ]
        },
        hotels: {
          low: [
            { name: '부킷 빈탕 게스트하우스', stars: 2, desc: '쇼핑 중심 · 도보 관광 편리', priceRange: '약 3-6만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Bukit+Bintang+Guesthouse+Kuala+Lumpur&dest_type=city' },
            { name: 'KLCC 근처 소형 호텔', stars: 3, desc: '페트로나스 타워 도보 · 실용적', priceRange: '약 5-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=KLCC+Hotel+Kuala+Lumpur&dest_type=city' }
          ],
          mid: [
            { name: '샹그릴라 호텔 KL', stars: 4, desc: 'KLCC 인근 · 대형 풀장 포함', priceRange: '약 14-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Shangri+La+Hotel+Kuala+Lumpur&dest_type=city' },
            { name: '스타힐 갤러리 호텔', stars: 4, desc: '부킷 빈탕 명품 쇼핑 연결', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=StarHill+Gallery+Hotel+Kuala+Lumpur&dest_type=city' }
          ],
          high: [
            { name: '만다린 오리엔탈 KL', stars: 5, desc: 'KLCC 직결 · 페트로나스 타워 전망', priceRange: '약 28-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Kuala+Lumpur&dest_type=city' },
            { name: '포시즌스 KL', stars: 5, desc: '현대적 럭셔리 · 무제한 스파 포함', priceRange: '약 35-65만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Kuala+Lumpur&dest_type=city' }
          ]
        },
        hotelTips: ['KLCC·부킷 빈탕 지역 중심 추천', '그랩(Grab) 앱 필수 · 저렴하고 안전', '무슬림 문화 존중 · 의복 주의', '랑카위·페낭 국내선 연계 추천'],
        cheapFlights: [
          { label: '에어아시아 (직항)', desc: '직항 6.5시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kul/' },
          { label: '말레이시아항공·진에어 (직항)', desc: '6.5시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/kul/' }
        ],
        flightTips: ['직항 6.5시간 · 에어아시아 저가 강점', 'LCC 왕복 20-30만원대 특가 자주 발생', 'KL+랑카위 또는 KL+페낭 조합 추천', '에어아시아 수화물 추가 비용 확인 필수']
      },
      {
        id: 'maldives', name: '몰디브', sub: '인도양 · 세상 끝의 수상 빌라', score: 68, isTop: false,
        photo: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
        airfare: '55만원~', hotel: '호텔 매우 비쌈', hotelSub: '수상 빌라 30-80만원대', daily: '소비 많음', dailySub: '1일 20-40만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: '수요 증가', newsSub: '럭셔리 트렌드', disaster: '없음', disasterSub: '',
        temp: '열대 해양성', tempSub: '12-4월 건기 최적 · 맑고 잔잔한 바다',
        fx: '몰디브 루피야', fxSub: '리조트 달러 결제 · 물가 매우 높음',
        baseAir: 55, baseHotel: 35, baseHotelLow: 28, baseHotelHigh: 80, minDays: 5, minBudget: 200,
        sights: {
          low: [
            { name: '말레 시내 산책', price: '무료', link: 'https://maps.google.com/?q=Male+City+Maldives' },
            { name: '국립 박물관', price: '약 0.3만원', link: 'https://maps.google.com/?q=National+Museum+Male+Maldives' },
            { name: '로컬 섬 방문', price: '약 1만원', link: 'https://maps.google.com/?q=Local+Island+Maldives' }
          ],
          mid: [
            { name: '수상 빌라 스노클링', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=overwater+villa+snorkeling+maldives' },
            { name: '돌고래 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=dolphin+tour+maldives' },
            { name: '석양 크루즈', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=sunset+cruise+maldives' }
          ],
          high: [
            { name: '수중 레스토랑 다이닝', price: '약 30만원', link: 'https://maps.google.com/?q=Ithaa+Undersea+Restaurant+Maldives' },
            { name: '수상비행기 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=seaplane+tour+maldives' },
            { name: '프리미엄 다이빙', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=premium+diving+maldives' }
          ]
        },
        exps: {
          low: [
            { name: '리조트 하우스 리프 스노클링', price: '무료', link: 'https://maps.google.com/?q=House+Reef+Snorkeling+Maldives' },
            { name: '로컬 섬 문화 체험', price: '약 1만원', link: 'https://maps.google.com/?q=Local+Island+Culture+Maldives' },
            { name: '비치 산책 무인도 방문', price: '무료', link: 'https://maps.google.com/?q=Sandbank+Maldives' }
          ],
          mid: [
            { name: '스쿠버 다이빙', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=scuba+diving+maldives' },
            { name: '카이트 서핑 레슨', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=kite+surfing+lesson+maldives' },
            { name: '야광 플랑크톤 야간 수영', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=bioluminescent+plankton+maldives' }
          ],
          high: [
            { name: '수상 빌라 단독 체험', price: '약 50만원+', link: 'https://www.booking.com/searchresults.ko.html?ss=Overwater+Villa+Maldives&dest_type=city' },
            { name: '프라이빗 샌드뱅크 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=private+sandbank+maldives' },
            { name: '헬기 환초 투어', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=helicopter+atoll+tour+maldives' }
          ]
        },
        food: {
          low: [
            { name: '리조트 포함 조식', desc: '리조트 조식 뷔페 · 패키지 포함', link: 'https://maps.google.com/?q=Resort+Breakfast+Maldives' },
            { name: '로컬 섬 어부 생선 요리', desc: '로컬 섬 신선 생선 요리', link: 'https://maps.google.com/?q=Local+Fish+Curry+Maldives' },
            { name: '인도양 씨푸드 바베큐', desc: '비치 씨푸드 바비큐', link: 'https://maps.google.com/?q=Beach+Seafood+BBQ+Maldives' }
          ],
          mid: [
            { name: '리조트 올인클루시브 패키지', desc: '식음료 포함 올인클루시브', link: 'https://www.booking.com/searchresults.ko.html?ss=Maldives+All+Inclusive+Resort&dest_type=city' },
            { name: '비치 씨푸드 그릴', desc: '해변 씨푸드 그릴 다이닝', link: 'https://maps.google.com/?q=Beach+Seafood+Grill+Maldives' },
            { name: '선셋 칵테일 디너', desc: '선셋 뷰 칵테일 다이닝', link: 'https://maps.google.com/?q=Sunset+Cocktail+Dinner+Maldives' }
          ],
          high: [
            { name: '수중 레스토랑 씨푸드', desc: '세계 유일 수중 레스토랑 이타아', link: 'https://maps.google.com/?q=Ithaa+Undersea+Restaurant+Maldives' },
            { name: '프라이빗 비치 다이닝', desc: '프라이빗 모래섬 비치 파인다이닝', link: 'https://maps.google.com/?q=Private+Beach+Dining+Maldives' },
            { name: 'VIP 셰프 테이블', desc: '전용 셰프 프라이빗 코스', link: 'https://maps.google.com/?q=Chef+Table+Private+Dining+Maldives' }
          ]
        },
        hotels: {
          low: [
            { name: '게스트하우스 로컬 섬', stars: 2, desc: '로컬 섬 저렴한 숙박 · 진정성 체험', priceRange: '약 8-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Guesthouse+Local+Island+Maldives&dest_type=city' },
            { name: '3성급 시티 호텔 (말레)', stars: 3, desc: '말레 시티 호텔 · 공항 접근 편리', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=City+Hotel+Male+Maldives&dest_type=city' }
          ],
          mid: [
            { name: '아다란 셀렉트 메드후파루', stars: 4, desc: '올인클루시브 리조트 · 가성비 우수', priceRange: '약 30-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Adaaran+Select+Meedhupparu&dest_type=city' },
            { name: '코모 코코아 아일랜드', stars: 4, desc: '수상 방갈로 · 다이빙 전문', priceRange: '약 40-70만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Como+Cocoa+Island+Maldives&dest_type=city' }
          ],
          high: [
            { name: '소네바 주시 몰디브', stars: 5, desc: '세계 최고급 에코 럭셔리 리조트', priceRange: '약 100-200만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Soneva+Jani+Maldives&dest_type=city' },
            { name: '식스 센시스 라무', stars: 5, desc: '라무 환초 프라이빗 럭셔리 리조트', priceRange: '약 80-160만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Six+Senses+Laamu+Maldives&dest_type=city' }
          ]
        },
        hotelTips: ['수상 빌라(오버워터 빌라)가 핵심 경험', '리조트 자체가 섬 · 스피드보트·수상비행기 이동', '올인클루시브 패키지가 비용 예측에 유리', '허니문·특별한 기념일에 최적'],
        cheapFlights: [
          { label: '스리랑카항공 (콜롬보 경유)', desc: '약 10시간 · 왕복 60만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mle/' },
          { label: '인디고·에어인디아 (델리 경유)', desc: '약 12시간 · 왕복 65만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mle/' }
        ],
        flightTips: ['직항 없음 · 경유 12-16시간', '왕복 항공 60-100만원 + 리조트 이동 별도', '스피드보트 or 세플레인 이동 예약 필수', '허니문 패키지 이용 시 항공+리조트 묶음 유리']
      },
      {
        id: 'sydney', name: '시드니', sub: '호주 · 오페라하우스와 황금 해변', score: 62, isTop: false,
        photo: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
        airfare: '70만원~', hotel: '호텔 비쌈', hotelSub: '3성급 18-28만원대', daily: '소비 많음', dailySub: '1일 15-22만원',
        alert: '경보 없음', alertSub: '안전한 여행지', news: 'AUD 변동', newsSub: '환율 모니터링', disaster: '산불', disasterSub: '12-2월 주의',
        temp: '온대 해양성', tempSub: '봄(9-11월)·가을(3-5월) 최적',
        fx: '호주 달러', fxSub: '원화 대비 변동 · 물가 높은 편',
        baseAir: 70, baseHotel: 20, baseHotelLow: 17, baseHotelHigh: 40, minDays: 7, minBudget: 160,
        sights: {
          low: [
            { name: '시드니 오페라하우스 외관', price: '무료', link: 'https://maps.google.com/?q=Sydney+Opera+House+Australia' },
            { name: '본다이 비치', price: '무료', link: 'https://maps.google.com/?q=Bondi+Beach+Sydney+Australia' },
            { name: '더 록스 구시가지 산책', price: '무료', link: 'https://maps.google.com/?q=The+Rocks+Sydney+Australia' }
          ],
          mid: [
            { name: '오페라하우스 내부 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=sydney+opera+house+tour' },
            { name: '블루마운틴 국립공원', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=blue+mountains+tour+sydney' },
            { name: '타롱가 동물원', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=taronga+zoo+sydney' }
          ],
          high: [
            { name: '시드니 하버 크루즈', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=sydney+harbour+cruise' },
            { name: '하버 브리지 클라임', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=harbour+bridge+climb+sydney' },
            { name: '그레이트 배리어 리프 투어', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=great+barrier+reef+tour+australia' }
          ]
        },
        exps: {
          low: [
            { name: '본다이 비치 서핑 관람', price: '무료', link: 'https://maps.google.com/?q=Bondi+Beach+Surfing+Sydney' },
            { name: '패딩턴 시장 탐방', price: '무료', link: 'https://maps.google.com/?q=Paddington+Markets+Sydney' },
            { name: '왕립 식물원 산책', price: '무료', link: 'https://maps.google.com/?q=Royal+Botanic+Garden+Sydney' }
          ],
          mid: [
            { name: '하버 크루즈', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=sydney+harbour+cruise' },
            { name: '블루마운틴 에코 포인트', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=blue+mountains+echo+point+sydney' },
            { name: '맨리 비치 카약', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=manly+beach+kayak+sydney' }
          ],
          high: [
            { name: '하버 브리지 클라임', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=harbour+bridge+climb+sydney' },
            { name: '퀸즐랜드 그레이트 배리어 리프', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=great+barrier+reef+snorkeling+australia' },
            { name: '시드니 교외 포도원 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=hunter+valley+winery+tour+sydney' }
          ]
        },
        food: {
          low: [
            { name: '오지 파이', desc: '호주 명물 미트 파이 · 1만원', link: 'https://maps.google.com/?q=Meat+Pie+Sydney+Australia' },
            { name: '팀탐 초콜릿 간식', desc: '호주 명물 초콜릿 팀탐', link: 'https://maps.google.com/?q=Tim+Tam+Chocolate+Sydney' },
            { name: '푸드코트 아시안 누들', desc: '시티 푸드코트 아시아 누들', link: 'https://maps.google.com/?q=Food+Court+Sydney+CBD' }
          ],
          mid: [
            { name: '서큘러 키 씨푸드 레스토랑', desc: '하버 뷰 신선 씨푸드 레스토랑', link: 'https://maps.google.com/?q=Circular+Quay+Seafood+Restaurant+Sydney' },
            { name: '치즈케이크 카페', desc: '시드니 카페 스타일 치즈케이크', link: 'https://maps.google.com/?q=Cheesecake+Cafe+Sydney' },
            { name: '더 록스 호주 스테이크', desc: '더 록스 호주 소고기 스테이크', link: 'https://maps.google.com/?q=The+Rocks+Steakhouse+Sydney' }
          ],
          high: [
            { name: '하버 뷰 파인다이닝 레스토랑', desc: '오페라하우스 뷰 파인다이닝', link: 'https://maps.google.com/?q=Fine+Dining+Sydney+Harbour+View' },
            { name: '블레인스 레스토랑 씨푸드', desc: '시드니 최고급 씨푸드 파인다이닝', link: 'https://maps.google.com/?q=Seafood+Fine+Dining+Sydney' },
            { name: '럭셔리 와이너리 디너', desc: '헌터 밸리 와이너리 럭셔리 코스', link: 'https://maps.google.com/?q=Hunter+Valley+Winery+Dinner+Sydney' }
          ]
        },
        hotels: {
          low: [
            { name: '시티 센터 백패커 호스텔', stars: 2, desc: 'CBD 중심 · 배낭여행자 인기', priceRange: '약 5-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Backpacker+Hostel+Sydney+CBD&dest_type=city' },
            { name: '서리힐스 소형 호텔', stars: 3, desc: '힙한 서리힐스 · 카페 거리 접근', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Surry+Hills+Hotel+Sydney&dest_type=city' }
          ],
          mid: [
            { name: '아이비 호텔 시드니', stars: 4, desc: '멕쿼리 스트리트 · 세련된 디자인', priceRange: '약 22-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ivy+Hotel+Sydney&dest_type=city' },
            { name: '노보텔 서큘러 키', stars: 4, desc: '하버 바로 앞 · 오페라하우스 전망', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Novotel+Circular+Quay+Sydney&dest_type=city' }
          ],
          high: [
            { name: '파크 하얏트 시드니', stars: 5, desc: '하버 브리지 전망 · 시드니 No.1 럭셔리', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Park+Hyatt+Sydney&dest_type=city' },
            { name: '아만 시드니', stars: 5, desc: '역사적 건물 내 아만 최고급 리조트', priceRange: '약 80-150만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Aman+Sydney&dest_type=city' }
          ]
        },
        hotelTips: ['CBD·서큘러 키 지역이 관광·교통 허브', '본다이 지역은 해변 가까운 힙한 분위기', '오팔 카드(교통카드) 공항에서 구입', '워킹홀리데이 비자 관련 규정 확인'],
        cheapFlights: [
          { label: '대한항공·아시아나 (직항)', desc: '직항 10시간 · 왕복 90만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/syd/' },
          { label: '젯스타·에어아시아 (경유)', desc: '약 13시간 경유 · 왕복 50만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/syd/' }
        ],
        flightTips: ['직항 10시간 · 왕복 90-130만원', '경유(싱가포르·쿠알라룸푸르) 시 50-70만원대', '시드니+멜버른 이동 국내선 추가', '입국 시 식품·동물성 물품 반입 금지 엄격']
      },
      {
        id: 'shanghai', name: '상하이', sub: '중국 경제 수도 · 동서양이 공존하는 도시', score: 65, isTop: false,
        photo: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&q=80',
        airfare: '18만원~', hotel: '호텔 저렴', hotelSub: '3성급 6-12만원대', daily: '소비 적음', dailySub: '1일 6-10만원',
        alert: '경보 없음', alertSub: '전반적으로 안전', news: '위안화 안정', newsSub: '환율 변동 적음', disaster: '없음', disasterSub: '',
        temp: '아열대 몬순', tempSub: '봄(4-5월)·가을(9-10월) 최적',
        fx: '중국 위안', fxSub: '알리페이·위챗페이 필수',
        baseAir: 18, baseHotel: 7, baseHotelLow: 6, baseHotelHigh: 18, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '와이탄 야경 산책', price: '무료', link: 'https://maps.google.com/?q=The+Bund+Shanghai+China' },
            { name: '루완 옛 골목 탐방', price: '무료', link: 'https://maps.google.com/?q=Tianzifang+Shanghai+China' },
            { name: '예원 정원', price: '약 0.3만원', link: 'https://maps.google.com/?q=Yu+Garden+Shanghai+China' }
          ],
          mid: [
            { name: '동방명주 타워', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=oriental+pearl+tower+shanghai' },
            { name: '상하이 박물관', price: '무료', link: 'https://maps.google.com/?q=Shanghai+Museum+China' },
            { name: '신천지 쇼핑·문화 거리', price: '무료', link: 'https://maps.google.com/?q=Xintiandi+Shanghai+China' }
          ],
          high: [
            { name: '상하이 디즈니랜드', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=shanghai+disneyland' },
            { name: '마글레브 자기부상열차 체험', price: '약 0.7만원', link: 'https://maps.google.com/?q=Maglev+Train+Shanghai+China' },
            { name: '황포강 크루즈 야경', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=huangpu+river+night+cruise+shanghai' }
          ]
        },
        exps: {
          low: [
            { name: '와이탄 야경 무료 감상', price: '무료', link: 'https://maps.google.com/?q=The+Bund+Night+View+Shanghai' },
            { name: '티엔즈팡 골목 예술 탐방', price: '무료', link: 'https://maps.google.com/?q=Tianzifang+Art+Lane+Shanghai' },
            { name: '푸동 무료 공원 산책', price: '무료', link: 'https://maps.google.com/?q=Century+Park+Shanghai+China' }
          ],
          mid: [
            { name: '예원 문화 투어', price: '약 0.5만원', link: 'https://www.klook.com/ko/search/?query=yu+garden+cultural+tour+shanghai' },
            { name: '황포강 야간 크루즈', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=huangpu+river+night+cruise+shanghai' },
            { name: '상하이 요리 클래스', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=shanghai+cooking+class' }
          ],
          high: [
            { name: '상하이 디즈니랜드 VIP', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=shanghai+disneyland+vip' },
            { name: '푸동 최고층 전망대', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=shanghai+tower+observatory' },
            { name: '고급 상하이 스파', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+shanghai' }
          ]
        },
        food: {
          low: [
            { name: '샤오롱바오 딤섬', desc: '상하이 명물 전통 딤섬 · 5천원', link: 'https://maps.google.com/?q=Xiaolongbao+Dumpling+Shanghai' },
            { name: '완탕면 로컬', desc: '상하이 로컬 완탕면 · 5천원', link: 'https://maps.google.com/?q=Wonton+Noodle+Shanghai' },
            { name: '길거리 양꼬치', desc: '상하이 야시장 양꼬치 · 8천원', link: 'https://maps.google.com/?q=Street+Food+Shanghai+China' }
          ],
          mid: [
            { name: '화이하이루 레스토랑 코스', desc: '화이하이루 쇼핑 거리 코스 요리', link: 'https://maps.google.com/?q=Huaihai+Road+Restaurant+Shanghai' },
            { name: '와이탄 뷰 레스토랑', desc: '와이탄 강변 뷰 레스토랑', link: 'https://maps.google.com/?q=Bund+View+Restaurant+Shanghai' },
            { name: '신천지 퓨전 다이닝', desc: '신천지 트렌디 퓨전 레스토랑', link: 'https://maps.google.com/?q=Xintiandi+Fusion+Restaurant+Shanghai' }
          ],
          high: [
            { name: '미슐랭 상하이 요리', desc: '상하이 미슐랭 파인다이닝', link: 'https://maps.google.com/?q=Michelin+Restaurant+Shanghai+China' },
            { name: '오리엔탈 파인다이닝', desc: '리조 칼튼 오리엔탈 파인다이닝', link: 'https://maps.google.com/?q=Oriental+Fine+Dining+Shanghai' },
            { name: '루프탑 바 디너', desc: '와이탄 뷰 루프탑 바 디너', link: 'https://maps.google.com/?q=Rooftop+Bar+Dinner+Bund+Shanghai' }
          ]
        },
        hotels: {
          low: [
            { name: '인민광장 근처 비즈니스호텔', stars: 3, desc: '메트로 인근 · 관광 이동 편리', priceRange: '약 5-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Peoples+Square+Hotel+Shanghai&dest_type=city' },
            { name: '홍챠오 소형 호텔', stars: 2, desc: '공항 인근 · 비즈니스 출장 적합', priceRange: '약 5-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hongqiao+Hotel+Shanghai&dest_type=city' }
          ],
          mid: [
            { name: 'JW 메리어트 상하이', stars: 4, desc: '와이탄 근처 · 메트로 편리', priceRange: '약 16-26만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=JW+Marriott+Shanghai&dest_type=city' },
            { name: '스타우드 와이탄 호텔', stars: 4, desc: '와이탄 전망 · 서양 고풍 디자인', priceRange: '약 18-30만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Le+Royal+Meridien+Shanghai&dest_type=city' }
          ],
          high: [
            { name: '만다린 오리엔탈 상하이', stars: 5, desc: '반도 와이탄 · 강변 전망 최고급', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Shanghai&dest_type=city' },
            { name: '포시즌스 호텔 상하이', stars: 5, desc: '푸동 새 지구 · 최신 럭셔리', priceRange: '약 35-70만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Hotel+Shanghai&dest_type=city' }
          ]
        },
        hotelTips: ['와이탄·인민광장 지역 관광 중심', '메트로(지하철) 망 발달 · 이동 편리', 'VPN 필요 (구글·카카오 차단)', '알리페이 또는 위챗페이 미리 등록 권장'],
        cheapFlights: [
          { label: '상하이항공·중국동방 (직항)', desc: '직항 2시간 · 왕복 15만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pvg/' },
          { label: '제주항공·진에어 (직항)', desc: '2시간 직항 · 왕복 12만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pvg/' }
        ],
        flightTips: ['직항 2시간 · 일본 다음으로 가까운 국제선', 'LCC 왕복 12-18만원 특가 빈번', '비자 면제 협정 (30일 이내 무비자)', 'VPN 앱 미리 설치 · 현지 스마트폰 이용 필수']
      },
      {
        id: 'barcelona', name: '바르셀로나', sub: '스페인 · 가우디와 지중해 해변', score: 55, isTop: false,
        photo: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
        airfare: '85만원~', hotel: '호텔 비쌈', hotelSub: '3성급 18-30만원대', daily: '소비 많음', dailySub: '1일 14-22만원',
        alert: '여행유의', alertSub: '소매치기 주의', news: '유로 강세', newsSub: '물가 높음', disaster: '없음', disasterSub: '',
        temp: '지중해성', tempSub: '봄(4-5월)·가을(9-10월) 최적',
        fx: '유로', fxSub: '유로 강세 · 고물가 도시',
        baseAir: 85, baseHotel: 20, baseHotelLow: 17, baseHotelHigh: 45, minDays: 7, minBudget: 180,
        sights: {
          low: [
            { name: '바르셀로네타 해변', price: '무료', link: 'https://maps.google.com/?q=Barceloneta+Beach+Spain' },
            { name: '고딕 지구 산책', price: '무료', link: 'https://maps.google.com/?q=Gothic+Quarter+Barcelona+Spain' },
            { name: '구엘 공원 외부', price: '무료', link: 'https://maps.google.com/?q=Park+Guell+Barcelona+Spain' }
          ],
          mid: [
            { name: '사그라다 파밀리아 성당', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=sagrada+familia+barcelona' },
            { name: '구엘 공원 입장', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=park+guell+barcelona' },
            { name: '몬주익 성 전망대', price: '약 0.8만원', link: 'https://maps.google.com/?q=Montjuic+Castle+Barcelona+Spain' }
          ],
          high: [
            { name: '가우디 건축물 VIP 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=gaudi+architecture+vip+tour+barcelona' },
            { name: '리세우 오페라 하우스 공연', price: '약 8만원', link: 'https://maps.google.com/?q=Gran+Teatre+Liceu+Barcelona+Spain' },
            { name: '지중해 요트 크루즈', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=mediterranean+yacht+cruise+barcelona' }
          ]
        },
        exps: {
          low: [
            { name: '라스 람블라스 거리 산책', price: '무료', link: 'https://maps.google.com/?q=Las+Ramblas+Barcelona+Spain' },
            { name: '보케리아 시장 시식', price: '무료', link: 'https://maps.google.com/?q=La+Boqueria+Market+Barcelona+Spain' },
            { name: '해변 자유 시간', price: '무료', link: 'https://maps.google.com/?q=Barceloneta+Beach+Barcelona+Spain' }
          ],
          mid: [
            { name: '플라멩코 공연 관람', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=flamenco+show+barcelona' },
            { name: '가우디 건축 투어', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=gaudi+architecture+tour+barcelona' },
            { name: '바르셀로나 FC 캄프 누 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=camp+nou+experience+barcelona' }
          ],
          high: [
            { name: '개인 가이드 아트 투어', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=private+art+tour+barcelona' },
            { name: '지중해 세일링', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=mediterranean+sailing+barcelona' },
            { name: 'FC 바르셀로나 경기 직관', price: '약 10만원+', link: 'https://www.klook.com/ko/search/?query=fc+barcelona+match+ticket' }
          ]
        },
        food: {
          low: [
            { name: '보케리아 시장 하몬', desc: '생햄 하몬 이베리코 · 7천원', link: 'https://maps.google.com/?q=La+Boqueria+Market+Barcelona+Spain' },
            { name: '타파스 바 핀초스', desc: '바르셀로나 타파스 바 핀초스 · 8천원', link: 'https://maps.google.com/?q=Tapas+Bar+Barcelona+Spain' },
            { name: '크로켓·파타타스 브라바스', desc: '스페인 감자·크로켓 바 음식', link: 'https://maps.google.com/?q=Croquetas+Patatas+Bravas+Barcelona' }
          ],
          mid: [
            { name: '카탈루냐 전통 레스토랑', desc: '카탈루냐 지방 전통 요리 코스', link: 'https://maps.google.com/?q=Catalan+Restaurant+Barcelona+Spain' },
            { name: '해변 파에야', desc: '바르셀로네타 해변 신선 파에야', link: 'https://maps.google.com/?q=Paella+Restaurant+Barceloneta+Spain' },
            { name: '현지 와인 바', desc: '카탈루냐 전통 와인 바', link: 'https://maps.google.com/?q=Wine+Bar+Barcelona+Spain' }
          ],
          high: [
            { name: '미슐랭 카탈루냐 요리', desc: '바르셀로나 미슐랭 파인다이닝', link: 'https://maps.google.com/?q=Michelin+Restaurant+Barcelona+Spain' },
            { name: '모더니스트 퀴진', desc: '엘 불리 영향 분자 요리 레스토랑', link: 'https://maps.google.com/?q=Modernist+Cuisine+Restaurant+Barcelona' },
            { name: '루프탑 테라스 파인다이닝', desc: '루프탑 지중해 뷰 파인다이닝', link: 'https://maps.google.com/?q=Rooftop+Fine+Dining+Barcelona' }
          ]
        },
        hotels: {
          low: [
            { name: '고딕 지구 호스텔', stars: 2, desc: '고딕 지구 중심 · 도보 관광 최적', priceRange: '약 8-14만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Gothic+Quarter+Hostel+Barcelona&dest_type=city' },
            { name: '그라시아 지역 소형 호텔', stars: 3, desc: '에이샴플라 인근 · 감성 부티크', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Gracia+Hotel+Barcelona&dest_type=city' }
          ],
          mid: [
            { name: 'H10 오리엔트 호텔', stars: 4, desc: '라스 람블라스 인근 · 관광 허브', priceRange: '약 22-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=H10+Orient+Hotel+Barcelona&dest_type=city' },
            { name: '호텔 1898 바르셀로나', stars: 4, desc: '라스 람블라스 · 역사적 건물 감성', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+1898+Barcelona&dest_type=city' }
          ],
          high: [
            { name: 'W 바르셀로나 호텔', stars: 5, desc: '바르셀로네타 해변 · 세일 모양 랜드마크', priceRange: '약 45-90만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=W+Barcelona+Hotel&dest_type=city' },
            { name: '만다린 오리엔탈 바르셀로나', stars: 5, desc: '파세억 드 그라시아 · 최고급 럭셔리', priceRange: '약 55-110만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Barcelona&dest_type=city' }
          ]
        },
        hotelTips: ['고딕 지구·에이샴플라 지역 중심 추천', '소매치기 많음 · 지갑·폰 앞주머니 보관', '바르셀로나 카드(Barcelona Card) 교통+관광 절약', '사그라다 파밀리아 입장권 최소 2개월 전 온라인 예약'],
        cheapFlights: [
          { label: '에어유로파·이베리아 (마드리드 경유)', desc: '약 14시간 · 왕복 70만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bcn/' },
          { label: '에미레이트·카타르 (경유)', desc: '약 15시간 · 왕복 60만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bcn/' }
        ],
        flightTips: ['직항 없음 · 경유 14-16시간', '왕복 70-110만원 (경유)', '파리+바르셀로나 조합 유럽 2개국 인기', '쉥겐 비자 무필요 (90일 이내 무비자)']
      },
      {
        id: 'nagoya', name: '나고야', sub: '일본 중부 · 지브리파크와 레고랜드', score: 80, isTop: false,
        photo: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
        airfare: '30만원~', hotel: '호텔 저렴', hotelSub: '3성급 7-12만원대', daily: '소비 적음', dailySub: '1일 6-10만원',
        alert: '경보 없음', alertSub: '치안 매우 좋음', news: '엔저 지속', newsSub: '쇼핑 유리', disaster: '없음', disasterSub: '',
        temp: '온대', tempSub: '봄(3-5월)·가을(10-11월) 최적',
        fx: '엔(¥)', fxSub: '엔저 · 가성비 여행 최적기',
        baseAir: 30, baseHotel: 8, baseHotelLow: 5, baseHotelHigh: 25, minDays: 3, minBudget: 60,
        desc: '나고야는 일본 중부의 관문 도시입니다.\n지브리 파크에서 토토로와 하울의 세계에 빠져들고,\n레고랜드 재팬에서 가족과 함께 즐기세요.\n나고야성과 아츠타 신궁의 역사,\n히츠마부시와 미소카츠의 독특한 미식까지\n오사카·도쿄 사이 숨겨진 보석입니다.',
        sights: {
          low: [
            { name: '오스 상점가 산책', price: '무료', link: 'https://maps.google.com/?q=Osu+Shopping+Street+Nagoya' },
            { name: '나고야성 외관', price: '무료', link: 'https://maps.google.com/?q=Nagoya+Castle+Japan' },
            { name: '아츠타 신궁', price: '무료', link: 'https://maps.google.com/?q=Atsuta+Shrine+Nagoya' }
          ],
          mid: [
            { name: '나고야성 입장', price: '약 0.5만원', link: 'https://www.klook.com/ko/search/?query=nagoya+castle' },
            { name: '토요타 산업기술 기념관', price: '약 0.5만원', link: 'https://www.klook.com/ko/search/?query=toyota+museum+nagoya' },
            { name: '나고야 수족관', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=nagoya+aquarium' }
          ],
          high: [
            { name: '지브리 파크', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=ghibli+park+nagoya' },
            { name: '레고랜드 재팬', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=legoland+japan+nagoya' },
            { name: '이누야마성+메이지무라', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=inuyama+castle+meiji+mura' }
          ]
        },
        exps: {
          low: [
            { name: '사카에 거리 야경', price: '무료', link: 'https://maps.google.com/?q=Sakae+Nagoya+Japan' },
            { name: '오스 칸논 템플', price: '무료', link: 'https://maps.google.com/?q=Osu+Kannon+Temple+Nagoya' },
            { name: '시로토리 정원', price: '약 0.3만원', link: 'https://maps.google.com/?q=Shirotori+Garden+Nagoya' }
          ],
          mid: [
            { name: '히츠마부시 만들기 체험', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Nagoya--Japan/experiences?query=hitsumabushi+cooking' },
            { name: '나고야 자전거 투어', price: '약 4만원', link: 'https://www.airbnb.co.kr/s/Nagoya--Japan/experiences?query=cycling+city+tour' },
            { name: '도자기 체험 (세토)', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=seto+pottery+experience+nagoya' }
          ],
          high: [
            { name: '기소 계곡 하이킹 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=kiso+valley+hiking+nagoya' },
            { name: '닌자 체험 프로그램', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=ninja+experience+nagoya' },
            { name: '나가시마 스파랜드', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=nagashima+spaland' }
          ]
        },
        food: {
          low: [
            { name: '미소카츠 (야바톤)', desc: '미소 소스 돈까스 · 1천원대', link: 'https://maps.google.com/?q=Yabaton+Nagoya+Japan' },
            { name: '텐무스 (덴무스비)', desc: '새우 튀김 주먹밥 · 5백원', link: 'https://maps.google.com/?q=Tenmusu+Nagoya' },
            { name: '대만 라멘', desc: '나고야식 매운 대만 라멘 · 1천원', link: 'https://maps.google.com/?q=Taiwan+Ramen+Nagoya' }
          ],
          mid: [
            { name: '히츠마부시 (장어덮밥)', desc: '아츠타 호라이켄 · 3가지 먹는법', link: 'https://maps.google.com/?q=Atsuta+Houraiken+Nagoya' },
            { name: '테바사키 (날개 튀김)', desc: '세카이노 야마짱 수제 날개', link: 'https://maps.google.com/?q=Sekai+no+Yamachan+Nagoya' },
            { name: '기시멘 (넓은 우동)', desc: '나고야식 납작 우동', link: 'https://maps.google.com/?q=Kishimen+Restaurant+Nagoya' }
          ],
          high: [
            { name: '히츠마부시 특선 코스', desc: '최고급 장어 코스 · 5만원+', link: 'https://maps.google.com/?q=Premium+Hitsumabushi+Nagoya' },
            { name: '카이세키 요리', desc: '나고야 전통 가이세키', link: 'https://maps.google.com/?q=Kaiseki+Restaurant+Nagoya' },
            { name: '와규 야키니쿠', desc: '히다 와규 프리미엄', link: 'https://maps.google.com/?q=Wagyu+Yakiniku+Nagoya' }
          ]
        },
        hotels: {
          low: [
            { name: '나고야역 비즈니스호텔', stars: 3, desc: '나고야역 도보 5분', priceRange: '약 5-9만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Nagoya+Station+Hotel&dest_type=city' },
            { name: '사카에 게스트하우스', stars: 2, desc: '사카에 중심 · 가성비', priceRange: '약 3-6만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sakae+Guesthouse+Nagoya&dest_type=city' }
          ],
          mid: [
            { name: '힐튼 나고야', stars: 4, desc: '후시미역 인근 · 도심', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hilton+Nagoya&dest_type=city' },
            { name: '나고야 도큐 호텔', stars: 4, desc: '사카에 도심 · 쇼핑 편리', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Nagoya+Tokyu+Hotel&dest_type=city' }
          ],
          high: [
            { name: '나고야 매리어트', stars: 5, desc: '나고야역 직결 · 최고층 전망', priceRange: '약 25-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Nagoya+Marriott+Associa&dest_type=city' },
            { name: '더 리츠칼튼 나고야', stars: 5, desc: '미들랜드 스퀘어 · 럭셔리', priceRange: '약 35-60만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Nagoya+Prince+Hotel&dest_type=city' }
          ]
        },
        hotelTips: ['나고야역 주변이 교통 최적', '사카에·후시미 지역 식당·쇼핑 밀집', '지브리파크는 아이치 현 리니모선 이용', '레고랜드는 아오나미선 킨조후토역'],
        cheapFlights: [
          { label: '에어부산·진에어 (직항)', desc: '2시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ngo/' },
          { label: '제주항공·피치 (직항)', desc: '2시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ngo/' }
        ],
        flightTips: ['직항 2시간', '왕복 20-40만원', 'LCC 직항 다수', '중부국제공항 나고야역 뮤스카이 28분']
      },
      {
        id: 'siemreap', name: '씨엠립', sub: '캄보디아 · 앙코르와트의 도시', score: 76, isTop: false,
        photo: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
        airfare: '35만원~', hotel: '호텔 매우 저렴', hotelSub: '3성급 3-6만원대', daily: '소비 매우 적음', dailySub: '1일 3-5만원',
        alert: '여행유의', alertSub: '취업사기 주의', news: '취업 사기 주의', newsSub: '구인사기 주의', disaster: '우기', disasterSub: '6-10월 스콜',
        temp: '열대', tempSub: '건기(11-3월) 최적',
        fx: '달러(USD)', fxSub: '미국 달러 통용 · 환전 편리',
        baseAir: 35, baseHotel: 4, baseHotelLow: 2, baseHotelHigh: 20, minDays: 4, minBudget: 50,
        desc: '씨엠립은 세계 7대 불가사의 앙코르와트의 도시입니다.\n새벽 일출 속 앙코르와트의 실루엣,\n바이욘 사원의 신비로운 미소,\n타프롬의 자연이 삼킨 사원까지\n인류 최대 석조 건축의 경이를 만나세요.\n밤에는 펍 스트리트에서 캄보디아의 활기를 느껴보세요.',
        sights: {
          low: [
            { name: '앙코르와트 외곽 산책', price: '무료', link: 'https://maps.google.com/?q=Angkor+Wat+Siem+Reap' },
            { name: '올드마켓 탐방', price: '무료', link: 'https://maps.google.com/?q=Old+Market+Siem+Reap' },
            { name: '왓보 마을 산책', price: '무료', link: 'https://maps.google.com/?q=Wat+Bo+Village+Siem+Reap' }
          ],
          mid: [
            { name: '앙코르와트 1일권', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=angkor+wat+day+pass' },
            { name: '톤레삽 호수 보트', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=tonle+sap+lake+boat+tour' },
            { name: '앙코르 국립박물관', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=angkor+national+museum' }
          ],
          high: [
            { name: '앙코르와트 3일권', price: '약 9만원', link: 'https://www.klook.com/ko/search/?query=angkor+wat+3+day+pass' },
            { name: '프놈쿨렌 산 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=phnom+kulen+mountain+tour' },
            { name: '벵밀리아 원시사원', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=beng+mealea+temple+tour' }
          ]
        },
        exps: {
          low: [
            { name: '펍 스트리트 야경', price: '무료', link: 'https://maps.google.com/?q=Pub+Street+Siem+Reap' },
            { name: '나이트마켓 쇼핑', price: '무료', link: 'https://maps.google.com/?q=Angkor+Night+Market+Siem+Reap' },
            { name: '캄보디아 킥복싱 관람', price: '약 0.5만원', link: 'https://maps.google.com/?q=Cambodian+Boxing+Siem+Reap' }
          ],
          mid: [
            { name: '앙코르와트 일출 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=angkor+wat+sunrise+tour' },
            { name: '캄보디아 요리 클래스', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Siem-Reap--Cambodia/experiences?query=cambodian+cooking+class' },
            { name: '압사라 댄스 공연', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=apsara+dance+show+siem+reap' }
          ],
          high: [
            { name: '앙코르 열기구 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=angkor+balloon+ride' },
            { name: '프라이빗 가이드 유적 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=private+angkor+guide+tour' },
            { name: '쿠렌산 폭포 트레킹', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=kulen+mountain+waterfall+trek' }
          ]
        },
        food: {
          low: [
            { name: '아목 (커리찜)', desc: '캄보디아 대표 코코넛 커리 · 5백원', link: 'https://maps.google.com/?q=Amok+Restaurant+Siem+Reap' },
            { name: '록락 (볶음소고기)', desc: '캄보디아 볶음 쇠고기 · 7백원', link: 'https://maps.google.com/?q=Lok+Lak+Restaurant+Siem+Reap' },
            { name: '올드마켓 길거리 음식', desc: '꼬치·팬케이크 · 3백원~', link: 'https://maps.google.com/?q=Old+Market+Food+Siem+Reap' }
          ],
          mid: [
            { name: '쿠이삔 캄보디아 레스토랑', desc: '아목·쿠이띠우 풀코스', link: 'https://maps.google.com/?q=Cuisine+Wat+Damnak+Siem+Reap' },
            { name: '퓨전 동남아 레스토랑', desc: '크메르-서양 퓨전 요리', link: 'https://maps.google.com/?q=Sister+Srey+Cafe+Siem+Reap' },
            { name: '리버사이드 레스토랑', desc: '강변 분위기 좋은 저녁', link: 'https://maps.google.com/?q=Riverside+Restaurant+Siem+Reap' }
          ],
          high: [
            { name: 'Cuisine Wat Damnak', desc: '미슐랭급 크메르 파인다이닝', link: 'https://maps.google.com/?q=Cuisine+Wat+Damnak+Siem+Reap' },
            { name: '소피텔 앙코르 디너', desc: '리조트 파인다이닝 코스', link: 'https://maps.google.com/?q=Sofitel+Angkor+Restaurant+Siem+Reap' },
            { name: '캄보디아 전통 왕실 만찬', desc: '압사라 공연+크메르 왕실 코스', link: 'https://maps.google.com/?q=Royal+Khmer+Dinner+Siem+Reap' }
          ]
        },
        hotels: {
          low: [
            { name: '올드마켓 게스트하우스', stars: 2, desc: '올드마켓 도보 5분', priceRange: '약 1-3만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Old+Market+Guesthouse+Siem+Reap&dest_type=city' },
            { name: '펍스트리트 호스텔', stars: 2, desc: '펍스트리트 중심', priceRange: '약 1-2만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Pub+Street+Hostel+Siem+Reap&dest_type=city' }
          ],
          mid: [
            { name: '삼산 부티크 호텔', stars: 4, desc: '풀빌라 · 조식 포함', priceRange: '약 5-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Boutique+Hotel+Siem+Reap&dest_type=city' },
            { name: '타라 앙코르 호텔', stars: 4, desc: '수영장·스파 갖춘 리조트', priceRange: '약 6-12만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Tara+Angkor+Hotel+Siem+Reap&dest_type=city' }
          ],
          high: [
            { name: '소피텔 앙코르', stars: 5, desc: '프랑스풍 럭셔리 리조트', priceRange: '약 20-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sofitel+Angkor+Phokeethra&dest_type=city' },
            { name: '아만사라', stars: 5, desc: '시하누크 왕가 별궁 개조 · 최고급', priceRange: '약 80-150만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Amansara+Siem+Reap&dest_type=city' }
          ]
        },
        hotelTips: ['올드마켓·펍스트리트 주변 숙소 추천', '풀빌라 리조트도 10만원 이내', '앙코르 입장권 미리 온라인 구매', '툭툭 1일 대절 약 2만원'],
        cheapFlights: [
          { label: '비엣젯·에어아시아 (경유)', desc: '약 7시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/rep/' },
          { label: '진에어 (프놈펜 경유)', desc: '약 7시간 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/rep/' }
        ],
        flightTips: ['직항 없음 · 경유 6-10시간', '왕복 25-50만원', '방콕·호치민 경유가 저렴', '비자: 도착 비자 $30 또는 E-Visa']
      },
      {
        id: 'rome', name: '로마', sub: '이탈리아 · 콜로세움과 바티칸', score: 60, isTop: false,
        photo: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
        airfare: '80만원~', hotel: '호텔 비쌈', hotelSub: '3성급 15-25만원대', daily: '소비 많음', dailySub: '1일 12-20만원',
        alert: '여행유의', alertSub: '소매치기 주의', news: '유로 강세', newsSub: '물가 높음', disaster: '없음', disasterSub: '',
        temp: '지중해성', tempSub: '봄(4-5월)·가을(9-10월) 최적',
        fx: '유로(€)', fxSub: '유로 강세 · 관광세 별도',
        baseAir: 80, baseHotel: 18, baseHotelLow: 12, baseHotelHigh: 50, minDays: 6, minBudget: 170,
        desc: '로마는 영원의 도시입니다.\n콜로세움에서 검투사의 함성을 상상하고,\n바티칸 시스티나 성당의 천장화에 감탄하세요.\n트레비 분수에 동전을 던지고,\n판테온의 2천 년 돔 아래 서보세요.\n골목 트라토리아에서 카르보나라와 젤라또까지\n모든 길은 로마로 통합니다.',
        sights: {
          low: [
            { name: '트레비 분수', price: '무료', link: 'https://maps.google.com/?q=Trevi+Fountain+Rome' },
            { name: '판테온', price: '무료', link: 'https://maps.google.com/?q=Pantheon+Rome' },
            { name: '스페인 계단', price: '무료', link: 'https://maps.google.com/?q=Spanish+Steps+Rome' }
          ],
          mid: [
            { name: '콜로세움+포로 로마노', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=colosseum+roman+forum+ticket' },
            { name: '바티칸 미술관+시스티나', price: '약 2.5만원', link: 'https://www.klook.com/ko/search/?query=vatican+museum+sistine+chapel' },
            { name: '보르게세 미술관', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=borghese+gallery+rome' }
          ],
          high: [
            { name: '바티칸 VIP 이른 아침 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=vatican+early+morning+vip+tour' },
            { name: '콜로세움 지하+아레나 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=colosseum+underground+arena+tour' },
            { name: '로마 헬리콥터 투어', price: '약 25만원', link: 'https://www.klook.com/ko/search/?query=rome+helicopter+tour' }
          ]
        },
        exps: {
          low: [
            { name: '트라스테베레 골목 산책', price: '무료', link: 'https://maps.google.com/?q=Trastevere+Rome' },
            { name: '나보나 광장 거리 예술', price: '무료', link: 'https://maps.google.com/?q=Piazza+Navona+Rome' },
            { name: '테베레 강변 산책', price: '무료', link: 'https://maps.google.com/?q=Tiber+River+Walk+Rome' }
          ],
          mid: [
            { name: '로마 파스타 만들기', price: '약 6만원', link: 'https://www.airbnb.co.kr/s/Rome--Italy/experiences?query=pasta+making+class' },
            { name: '로마 푸드 투어', price: '약 5만원', link: 'https://www.airbnb.co.kr/s/Rome--Italy/experiences?query=food+tour+rome' },
            { name: '카타콤베 지하묘지 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=catacombs+rome+tour' }
          ],
          high: [
            { name: '베스파 스쿠터 로마 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=vespa+scooter+tour+rome' },
            { name: '와인 & 치즈 테이스팅', price: '약 8만원', link: 'https://www.airbnb.co.kr/s/Rome--Italy/experiences?query=wine+cheese+tasting' },
            { name: '폼페이 당일 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=pompeii+day+trip+from+rome' }
          ]
        },
        food: {
          low: [
            { name: '피자 알 탈리오', desc: '무게 달아 파는 사각 피자 · 5천원', link: 'https://maps.google.com/?q=Pizza+al+Taglio+Rome' },
            { name: '수플리 (튀김 주먹밥)', desc: '로마식 아란치니 · 3천원', link: 'https://maps.google.com/?q=Suppli+Rome' },
            { name: '젤라또', desc: '이탈리아 수제 아이스크림 · 5천원', link: 'https://maps.google.com/?q=Gelato+Rome' }
          ],
          mid: [
            { name: '카르보나라', desc: '로마 정통 계란 파스타', link: 'https://maps.google.com/?q=Carbonara+Restaurant+Rome' },
            { name: '카치오 에 페페', desc: '치즈+후추 파스타 · 로마 3대 파스타', link: 'https://maps.google.com/?q=Cacio+e+Pepe+Restaurant+Rome' },
            { name: '살팀보카', desc: '송아지 프로슈토 세이지 구이', link: 'https://maps.google.com/?q=Saltimbocca+Restaurant+Rome' }
          ],
          high: [
            { name: '미슐랭 트라토리아', desc: '로마 미슐랭 파인다이닝', link: 'https://maps.google.com/?q=Michelin+Restaurant+Rome' },
            { name: '루프탑 테라스 디너', desc: '콜로세움 뷰 루프탑 코스', link: 'https://maps.google.com/?q=Rooftop+Restaurant+Colosseum+View+Rome' },
            { name: '트러플 코스 디너', desc: '이탈리아 트러플 풀코스', link: 'https://maps.google.com/?q=Truffle+Restaurant+Rome' }
          ]
        },
        hotels: {
          low: [
            { name: '테르미니역 B&B', stars: 2, desc: '중앙역 도보 5분', priceRange: '약 8-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Termini+Station+Hotel+Rome&dest_type=city' },
            { name: '트라스테베레 게스트하우스', stars: 3, desc: '골목 분위기 · 로컬 감성', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Trastevere+Guesthouse+Rome&dest_type=city' }
          ],
          mid: [
            { name: '호텔 콜럼나 팰리스', stars: 4, desc: '트레비 분수 인근', priceRange: '약 20-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Colonna+Palace+Rome&dest_type=city' },
            { name: 'NH 컬렉션 로마', stars: 4, desc: '판테온 도보 10분', priceRange: '약 22-38만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=NH+Collection+Rome&dest_type=city' }
          ],
          high: [
            { name: '호텔 드 루시', stars: 5, desc: '스페인 계단 옆 · 로마 최고급', priceRange: '약 50-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+de+Russie+Rome&dest_type=city' },
            { name: '로마 카발리에리 월도프', stars: 5, desc: '언덕 위 로마 전경 · 최고급', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Rome+Cavalieri+Waldorf+Astoria&dest_type=city' }
          ]
        },
        hotelTips: ['테르미니역 주변 교통 최적', '트라스테베레 감성 숙소 추천', '로마패스(Roma Pass) 교통+입장 절약', '소매치기 주의 · 크로스백 필수'],
        cheapFlights: [
          { label: '대한항공 (직항)', desc: '12시간 · 왕복 80만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/fco/' },
          { label: '에미레이트·카타르 (경유)', desc: '약 15시간 · 왕복 60만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/fco/' }
        ],
        flightTips: ['직항 12시간 (대한항공)', '왕복 80-130만원', '경유편 60만원대~', '쉥겐 비자 무필요 (90일 무비자)']
      },
      {
        id: 'london', name: '런던', sub: '영국 · 대영박물관과 뮤지컬', score: 57, isTop: false,
        photo: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
        airfare: '85만원~', hotel: '호텔 매우 비쌈', hotelSub: '3성급 20-35만원대', daily: '소비 매우 많음', dailySub: '1일 15-25만원',
        alert: '경보 없음', alertSub: '소매치기 주의', news: '파운드 강세', newsSub: '물가 높음', disaster: '없음', disasterSub: '',
        temp: '해양성', tempSub: '여름(6-8월) 최적 · 겨울 흐림',
        fx: '파운드(£)', fxSub: '파운드 강세 · 유럽 최고 물가',
        baseAir: 85, baseHotel: 22, baseHotelLow: 15, baseHotelHigh: 60, minDays: 6, minBudget: 200,
        desc: '런던은 역사와 현대가 공존하는 세계의 수도입니다.\n대영박물관에서 인류의 역사를 무료로 만나고,\n웨스트엔드에서 세계 최고의 뮤지컬을 감상하세요.\n빅벤과 타워 브릿지의 야경,\n해리포터 스튜디오의 마법 세계까지\n누구나 한번은 꿈꾸는 도시입니다.',
        sights: {
          low: [
            { name: '대영박물관', price: '무료', link: 'https://maps.google.com/?q=British+Museum+London' },
            { name: '내셔널 갤러리', price: '무료', link: 'https://maps.google.com/?q=National+Gallery+London' },
            { name: '하이드 파크 산책', price: '무료', link: 'https://maps.google.com/?q=Hyde+Park+London' }
          ],
          mid: [
            { name: '런던아이', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=london+eye+ticket' },
            { name: '타워 오브 런던', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=tower+of+london+ticket' },
            { name: '웨스트민스터 사원', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=westminster+abbey+ticket' }
          ],
          high: [
            { name: '해리포터 스튜디오', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=harry+potter+studio+tour+london' },
            { name: '버킹엄 궁전 내부 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=buckingham+palace+interior+tour' },
            { name: '스톤헨지+바스 당일 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=stonehenge+bath+day+trip+london' }
          ]
        },
        exps: {
          low: [
            { name: '캠든 마켓 탐방', price: '무료', link: 'https://maps.google.com/?q=Camden+Market+London' },
            { name: '사우스뱅크 산책', price: '무료', link: 'https://maps.google.com/?q=South+Bank+London' },
            { name: '노팅힐 포토벨로 마켓', price: '무료', link: 'https://maps.google.com/?q=Portobello+Market+London' }
          ],
          mid: [
            { name: '웨스트엔드 뮤지컬', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=west+end+musical+london' },
            { name: '런던 워킹 투어', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/London--UK/experiences?query=walking+tour+london' },
            { name: '템스강 크루즈', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=thames+river+cruise+london' }
          ],
          high: [
            { name: '프라이빗 블랙캡 런던 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=private+black+cab+tour+london' },
            { name: '애프터눈 티 at 더 리츠', price: '약 10만원', link: 'https://maps.google.com/?q=The+Ritz+Afternoon+Tea+London' },
            { name: '코츠월드 당일 투어', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=cotswolds+day+trip+london' }
          ]
        },
        food: {
          low: [
            { name: '피시 앤 칩스', desc: '영국 대표 생선튀김+감자 · 1만원', link: 'https://maps.google.com/?q=Fish+and+Chips+London' },
            { name: '보로 마켓 시식', desc: '런던 최대 푸드 마켓 · 5천원~', link: 'https://maps.google.com/?q=Borough+Market+London' },
            { name: '풀 잉글리시 브렉퍼스트', desc: '영국식 아침 풀세트 · 1.5만원', link: 'https://maps.google.com/?q=Full+English+Breakfast+London' }
          ],
          mid: [
            { name: '가스트로 펍 디너', desc: '영국 퓨전 풀코스 펍 요리', link: 'https://maps.google.com/?q=Gastropub+London' },
            { name: '인도 카레 (브릭 레인)', desc: '런던 유명 인도 카레 거리', link: 'https://maps.google.com/?q=Brick+Lane+Curry+London' },
            { name: '차이나타운 딤섬', desc: '런던 차이나타운 딤섬 전문', link: 'https://maps.google.com/?q=Chinatown+Dim+Sum+London' }
          ],
          high: [
            { name: '미슐랭 파인다이닝', desc: '런던 미슐랭 스타 레스토랑', link: 'https://maps.google.com/?q=Michelin+Restaurant+London' },
            { name: '더 레저베리 루프탑', desc: '템스 뷰 파인다이닝', link: 'https://maps.google.com/?q=Rooftop+Restaurant+Thames+View+London' },
            { name: '고든 램지 레스토랑', desc: '고든 램지 플래그십', link: 'https://maps.google.com/?q=Gordon+Ramsay+Restaurant+London' }
          ]
        },
        hotels: {
          low: [
            { name: '킹스크로스 호스텔', stars: 2, desc: '킹스크로스역 인근', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Kings+Cross+Hostel+London&dest_type=city' },
            { name: '패딩턴 B&B', stars: 3, desc: '패딩턴역 도보 5분', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Paddington+Hotel+London&dest_type=city' }
          ],
          mid: [
            { name: '프리미어 인 런던', stars: 3, desc: '가성비 체인 · 깨끗', priceRange: '약 20-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Premier+Inn+London&dest_type=city' },
            { name: '홀리데이 인 켄싱턴', stars: 4, desc: '켄싱턴 · 박물관 밀집지', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Holiday+Inn+Kensington+London&dest_type=city' }
          ],
          high: [
            { name: '더 사보이', stars: 5, desc: '템스 강변 · 런던 전설의 호텔', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=The+Savoy+London&dest_type=city' },
            { name: '클라리지스', stars: 5, desc: '메이페어 · 아르데코 럭셔리', priceRange: '약 70-140만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Claridges+London&dest_type=city' }
          ]
        },
        hotelTips: ['존1 내 숙소 교통 편리', '오이스터 카드 교통 절약 필수', '뮤지컬 TKTS 부스 당일 할인', '대부분 박물관 무료 입장'],
        cheapFlights: [
          { label: '대한항공·아시아나 (직항)', desc: '12시간 · 왕복 90만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/lhr/' },
          { label: '핀에어·LOT (경유)', desc: '약 14시간 · 왕복 70만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/lhr/' }
        ],
        flightTips: ['직항 12시간 (대한항공·아시아나)', '왕복 90-140만원', '경유편 70만원대~', '영국 비자 무필요 (6개월 무비자)']
      },
      {
        id: 'kotakinabalu', name: '코타키나발루', sub: '말레이시아 · 세계 3대 선셋', score: 75, isTop: false,
        photo: 'https://images.unsplash.com/photo-1600000862694-2cafae59f8de?w=800&q=80',
        airfare: '35만원~', hotel: '호텔 저렴', hotelSub: '4성급 5-10만원대', daily: '소비 적음', dailySub: '1일 5-8만원',
        alert: '경보 없음', alertSub: '치안 좋음', news: '링깃 약세', newsSub: '환율 유리', disaster: '없음', disasterSub: '',
        temp: '열대', tempSub: '건기(1-4월) 최적 · 연중 따뜻',
        fx: '링깃(MYR)', fxSub: '링깃 약세 · 가성비 매우 좋음',
        baseAir: 35, baseHotel: 6, baseHotelLow: 3, baseHotelHigh: 25, minDays: 4, minBudget: 60,
        desc: '코타키나발루는 세계 3대 선셋의 도시입니다.\n탄중아루 해변에서 붉게 물드는 일몰,\n동남아 최고봉 키나발루산 트레킹,\n만따나니 섬의 맑은 산호초 스노클링,\n반딧불이 크루즈까지\n자연이 선물한 가족 여행 천국입니다.',
        sights: {
          low: [
            { name: '탄중아루 선셋 비치', price: '무료', link: 'https://maps.google.com/?q=Tanjung+Aru+Beach+Kota+Kinabalu' },
            { name: '제셀턴 포인트 산책', price: '무료', link: 'https://maps.google.com/?q=Jesselton+Point+Kota+Kinabalu' },
            { name: '가야 스트리트 선데이 마켓', price: '무료', link: 'https://maps.google.com/?q=Gaya+Street+Sunday+Market+Kota+Kinabalu' }
          ],
          mid: [
            { name: '만따나니 섬 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=mantanani+island+kota+kinabalu' },
            { name: '키나발루산 국립공원', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=kinabalu+national+park' },
            { name: '사피 섬 스노클링', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=sapi+island+snorkeling+kota+kinabalu' }
          ],
          high: [
            { name: '키나발루산 등반 2일', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=kinabalu+mountain+climbing' },
            { name: '보르네오 열대우림 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=borneo+rainforest+tour+kota+kinabalu' },
            { name: '전세 보트 아일랜드 호핑', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=private+island+hopping+kota+kinabalu' }
          ]
        },
        exps: {
          low: [
            { name: '필리피노 마켓 쇼핑', price: '무료', link: 'https://maps.google.com/?q=Filipino+Market+Kota+Kinabalu' },
            { name: '아트킨슨 시계탑', price: '무료', link: 'https://maps.google.com/?q=Atkinson+Clock+Tower+Kota+Kinabalu' },
            { name: '시그널 힐 전망대', price: '무료', link: 'https://maps.google.com/?q=Signal+Hill+Observatory+Kota+Kinabalu' }
          ],
          mid: [
            { name: '반딧불이 크루즈', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=firefly+cruise+kota+kinabalu' },
            { name: '래프팅 체험', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=white+water+rafting+kota+kinabalu' },
            { name: '마사지 & 스파', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=spa+massage+kota+kinabalu' }
          ],
          high: [
            { name: '오랑우탄 보호센터 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=orangutan+sanctuary+kota+kinabalu' },
            { name: '다이빙 라이선스 코스', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=diving+license+kota+kinabalu' },
            { name: '선셋 디너 크루즈', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=sunset+dinner+cruise+kota+kinabalu' }
          ]
        },
        food: {
          low: [
            { name: '락사 (코코넛 국수)', desc: '말레이시아 대표 면요리 · 5백원', link: 'https://maps.google.com/?q=Laksa+Restaurant+Kota+Kinabalu' },
            { name: '시푸드 야시장', desc: '필리피노 마켓 해산물 구이 · 1만원', link: 'https://maps.google.com/?q=Night+Market+Seafood+Kota+Kinabalu' },
            { name: '로티차나이', desc: '말레이시아 납작 빵 · 5백원', link: 'https://maps.google.com/?q=Roti+Canai+Kota+Kinabalu' }
          ],
          mid: [
            { name: '칠리크랩', desc: '자이언트 크랩 · 소스가 핵심', link: 'https://maps.google.com/?q=Chilli+Crab+Restaurant+Kota+Kinabalu' },
            { name: '나시르막', desc: '코코넛밥 정식 · 말레이시아 국민음식', link: 'https://maps.google.com/?q=Nasi+Lemak+Restaurant+Kota+Kinabalu' },
            { name: '사테 꼬치구이', desc: '땅콩소스 꼬치 · 현지 인기', link: 'https://maps.google.com/?q=Satay+Restaurant+Kota+Kinabalu' }
          ],
          high: [
            { name: '샹그릴라 선셋 디너', desc: '탄중아루 리조트 선셋뷰 코스', link: 'https://maps.google.com/?q=Shangri+La+Tanjung+Aru+Restaurant' },
            { name: '랍스터 디너', desc: '신선한 보르네오 해산물 풀코스', link: 'https://maps.google.com/?q=Lobster+Dinner+Kota+Kinabalu' },
            { name: '가야 아일랜드 리조트 디너', desc: '프라이빗 섬 리조트 파인다이닝', link: 'https://maps.google.com/?q=Gaya+Island+Resort+Restaurant' }
          ]
        },
        hotels: {
          low: [
            { name: '시내 게스트하우스', stars: 2, desc: '제셀턴 포인트 인근', priceRange: '약 2-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Guesthouse+Kota+Kinabalu&dest_type=city' },
            { name: '가야 스트리트 호텔', stars: 3, desc: '시내 중심 · 가성비', priceRange: '약 4-8만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Gaya+Street+Hotel+Kota+Kinabalu&dest_type=city' }
          ],
          mid: [
            { name: '하얏트 리젠시', stars: 4, desc: '시내 중심 · 바다 전망', priceRange: '약 8-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hyatt+Regency+Kota+Kinabalu&dest_type=city' },
            { name: '르 메르디앙', stars: 5, desc: '해변가 리조트', priceRange: '약 10-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Le+Meridien+Kota+Kinabalu&dest_type=city' }
          ],
          high: [
            { name: '샹그릴라 탄중아루', stars: 5, desc: '선셋뷰 최고급 리조트', priceRange: '약 20-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Shangri+La+Tanjung+Aru+Kota+Kinabalu&dest_type=city' },
            { name: '가야 아일랜드 리조트', stars: 5, desc: '프라이빗 섬 · 최고급', priceRange: '약 35-70만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Gaya+Island+Resort+Kota+Kinabalu&dest_type=city' }
          ]
        },
        hotelTips: ['시내 호텔+데이투어 조합 추천', '탄중아루 리조트는 선셋뷰 필수', '건기(1-4월) 예약 서둘러야', '그랩(Grab) 택시 앱 필수'],
        cheapFlights: [
          { label: '에어아시아 (직항)', desc: '5시간 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bki/' },
          { label: '진에어·대한항공 (직항)', desc: '5시간 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/bki/' }
        ],
        flightTips: ['직항 5시간', '왕복 25-45만원', '에어아시아 특가 주목', '시차 -1시간']
      },
      {
        id: 'luangprabang', name: '루앙프라방', sub: '라오스 · 탁발승과 메콩강의 도시', score: 71, isTop: false,
        photo: 'https://images.unsplash.com/photo-1583531172268-3acab063a6b0?w=800&q=80',
        airfare: '30만원~', hotel: '호텔 매우 저렴', hotelSub: '3성급 3-6만원대', daily: '소비 매우 적음', dailySub: '1일 3-5만원',
        alert: '경보 없음', alertSub: '치안 매우 좋음', news: '관광 성장', newsSub: '유네스코 유산', disaster: '우기', disasterSub: '6-10월 스콜',
        temp: '열대', tempSub: '건기(11-3월) 최적',
        fx: '킵(LAK)', fxSub: '미국 달러·태국 바트 통용',
        baseAir: 30, baseHotel: 4, baseHotelLow: 2, baseHotelHigh: 15, minDays: 4, minBudget: 45,
        desc: '루앙프라방은 시간이 멈춘 도시입니다.\n새벽 5시 수백 명 승려의 탁발 행렬,\n메콩강 위 황금빛 일몰,\n쿠앙시 폭포의 에메랄드 물빛까지\n유네스코가 인정한 도시 전체가 문화유산입니다.\n동남아의 마지막 힐링 성지를 만나세요.',
        sights: {
          low: [
            { name: '탁발 승려 행렬 관람', price: '무료', link: 'https://maps.google.com/?q=Morning+Alms+Giving+Luang+Prabang' },
            { name: '메콩강 선셋', price: '무료', link: 'https://maps.google.com/?q=Mekong+River+Sunset+Luang+Prabang' },
            { name: '나이트마켓', price: '무료', link: 'https://maps.google.com/?q=Night+Market+Luang+Prabang' }
          ],
          mid: [
            { name: '쿠앙시 폭포', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=kuang+si+waterfall+luang+prabang' },
            { name: '왓 시엥통 사원', price: '약 0.3만원', link: 'https://maps.google.com/?q=Wat+Xieng+Thong+Luang+Prabang' },
            { name: '푸시산 전망대', price: '약 0.3만원', link: 'https://maps.google.com/?q=Phousi+Hill+Luang+Prabang' }
          ],
          high: [
            { name: '메콩강 롱보트 크루즈', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=mekong+river+cruise+luang+prabang' },
            { name: '팍우 동굴 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=pak+ou+caves+tour+luang+prabang' },
            { name: '코끼리 보호센터 방문', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=elephant+sanctuary+luang+prabang' }
          ]
        },
        exps: {
          low: [
            { name: '올드타운 프랑스 거리 산책', price: '무료', link: 'https://maps.google.com/?q=French+Quarter+Luang+Prabang' },
            { name: '사원 순례', price: '무료', link: 'https://maps.google.com/?q=Temples+Luang+Prabang' },
            { name: '메콩강변 카페', price: '약 0.5만원', link: 'https://maps.google.com/?q=Mekong+Riverside+Cafe+Luang+Prabang' }
          ],
          mid: [
            { name: '라오스 요리 클래스', price: '약 2만원', link: 'https://www.airbnb.co.kr/s/Luang-Prabang--Laos/experiences?query=lao+cooking+class' },
            { name: '직물 짜기 체험', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=weaving+experience+luang+prabang' },
            { name: '쿠앙시 폭포+마을 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=kuang+si+village+tour' }
          ],
          high: [
            { name: '프라이빗 메콩 크루즈', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=private+mekong+cruise+luang+prabang' },
            { name: '카약 & 트레킹 콤보', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=kayaking+trekking+luang+prabang' },
            { name: '소수민족 마을 홈스테이', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=hmong+village+homestay+luang+prabang' }
          ]
        },
        food: {
          low: [
            { name: '카오삐약 (쌀국수)', desc: '라오스 대표 쌀국수 · 3백원', link: 'https://maps.google.com/?q=Khao+Piak+Restaurant+Luang+Prabang' },
            { name: '나이트마켓 뷔페', desc: '1인 뷔페 · 2천원', link: 'https://maps.google.com/?q=Night+Market+Buffet+Luang+Prabang' },
            { name: '라프 (다진고기 샐러드)', desc: '라오스 전통 다진고기 요리 · 5백원', link: 'https://maps.google.com/?q=Laap+Restaurant+Luang+Prabang' }
          ],
          mid: [
            { name: '메콩강변 레스토랑', desc: '강변 선셋 뷰 라오스 정식', link: 'https://maps.google.com/?q=Riverside+Restaurant+Luang+Prabang' },
            { name: '프렌치-라오 퓨전', desc: '프랑스 식민지 감성 카페', link: 'https://maps.google.com/?q=French+Lao+Fusion+Restaurant+Luang+Prabang' },
            { name: '라오스 비어 가든', desc: '비어라오+바비큐', link: 'https://maps.google.com/?q=Beer+Lao+Garden+Luang+Prabang' }
          ],
          high: [
            { name: '아만타카 디너', desc: '최고급 리조트 파인다이닝', link: 'https://maps.google.com/?q=Amantaka+Restaurant+Luang+Prabang' },
            { name: '마이숙 부티크 디너', desc: '라오스 왕실 전통 코스', link: 'https://maps.google.com/?q=Manda+de+Laos+Restaurant+Luang+Prabang' },
            { name: '프라이빗 쿠킹 체험', desc: '셰프 동행 시장투어+요리', link: 'https://maps.google.com/?q=Private+Chef+Cooking+Luang+Prabang' }
          ]
        },
        hotels: {
          low: [
            { name: '올드타운 게스트하우스', stars: 2, desc: '유네스코 구역 내', priceRange: '약 1-3만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Old+Town+Guesthouse+Luang+Prabang&dest_type=city' },
            { name: '메콩강변 호스텔', stars: 2, desc: '강변 뷰 · 가성비', priceRange: '약 1-2만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mekong+Riverside+Hostel+Luang+Prabang&dest_type=city' }
          ],
          mid: [
            { name: '빌라 사티 호텔', stars: 4, desc: '프랑스풍 부티크 · 풀 포함', priceRange: '약 5-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Villa+Santi+Hotel+Luang+Prabang&dest_type=city' },
            { name: '마이숙 부티크', stars: 4, desc: '메콩뷰 · 스파 포함', priceRange: '약 7-12만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mekong+Boutique+Hotel+Luang+Prabang&dest_type=city' }
          ],
          high: [
            { name: '소피텔 루앙프라방', stars: 5, desc: '프랑스 총독 관저 개조', priceRange: '약 20-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sofitel+Luang+Prabang&dest_type=city' },
            { name: '아만타카', stars: 5, desc: '아만 리조트 · 최고급', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Amantaka+Luang+Prabang&dest_type=city' }
          ]
        },
        hotelTips: ['올드타운 내 숙소 도보 관광 최적', '탁발 관람은 새벽 5시 기상 필요', '건기(11-3월) 방문 가장 좋음', '비어라오 1병 1천원 미만'],
        cheapFlights: [
          { label: '비엣젯 (하노이 경유)', desc: '약 6시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/lpq/' },
          { label: '방콕항공 (방콕 경유)', desc: '약 8시간 경유 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/lpq/' }
        ],
        flightTips: ['직항 없음 · 경유 7-12시간', '왕복 25-50만원', '방콕·하노이 경유 일반적', '비자: 도착 비자 무료 (15일)']
      },
      {
        id: 'madrid', name: '마드리드', sub: '스페인 · 프라도 미술관과 축구', score: 56, isTop: false,
        photo: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
        airfare: '80만원~', hotel: '호텔 비쌈', hotelSub: '3성급 12-22만원대', daily: '소비 많음', dailySub: '1일 12-18만원',
        alert: '여행유의', alertSub: '소매치기 주의', news: '유로 강세', newsSub: '비교적 저렴', disaster: '없음', disasterSub: '',
        temp: '대륙성', tempSub: '봄(4-5월)·가을(9-10월) 최적',
        fx: '유로(€)', fxSub: '유로 강세 · 바르셀로나보다 물가 낮음',
        baseAir: 80, baseHotel: 15, baseHotelLow: 10, baseHotelHigh: 40, minDays: 6, minBudget: 160,
        desc: '마드리드는 스페인의 심장입니다.\n프라도 미술관에서 벨라스케스와 고야를 만나고,\n산티아고 베르나베우에서 레알 마드리드의 열정을 느끼세요.\n레티로 공원의 여유,\n산 미겔 시장의 타파스와 상그리아,\n그란비아의 화려한 야경까지\n열정의 도시가 기다립니다.',
        sights: {
          low: [
            { name: '레티로 공원', price: '무료', link: 'https://maps.google.com/?q=Retiro+Park+Madrid' },
            { name: '그란비아 거리', price: '무료', link: 'https://maps.google.com/?q=Gran+Via+Madrid' },
            { name: '마요르 광장', price: '무료', link: 'https://maps.google.com/?q=Plaza+Mayor+Madrid' }
          ],
          mid: [
            { name: '프라도 미술관', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=prado+museum+madrid' },
            { name: '레이나 소피아 미술관', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=reina+sofia+museum+madrid' },
            { name: '왕궁', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=royal+palace+madrid' }
          ],
          high: [
            { name: '베르나베우 스타디움 VIP 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=bernabeu+stadium+tour+madrid' },
            { name: '톨레도 당일 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=toledo+day+trip+madrid' },
            { name: '세고비아+아빌라 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=segovia+avila+day+trip+madrid' }
          ]
        },
        exps: {
          low: [
            { name: '엘 라스트로 벼룩시장 (일)', price: '무료', link: 'https://maps.google.com/?q=El+Rastro+Market+Madrid' },
            { name: '솔 광장 산책', price: '무료', link: 'https://maps.google.com/?q=Puerta+del+Sol+Madrid' },
            { name: '템플로 데 데보드 선셋', price: '무료', link: 'https://maps.google.com/?q=Temple+of+Debod+Madrid' }
          ],
          mid: [
            { name: '플라멩코 타블라오 공연', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=flamenco+show+madrid' },
            { name: '타파스 & 와인 투어', price: '약 6만원', link: 'https://www.airbnb.co.kr/s/Madrid--Spain/experiences?query=tapas+wine+tour' },
            { name: '레알 마드리드 경기 관람', price: '약 8만원+', link: 'https://www.klook.com/ko/search/?query=real+madrid+match+ticket' }
          ],
          high: [
            { name: '프라이빗 미술관 투어', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=private+museum+tour+madrid' },
            { name: '미슐랭 쿠킹 클래스', price: '약 10만원', link: 'https://www.airbnb.co.kr/s/Madrid--Spain/experiences?query=cooking+class+madrid' },
            { name: '열기구 세고비아 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=hot+air+balloon+segovia' }
          ]
        },
        food: {
          low: [
            { name: '보카디요 데 칼라마레스', desc: '오징어 튀김 샌드위치 · 5천원', link: 'https://maps.google.com/?q=Bocadillo+Calamares+Madrid' },
            { name: '츄로스+초콜라떼', desc: '산 히네스 · 마드리드 명물', link: 'https://maps.google.com/?q=Chocolateria+San+Gines+Madrid' },
            { name: '산 미겔 시장 타파스', desc: '다양한 타파스 · 3천원~', link: 'https://maps.google.com/?q=Mercado+San+Miguel+Madrid' }
          ],
          mid: [
            { name: '코치니요 (새끼돼지 구이)', desc: '세고비아식 통돼지 구이', link: 'https://maps.google.com/?q=Cochinillo+Restaurant+Madrid' },
            { name: '하몬 이베리코 전문점', desc: '최고급 생햄 · 무세오 델 하몬', link: 'https://maps.google.com/?q=Museo+del+Jamon+Madrid' },
            { name: '파에야 발렌시아나', desc: '전통 해물 파에야', link: 'https://maps.google.com/?q=Paella+Restaurant+Madrid' }
          ],
          high: [
            { name: 'DiverXO', desc: '3스타 미슐랭 · 마드리드 최고', link: 'https://maps.google.com/?q=DiverXO+Restaurant+Madrid' },
            { name: '보틴 (세계 최고 레스토랑)', desc: '1725 기네스 기록 최고 레스토랑', link: 'https://maps.google.com/?q=Sobrino+de+Botin+Madrid' },
            { name: '루프탑 코스 디너', desc: '그란비아 뷰 파인다이닝', link: 'https://maps.google.com/?q=Rooftop+Fine+Dining+Madrid' }
          ]
        },
        hotels: {
          low: [
            { name: '솔 광장 호스텔', stars: 2, desc: '구시가 중심', priceRange: '약 7-12만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sol+Hostel+Madrid&dest_type=city' },
            { name: '그란비아 소형호텔', stars: 3, desc: '그란비아 도보 5분', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Gran+Via+Hotel+Madrid&dest_type=city' }
          ],
          mid: [
            { name: 'NH 마드리드 나시오날', stars: 4, desc: '프라도 인근 · 관광 최적', priceRange: '약 18-30만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=NH+Madrid+Nacional&dest_type=city' },
            { name: '호텔 우르반', stars: 5, desc: '살라망카 지구 디자인 호텔', priceRange: '약 20-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Urban+Madrid&dest_type=city' }
          ],
          high: [
            { name: '만다린 오리엔탈 리츠', stars: 5, desc: '프라도 바로 앞 · 최고급', priceRange: '약 50-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Ritz+Madrid&dest_type=city' },
            { name: '포시즌스 마드리드', stars: 5, desc: '솔 광장 인근 · 신규 럭셔리', priceRange: '약 55-110만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Madrid&dest_type=city' }
          ]
        },
        hotelTips: ['솔·그란비아 주변 교통 최적', '프라도 무료 입장: 월-토 18-20시', '마드리드 카드 교통+입장 절약', '바르셀로나+마드리드 콤보 인기'],
        cheapFlights: [
          { label: '이베리아·에어유로파 (직항/경유)', desc: '14시간 · 왕복 70만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mad/' },
          { label: '카타르·에미레이트 (경유)', desc: '약 14시간 · 왕복 65만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mad/' }
        ],
        flightTips: ['직항 없음 · 경유 14-18시간', '왕복 70-120만원', '바르셀로나 경유 콤보 추천', '쉥겐 비자 무필요 (90일 무비자)']
      },
      {
        id: 'kohsamui', name: '코사무이', sub: '태국 · 허니문 해변의 섬', score: 77, isTop: false,
        photo: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80',
        airfare: '35만원~', hotel: '호텔 저렴', hotelSub: '4성급 5-12만원대', daily: '소비 적음', dailySub: '1일 5-8만원',
        alert: '경보 없음', alertSub: '관광지 안전', news: '바트 약세', newsSub: '환율 유리', disaster: '우기', disasterSub: '폭우 주의',
        temp: '열대', tempSub: '건기(1-4월) 최적',
        fx: '바트(THB)', fxSub: '바트 약세 · 가성비 좋음',
        baseAir: 35, baseHotel: 7, baseHotelLow: 3, baseHotelHigh: 30, minDays: 4, minBudget: 60,
        desc: '코사무이는 태국 만의 보석 섬입니다.\n차웽 해변의 부드러운 백사장,\n앙통 해양공원의 숨겨진 에메랄드 라군,\n열대 정글 속 폭포 트레킹,\n풀빌라에서 즐기는 타이 마사지까지\n허니문과 커플 여행의 성지입니다.',
        sights: {
          low: [
            { name: '차웽 해변', price: '무료', link: 'https://maps.google.com/?q=Chaweng+Beach+Koh+Samui' },
            { name: '라마이 해변', price: '무료', link: 'https://maps.google.com/?q=Lamai+Beach+Koh+Samui' },
            { name: '빅 부다', price: '무료', link: 'https://maps.google.com/?q=Big+Buddha+Koh+Samui' }
          ],
          mid: [
            { name: '앙통 해양공원 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=ang+thong+marine+park+koh+samui' },
            { name: '나무앙 폭포', price: '약 0.5만원', link: 'https://maps.google.com/?q=Namuang+Waterfall+Koh+Samui' },
            { name: '코탄+코낭유안 스노클링', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=koh+tao+nangyuan+snorkeling' }
          ],
          high: [
            { name: '프라이빗 전세 요트', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=private+yacht+koh+samui' },
            { name: '시크릿 비치 VIP 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=secret+beach+vip+tour+koh+samui' },
            { name: '코팡안 풀문 파티', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=full+moon+party+koh+phangan' }
          ]
        },
        exps: {
          low: [
            { name: '차웽 워킹 스트리트', price: '무료', link: 'https://maps.google.com/?q=Chaweng+Walking+Street+Koh+Samui' },
            { name: '보풋 피셔맨 빌리지', price: '무료', link: 'https://maps.google.com/?q=Fishermans+Village+Bophut+Koh+Samui' },
            { name: '실버 비치 스노클링', price: '무료', link: 'https://maps.google.com/?q=Silver+Beach+Koh+Samui' }
          ],
          mid: [
            { name: '타이 복싱 체험', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=muay+thai+koh+samui' },
            { name: '타이 쿠킹 클래스', price: '약 3만원', link: 'https://www.airbnb.co.kr/s/Koh-Samui--Thailand/experiences?query=thai+cooking+class' },
            { name: '타이 마사지 스파', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=thai+massage+spa+koh+samui' }
          ],
          high: [
            { name: '프라이빗 쿠킹+시장 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=private+cooking+market+tour+koh+samui' },
            { name: '럭셔리 스파 데이', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+day+koh+samui' },
            { name: '선셋 세일링', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=sunset+sailing+koh+samui' }
          ]
        },
        food: {
          low: [
            { name: '팟타이', desc: '태국 볶음면 · 5백원', link: 'https://maps.google.com/?q=Pad+Thai+Restaurant+Koh+Samui' },
            { name: '솜땀 (파파야 샐러드)', desc: '태국 매운 파파야 샐러드', link: 'https://maps.google.com/?q=Som+Tam+Restaurant+Koh+Samui' },
            { name: '해변 바비큐', desc: '차웽 해변 시푸드 구이 · 1만원', link: 'https://maps.google.com/?q=Beach+BBQ+Chaweng+Koh+Samui' }
          ],
          mid: [
            { name: '시푸드 레스토랑', desc: '랍스터·새우 해산물 정식', link: 'https://maps.google.com/?q=Seafood+Restaurant+Koh+Samui' },
            { name: '보풋 해변 레스토랑', desc: '해변가 분위기 타이 정식', link: 'https://maps.google.com/?q=Bophut+Beach+Restaurant+Koh+Samui' },
            { name: '정글 레스토랑', desc: '열대 정글 분위기 태국 음식', link: 'https://maps.google.com/?q=Jungle+Restaurant+Koh+Samui' }
          ],
          high: [
            { name: '시크릿 가든 디너', desc: '정글 속 프라이빗 파인다이닝', link: 'https://maps.google.com/?q=Secret+Garden+Restaurant+Koh+Samui' },
            { name: '풀빌라 프라이빗 디너', desc: '풀빌라 내 셰프 전용 코스', link: 'https://maps.google.com/?q=Private+Pool+Villa+Dinner+Koh+Samui' },
            { name: '해변 로맨틱 디너', desc: '프라이빗 비치 캔들 디너', link: 'https://maps.google.com/?q=Beach+Romantic+Dinner+Koh+Samui' }
          ]
        },
        hotels: {
          low: [
            { name: '차웽 게스트하우스', stars: 2, desc: '차웽 해변 도보 5분', priceRange: '약 2-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Chaweng+Guesthouse+Koh+Samui&dest_type=city' },
            { name: '라마이 부티크', stars: 3, desc: '라마이 해변 인근', priceRange: '약 4-8만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Lamai+Boutique+Hotel+Koh+Samui&dest_type=city' }
          ],
          mid: [
            { name: '차웽 리젠트 비치', stars: 4, desc: '차웽 해변 직결 리조트', priceRange: '약 8-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Chaweng+Regent+Beach+Koh+Samui&dest_type=city' },
            { name: '반야트리 풀빌라', stars: 4, desc: '프라이빗 풀빌라', priceRange: '약 12-22만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Pool+Villa+Resort+Koh+Samui&dest_type=city' }
          ],
          high: [
            { name: '식스센스 사무이', stars: 5, desc: '절벽 위 럭셔리 풀빌라', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Six+Senses+Koh+Samui&dest_type=city' },
            { name: '포시즌스 코사무이', stars: 5, desc: '프라이빗 비치 초럭셔리', priceRange: '약 50-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Koh+Samui&dest_type=city' }
          ]
        },
        hotelTips: ['차웽 해변 중심 편리', '보풋 피셔맨 빌리지 감성 숙소', '풀빌라 10만원대부터 가능', '그랩(Grab) 앱 사용 가능'],
        cheapFlights: [
          { label: '방콕항공 (방콕 경유)', desc: '약 7시간 · 왕복 35만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/usm/' },
          { label: '타이항공+방콕항공', desc: '약 8시간 · 왕복 40만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/usm/' }
        ],
        flightTips: ['직항 없음 · 방콕 경유 7-9시간', '왕복 35-60만원', '방콕항공 사무이 독점', '페리+버스 저가 옵션도 가능']
      },
      {
        id: 'interlaken', name: '인터라켄', sub: '스위스 · 융프라우와 알프스', score: 54, isTop: false,
        photo: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
        airfare: '90만원~', hotel: '호텔 매우 비쌈', hotelSub: '3성급 20-35만원대', daily: '소비 매우 많음', dailySub: '1일 15-25만원',
        alert: '경보 없음', alertSub: '치안 매우 좋음', news: '프랑 강세', newsSub: '최고 물가', disaster: '눈길', disasterSub: '겨울 결빙 주의',
        temp: '고산', tempSub: '여름(6-9월) 최적 · 겨울 스키',
        fx: '프랑(CHF)', fxSub: '스위스 프랑 · 세계 최고 물가',
        baseAir: 90, baseHotel: 25, baseHotelLow: 15, baseHotelHigh: 60, minDays: 5, minBudget: 200,
        desc: '인터라켄은 알프스의 심장입니다.\n융프라우요흐 전망대에서 만년설을 밟고,\n그린델발트 퍼스트에서 클리프워크를 걷고,\n하더쿨름에서 두 호수를 내려다보세요.\n패러글라이딩으로 알프스 위를 날고,\n그린델발트 마을에서 스위스 치즈와 초콜릿까지\n일생일대의 자연경험이 기다립니다.',
        sights: {
          low: [
            { name: '인터라켄 호반 산책', price: '무료', link: 'https://maps.google.com/?q=Interlaken+Lakeside+Walk' },
            { name: '운터제엔 올드타운', price: '무료', link: 'https://maps.google.com/?q=Unterseen+Old+Town+Interlaken' },
            { name: '회에마테 공원', price: '무료', link: 'https://maps.google.com/?q=Hohematte+Park+Interlaken' }
          ],
          mid: [
            { name: '하더쿨름 전망대', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=harder+kulm+interlaken' },
            { name: '트뤼멜바흐 폭포', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=trummelbach+falls+interlaken' },
            { name: '블라우제 호수', price: '약 1만원', link: 'https://maps.google.com/?q=Blausee+Switzerland' }
          ],
          high: [
            { name: '융프라우요흐 TOP OF EUROPE', price: '약 25만원', link: 'https://www.klook.com/ko/search/?query=jungfraujoch+top+of+europe' },
            { name: '그린델발트 퍼스트', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=grindelwald+first+cliff+walk' },
            { name: '쉴트호른 (007 전망대)', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=schilthorn+007+interlaken' }
          ]
        },
        exps: {
          low: [
            { name: '그린델발트 마을 산책', price: '무료', link: 'https://maps.google.com/?q=Grindelwald+Village+Switzerland' },
            { name: '라우터브루넨 계곡 하이킹', price: '무료', link: 'https://maps.google.com/?q=Lauterbrunnen+Valley+Hiking' },
            { name: '튠 호수 산책', price: '무료', link: 'https://maps.google.com/?q=Lake+Thun+Walk+Interlaken' }
          ],
          mid: [
            { name: '패러글라이딩', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=paragliding+interlaken' },
            { name: '호수 유람선', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=lake+cruise+interlaken' },
            { name: '초콜릿 공장 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=chocolate+factory+tour+switzerland' }
          ],
          high: [
            { name: '스카이다이빙', price: '약 35만원', link: 'https://www.klook.com/ko/search/?query=skydiving+interlaken' },
            { name: '캐니언닝 어드벤처', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=canyoning+interlaken' },
            { name: '헬리콥터 알프스 투어', price: '약 40만원', link: 'https://www.klook.com/ko/search/?query=helicopter+tour+alps+interlaken' }
          ]
        },
        food: {
          low: [
            { name: '퀘제슈니테 (치즈빵)', desc: '스위스 치즈빵 구이 · 1.5만원', link: 'https://maps.google.com/?q=Kaseschnitte+Restaurant+Interlaken' },
            { name: '브라트부르스트', desc: '스위스 소시지 · 1만원', link: 'https://maps.google.com/?q=Bratwurst+Interlaken' },
            { name: 'Coop/Migros 마트 식사', desc: '슈퍼마켓 델리 · 1만원~', link: 'https://maps.google.com/?q=Coop+Supermarket+Interlaken' }
          ],
          mid: [
            { name: '라클레트', desc: '녹인 치즈 감자 정식', link: 'https://maps.google.com/?q=Raclette+Restaurant+Interlaken' },
            { name: '퐁뒤', desc: '스위스 전통 치즈퐁뒤', link: 'https://maps.google.com/?q=Fondue+Restaurant+Interlaken' },
            { name: '뢰스티 (감자전)', desc: '스위스 국민 감자 요리', link: 'https://maps.google.com/?q=Rosti+Restaurant+Interlaken' }
          ],
          high: [
            { name: '빅토리아 융프라우 디너', desc: '그랜드 호텔 파인다이닝', link: 'https://maps.google.com/?q=Victoria+Jungfrau+Restaurant+Interlaken' },
            { name: '산장 레스토랑', desc: '알프스 뷰 산장 코스 요리', link: 'https://maps.google.com/?q=Mountain+Restaurant+Grindelwald' },
            { name: '융프라우요흐 레스토랑', desc: '3,454m 정상 레스토랑', link: 'https://maps.google.com/?q=Jungfraujoch+Restaurant' }
          ]
        },
        hotels: {
          low: [
            { name: '인터라켄 호스텔', stars: 2, desc: '인터라켄 오스트 인근', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hostel+Interlaken&dest_type=city' },
            { name: '그린델발트 샬레', stars: 3, desc: '마을 중심 산장형', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Chalet+Grindelwald&dest_type=city' }
          ],
          mid: [
            { name: '호텔 인터라켄', stars: 4, desc: '인터라켄 중심 · 역사적 호텔', priceRange: '약 25-40만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Interlaken&dest_type=city' },
            { name: '린트너 그랜드 보 리바주', stars: 4, desc: '브리엔츠 호수 뷰', priceRange: '약 28-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Lindner+Grand+Beau+Rivage+Interlaken&dest_type=city' }
          ],
          high: [
            { name: '빅토리아 융프라우', stars: 5, desc: '인터라켄 대표 그랜드 호텔', priceRange: '약 50-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Victoria+Jungfrau+Grand+Hotel+Interlaken&dest_type=city' },
            { name: '더 캄브리안', stars: 5, desc: '아델보덴 · 알프스 뷰 인피니티풀', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=The+Cambrian+Adelboden&dest_type=city' }
          ]
        },
        hotelTips: ['인터라켄 오스트 역 주변 교통 편리', '스위스 트래블 패스 교통+관광 절약', '융프라우 VIP 패스 미리 구매', '여름(6-9월) 성수기 예약 서둘러야'],
        cheapFlights: [
          { label: '대한항공 (취리히 직항)', desc: '12시간 · 왕복 120만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/zrh/' },
          { label: '루프트한자·스위스 (경유)', desc: '약 14시간 · 왕복 90만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/zrh/' }
        ],
        flightTips: ['취리히/제네바 공항 → 기차 2시간', '왕복 90-140만원', '경유편 70만원대~', '쉥겐 비자 무필요 (90일 무비자)']
      },
      {
        id: 'dubrovnik', name: '두브로브니크', sub: '크로아티아 · 아드리아해의 진주', score: 53, isTop: false,
        photo: 'https://images.unsplash.com/photo-1555990538-1e15c83f9551?w=800&q=80',
        airfare: '85만원~', hotel: '호텔 비쌈', hotelSub: '3성급 12-22만원대', daily: '소비 많음', dailySub: '1일 10-18만원',
        alert: '경보 없음', alertSub: '치안 매우 좋음', news: '유로 도입', newsSub: '유로 전환 완료', disaster: '없음', disasterSub: '',
        temp: '지중해성', tempSub: '봄(5-6월)·가을(9-10월) 최적',
        fx: '유로(€)', fxSub: '유로화 · 관광세 별도 부과',
        baseAir: 85, baseHotel: 15, baseHotelLow: 10, baseHotelHigh: 45, minDays: 5, minBudget: 170,
        desc: '두브로브니크는 아드리아해의 진주입니다.\n성벽 위를 걸으며 붉은 지붕과 파란 바다를 내려다보고,\n왕좌의 게임 촬영지에서 킹스랜딩을 걸으세요.\n스르지산 케이블카에서 보는 석양,\n로크룸 섬의 맑은 바다까지\n꽃보다 누나로 사랑받은 도시입니다.',
        sights: {
          low: [
            { name: '올드타운 성벽 외부', price: '무료', link: 'https://maps.google.com/?q=Old+Town+Dubrovnik' },
            { name: '스트라둔 거리', price: '무료', link: 'https://maps.google.com/?q=Stradun+Street+Dubrovnik' },
            { name: '반예 해변', price: '무료', link: 'https://maps.google.com/?q=Banje+Beach+Dubrovnik' }
          ],
          mid: [
            { name: '성벽 워크 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=dubrovnik+city+walls+walk' },
            { name: '스르지산 케이블카', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=dubrovnik+cable+car+srd' },
            { name: '렉터 궁전 박물관', price: '약 1.5만원', link: 'https://www.klook.com/ko/search/?query=rectors+palace+dubrovnik' }
          ],
          high: [
            { name: '왕좌의 게임 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=game+of+thrones+tour+dubrovnik' },
            { name: '엘라피티 제도 보트 투어', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=elaphiti+islands+boat+tour+dubrovnik' },
            { name: '프라이빗 세일링', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=private+sailing+dubrovnik' }
          ]
        },
        exps: {
          low: [
            { name: '올드타운 카페 문화', price: '약 0.5만원', link: 'https://maps.google.com/?q=Cafe+Old+Town+Dubrovnik' },
            { name: '로크룸 섬 페리', price: '약 1만원', link: 'https://maps.google.com/?q=Lokrum+Island+Dubrovnik' },
            { name: '부자 바 절벽 카페', price: '약 1만원', link: 'https://maps.google.com/?q=Buza+Bar+Dubrovnik' }
          ],
          mid: [
            { name: '카약 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=kayaking+dubrovnik' },
            { name: '와인 테이스팅 투어', price: '약 5만원', link: 'https://www.airbnb.co.kr/s/Dubrovnik--Croatia/experiences?query=wine+tasting' },
            { name: '스노클링+SUP', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=snorkeling+sup+dubrovnik' }
          ],
          high: [
            { name: '프라이빗 요트 크루즈', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=private+yacht+cruise+dubrovnik' },
            { name: '모스타르(보스니아) 당일 투어', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=mostar+day+trip+dubrovnik' },
            { name: '몬테네그로 코토르 투어', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=montenegro+kotor+bay+tour+dubrovnik' }
          ]
        },
        food: {
          low: [
            { name: '부렉 (파이)', desc: '발칸 전통 치즈/고기 파이 · 5천원', link: 'https://maps.google.com/?q=Burek+Bakery+Dubrovnik' },
            { name: '체바피 (미트롤)', desc: '발칸 다진고기 구이 · 8천원', link: 'https://maps.google.com/?q=Cevapi+Restaurant+Dubrovnik' },
            { name: '아이스크림 젤라또', desc: '올드타운 젤라또 · 5천원', link: 'https://maps.google.com/?q=Gelato+Dubrovnik' }
          ],
          mid: [
            { name: '해산물 리조또', desc: '아드리아해 해산물 리조또', link: 'https://maps.google.com/?q=Seafood+Risotto+Restaurant+Dubrovnik' },
            { name: '그릴드 문어', desc: '크로아티아 대표 문어 구이', link: 'https://maps.google.com/?q=Grilled+Octopus+Restaurant+Dubrovnik' },
            { name: '블랙 리조또', desc: '오징어 먹물 리조또', link: 'https://maps.google.com/?q=Black+Risotto+Restaurant+Dubrovnik' }
          ],
          high: [
            { name: '성벽뷰 파인다이닝', desc: '올드타운 뷰 미슐랭급', link: 'https://maps.google.com/?q=Fine+Dining+Old+Town+Dubrovnik' },
            { name: '프로토 해산물', desc: '1886년 전통 해산물 레스토랑', link: 'https://maps.google.com/?q=Proto+Restaurant+Dubrovnik' },
            { name: '360 레스토랑', desc: '미슐랭 스타 · 항구 뷰', link: 'https://maps.google.com/?q=Restaurant+360+Dubrovnik' }
          ]
        },
        hotels: {
          low: [
            { name: '올드타운 아파트먼트', stars: 3, desc: '성벽 내 현지 아파트', priceRange: '약 8-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Old+Town+Apartment+Dubrovnik&dest_type=city' },
            { name: '라파드 지역 호텔', stars: 3, desc: '올드타운 버스 15분', priceRange: '약 7-12만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Lapad+Hotel+Dubrovnik&dest_type=city' }
          ],
          mid: [
            { name: '힐튼 임페리얼', stars: 4, desc: '올드타운 필레 게이트 앞', priceRange: '약 20-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hilton+Imperial+Dubrovnik&dest_type=city' },
            { name: '호텔 엑셀시어', stars: 5, desc: '올드타운 뷰 · 해변 앞', priceRange: '약 25-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hotel+Excelsior+Dubrovnik&dest_type=city' }
          ],
          high: [
            { name: '빌라 두브로브니크', stars: 5, desc: '절벽 위 부티크 럭셔리', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Villa+Dubrovnik&dest_type=city' },
            { name: '선 가든 리조트', stars: 5, desc: '프라이빗 비치 리조트', priceRange: '약 35-70만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sun+Gardens+Dubrovnik&dest_type=city' }
          ]
        },
        hotelTips: ['올드타운 내 숙소 분위기 최고 · 짐 운반 불편', '라파드/그루쥬 지역 해변+가성비', '두브로브니크 카드 교통+입장 절약', '여름 7-8월 극성수기 · 미리 예약'],
        cheapFlights: [
          { label: '터키항공 (이스탄불 경유)', desc: '약 14시간 · 왕복 70만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dbv/' },
          { label: '루프트한자 (프랑크푸르트 경유)', desc: '약 14시간 · 왕복 80만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/dbv/' }
        ],
        flightTips: ['직항 없음 · 경유 14-18시간', '왕복 70-120만원', '자그레브/스플리트에서 국내선 연결', '쉥겐 비자 무필요 (90일 무비자)']
      },
      {
        id: 'istanbul', name: '튀르키예 · 이스탄불', sub: '동서양 문명의 교차로', score: 60, isTop: false,
        photo: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
        airfare: '70만원~', hotel: '호텔 저렴', hotelSub: '3성급 5-10만원대', daily: '소비 적음', dailySub: '1일 5-8만원',
        alert: '여행유의', alertSub: '1단계 경보', news: '리라 약세', newsSub: '가성비 최적', disaster: '-', disasterSub: '',
        temp: '온대', tempSub: '봄(4-6월)·가을(9-11월) 최적',
        fx: '리라(₺)', fxSub: '리라 약세 · 가성비 좋음',
        baseAir: 70, baseHotel: 7, baseHotelLow: 3, baseHotelHigh: 30, minDays: 5, minBudget: 100,
        sights: {
          low: [
            { name: '블루모스크 외관', price: '무료', link: 'https://maps.google.com/?q=Blue+Mosque+Istanbul' },
            { name: '그랜드 바자르 구경', price: '무료', link: 'https://maps.google.com/?q=Grand+Bazaar+Istanbul' },
            { name: '갈라타 다리 산책', price: '무료', link: 'https://maps.google.com/?q=Galata+Bridge+Istanbul' }
          ],
          mid: [
            { name: '아야소피아 입장', price: '약 2만원', link: 'https://maps.google.com/?q=Hagia+Sophia+Istanbul' },
            { name: '톱카프 궁전', price: '약 3만원', link: 'https://maps.google.com/?q=Topkapi+Palace+Istanbul' },
            { name: '보스포루스 크루즈', price: '약 2만원', link: 'https://maps.google.com/?q=Bosphorus+Cruise+Istanbul' }
          ],
          high: [
            { name: 'VIP 보스포루스 디너 크루즈', price: '약 15만원', link: 'https://maps.google.com/?q=Bosphorus+Dinner+Cruise+Istanbul' },
            { name: '카파도키아 열기구 투어', price: '약 25만원', link: 'https://maps.google.com/?q=Cappadocia+Hot+Air+Balloon' },
            { name: '프라이빗 터키 목욕 체험', price: '약 10만원', link: 'https://maps.google.com/?q=Turkish+Bath+Istanbul' }
          ]
        },
        exps: {
          low: [
            { name: '케밥 거리 음식 투어', price: '약 0.5만원', link: 'https://maps.google.com/?q=Istanbul+Kebab+Street' },
            { name: '이스티클랄 거리 산책', price: '무료', link: 'https://maps.google.com/?q=Istiklal+Avenue+Istanbul' },
            { name: '터키 차이 체험', price: '약 0.1만원', link: 'https://maps.google.com/?q=Turkish+Tea+Istanbul' }
          ],
          mid: [
            { name: '터키 요리 클래스', price: '약 5만원', link: 'https://maps.google.com/?q=Turkish+Cooking+Class+Istanbul' },
            { name: '함맘 전통 목욕', price: '약 3만원', link: 'https://maps.google.com/?q=Hammam+Istanbul' },
            { name: '왕자의 섬 투어', price: '약 2만원', link: 'https://maps.google.com/?q=Princes+Islands+Istanbul' }
          ],
          high: [
            { name: '카파도키아 2일 투어', price: '약 30만원', link: 'https://maps.google.com/?q=Cappadocia+Tour+from+Istanbul' },
            { name: '보스포루스 프라이빗 요트', price: '약 20만원', link: 'https://maps.google.com/?q=Private+Yacht+Bosphorus+Istanbul' },
            { name: '미슐랭 디너 경험', price: '약 15만원', link: 'https://maps.google.com/?q=Michelin+Restaurant+Istanbul' }
          ]
        },
        food: {
          low: [
            { name: '시미트 (참깨 빵)', desc: '터키 전통 링 빵 · 3백원', link: 'https://maps.google.com/?q=Simit+Street+Food+Istanbul' },
            { name: '케밥 (로컬 식당)', desc: '되네르 케밥·아다나 케밥 · 2천원', link: 'https://maps.google.com/?q=Kebab+Istanbul' },
            { name: '발릭 에크멕 (생선 샌드위치)', desc: '갈라타 다리 명물 · 3천원', link: 'https://maps.google.com/?q=Balik+Ekmek+Galata+Bridge+Istanbul' }
          ],
          mid: [
            { name: '메제 세트+라크 (아니스 술)', desc: '터키 전통 안주+전통주 세트', link: 'https://maps.google.com/?q=Meze+Restaurant+Istanbul' },
            { name: '터키 조식 (카흐발트)', desc: '치즈·올리브·계란 풍성한 터키식 조식', link: 'https://maps.google.com/?q=Turkish+Breakfast+Istanbul' },
            { name: '보스포루스 뷰 레스토랑', desc: '해협 전망 해산물 레스토랑', link: 'https://maps.google.com/?q=Bosphorus+View+Restaurant+Istanbul' }
          ],
          high: [
            { name: '미카라 레스토랑', desc: '보스포루스 뷰 파인다이닝 · 미슐랭급', link: 'https://maps.google.com/?q=Fine+Dining+Bosphorus+Istanbul' },
            { name: '누스레트 (솔트 바에)' , desc: '글로벌 스테이크 체인 본점', link: 'https://maps.google.com/?q=Nusr-et+Steakhouse+Istanbul' },
            { name: '루프탑 오스만 쿠진', desc: '아야소피아 뷰 루프탑 코스요리', link: 'https://maps.google.com/?q=Ottoman+Cuisine+Rooftop+Istanbul' }
          ]
        },
        hotels: {
          low: [
            { name: '술탄아흐메트 호스텔', stars: 2, desc: '구시가 중심 · 블루모스크 도보 5분', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sultanahmet+Hostel+Istanbul&dest_type=city' },
            { name: '탁심 백패커스', stars: 2, desc: '이스티클랄 거리 인근', priceRange: '약 4-6만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Taksim+Hostel+Istanbul&dest_type=city' }
          ],
          mid: [
            { name: '아르마다 이스탄불', stars: 4, desc: '구시가 해변뷰 · 루프탑 레스토랑', priceRange: '약 8-14만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Armada+Hotel+Istanbul&dest_type=city' },
            { name: '그랜드 하야트 이스탄불', stars: 4, desc: '탁심 중심 · 보스포루스 전망', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Grand+Hyatt+Istanbul&dest_type=city' }
          ],
          high: [
            { name: '포시즌스 보스포루스', stars: 5, desc: '보스포루스 해협 · 최고급 럭셔리', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Four+Seasons+Bosphorus+Istanbul&dest_type=city' },
            { name: '체라간 팰리스 켐핀스키', stars: 5, desc: '오스만 궁전 호텔 · 역사적 아이코닉', priceRange: '약 50-100만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ciragan+Palace+Kempinski+Istanbul&dest_type=city' }
          ]
        },
        hotelTips: ['술탄아흐메트 지역 관광 최적', '탁심 지역 쇼핑·나이트라이프 최적', '이스탄불 카드 교통·박물관 할인', '그랜드 바자르 주변 숙소 소매치기 주의'],
        cheapFlights: [
          { label: '터키항공 (직항)', desc: '인천 직항 11시간 · 왕복 70만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ist/' },
          { label: '대한항공 (직항)', desc: '11시간 직항 · 왕복 70만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/ist/' }
        ],
        flightTips: ['직항 11시간', '왕복 70-100만원', '터키항공 스탑오버 무료 호텔 프로그램', 'e-비자 온라인 신청 (약 3만원)']
      },
      // ── 마카오 (2nd) ──
      {
        id: 'macau', name: '마카오', sub: '동양의 라스베가스 · 카지노와 세계유산', score: 70, isTop: false,
        photo: 'https://images.unsplash.com/photo-1555277458-842b1ae67cf3?w=800&q=80',
        airfare: '25만원~', hotel: '호텔 다양', hotelSub: '3성급 8-15만원대', daily: '소비 보통', dailySub: '1일 8-15만원',
        alert: '경보 없음', alertSub: '전반적으로 안전', news: '파타카 안정', newsSub: 'HKD 병용', disaster: '없음', disasterSub: '',
        temp: '아열대', tempSub: '가을·겨울(10-2월) 최적',
        fx: '마카오 파타카', fxSub: '홍콩달러·위안 병용 가능',
        baseAir: 25, baseHotel: 10, baseHotelLow: 8, baseHotelHigh: 35, minDays: 3, minBudget: 50,
        sights: {
          low: [
            { name: '세나도 광장 산책', price: '무료', link: 'https://maps.google.com/?q=Senado+Square+Macau' },
            { name: '성 바울 성당 유적', price: '무료', link: 'https://maps.google.com/?q=Ruins+of+St+Pauls+Macau' },
            { name: '기아 등대 요새', price: '무료', link: 'https://maps.google.com/?q=Guia+Fortress+Macau' }
          ],
          mid: [
            { name: '마카오 타워 전망대', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=macau+tower+observation' },
            { name: '베네시안 리조트 투어', price: '무료', link: 'https://maps.google.com/?q=Venetian+Macau' },
            { name: '타이파 빌리지 탐방', price: '무료', link: 'https://maps.google.com/?q=Taipa+Village+Macau' }
          ],
          high: [
            { name: '마카오 타워 번지점프', price: '약 50만원', link: 'https://www.klook.com/ko/search/?query=macau+tower+bungy+jump' },
            { name: '시티 오브 드림즈 쇼', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=city+of+dreams+show+macau' },
            { name: '윈 팰리스 분수 쇼', price: '무료', link: 'https://maps.google.com/?q=Wynn+Palace+Macau' }
          ]
        },
        exps: {
          low: [
            { name: '에그타르트 맛집 투어', price: '약 0.3만원', link: 'https://maps.google.com/?q=Lord+Stows+Bakery+Macau' },
            { name: '콜로안 빌리지 산책', price: '무료', link: 'https://maps.google.com/?q=Coloane+Village+Macau' },
            { name: '세계유산 도보 투어', price: '무료', link: 'https://maps.google.com/?q=Historic+Centre+Macau' }
          ],
          mid: [
            { name: '포르투갈 요리 체험', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=macau+portuguese+food' },
            { name: '마카오 와인 박물관', price: '약 0.5만원', link: 'https://maps.google.com/?q=Wine+Museum+Macau' },
            { name: '만다린 오리엔탈 스파', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=mandarin+oriental+spa+macau' }
          ],
          high: [
            { name: '미슐랭 레스토랑 디너', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=michelin+restaurant+macau' },
            { name: '카지노 VIP 체험', price: '약 30만원+', link: 'https://maps.google.com/?q=Galaxy+Macau' },
            { name: '럭셔리 스파 패키지', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+macau' }
          ]
        },
        food: {
          low: [
            { name: '에그타르트 (로드 스토우즈)', desc: '마카오 에그타르트 원조 · 3천원', link: 'https://maps.google.com/?q=Lord+Stow+Bakery+Macau' },
            { name: '마카니즈 소시지 볶음밥', desc: '포르투갈 풍미 현지 식당 · 1만원대', link: 'https://maps.google.com/?q=Macanese+food+Taipa+Village' },
            { name: '콜로안 빌리지 디저트 카페', desc: '콜로안 마을 전통 과자·빵 · 5천원', link: 'https://maps.google.com/?q=Coloane+Village+Cafe+Macau' }
          ],
          mid: [
            { name: '포르투갈 전통 요리', desc: '포르투갈식 대구 요리·전통 코스 · 5만원대', link: 'https://maps.google.com/?q=Portuguese+Restaurant+Macau' },
            { name: '딤섬 레스토랑', desc: '마카오 스타일 딤섬 · 2~3만원', link: 'https://maps.google.com/?q=Dim+Sum+Restaurant+Macau' },
            { name: '코타이 스트립 뷔페', desc: '베네시안 내 다양한 레스토랑 · 3~5만원', link: 'https://maps.google.com/?q=Cotai+Strip+Buffet+Macau' }
          ],
          high: [
            { name: '만다린 오리엔탈 파인다이닝', desc: '마카오 최고급 코스요리 · 10만원+', link: 'https://maps.google.com/?q=Mandarin+Oriental+Restaurant+Macau' },
            { name: '윙 레이 파인다이닝', desc: '윈 팰리스 최고급 레스토랑 · 미슐랭급', link: 'https://maps.google.com/?q=Wing+Lei+Restaurant+Wynn+Macau' },
            { name: '미슐랭 카지노 레스토랑', desc: '스타마 등 유명 파인다이닝 · 15만원+', link: 'https://maps.google.com/?q=Casino+Restaurant+Macau' }
          ]
        },
        hotels: {
          low: [
            { name: '올레 런던 호텔', stars: 3, desc: '세나도 광장 도보 5분', priceRange: '약 8-12만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ole+London+Hotel+Macau&dest_type=city' },
            { name: '산바 호텔', stars: 3, desc: '관광지 접근성 우수', priceRange: '약 7-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sanva+Hotel+Macau&dest_type=city' }
          ],
          mid: [
            { name: '쉐라톤 그랜드 마카오', stars: 4, desc: '코타이 스트립 · 대형 리조트', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Sheraton+Grand+Macao&dest_type=city' },
            { name: '스튜디오 시티', stars: 4, desc: '엔터테인먼트 리조트', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Studio+City+Macau&dest_type=city' }
          ],
          high: [
            { name: '더 베네시안 마카오', stars: 5, desc: '세계 최대 카지노 리조트', priceRange: '약 25-50만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Venetian+Macao&dest_type=city' },
            { name: '윈 팰리스', stars: 5, desc: '코타이 최고급 리조트', priceRange: '약 35-70만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Wynn+Palace+Macau&dest_type=city' }
          ]
        },
        hotelTips: ['코타이 스트립 리조트 무료 셔틀 활용', '세나도 광장 근처 구시가 숙소 관광 편리', '홍콩-마카오 페리 터미널 근처도 편리', '주말·공휴일 숙박비 급등 주의'],
        cheapFlights: [
          { label: '에어마카오 (직항)', desc: '3.5시간 · 왕복 30만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mfm/' },
          { label: '홍콩 경유', desc: '4시간 · 왕복 33만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/mfm/' }
        ],
        flightTips: ['직항 3시간 30분', '왕복 25-40만원', '홍콩 경유 페리 이동도 인기', '홍콩+마카오 콤보 추천']
      },
      // ── 베이징 ──
      {
        id: 'beijing', name: '베이징', sub: '중국 수도 · 만리장성과 자금성의 도시', score: 65, isTop: false,
        photo: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
        airfare: '20만원~', hotel: '호텔 저렴', hotelSub: '3성급 5-10만원대', daily: '소비 적음', dailySub: '1일 5-10만원',
        alert: '경보 없음', alertSub: '전반적으로 안전', news: '위안화 안정', newsSub: '환율 변동 적음', disaster: '없음', disasterSub: '',
        temp: '대륙성 기후', tempSub: '봄(4-5월)·가을(9-10월) 최적',
        fx: '중국 위안', fxSub: '알리페이·위챗페이 필수',
        baseAir: 20, baseHotel: 6, baseHotelLow: 5, baseHotelHigh: 25, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '천안문 광장', price: '무료', link: 'https://maps.google.com/?q=Tiananmen+Square+Beijing' },
            { name: '798 예술구', price: '무료', link: 'https://maps.google.com/?q=798+Art+District+Beijing' },
            { name: '후통 골목 산책', price: '무료', link: 'https://maps.google.com/?q=Nanluoguxiang+Hutong+Beijing' }
          ],
          mid: [
            { name: '자금성 (고궁)', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=forbidden+city+beijing' },
            { name: '천단 공원', price: '약 0.5만원', link: 'https://maps.google.com/?q=Temple+of+Heaven+Beijing' },
            { name: '이화원', price: '약 0.5만원', link: 'https://maps.google.com/?q=Summer+Palace+Beijing' }
          ],
          high: [
            { name: '만리장성 (무티안위)', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=mutianyu+great+wall+beijing' },
            { name: '베이징 오페라 관람', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=peking+opera+beijing' },
            { name: '올림픽 공원 야경', price: '무료', link: 'https://maps.google.com/?q=Beijing+Olympic+Park' }
          ]
        },
        exps: {
          low: [
            { name: '후통 인력거 체험', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=hutong+rickshaw+tour+beijing' },
            { name: '왕푸징 먹자골목', price: '약 0.5만원', link: 'https://maps.google.com/?q=Wangfujing+Snack+Street+Beijing' },
            { name: '징산 공원 일몰', price: '약 0.1만원', link: 'https://maps.google.com/?q=Jingshan+Park+Beijing' }
          ],
          mid: [
            { name: '베이징 덕 정통 코스', price: '약 3만원', link: 'https://maps.google.com/?q=Quanjude+Roast+Duck+Beijing' },
            { name: '만리장성 하이킹 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=great+wall+hiking+tour+beijing' },
            { name: '중국 요리 쿠킹 클래스', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=cooking+class+beijing' }
          ],
          high: [
            { name: '자금성 프라이빗 투어', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=forbidden+city+private+tour+beijing' },
            { name: '스프링 레전드 스파', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+beijing' },
            { name: '고급 베이징덕 풀코스', price: '약 10만원', link: 'https://maps.google.com/?q=Da+Dong+Roast+Duck+Beijing' }
          ]
        },
        food: {
          low: [
            { name: '베이징 자장면 (炸醤面)', desc: '베이징식 춘장 비빔면 · 5천원', link: 'https://maps.google.com/?q=Zhajiangmian+Beijing' },
            { name: '왕푸징 먹자골목 꼬치', desc: '전갈·양꼬치 등 다양한 로컬 간식', link: 'https://maps.google.com/?q=Wangfujing+Snack+Street+Beijing' },
            { name: '훈둔 (완탕국)', desc: '현지 분식 · 한 끼 4천원', link: 'https://maps.google.com/?q=Wonton+Restaurant+Beijing' }
          ],
          mid: [
            { name: '정통 베이징 덕 (全聚德)', desc: '창업 1864년 베이징덕 원조 · 3만원', link: 'https://maps.google.com/?q=Quanjude+Roast+Duck+Beijing' },
            { name: '마라샹궈 (마라탕)', desc: '얼얼한 사천식 마라 볶음 · 2만원', link: 'https://maps.google.com/?q=Mala+Hot+Pot+Beijing' },
            { name: '후통 골목 현지 식당', desc: '서민 정식·만두 코스 · 1-2만원', link: 'https://maps.google.com/?q=Hutong+local+restaurant+Beijing' }
          ],
          high: [
            { name: '다동 베이징덕 (大董)', desc: '미슐랭급 고급 베이징덕 풀코스 · 10만원+', link: 'https://maps.google.com/?q=Da+Dong+Roast+Duck+Beijing' },
            { name: '노 미슐랭 베이징 파인다이닝', desc: '현대 중식 파인다이닝 · 8만원+', link: 'https://maps.google.com/?q=TRB+Hutong+Restaurant+Beijing' },
            { name: '만한취안시 (황제 코스 요리)', desc: '전통 궁중 코스요리 체험 · 15만원+', link: 'https://maps.google.com/?q=Imperial+Court+Cuisine+Beijing' }
          ]
        },
        hotels: {
          low: [
            { name: '홀리데이 인 익스프레스', stars: 3, desc: '왕푸징 도보권', priceRange: '약 5-8만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Holiday+Inn+Express+Beijing+Wangfujing&dest_type=city' },
            { name: '이비스 베이징', stars: 3, desc: '깔끔한 비즈니스 호텔', priceRange: '약 4-7만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ibis+Beijing&dest_type=city' }
          ],
          mid: [
            { name: '더블트리 바이 힐튼', stars: 4, desc: '왕푸징 중심가', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=DoubleTree+Hilton+Beijing&dest_type=city' },
            { name: '노보텔 베이징', stars: 4, desc: '비즈니스·관광 겸용', priceRange: '약 8-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Novotel+Beijing&dest_type=city' }
          ],
          high: [
            { name: '아만 서머 팰리스', stars: 5, desc: '이화원 옆 최고급 리조트', priceRange: '약 60-120만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Aman+Summer+Palace+Beijing&dest_type=city' },
            { name: '만다린 오리엔탈 왕푸징', stars: 5, desc: '왕푸징 중심 · 최고급', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mandarin+Oriental+Wangfujing+Beijing&dest_type=city' }
          ]
        },
        hotelTips: ['왕푸징 지역 관광 최적', '후통 근처 부티크 호텔도 인기', '지하철 접근성 확인 필수', '겨울 난방 잘 되는 호텔 선택'],
        cheapFlights: [
          { label: '대한항공·아시아나 (직항)', desc: '인천 직항 2시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pek/' },
          { label: 'LCC (직항)', desc: '2시간 직항 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pek/' }
        ],
        flightTips: ['직항 2시간', '왕복 20-35만원', 'LCC 초특가 빈번', '중국 비자 면제 여부 사전 확인']
      },
      // ── 칭다오 ──
      {
        id: 'qingdao', name: '칭다오', sub: '중국 독일풍 해변도시 · 맥주의 도시', score: 60, isTop: false,
        photo: 'https://images.unsplash.com/photo-1567001988898-15b41cddc77a?w=800&q=80',
        airfare: '15만원~', hotel: '호텔 저렴', hotelSub: '3성급 4-8만원대', daily: '소비 매우 적음', dailySub: '1일 4-8만원',
        alert: '경보 없음', alertSub: '전반적으로 안전', news: '위안화 안정', newsSub: '환율 변동 적음', disaster: '없음', disasterSub: '',
        temp: '온대 해양성', tempSub: '여름(6-9월) 해변·맥주 축제 최적',
        fx: '중국 위안', fxSub: '알리페이·위챗페이 필수',
        baseAir: 15, baseHotel: 5, baseHotelLow: 4, baseHotelHigh: 15, minDays: 3, minBudget: 30,
        sights: {
          low: [
            { name: '잔교 해변 산책', price: '무료', link: 'https://maps.google.com/?q=Zhanqiao+Pier+Qingdao' },
            { name: '팔대관 풍경구', price: '무료', link: 'https://maps.google.com/?q=Eight+Great+Passes+Qingdao' },
            { name: '소어산 공원', price: '무료', link: 'https://maps.google.com/?q=Xiaoyushan+Park+Qingdao' }
          ],
          mid: [
            { name: '칭다오 맥주 박물관', price: '약 1만원', link: 'https://www.klook.com/ko/search/?query=qingdao+beer+museum' },
            { name: '라오산 풍경구', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=laoshan+scenic+area+qingdao' },
            { name: '해저 세계 아쿠아리움', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=qingdao+underwater+world' }
          ],
          high: [
            { name: '라오산 프라이빗 하이킹', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=laoshan+hiking+private+qingdao' },
            { name: '올림픽 세일링 센터', price: '약 3만원', link: 'https://maps.google.com/?q=Olympic+Sailing+Center+Qingdao' },
            { name: '해변 요트 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=yacht+tour+qingdao' }
          ]
        },
        exps: {
          low: [
            { name: '칭다오 맥주 거리', price: '약 0.5만원', link: 'https://maps.google.com/?q=Qingdao+Beer+Street' },
            { name: '해산물 시장 투어', price: '약 1만원', link: 'https://maps.google.com/?q=Yingkou+Road+Seafood+Market+Qingdao' },
            { name: '독일풍 거리 산책', price: '무료', link: 'https://maps.google.com/?q=German+Quarter+Qingdao' }
          ],
          mid: [
            { name: '해산물 BBQ 디너', price: '약 3만원', link: 'https://maps.google.com/?q=Seafood+BBQ+Qingdao' },
            { name: '라오산 녹차 체험', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=laoshan+green+tea+qingdao' },
            { name: '칭다오 야경 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=night+tour+qingdao' }
          ],
          high: [
            { name: '프라이빗 해산물 코스', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=premium+seafood+dinner+qingdao' },
            { name: '요트 선셋 크루즈', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=sunset+yacht+cruise+qingdao' },
            { name: '럭셔리 스파 체험', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=luxury+spa+qingdao' }
          ]
        },
        food: {
          low: [
            { name: '칭다오 맥주 거리 야식', desc: '맥주 한 잔 + 오징어구이 · 1~2만원', link: 'https://maps.google.com/?q=Qingdao+Beer+Street' },
            { name: '로컬 해산물 시장', desc: '잉커우로 해산물 시장 · 신선한 조개·새우', link: 'https://maps.google.com/?q=Yingkou+Road+Seafood+Market+Qingdao' },
            { name: '칭다오 냉면·만두', desc: '현지 분식 · 한 끼 5천원 내외', link: 'https://maps.google.com/?q=Qingdao+local+noodle+restaurant' }
          ],
          mid: [
            { name: '해산물 BBQ 레스토랑', desc: '랍스터·새우·가리비 구이 · 3~5만원', link: 'https://maps.google.com/?q=Seafood+BBQ+Qingdao' },
            { name: '라오산 녹차 체험', desc: '라오산 녹차와 함께하는 다도 · 2만원', link: 'https://www.klook.com/ko/search/?query=laoshan+green+tea+qingdao' },
            { name: '독일풍 양조장 레스토랑', desc: '칭다오 맥주 공장 併설 레스토랑', link: 'https://maps.google.com/?q=Tsingtao+Beer+Festival+Qingdao' }
          ],
          high: [
            { name: '프라이빗 해산물 코스', desc: '대게·전복 코스요리 · 8만원+', link: 'https://www.klook.com/ko/search/?query=premium+seafood+dinner+qingdao' },
            { name: '하얏트 리젠시 레스토랑', desc: '오션뷰 파인다이닝 · 10만원+', link: 'https://maps.google.com/?q=Hyatt+Regency+Qingdao+restaurant' },
            { name: '요트 선셋 크루즈 디너', desc: '바다 위 씨푸드 디너 · 8~12만원', link: 'https://www.klook.com/ko/search/?query=sunset+yacht+cruise+qingdao' }
          ]
        },
        hotels: {
          low: [
            { name: '한팅 호텔', stars: 3, desc: '잔교 해변 근처', priceRange: '약 4-6만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hanting+Hotel+Qingdao&dest_type=city' },
            { name: '이비스 칭다오', stars: 3, desc: '깔끔한 경제형', priceRange: '약 3-5만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Ibis+Qingdao&dest_type=city' }
          ],
          mid: [
            { name: '힐튼 가든 인', stars: 4, desc: '오션뷰 · 해변 접근성', priceRange: '약 8-14만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hilton+Garden+Inn+Qingdao&dest_type=city' },
            { name: '인터컨티넨탈 칭다오', stars: 4, desc: '시내 중심가', priceRange: '약 10-18만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=InterContinental+Qingdao&dest_type=city' }
          ],
          high: [
            { name: '하얏트 리젠시', stars: 5, desc: '오션뷰 최고급', priceRange: '약 20-35만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hyatt+Regency+Qingdao&dest_type=city' },
            { name: '섕그릴라 호텔', stars: 5, desc: '해변 럭셔리 리조트', priceRange: '약 25-45만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Shangri-La+Qingdao&dest_type=city' }
          ]
        },
        hotelTips: ['잔교·구시가 근처 관광 최적', '해변 오션뷰 숙소 인기', '라오산 근처 리조트도 추천', '여름 성수기 조기 예약 필수'],
        cheapFlights: [
          { label: 'LCC 직항', desc: '인천 직항 1시간 30분 · 왕복 15만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/tao/' },
          { label: '대한항공·아시아나', desc: '1.5시간 직항 · 왕복 15만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/tao/' }
        ],
        flightTips: ['직항 1시간 30분', '왕복 15-25만원', '한국에서 가장 가까운 중국 도시 중 하나', 'LCC 초특가 수시 확인']
      },
      // ── 사이판 ──
      {
        id: 'saipan', name: '사이판', sub: '태평양의 보석 · 에메랄드빛 휴양 천국', score: 78, isTop: false,
        photo: 'https://images.unsplash.com/photo-1589308078055-1ede9b789e20?w=800&q=80',
        airfare: '35만원~', hotel: '리조트 중심', hotelSub: '3성급 10-20만원대', daily: '소비 보통', dailySub: '1일 8-15만원',
        alert: '경보 없음', alertSub: '전반적으로 안전', news: 'USD 사용', newsSub: '달러 사용', disaster: '없음', disasterSub: '',
        temp: '열대해양성', tempSub: '연중 27-30°C · 건기(12-6월) 최적',
        fx: '미국 달러 (USD)', fxSub: '한국 환전 후 출발 권장',
        baseAir: 35, baseHotel: 12, baseHotelLow: 10, baseHotelHigh: 40, minDays: 3, minBudget: 60,
        sights: {
          low: [
            { name: '마나가하섬 해변', price: '셔틀 3만원', link: 'https://www.klook.com/ko/search/?query=managaha+island+saipan' },
            { name: '마이크로 비치 산책', price: '무료', link: 'https://maps.google.com/?q=Micro+Beach+Saipan' },
            { name: '아메리칸 메모리얼 파크', price: '무료', link: 'https://maps.google.com/?q=American+Memorial+Park+Saipan' }
          ],
          mid: [
            { name: '만세절벽 전망대', price: '무료', link: 'https://maps.google.com/?q=Banzai+Cliff+Saipan' },
            { name: '그로토 스노클링', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=grotto+saipan+snorkeling' },
            { name: '버드 아일랜드 전망대', price: '무료', link: 'https://maps.google.com/?q=Bird+Island+Saipan' }
          ],
          high: [
            { name: '체험 다이빙', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=saipan+diving' },
            { name: '경비행기 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=saipan+cessna+tour' },
            { name: '선셋 크루즈', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=saipan+sunset+cruise' }
          ]
        },
        exps: {
          low: [
            { name: '가라판 야시장 탐방', price: '1만원대', link: 'https://maps.google.com/?q=Garapan+Street+Market+Saipan' },
            { name: '마이크로 비치 선셋', price: '무료', link: 'https://maps.google.com/?q=Micro+Beach+Saipan' },
            { name: '로컬 차모로 음식 체험', price: '1-2만원', link: 'https://maps.google.com/?q=Chamorro+food+Saipan' }
          ],
          mid: [
            { name: '마나가하섬 패키지', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=managaha+island+package' },
            { name: '정글 투어 (ATV)', price: '약 7만원', link: 'https://www.klook.com/ko/search/?query=saipan+atv+jungle' },
            { name: '바나나보트·제트스키', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=saipan+jet+ski' }
          ],
          high: [
            { name: '스쿠버 다이빙 (2탱크)', price: '약 12만원', link: 'https://www.klook.com/ko/search/?query=saipan+scuba+diving' },
            { name: '낚시 투어 (반일)', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=saipan+fishing+tour' },
            { name: '프라이빗 요트 투어', price: '약 30만원', link: 'https://www.klook.com/ko/search/?query=saipan+yacht+tour' }
          ]
        },
        food: {
          low: [
            { name: '차모로 BBQ', desc: '사이판 원주민 전통 구이 · 가라판 야시장', link: 'https://maps.google.com/?q=Chamorro+BBQ+Garapan+Saipan' },
            { name: '포케 보울', desc: '하와이안 스타일 해산물 덮밥 · 1만원대', link: 'https://maps.google.com/?q=Poke+Bowl+Saipan' },
            { name: '로컬 야시장 음식', desc: '켈라구엔·레드 라이스 등 전통 음식', link: 'https://maps.google.com/?q=Garapan+Night+Market+Saipan' }
          ],
          mid: [
            { name: '킹피셔 레스토랑', desc: '해산물 요리 · 오션뷰 인기 레스토랑', link: 'https://maps.google.com/?q=Kingfisher+Restaurant+Saipan' },
            { name: '차모로 그릴', desc: '현지식 플레이트 런치 · 2만원대', link: 'https://maps.google.com/?q=Chamorro+Grill+Saipan' },
            { name: '일식 & 스시', desc: '사이판 일식당 · 일본인 관광 영향', link: 'https://maps.google.com/?q=Japanese+restaurant+Saipan' }
          ],
          high: [
            { name: '하얏트 레스토랑 디너', desc: '프라이빗 비치뷰 코스 요리 · 5만원+', link: 'https://maps.google.com/?q=Hyatt+Regency+Saipan+restaurant' },
            { name: '랍스터 씨푸드 디너', desc: '신선한 태평양 해산물 풀코스', link: 'https://maps.google.com/?q=Lobster+seafood+Saipan' },
            { name: '선셋 바베큐', desc: '해변 선셋 뷔페 바베큐 · 리조트 전용', link: 'https://maps.google.com/?q=Sunset+BBQ+Saipan' }
          ]
        },
        hotels: {
          low: [
            { name: 'Saipan World Resort', stars: 3, desc: '가라판 중심, 가성비 좋은 리조트', priceRange: '약 10-15만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Saipan+World+Resort&dest_type=city' }
          ],
          mid: [
            { name: 'Fiesta Resort & Spa', stars: 4, desc: '마이크로 비치 옆, 수영장 포함', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Fiesta+Resort+Saipan&dest_type=city' },
            { name: 'Kensington Hotel Saipan', stars: 4, desc: '한국인 선호 리조트, 풀장·키즈클럽', priceRange: '약 18-30만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Kensington+Hotel+Saipan&dest_type=city' }
          ],
          high: [
            { name: 'Hyatt Regency Saipan', stars: 5, desc: '최고급 리조트, 프라이빗 비치', priceRange: '약 35-60만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hyatt+Regency+Saipan&dest_type=city' }
          ]
        },
        hotelTips: ['가라판 지역 숙소가 식당·쇼핑 접근 최적', '리조트 올인클루시브 패키지 비교 권장', '성수기(7-8월) 조기 예약 필수'],
        cheapFlights: [
          { label: '제주항공 (직항)', desc: '인천 직항 4시간 30분 · 왕복 35만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/spn/' },
          { label: '티웨이항공 (직항)', desc: '4.5시간 · 왕복 25만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/spn/' }
        ],
        flightTips: ['직항 4시간 30분', '왕복 30-50만원', '비수기(3-5월, 10-11월) 특가 많음', '무비자 45일']
      },
      // ── 팔라완 ──
      {
        id: 'palawan', name: '팔라완', sub: '최후의 비경 · 필리핀 숨겨진 천국', score: 75, isTop: false,
        photo: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
        airfare: '20만원~', hotel: '리조트·게스트하우스', hotelSub: '3성급 5-12만원대', daily: '소비 적음', dailySub: '1일 5-10만원',
        alert: '경보 없음', alertSub: '전반적으로 안전', news: '페소 안정', newsSub: '원화 유리', disaster: '없음', disasterSub: '',
        temp: '열대', tempSub: '건기(12-5월) 최적 · 우기(6-11월) 비 많음',
        fx: '필리핀 페소 (PHP)', fxSub: '현지 ATM 출금 or 달러 환전',
        baseAir: 20, baseHotel: 6, baseHotelLow: 4, baseHotelHigh: 25, minDays: 4, minBudget: 40,
        sights: {
          low: [
            { name: '혼다베이 아일랜드 호핑', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=honda+bay+island+hopping+palawan' },
            { name: '베이커 힐 전망대', price: '약 5천원', link: 'https://maps.google.com/?q=Baker+Hill+Puerto+Princesa' },
            { name: '이와히그 반딧불 투어', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=iwahig+firefly+palawan' }
          ],
          mid: [
            { name: '푸에르토 프린세사 지하강', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=puerto+princesa+underground+river' },
            { name: '엘니도 아일랜드 투어 A', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=el+nido+tour+a' },
            { name: '코론 호수·난파선 투어', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=coron+lake+tour' }
          ],
          high: [
            { name: '엘니도 프라이빗 보트 투어', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=el+nido+private+boat+tour' },
            { name: '체험 다이빙 (코론)', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=coron+diving' },
            { name: '카약·SUP 투어', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=el+nido+kayak+sup' }
          ]
        },
        exps: {
          low: [
            { name: '로컬 해산물 시장', price: '1-2만원', link: 'https://maps.google.com/?q=Puerto+Princesa+public+market' },
            { name: '나크판 비치 일몰', price: '무료', link: 'https://maps.google.com/?q=Nacpan+Beach+El+Nido' },
            { name: '필리핀 BBQ 체험', price: '5천원~', link: 'https://maps.google.com/?q=BBQ+street+food+Palawan' }
          ],
          mid: [
            { name: '맹그로브 카약 투어', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=palawan+mangrove+kayak' },
            { name: '스노클링 장비 렌탈', price: '약 1만원/일', link: 'https://www.klook.com/ko/search/?query=palawan+snorkeling+rental' },
            { name: '쿠킹 클래스', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=palawan+cooking+class' }
          ],
          high: [
            { name: '다이빙 라이선스 (3일)', price: '약 25만원', link: 'https://www.klook.com/ko/search/?query=palawan+padi+course' },
            { name: '프라이빗 섬 투어', price: '약 20만원', link: 'https://www.klook.com/ko/search/?query=palawan+private+island+tour' },
            { name: '럭셔리 스파', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=palawan+luxury+spa' }
          ]
        },
        food: {
          low: [
            { name: '이니하우 (구운 생선)', desc: '필리핀 전통 생선 요리 · 망고·토마토 소스', link: 'https://maps.google.com/?q=Inihaw+na+Isda+Palawan' },
            { name: '씨푸드 야시장', desc: '푸에르토 프린세사 야시장 해산물', link: 'https://maps.google.com/?q=Puerto+Princesa+night+market' },
            { name: '할로할로', desc: '필리핀 빙수 디저트 · 5천원', link: 'https://maps.google.com/?q=Halo+Halo+Palawan' }
          ],
          mid: [
            { name: '카파이 가든 레스토랑', desc: '엘니도 오션뷰 레스토랑 · 해산물', link: 'https://maps.google.com/?q=Kapai+Garden+Restaurant+El+Nido' },
            { name: '크림슨 비치 레스토랑', desc: '코론 해変 뷰 · 신선한 시푸드', link: 'https://maps.google.com/?q=Coron+beach+restaurant' },
            { name: '아도보 & 시니강', desc: '필리핀 국민 요리 · 탕·조림', link: 'https://maps.google.com/?q=Adobo+Sinigang+restaurant+Palawan' }
          ],
          high: [
            { name: '엘니도 리조트 다이닝', desc: '프라이빗 비치 파인다이닝 · 현지·서양식', link: 'https://maps.google.com/?q=El+Nido+Resorts+restaurant' },
            { name: '팡라시안 아일랜드 디너', desc: '고립된 섬 비치 바베큐 디너', link: 'https://maps.google.com/?q=Pangulasian+Island+restaurant+El+Nido' },
            { name: '랑곤고 코코넛 크랩', desc: '팔라완 특산 코코넛 크랩 요리', link: 'https://maps.google.com/?q=coconut+crab+Palawan' }
          ]
        },
        hotels: {
          low: [
            { name: 'Astoria Palawan', stars: 3, desc: '공항 근처, 수영장 포함', priceRange: '약 5-8만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Astoria+Palawan&dest_type=city' }
          ],
          mid: [
            { name: 'El Nido Resorts Lio', stars: 4, desc: '엘니도 해변 리조트, 프라이빗 비치', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=El+Nido+Resorts+Lio&dest_type=city' },
            { name: 'Two Seasons Coron', stars: 4, desc: '코론 최고 리조트, 절벽 위 수영장', priceRange: '약 15-25만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Two+Seasons+Coron+Island+Resort&dest_type=city' }
          ],
          high: [
            { name: 'Pangulasian Island Resort', stars: 5, desc: '엘니도 초럭셔리, 프라이빗 아일랜드', priceRange: '약 50-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Pangulasian+Island+Resort&dest_type=city' }
          ]
        },
        hotelTips: ['엘니도·코론은 리조트 위주, 푸에르토 프린세사는 호텔·게스트하우스', '성수기(12-4월) 조기 예약 필수', 'WiFi 속도 제한적 — 디지털 디톡스 여행에 최적'],
        cheapFlights: [
          { label: '세부퍼시픽 (마닐라 경유)', desc: '약 7시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/pps/' },
          { label: '에어스위프트 (엘니도 직항)', desc: '약 6시간 · 왕복 22만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/eni/' }
        ],
        flightTips: ['인천→마닐라 직항 4시간 + 국내선 1시간', '왕복 20-35만원', '엘니도 직행 소형기(Air Swift) 이용 가능', '세부퍼시픽·필리핀항공 특가 수시 확인']
      },
      // ── 삼아 (하이난) ──
      {
        id: 'sanya', name: '삼아', sub: '중국의 하와이 · 열대 해변 리조트', score: 68, isTop: false,
        photo: 'https://images.unsplash.com/photo-1582553624828-51e6e0ca1e3d?w=800&q=80',
        airfare: '20만원~', hotel: '리조트 중심', hotelSub: '4성급 8-15만원대', daily: '소비 보통', dailySub: '1일 8-12만원',
        alert: '경보 없음', alertSub: '전반적으로 안전', news: '위안 약세', newsSub: '환율 유리', disaster: '없음', disasterSub: '',
        temp: '열대', tempSub: '연중 따뜻 · 건기(11-4월) 최적',
        fx: '중국 위안 (CNY)', fxSub: '위챗페이·알리페이 필수',
        baseAir: 20, baseHotel: 8, baseHotelLow: 6, baseHotelHigh: 35, minDays: 3, minBudget: 45,
        sights: {
          low: [
            { name: '야롱완 해변', price: '무료', link: 'https://maps.google.com/?q=Yalong+Bay+Sanya' },
            { name: '다둥하이 해변', price: '무료', link: 'https://maps.google.com/?q=Dadonghai+Bay+Sanya' },
            { name: '녹회두 공원', price: '약 5천원', link: 'https://maps.google.com/?q=Luhuitou+Park+Sanya' }
          ],
          mid: [
            { name: '남산 문화관광구 (해상관음)', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=nanshan+cultural+tourism+zone+sanya' },
            { name: '천애해각 풍경구', price: '약 2만원', link: 'https://www.klook.com/ko/search/?query=tianya+haijiao+sanya' },
            { name: '우지저우다오 섬', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=wuzhizhou+island+sanya' }
          ],
          high: [
            { name: '아틀란티스 아쿠아벤처', price: '약 6만원', link: 'https://www.klook.com/ko/search/?query=atlantis+sanya+aquaventure' },
            { name: '열대 천당 삼림공원', price: '약 3만원', link: 'https://www.klook.com/ko/search/?query=tropical+paradise+forest+park+sanya' },
            { name: '잠수함 체험', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=sanya+submarine+tour' }
          ]
        },
        exps: {
          low: [
            { name: '해선 시장 해산물', price: '2-3만원', link: 'https://maps.google.com/?q=Sanya+seafood+market' },
            { name: '야시장 탐방', price: '1만원대', link: 'https://maps.google.com/?q=Sanya+night+market' },
            { name: '해변 일출 산책', price: '무료', link: 'https://maps.google.com/?q=Haitang+Bay+Sanya' }
          ],
          mid: [
            { name: '서핑 강습', price: '약 5만원', link: 'https://www.klook.com/ko/search/?query=sanya+surfing+lesson' },
            { name: '제트스키 체험', price: '약 4만원', link: 'https://www.klook.com/ko/search/?query=sanya+jet+ski' },
            { name: '면세점 쇼핑 (하이탕완)', price: '무료 입장', link: 'https://maps.google.com/?q=CDF+Haitang+Bay+Duty+Free+Sanya' }
          ],
          high: [
            { name: '체험 다이빙', price: '약 8만원', link: 'https://www.klook.com/ko/search/?query=sanya+diving+experience' },
            { name: '요트 파티', price: '약 15만원', link: 'https://www.klook.com/ko/search/?query=sanya+yacht+party' },
            { name: '럭셔리 스파 (리조트)', price: '약 10만원', link: 'https://www.klook.com/ko/search/?query=sanya+luxury+spa' }
          ]
        },
        food: {
          low: [
            { name: '하이난 닭밥 (하이난지판)', desc: '삼아 대표 음식 · 3-5천원', link: 'https://maps.google.com/?q=Hainanese+chicken+rice+Sanya' },
            { name: '씨푸드 야시장', desc: '해선시장 해산물 구이 · 2만원대', link: 'https://maps.google.com/?q=Sanya+seafood+night+market' },
            { name: '코코넛 스낵', desc: '하이난 특산 코코넛 음료·과자', link: 'https://maps.google.com/?q=coconut+snack+Sanya' }
          ],
          mid: [
            { name: '따이취안 씨푸드', desc: '큰 랍스터·새우 시푸드 정식 · 5만원대', link: 'https://maps.google.com/?q=seafood+restaurant+Sanya' },
            { name: '하이난 훠궈', desc: '동남아식 해산물 훠궈 · 현지 인기', link: 'https://maps.google.com/?q=hotpot+restaurant+Sanya' },
            { name: '딤섬 & 조식', desc: '중국식 조식 뷔페 · 리조트 조식', link: 'https://maps.google.com/?q=dim+sum+Sanya' }
          ],
          high: [
            { name: '아틀란티스 씨드래곤 레스토랑', desc: '아틀란티스 리조트 오션뷰 파인다이닝', link: 'https://maps.google.com/?q=Atlantis+Sanya+restaurant' },
            { name: 'MGM 레스토랑 디너', desc: 'MGM Grand 서양식·중식 코스 · 10만원+', link: 'https://maps.google.com/?q=MGM+Grand+Sanya+restaurant' },
            { name: '힐튼 선셋 씨푸드', desc: '야롱만 힐튼 해산물 뷔페', link: 'https://maps.google.com/?q=Hilton+Sanya+Yalong+Bay+restaurant' }
          ]
        },
        hotels: {
          low: [
            { name: 'Sanya Bay Mangrove Tree Resort', stars: 3, desc: '삼아만 해변가, 가성비 리조트', priceRange: '약 6-10만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Mangrove+Tree+Resort+Sanya&dest_type=city' }
          ],
          mid: [
            { name: 'Hilton Sanya Yalong Bay', stars: 4, desc: '야롱만 대형 리조트, 풀장 5개', priceRange: '약 12-20만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Hilton+Sanya+Yalong+Bay&dest_type=city' },
            { name: 'MGM Grand Sanya', stars: 5, desc: '하이탕만 초럭셔리, 카지노 없는 MGM', priceRange: '약 15-30만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=MGM+Grand+Sanya&dest_type=city' }
          ],
          high: [
            { name: 'Atlantis Sanya', stars: 5, desc: '하이탕만 아틀란티스, 워터파크 포함', priceRange: '약 40-80만원/박', link: 'https://www.booking.com/searchresults.ko.html?ss=Atlantis+Sanya&dest_type=city' }
          ]
        },
        hotelTips: ['야롱만·하이탕만 리조트가 해변 접근 최적', '면세점과 리조트가 밀집된 하이탕만 추천', '중국 앱(위챗페이) 사전 설정 필수'],
        cheapFlights: [
          { label: '중국남방항공 (직항)', desc: '인천 직항 4시간 · 왕복 20만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/syx/' },
          { label: 'LCC (직항)', desc: '4시간 · 왕복 15만원대', link: 'https://www.skyscanner.co.kr/transport/flights/icn/syx/' }
        ],
        flightTips: ['직항 4시간', '왕복 20-35만원', '무비자 30일 (하이난 특별 정책)', 'VPN 필수 — 출국 전 설치']
      },
      ];

// ── var DEST_ENTRY ──
var DEST_ENTRY = {
        // ── 국내 ──
        korea: {
          visa: '국내 여행 (신분증)', visaType: 'free',
          docs: [
            { icon: '✅', text: '신분증 (주민등록증 또는 여권)', sub: '' },
            { icon: '✅', text: '항공권 또는 여객선 승선권', sub: '' },
          ],
          tips: ['제주 입도 시 별도 서류 없음', '렌터카 이용 시 운전면허증 지참'],
        },
        // ── 일본 ──
        japan: {
          visa: '무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📱', text: 'Visit Japan Web 등록 강력 권장', sub: '공식 웹사이트(vjw-lp.digital.go.jp) — 앱 아님 주의' },
          ],
          tips: ['면세한도: 20만엔 / 주류 3병 / 담배 200개비 (2026년 11월부터 선결제 후 환급 방식으로 변경 예정)', '현금 문화 — 엔화 환전 필수', 'Visit Japan Web 등록 시 입국 심사·세관 시간 대폭 단축'],
        },
        // ── 대만 ──
        taiwan: {
          visa: '무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📋', text: '입국카드 작성', sub: '기내 또는 공항 도착장에서 작성' },
          ],
          tips: ['입국카드 기내에서 미리 작성 추천', '대만달러(TWD) 현금 소지 권장', '면세한도: TWD 20,000 (약 85만원)'],
        },
        // ── 베트남 ──
        vietnam: {
          visa: '무비자 45일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📋', text: '입국카드 작성', sub: '기내 배부 (45일 초과 시 E-Visa 필요)' },
          ],
          tips: ['한국인 무비자 45일 (2028년 3월까지 연장 정책 적용)', '45일 초과 체류 시 E-Visa 사전 발급 필요 (evisa.xuatnhapcanh.gov.vn)', '베트남 동(VND) 현금 소지 권장'],
        },
        // ── 태국 ──
        thailand: {
          visa: '무비자 90일 (한-태 협정)', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'TDAC 온라인 사전 제출 필수', sub: '태국 디지털 도착 카드 — 무료, 입국 전 등록' },
          ],
          tips: ['한국인 한-태 사증면제협정으로 90일 무비자', 'TDAC(Thailand Digital Arrival Card) 입국 전 온라인 사전 등록 필수', '태국 바트(THB) 현금 환전 권장 / 면세한도: 주류 1L, 담배 200개비'],
        },
        // ── 인도네시아 ──
        indonesia: {
          visa: '도착비자(VOA) 30일', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'QR코드 사전 발급 필수', sub: 'allindonesia.imigrasi.go.id — 온라인 무료 등록' },
            { icon: '💰', text: '도착비자 수수료 IDR 500,000', sub: '약 4만원, 현금(USD) 또는 카드' },
            { icon: '🏝️', text: '발리 관광세 IDR 150,000', sub: '약 1만3천원 — lovebali.baliprov.go.id 사전 납부' },
          ],
          tips: ['입국 전 allindonesia.imigrasi.go.id에서 QR코드 사전 발급 필수', '발리 방문 시 관광세 IDR 150,000 별도 사전 납부', '도착비자(VOA) 공항 현장 발급 또는 e-VoA 사전 신청 가능 / 1회 연장 최대 60일'],
        },
        // ── 싱가포르 ──
        singapore: {
          visa: '무비자 30일', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'SG Arrival Card (SGAC) 제출', sub: '입국 3일 이내 온라인 사전 제출 필수' },
          ],
          tips: ['SGAC 미제출 시 입국 지연 가능', 'ICA 공식 웹사이트에서 무료 제출', '싱가포르 달러(SGD), 카드 결제 광범위'],
        },
        // ── 필리핀 ──
        philippines: {
          visa: '무비자 30일', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'eTravel 전자 입국신고', sub: '출발 72시간 내 사전 제출 필수' },
          ],
          tips: ['eTravel 미제출 시 탑승 거부 가능', 'etravel.gov.ph에서 무료 등록', '페소(PHP) 현금 소지 권장'],
        },
        // ── 홍콩 ──
        hongkong: {
          visa: '무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📋', text: '입국카드 작성', sub: '기내 또는 e-Channel (사전 등록 시)' },
          ],
          tips: ['옥토퍼스 카드(교통카드) 공항에서 구매 추천', '홍콩달러(HKD) 현금 소지 권장', 'e-Channel 등록 시 자동 입국심사대 이용 가능'],
        },
        // ── 미국(괌·하와이) ──
        usa_territory: {
          visa: 'ESTA 필수 (미국령)', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'ESTA 전자여행허가 신청', sub: '출발 72시간 전 신청 필수, 약 $21' },
            { icon: '📋', text: '세관신고서 작성', sub: '기내 배부' },
          ],
          tips: ['ESTA 유효기간 2년, 이미 있으면 재신청 불필요', 'esta.cbp.dhs.gov에서 신청', '미국 달러(USD) 사용'],
        },
        usa: {
          visa: 'ESTA 필수', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'ESTA 전자여행허가 신청', sub: '출발 72시간 전 신청 필수, 약 $21' },
            { icon: '📋', text: '세관신고서 작성', sub: '기내 배부' },
          ],
          tips: ['ESTA 유효기간 2년, 이미 있으면 재신청 불필요', 'esta.cbp.dhs.gov에서 신청', '농산물·육류 반입 엄격 신고'],
        },
        // ── 쉥겐 유럽 (포르투갈·프랑스·스페인·이탈리아·스위스·크로아티아) ──
        portugal: {
          visa: '쉥겐 무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '💡', text: '여행자 보험 가입 권장', sub: '쉥겐 지역 입국 요건' },
          ],
          tips: ['쉥겐 협약국으로 체류일 합산 180일 중 90일', 'ETIAS 도입 예정 (2026년경), 현재는 불필요', '유로(EUR) 사용, 카드 결제 광범위'],
        },
        france: {
          visa: '쉥겐 무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '💡', text: '여행자 보험 가입 권장', sub: '쉥겐 지역 입국 요건' },
          ],
          tips: ['쉥겐 협약국으로 체류일 합산 180일 중 90일', 'ETIAS 도입 예정 (2026년경), 현재는 불필요', '소매치기 주의 — 귀중품 관리 철저'],
        },
        spain: {
          visa: '쉥겐 무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '💡', text: '여행자 보험 가입 권장', sub: '쉥겐 지역 입국 요건' },
          ],
          tips: ['쉥겐 협약국으로 체류일 합산 180일 중 90일', 'ETIAS 도입 예정 (2026년경), 현재는 불필요', '소매치기 다발 — 귀중품 관리 철저'],
        },
        italy: {
          visa: '쉥겐 무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '💡', text: '여행자 보험 가입 권장', sub: '쉥겐 지역 입국 요건' },
          ],
          tips: ['쉥겐 협약국으로 체류일 합산 180일 중 90일', 'ETIAS 도입 예정 (2026년경), 현재는 불필요', '소매치기 주의 — 기차역·관광지 주변'],
        },
        switzerland: {
          visa: '쉥겐 무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '💡', text: '여행자 보험 가입 권장', sub: '쉥겐 지역 입국 요건' },
          ],
          tips: ['쉥겐 협약국으로 체류일 합산 180일 중 90일', '스위스 프랑(CHF) 환전 또는 카드 결제', '스위스 트래블 패스 사전 구매 강력 추천'],
        },
        croatia: {
          visa: '쉥겐 무비자 90일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '💡', text: '여행자 보험 가입 권장', sub: '쉥겐 지역 입국 요건' },
          ],
          tips: ['2023년 쉥겐 가입 — 유로 전환 완료', 'ETIAS 도입 예정 (2026년경), 현재는 불필요', '여름 7-8월 극성수기 — 관광세 별도 부과'],
        },
        // ── 영국 ──
        uk: {
          visa: 'ETA 필수 (2026.2~)', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'ETA 전자여행허가 사전 신청', sub: 'gov.uk에서 온라인 발급 (£10)' },
          ],
          tips: ['2026.2.25부터 ETA 필수 — 미소지 시 탑승 불가', '영국은 쉥겐 비적용 — 별도 입국 심사', '파운드(GBP) 환전, 카드 결제 광범위'],
        },
        // ── 말레이시아 ──
        malaysia: {
          visa: '무비자 90일', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📱', text: 'MDAC 말레이시아 디지털 입국카드', sub: '온라인 사전 제출 권장' },
          ],
          tips: ['MDAC는 도착 전 온라인 제출 권장', '링깃(MYR) 현금 소지 권장', 'Grab 앱 사전 설치 필수'],
        },
        // ── 몰디브 ──
        maldives: {
          visa: '도착비자 무료 30일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: '숙박 예약 확인서', sub: '입국 심사 필수 서류' },
            { icon: '📋', text: '입국신고서 작성', sub: 'IMUGA 플랫폼 또는 기내 작성' },
          ],
          tips: ['숙박 확인서 미지참 시 입국 거부 가능', '미국 달러(USD) 또는 카드 사용', '이슬람 국가 — 음주는 리조트 내에서만 가능'],
        },
        // ── 호주 ──
        australia: {
          visa: 'ETA 필수', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'ETA (전자여행허가) 신청', sub: 'Australia ETA 앱 또는 여행사, AUD 20' },
            { icon: '📋', text: '생물검역 신고', sub: '음식물·식물 반입 시 의무 신고' },
          ],
          tips: ['ETA 승인 보통 즉시~수 시간 내', '음식물·흙 반입 미신고 시 고액 벌금', '호주 달러(AUD), 카드 결제 광범위'],
        },
        // ── 중국 ──
        china: {
          visa: '무비자 15일 (한중 상호)', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '‼️', text: 'WeChat Pay / Alipay 사전 설정', sub: '현지 결제 필수 — 현금 거부 사례 많음' },
          ],
          tips: ['구글·카카오·인스타 차단 — VPN 앱 출국 전 설치 필수', 'WeChat Pay 설정: 해외 카드 연동 필요', '위안화(CNY) 현금도 일부 병행'],
        },
        // ── 캄보디아 ──
        cambodia: {
          visa: 'E-Visa 필수', visaType: 'eta',
          docs: [
            { icon: '‼️', text: 'E-Visa 사전 발급 필수', sub: 'evisa.gov.kh에서 신청 ($36)' },
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📷', text: '여권 사진 1매', sub: 'E-Visa 신청 시 필요' },
          ],
          tips: ['E-Visa 승인 3일 소요, 출발 최소 1주일 전 신청', '도착비자도 가능 ($30, 대기 있음)', '달러(USD) 현금 필수, 리엘은 거스름돈용'],
        },
        // ── 라오스 ──
        laos: {
          visa: '도착비자 무료 15일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📷', text: '여권 사진 1매 (도착비자용)', sub: '공항 도착 시 제출' },
          ],
          tips: ['한국 여권 15일 무료 도착비자', '달러(USD) 또는 태국 바트(THB) 현금 소지 권장', 'WiFi 제한적 — 오프라인 지도 사전 다운로드 필수'],
        },
        // ── 튀르키예 ──
        turkey: {
          visa: 'E-Visa 필수', visaType: 'eta',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
            { icon: '📱', text: 'E-Visa 사전 신청', sub: 'evisa.gov.tr에서 온라인 발급 (약 3만원)' },
            { icon: '💡', text: '여행자 보험 가입 권장', sub: 'E-Visa 신청 시 보험 정보 요구 가능' },
          ],
          tips: ['E-Visa는 온라인으로 즉시~수일 내 승인', '체류기간 최대 30일 (단수 입국)', '터키 리라(TRY) 현금 환전 또는 카드 결제', '이스탄불 카드 교통카드 필수 — 공항에서 구매 가능'],
        },
        // ── 마카오 ──
        macau: {
          visa: '무비자 30일', visaType: 'free',
          docs: [
            { icon: '✅', text: '<strong>여권</strong>', sub: '' },
          ],
          tips: ['한국 여권 30일 무비자', '홍콩-마카오 페리 이동 시 별도 입출국', '파타카(MOP) 또는 홍콩달러(HKD) 사용', '카지노 내 무료 와이파이 이용 가능'],
        },
      };

// ── var DEST_COUNTRY ──
var DEST_COUNTRY = {
        lisbon:'portugal', danang:'vietnam', jeju:'korea', taipei:'taiwan', osaka:'japan', tokyo:'japan',
        bangkok:'thailand', bali:'indonesia', chiangmai:'thailand', singapore:'singapore', cebu:'philippines',
        nhatrang:'vietnam', fukuoka:'japan', sapporo:'japan', okinawa:'japan', kyoto:'japan', miyakojima:'japan',
        phuquoc:'vietnam', hochiminh:'vietnam', hanoi:'vietnam', boracay:'philippines', phuket:'thailand',
        hongkong:'hongkong', guam:'usa_territory', hawaii:'usa', paris:'france', kualalumpur:'malaysia',
        maldives:'maldives', sydney:'australia', shanghai:'china', barcelona:'spain',
        nagoya:'japan', siemreap:'cambodia', rome:'italy', london:'uk', kotakinabalu:'malaysia',
        luangprabang:'laos', madrid:'spain', kohsamui:'thailand', interlaken:'switzerland', dubrovnik:'croatia',
        istanbul:'turkey', macau:'macau', beijing:'china', qingdao:'china',
        saipan:'usa_territory', palawan:'philippines', sanya:'china'
      };

// ── var DEST_REGION ──
var DEST_REGION = {
        lisbon:'europe', danang:'sea', jeju:'domestic', taipei:'east_asia', osaka:'japan', tokyo:'japan',
        bangkok:'sea', bali:'sea', chiangmai:'sea', singapore:'east_asia', cebu:'sea', nhatrang:'sea',
        fukuoka:'japan', sapporo:'japan', okinawa:'japan', kyoto:'japan', miyakojima:'japan', phuquoc:'sea', hochiminh:'sea',
        hanoi:'sea', boracay:'sea', phuket:'sea', hongkong:'east_asia', guam:'pacific', hawaii:'pacific',
        paris:'europe', kualalumpur:'sea', maldives:'sea', sydney:'pacific', shanghai:'east_asia', barcelona:'europe',
        nagoya:'japan', siemreap:'sea', rome:'europe', london:'europe', kotakinabalu:'sea',
        luangprabang:'sea', madrid:'europe', kohsamui:'sea', interlaken:'europe', dubrovnik:'europe',
        istanbul:'europe',
        macau:'east_asia', beijing:'east_asia', qingdao:'east_asia',
        saipan:'pacific', palawan:'sea', sanya:'east_asia'
      };

// ── var DEST_COORDS ──
var DEST_COORDS = {
        lisbon:[38.72,-9.14], danang:[16.07,108.22], jeju:[33.49,126.53], taipei:[25.04,121.51],
        osaka:[34.69,135.50], tokyo:[35.69,139.69], bangkok:[13.75,100.52], bali:[-8.34,115.09],
        chiangmai:[18.79,98.98], singapore:[1.35,103.82], cebu:[10.32,123.89], nhatrang:[12.24,109.20],
        fukuoka:[33.59,130.40], sapporo:[43.06,141.35], okinawa:[26.21,127.68], kyoto:[35.01,135.76], miyakojima:[24.80,125.28],
        phuquoc:[10.22,103.97], hochiminh:[10.82,106.63], hanoi:[21.03,105.84], boracay:[11.97,121.92],
        phuket:[7.89,98.40], hongkong:[22.32,114.17], guam:[13.44,144.79], hawaii:[21.31,-157.80],
        paris:[48.85,2.35], kualalumpur:[3.14,101.69], maldives:[4.17,73.51], sydney:[-33.87,151.21],
        shanghai:[31.23,121.47], barcelona:[41.39,2.16],
        nagoya:[35.18,136.91], siemreap:[13.36,103.86], rome:[41.90,12.50], london:[51.51,-0.13],
        kotakinabalu:[5.98,116.07], luangprabang:[19.89,102.13], madrid:[40.42,-3.70], kohsamui:[9.51,100.06],
        interlaken:[46.69,7.87], dubrovnik:[42.65,18.09], istanbul:[41.01,28.98],
        macau:[22.20,113.55], beijing:[39.90,116.40], qingdao:[36.07,120.38],
        saipan:[15.19,145.75], palawan:[9.74,118.74], sanya:[18.25,109.50]
      };

