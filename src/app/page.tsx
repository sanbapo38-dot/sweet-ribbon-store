import React from 'react';
import Link from 'next/link';
import InstagramFeed from '../components/InstagramFeed';
import KakaoTalkWidget from '../components/KakaoTalkWidget';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fbfaf7', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        padding: '30px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e9e4d9',
        backgroundColor: '#fbfaf7'
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '26px',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: '#3c322b'
        }}>
          Sweet Ribbon
        </div>
        <nav style={{ display: 'flex', gap: '30px', fontSize: '14px', letterSpacing: '0.05em', color: '#594a3f', fontWeight: 300 }}>
          <a href="#" style={{ borderBottom: '1px solid transparent' }}>About</a>
          <a href="#" style={{ borderBottom: '1px solid transparent' }}>Goum-gwaja</a>
          <a href="#" style={{ borderBottom: '1px solid transparent' }}>Gift Set</a>
          <Link href="/contact" style={{ borderBottom: '1px solid transparent', color: 'inherit' }}>Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '100px 40px 100px 40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/brand-mascot.png" 
            alt="Sweet Ribbon Mascot Ribboni" 
            style={{ 
              width: '150px', 
              height: '150px', 
              animation: 'float 6s ease-in-out infinite',
              filter: 'drop-shadow(0 8px 12px rgba(89, 74, 63, 0.06))'
            }} 
          />
        </div>
        <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a7860', fontWeight: 500, display: 'block', marginBottom: '20px' }}>
          Online Premium Goum-gwaja Gift Shop
        </span>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif",
          fontSize: '48px',
          fontWeight: 300,
          lineHeight: '1.4',
          color: '#3c322b',
          marginBottom: '30px',
          wordBreak: 'keep-all'
        }}>
          마음을 묶어 전하는 달콤함,<br />
          스위트리본 온라인 구움과자 답례품
        </h1>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#594a3f',
          fontWeight: 300,
          maxWidth: '640px',
          margin: '0 auto 40px auto',
          wordBreak: 'keep-all'
        }}>
          엄선된 최상의 프랑스산 고메 버터와 유기농 밀가루를 사용하여 깊고 진한 풍미의 구움과자를 매일 정성스럽게 굽습니다.
          소중한 날 감사의 마음이 정갈하게 전달되도록 클래식하고 우아한 실크 리본 패키지에 담아 전국으로 안전하게 전해드립니다.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="#" style={{
            backgroundColor: '#594a3f',
            color: '#fff',
            padding: '14px 28px',
            fontSize: '13px',
            letterSpacing: '0.08em',
            borderRadius: '2px',
            fontWeight: 400,
            transition: 'background-color 0.3s'
          }}>
            VIEW GIFT PACKAGES
          </a>
        </div>
      </section>

      {/* Signature Collections Info */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f5f2eb',
        borderTop: '1px solid #e9e4d9',
        borderBottom: '1px solid #e9e4d9'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 400, color: '#3c322b', marginBottom: '16px' }}>Financier</h3>
            <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all' }}>
              태운 버터의 고소하고 묵직한 풍미와 겉은 쫀득하고 속은 촉촉한 식감을 자랑하는 스위트리본의 대표 시그니처 휘낭시에입니다.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '0 20px', borderLeft: '1px solid #dcd4c3', borderRight: '1px solid #dcd4c3' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 400, color: '#3c322b', marginBottom: '16px' }}>Madeleine</h3>
            <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all' }}>
              상큼한 레몬필과 감미로운 버터향이 조화를 이루어, 한 입 베어 물 때마다 향긋함이 부드럽게 감도는 정통 마들렌입니다.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 400, color: '#3c322b', marginBottom: '16px' }}>Sable (6 Flavors)</h3>
            <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all' }}>
              입안에서 부드럽게 사르르 녹아내리는 매력적인 사블레 쿠키 6종(황치즈, 말차, 초코, 크랜베리, 바닐라, 커피)의 다채로운 풍미를 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Customer Reviews Section */}
      <section style={{
        padding: '100px 40px',
        backgroundColor: '#f5f2eb',
        borderTop: '1px solid #e9e4d9',
        borderBottom: '1px solid #e9e4d9',
        textAlign: 'center'
      }}>
        <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a7860', fontWeight: 500, display: 'block', marginBottom: '16px' }}>
          Customer Stories
        </span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif",
          fontSize: '36px',
          fontWeight: 300,
          color: '#3c322b',
          marginBottom: '50px'
        }}>
          스위트리본을 선택해주신 분들의 이야기
        </h2>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          textAlign: 'left'
        }}>
          {/* Review 1 */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px 30px',
            border: '1px solid #e9e4d9',
            borderRadius: '2px',
            boxShadow: '0 4px 20px rgba(89, 74, 63, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{ color: '#d4af37', fontSize: '14px', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
              <h4 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '17px', color: '#3c322b', marginBottom: '14px', fontWeight: 500 }}>"정말 고급스럽고 맛있어요"</h4>
              <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all', marginBottom: '24px' }}>
                결혼식 답례품으로 주문했는데 하객분들이 패키지가 너무 정성스럽고 예쁘다며 칭찬 많이 해주셨어요. 무엇보다 사블레랑 휘낭시에가 정말 고급스러운 단맛이라 어른들도 무척 좋아하셨습니다.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e9e4d9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#8a7860', fontWeight: 500 }}>결혼식 답례품</span>
              <span style={{ fontSize: '12px', color: '#594a3f', fontWeight: 300 }}>김*영 님</span>
            </div>
          </div>

          {/* Review 2 */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px 30px',
            border: '1px solid #e9e4d9',
            borderRadius: '2px',
            boxShadow: '0 4px 20px rgba(89, 74, 63, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{ color: '#d4af37', fontSize: '14px', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
              <h4 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '17px', color: '#3c322b', marginBottom: '14px', fontWeight: 500 }}>"기관 행사용 대량 주문 대만족"</h4>
              <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all', marginBottom: '24px' }}>
                관공서 송년 행사용으로 급하게 150 세트 문의드렸는데 친절하고 빠르게 안내해 주셔서 무사히 마쳤습니다. 깔끔한 쇼핑백 포장에 리본 커스텀까지 완벽했고 서류 처리도 꼼꼼하게 챙겨주셔서 정말 편했습니다.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e9e4d9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#8a7860', fontWeight: 500 }}>관공서 행사 대량 주문</span>
              <span style={{ fontSize: '12px', color: '#594a3f', fontWeight: 300 }}>이*재 담당자님</span>
            </div>
          </div>

          {/* Review 3 */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px 30px',
            border: '1px solid #e9e4d9',
            borderRadius: '2px',
            boxShadow: '0 4px 20px rgba(89, 74, 63, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{ color: '#d4af37', fontSize: '14px', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
              <h4 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '17px', color: '#3c322b', marginBottom: '14px', fontWeight: 500 }}>"아이 돌잔치 답례품으로 최고였어요"</h4>
              <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all', marginBottom: '24px' }}>
                아이 돌잔치 때 돌린 선물인데 마들렌이 진짜 촉촉하고 맛있어요! 사블레 쿠키 6종도 맛이 다양해서 온 가족 간식으로도 아주 좋네요. 꼼꼼한 포장 덕분에 온라인 배송인데도 파손 없이 깨끗하게 도착했습니다.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e9e4d9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#8a7860', fontWeight: 500 }}>돌잔치 답례품</span>
              <span style={{ fontSize: '12px', color: '#594a3f', fontWeight: 300 }}>최*지 님</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - 단체 견적 문의 */}
      <section style={{
        padding: '80px 40px',
        backgroundColor: '#3c322b',
        textAlign: 'center',
      }}>
        <span style={{ display: 'block', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c2b59b', marginBottom: '16px', fontWeight: 500 }}>
          Bulk & Corporate Orders
        </span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif", fontSize: '36px', fontWeight: 300, color: '#fbfaf7', marginBottom: '16px', lineHeight: 1.3 }}>
          기업 · 관공서 · 단체 답례품 견적 문의
        </h2>
        <p style={{ fontSize: '15px', color: '#c2b59b', fontWeight: 300, lineHeight: 1.8, maxWidth: '580px', margin: '0 auto 36px auto', wordBreak: 'keep-all' }}>
          기업 행사, 관공서 단체 주문, 결혼식이나 돌잔치 등 소중한 순간을 위한 단체 주문을 적극 환영합니다. 예산 맞춤 구성 및 커스텀 스티커/태그 서비스를 제공해 드립니다.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          backgroundColor: 'transparent',
          border: '1px solid #c2b59b',
          color: '#fbfaf7',
          padding: '14px 36px',
          fontSize: '13px',
          letterSpacing: '0.1em',
          borderRadius: '2px',
          fontWeight: 400,
          textDecoration: 'none',
          transition: 'all 0.3s',
        }}>
          견적 문의하기
        </Link>
      </section>


      {/* Footer */}
      <footer style={{
        padding: '60px 40px',
        backgroundColor: '#e9e4d9',
        borderTop: '1px solid #dcd4c3',
        color: '#594a3f',
        fontSize: '13px',
        fontWeight: 300,
        lineHeight: '1.8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 400, color: '#3c322b', marginBottom: '16px', letterSpacing: '0.05em' }}>Sweet Ribbon</h4>
            <p>Premium Dessert & Gift Packaging</p>
            <p style={{ marginTop: '10px' }}>© 2026 Sweet Ribbon. All rights reserved.</p>
          </div>
          <div>
            <p><strong>Shop</strong> | 서울시 종로구 삼청동 123-4 1층</p>
            <p><strong>Tel</strong> | 02-1234-5678</p>
            <p><strong>Instagram</strong> | <a href="https://instagram.com/sweet_ribbon_store" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>@sweet_ribbon_store</a></p>
            <p><strong>KakaoTalk</strong> | <a href="https://pf.kakao.com/_sweet_ribbon_store" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>@스위트리본</a></p>
            <p><strong>Naver TalkTalk</strong> | <a href="https://talk.naver.com/ct/sweet_ribbon_store" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>네이버 톡톡 문의</a></p>
            <p><strong>Naver Blog</strong> | <a href="https://blog.naver.com/sweet_ribbon_store" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>스위트리본 공식 블로그</a></p>
            <p><strong>YouTube</strong> | <a href="https://youtube.com/@sweet_ribbon_store" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>스위트리본 유튜브</a></p>
          </div>
        </div>
      </footer>
      <KakaoTalkWidget />
    </div>
  );
}
