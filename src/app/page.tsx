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
          Premium Goum-gwaja Shop
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
          스위트리본 구움과자 답례품
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
          엄선된 최상의 버터와 유기농 밀가루, 계절의 맛을 담은 비정제 설탕을 사용하여 깊고 진한 풍미의 구움과자를 굽습니다. 
          소중한 날, 감사의 마음이 더 정갈하게 전달되도록 클래식하고 우아한 실크 리본 패키지에 담아 전합니다.
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
              태운 버터의 고소하고 묵직한 풍미와 겉은 쫀득하고 속은 촉촉한 스위트리본의 대표 시그니처 구움과자입니다.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '0 20px', borderLeft: '1px solid #dcd4c3', borderRight: '1px solid #dcd4c3' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 400, color: '#3c322b', marginBottom: '16px' }}>Madeleine</h3>
            <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all' }}>
              상큼한 레몬필과 부드러운 버터향이 조화를 이루어, 한 입 베어 물 때마다 향긋함이 부드럽게 감도는 정통 마들렌입니다.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 400, color: '#3c322b', marginBottom: '16px' }}>Canele</h3>
            <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all' }}>
              오랜 시간 정성 들여 구워내어 바삭하고 진한 카라멜 라이즈드 외피 속에 촉촉한 커스터드 크림을 품은 정통 까눌레입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

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
          단체 답례품 견적 문의
        </h2>
        <p style={{ fontSize: '15px', color: '#c2b59b', fontWeight: 300, lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 36px auto', wordBreak: 'keep-all' }}>
          결혼식·돌잔치·기업 행사 등 30개 이상의 단체 주문은 맞춤 견적으로 더 합리적으로 준비하세요.
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
