import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim() ?? '';
    const company = formData.get('company')?.toString().trim() ?? '';
    const phone = formData.get('phone')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const eventType = formData.get('eventType')?.toString().trim() ?? '';
    const eventDate = formData.get('eventDate')?.toString().trim() ?? '';
    const quantity = formData.get('quantity')?.toString().trim() ?? '';
    const budget = formData.get('budget')?.toString().trim() ?? '';
    const products = formData.get('products')?.toString().trim() ?? '';
    const ribbonColor = formData.get('ribbonColor')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    // 필수값 검증
    if (!name || !phone || !email || !eventType || !quantity) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 최소 수량 검증
    if (parseInt(quantity, 10) < 30) {
      return NextResponse.json(
        { error: '최소 주문 수량은 30개입니다.' },
        { status: 400 }
      );
    }

    // 실제 프로젝트에서는 이 부분에 이메일 발송 로직을 추가합니다.
    // 예: Nodemailer, Resend, SendGrid 등을 사용하여 관리자 이메일로 알림 전송
    const inquiryData = {
      receivedAt: new Date().toISOString(),
      name,
      company: company || '(개인)',
      phone,
      email,
      eventType,
      eventDate: eventDate || '미정',
      quantity,
      budget: budget || '미선택',
      products: products || '미선택',
      ribbonColor: ribbonColor || '기본 크림 리본',
      message: message || '(없음)',
    };

    // 개발 환경에서 콘솔로 확인
    console.log('📮 새 단체 견적 문의가 접수되었습니다:\n', JSON.stringify(inquiryData, null, 2));

    return NextResponse.json(
      { success: true, message: '견적 문의가 정상적으로 접수되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
