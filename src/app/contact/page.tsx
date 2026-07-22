import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import KakaoTalkWidget from '../../components/KakaoTalkWidget';

export const metadata: Metadata = {
  title: '단체 견적 문의 | Sweet Ribbon',
  description: '결혼식 답례품, 돌잔치, 기업 행사 등 단체 주문을 위한 맞춤 견적을 문의해보세요. 수량·패키지·리본 커스터마이징 모두 가능합니다.',
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#fbfaf7', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="responsive-header">
        <Link href="/" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '26px',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: '#3c322b',
          textDecoration: 'none',
        }}>
          Sweet Ribbon
        </Link>
        <nav className="responsive-nav">
          <Link href="/" style={{ color: '#594a3f', textDecoration: 'none' }}>About</Link>
          <Link href="/" style={{ color: '#594a3f', textDecoration: 'none' }}>Goum-gwaja</Link>
          <Link href="/" style={{ color: '#594a3f', textDecoration: 'none' }}>Gift Set</Link>
          <Link href="/contact" style={{
            color: '#3c322b',
            textDecoration: 'none',
            borderBottom: '1px solid #3c322b',
            paddingBottom: '2px',
          }}>Contact</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="responsive-breadcrumb">
        <Link href="/" style={{ color: '#8a7860', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: '#3c322b' }}>단체 견적 문의</span>
      </div>

      {/* Quote Form */}
      <main style={{ flex: 1 }}>
        <QuoteForm />
      </main>

      {/* Footer */}
      <footer className="responsive-footer">
        <div className="responsive-footer-container">
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
