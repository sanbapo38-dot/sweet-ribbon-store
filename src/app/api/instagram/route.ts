import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  
  // Mock 데이터 정의 (7개의 이미지 에셋 + 1개의 인스타그램 공식 링크 카드)
  const mockData = [
    {
      id: 'mock_1',
      caption: '스위트리본의 겉바속촉 수제 휘낭시에. 갓 구운 고소함이 입안 가득 퍼집니다. ☕️✨ #스위트리본 #휘낭시에 #구움과자 #답례품추천',
      media_type: 'IMAGE',
      media_url: '/images/mock-instagram-1.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-16T11:00:00+0900'
    },
    {
      id: 'mock_2',
      caption: '레몬 글레이즈가 상큼하게 감싸 안은 클래식 조개 마들렌. 나른한 오후 티타임 디저트로 어울립니다. 🍋🍰 #마들렌 #티타임 #디저트그램',
      media_type: 'IMAGE',
      media_url: '/images/mock-instagram-2.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-15T15:30:00+0900'
    },
    {
      id: 'mock_3',
      caption: '카라멜라이즈드된 겉바속촉의 정석 클래식 까눌레. 깊고 진한 풍미를 만나보세요. 🤎 #까눌레 #겉바속촉 #홈카페',
      media_type: 'IMAGE',
      media_url: '/images/mock-instagram-3.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-14T10:15:00+0900'
    },
    {
      id: 'mock_4',
      caption: '스위트리본의 정갈한 감성을 담아 하나하나 정성스레 리본을 묶은 시그니처 구움과자 선물 패키지 세트. 🎀🎁 #결혼식답례품 #돌답례품 #기업행사선물',
      media_type: 'IMAGE',
      media_url: '/images/mock-instagram-4.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-13T18:00:00+0900'
    },
    {
      id: 'mock_5',
      caption: '따뜻한 핸드드립 커피 한 잔과 달콤한 구움과자가 함께하는 스위트리본의 평온한 오후 아틀리에 풍경. ☕️🍃 #감성카페 #아틀리에 #일상기록',
      media_type: 'IMAGE',
      media_url: '/images/mock-instagram-5.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-12T14:00:00+0900'
    },
    {
      id: 'mock_6',
      caption: '입안에서 부드럽게 바스러지는 고소하고 풍부한 풍미의 버터 사블레 쿠키. 🍪 #수제쿠키 #사블레 #과자선물',
      media_type: 'IMAGE',
      media_url: '/images/mock-instagram-6.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-11T11:00:00+0900'
    },
    {
      id: 'mock_7',
      caption: '은은한 얼그레이 향이 우아하게 감도는 파운드 케이크. 촉촉하고 부드러운 식감에 기분 좋아지는 하루. 🍞🌿 #파운드케이크 #홍차디저트 #스위트리본',
      media_type: 'IMAGE',
      media_url: '/images/mock-instagram-7.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-10T16:20:00+0900'
    },
    {
      id: 'mock_8',
      caption: 'Follow our sweet moments on Instagram! 더 풍성하고 달콤한 스위트리본의 일상 소식은 공식 인스타그램 채널 @sweet_ribbon_store 에서 매일 만나보실 수 있습니다. 🍰💝',
      media_type: 'LINK_CARD',
      media_url: '/images/mock-instagram-4.png',
      permalink: 'https://instagram.com',
      timestamp: '2026-07-09T12:00:00+0900'
    }
  ];

  if (!accessToken || accessToken === 'your_instagram_access_token_here') {
    return NextResponse.json({ data: mockData, isMock: true });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`,
      {
        next: { revalidate: 3600 } // 캐싱 1시간
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram API');
    }

    const data = await response.json();
    
    // 이미지 혹은 캐러셀 이미지만 필터링
    const posts = data.data
      ? data.data
          .filter((post: any) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
          .slice(0, 8)
      : [];

    if (posts.length === 0) {
      return NextResponse.json({ data: mockData, isMock: true });
    }

    return NextResponse.json({ data: posts, isMock: false });
  } catch (error) {
    console.error('Instagram Fetch Error, using mock data as fallback:', error);
    return NextResponse.json({ data: mockData, isMock: true, error: true });
  }
}
