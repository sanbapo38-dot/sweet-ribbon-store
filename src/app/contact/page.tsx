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
      <header style={{
        padding: '30px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e9e4d9',
        backgroundColor: '#fbfaf7',
      }}>
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
        <nav style={{ display: 'flex', gap: '30px', fontSize: '14px', letterSpacing: '0.05em', color: '#594a3f', fontWeight: 300 }}>
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
      <div style={{
        padding: '16px 40px',
        fontSize: '12px',
        color: '#8a7860',
        letterSpacing: '0.05em',
        borderBottom: '1px solid #f0ece2',
      }}>
        <Link href="/" style={{ color: '#8a7860', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: '#3c322b' }}>단체 견적 문의</span>
      </div>

      {/* Quote Form */}
      <main style={{ flex: 1 }}>
        <QuoteForm />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '60px 40px',
        backgroundColor: '#e9e4d9',
        borderTop: '1px solid #dcd4c3',
        color: '#594a3f',
        fontSize: '13px',
        fontWeight: 300,
        lineHeight: '1.8',
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
          </div>
        </div>
      </footer>
      <KakaoTalkWidget />
    </div>
  );
}
