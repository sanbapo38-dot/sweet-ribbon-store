'use client';

import React, { useState } from 'react';

export default function KakaoTalkWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // SNS 및 채널 URL
  const kakaoUrl = 'https://pf.kakao.com/_sweet_ribbon_store';
  const naverTalkUrl = 'https://talk.naver.com/ct/sweet_ribbon_store';
  const naverBlogUrl = 'https://blog.naver.com/sweet_ribbon_store';
  const youtubeUrl = 'https://youtube.com/@sweet_ribbon_store';

  const menuItems = [
    {
      name: '유튜브 채널',
      url: youtubeUrl,
      color: '#FF0000',
      textColor: '#ffffff',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.387.51A3.003 3.003 0 0 0 .502 6.164C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.882.51 9.387.51 9.387.51s7.505 0 9.387-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: '네이버 블로그',
      url: naverBlogUrl,
      color: '#03C75A',
      textColor: '#ffffff',
      icon: (
        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 'bold', fontSize: '12px' }}>B</span>
      )
    },
    {
      name: '네이버 톡톡 문의',
      url: naverTalkUrl,
      color: '#03C75A',
      textColor: '#ffffff',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.414.854 4.634 2.277 6.375l-.946 3.195a.75.75 0 0 0 .942.923l3.242-1.282A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
        </svg>
      )
    },
    {
      name: '카카오톡 문의',
      url: kakaoUrl,
      color: '#FEE500',
      textColor: '#3c322b',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.508 1.642 4.717 4.116 5.92-.172.637-.62 2.3-1.072 3.978-.1.37.135.59.395.422.302-.196 3.528-2.39 4.9-3.324.542.067 1.1.103 1.661.103 4.97 0 9-3.185 9-7.11S16.97 3 12 3z"/>
        </svg>
      )
    }
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
        fontFamily: "'Noto Sans KR', sans-serif"
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Expanded Menu */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(15px)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {menuItems.map((item, idx) => (
          <a 
            key={idx}
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#ffffff',
              color: '#3c322b',
              padding: '10px 18px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(89, 74, 63, 0.12)',
              border: '1px solid #e9e4d9',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#fbfaf7';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(89, 74, 63, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(89, 74, 63, 0.12)';
            }}
          >
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '24px', 
              height: '24px', 
              backgroundColor: item.color, 
              color: item.textColor,
              borderRadius: '50%',
              flexShrink: 0
            }}>
              {item.icon}
            </span>
            {item.name}
          </a>
        ))}
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#3c322b',
          border: 'none',
          boxShadow: '0 4px 16px rgba(89, 74, 63, 0.25)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fbfaf7',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(89, 74, 63, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(89, 74, 63, 0.25)';
        }}
        aria-label="Contact Channels"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
        </svg>
      </button>
    </div>
  );
}
