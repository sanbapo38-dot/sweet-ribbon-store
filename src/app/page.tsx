'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InstagramFeed from '../components/InstagramFeed';
import KakaoTalkWidget from '../components/KakaoTalkWidget';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: { id: string; name: string; price: number }) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, amount: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ backgroundColor: '#fbfaf7', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      {/* Header */}
      <header style={{
        padding: '30px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e9e4d9',
        backgroundColor: '#fbfaf7',
        position: 'sticky',
        top: 0,
        zIndex: 100
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
        <nav style={{ display: 'flex', gap: '30px', fontSize: '14px', letterSpacing: '0.05em', color: '#594a3f', fontWeight: 300, alignItems: 'center' }}>
          <a href="#" style={{ borderBottom: '1px solid transparent' }}>About</a>
          <a href="#" style={{ borderBottom: '1px solid transparent' }}>Goum-gwaja</a>
          <a href="#" style={{ borderBottom: '1px solid transparent' }}>Gift Set</a>
          <Link href="/contact" style={{ borderBottom: '1px solid transparent', color: 'inherit' }}>Contact</Link>
          
          {/* Cart Icon Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3c322b',
              padding: '4px',
              marginLeft: '10px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="Open Shopping Cart"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-6px',
                backgroundColor: '#594a3f',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 600,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}>
                {totalItems}
              </span>
            )}
          </button>
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
          fontFamily: "'Cormorant Garamond', 'Gowun Batang', 'Noto Serif KR', serif",
          fontSize: '40px',
          fontWeight: 500,
          lineHeight: '1.55',
          color: '#2c221e',
          marginBottom: '30px',
          wordBreak: 'keep-all',
          letterSpacing: '-0.015em'
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
          {/* Financier Product */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '40px 30px', 
            border: '1px solid #e9e4d9', 
            borderRadius: '2px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            transition: 'transform 0.3s',
            boxShadow: '0 4px 12px rgba(89, 74, 63, 0.02)'
          }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', 'Gowun Batang', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 500, color: '#2c221e', marginBottom: '16px', letterSpacing: '-0.01em' }}>Financier</h3>
              <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all', marginBottom: '20px' }}>
                태운 버터의 고소하고 묵직한 풍미와 겉은 쫀득하고 속은 촉촉한 식감을 자랑하는 스위트리본의 대표 시그니처 휘낭시에입니다.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 500, color: '#3c322b', marginBottom: '20px', fontFamily: "'Outfit', sans-serif" }}>2,500원</div>
              <button 
                onClick={() => addToCart({ id: 'financier', name: '시그니처 휘낭시에', price: 2500 })}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #594a3f',
                  color: '#594a3f',
                  padding: '10px 24px',
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
              >
                장바구니 담기
              </button>
            </div>
          </div>

          {/* Madeleine Product */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '40px 30px', 
            border: '1px solid #e9e4d9', 
            borderRadius: '2px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            transition: 'transform 0.3s',
            boxShadow: '0 4px 12px rgba(89, 74, 63, 0.02)'
          }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', 'Gowun Batang', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 500, color: '#2c221e', marginBottom: '16px', letterSpacing: '-0.01em' }}>Madeleine</h3>
              <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all', marginBottom: '20px' }}>
                상큼한 레몬필과 감미로운 버터향이 조화를 이루어, 한 입 베어 물 때마다 향긋함이 부드럽게 감도는 정통 마들렌입니다.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 500, color: '#3c322b', marginBottom: '20px', fontFamily: "'Outfit', sans-serif" }}>2,800원</div>
              <button 
                onClick={() => addToCart({ id: 'madeleine', name: '정통 마들렌', price: 2800 })}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #594a3f',
                  color: '#594a3f',
                  padding: '10px 24px',
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
              >
                장바구니 담기
              </button>
            </div>
          </div>

          {/* Sable Product */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '40px 30px', 
            border: '1px solid #e9e4d9', 
            borderRadius: '2px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            transition: 'transform 0.3s',
            boxShadow: '0 4px 12px rgba(89, 74, 63, 0.02)'
          }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', 'Gowun Batang', 'Noto Serif KR', serif", fontSize: '20px', fontWeight: 500, color: '#2c221e', marginBottom: '16px', letterSpacing: '-0.01em' }}>Sable (6 Flavors)</h3>
              <p style={{ fontSize: '14px', color: '#594a3f', lineHeight: '1.7', fontWeight: 300, wordBreak: 'keep-all', marginBottom: '20px' }}>
                입안에서 부드럽게 사르르 녹아내리는 매력적인 사블레 쿠키 6종(황치즈, 말차, 초코, 크랜베리, 바닐라, 커피)의 다채로운 풍미를 만나보세요.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 500, color: '#3c322b', marginBottom: '20px', fontFamily: "'Outfit', sans-serif" }}>8,500원</div>
              <button 
                onClick={() => addToCart({ id: 'sable', name: '사블레 6종 세트', price: 8500 })}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #594a3f',
                  color: '#594a3f',
                  padding: '10px 24px',
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
              >
                장바구니 담기
              </button>
            </div>
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
          fontFamily: "'Cormorant Garamond', 'Gowun Batang', 'Noto Serif KR', serif",
          fontSize: '32px',
          fontWeight: 500,
          color: '#2c221e',
          marginBottom: '50px',
          letterSpacing: '-0.015em'
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
        <h2 style={{ fontFamily: "'Cormorant Garamond', 'Gowun Batang', 'Noto Serif KR', serif", fontSize: '32px', fontWeight: 500, color: '#fbfaf7', marginBottom: '16px', lineHeight: 1.45, letterSpacing: '-0.015em' }}>
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

      {/* Cart Overlay */}
      {isCartOpen && (
        <div 
          onClick={() => setIsCartOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(60, 50, 43, 0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: 9999,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      {/* Cart Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '400px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        boxShadow: '-4px 0 30px rgba(89, 74, 63, 0.15)',
        zIndex: 10000,
        transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Noto Sans KR', sans-serif"
      }}>
        {/* Cart Header */}
        <div style={{
          padding: '24px 30px',
          borderBottom: '1px solid #e9e4d9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#3c322b', margin: 0 }}>장바구니</h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: '#8a7860',
              padding: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            &times;
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '30px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#8a7860', marginTop: '60px' }}>
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px', opacity: 0.7 }}>
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p style={{ fontSize: '14px', fontWeight: 300 }}>장바구니가 비어 있습니다.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f5f2eb', paddingBottom: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 500, color: '#3c322b', margin: '0 0 6px 0' }}>{item.name}</h4>
                    <span style={{ fontSize: '13px', color: '#8a7860' }}>{(item.price * item.quantity).toLocaleString()}원</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e9e4d9', borderRadius: '2px', backgroundColor: '#fbfaf7' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 10px', fontSize: '14px', color: '#594a3f' }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: '13px', minWidth: '20px', textAlign: 'center', color: '#3c322b' }}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 10px', fontSize: '14px', color: '#594a3f' }}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#c9bda7',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#8a7860'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#c9bda7'}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div style={{
            padding: '30px',
            borderTop: '1px solid #e9e4d9',
            backgroundColor: '#fbfaf7'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '14px', color: '#594a3f' }}>총 합계 금액</span>
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#3c322b', fontFamily: "'Outfit', sans-serif" }}>{totalPrice.toLocaleString()}원</span>
            </div>
            <Link 
              href="/contact"
              style={{
                display: 'block',
                backgroundColor: '#3c322b',
                color: '#ffffff',
                textDecoration: 'none',
                textAlign: 'center',
                padding: '16px',
                borderRadius: '2px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                transition: 'background-color 0.2s'
              }}
              onClick={() => setIsCartOpen(false)}
            >
              단체 견적 문의하기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
