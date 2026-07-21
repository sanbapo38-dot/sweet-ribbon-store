'use client';

import React, { useState } from 'react';

export default function KakaoTalkWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // 카카오 채널 및 채팅 URL (추후 실제 주소로 교체 가능하도록 임시 링크 설정)
  const channelUrl = 'https://pf.kakao.com/_sweet_ribbon_store';
  const chatUrl = 'https://open.kakao.com/o/sweet_ribbon_store';

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
        fontFamily: 'sans-serif'
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Expanded Menu */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(15px)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Kakao Channel Link */}
        <a 
          href={channelUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            color: '#3c322b',
            padding: '10px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(89, 74, 63, 0.15)',
            border: '1px solid #e9e4d9',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#fbfaf7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#FEE500', borderRadius: '50%' }}></span>
          카카오톡 채널 추가
        </a>

        {/* Kakao Chat Link */}
        <a 
          href={chatUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            color: '#3c322b',
            padding: '10px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(89, 74, 63, 0.15)',
            border: '1px solid #e9e4d9',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#fbfaf7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#FEE500', borderRadius: '50%' }}></span>
          1:1 실시간 채팅 문의
        </a>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#FEE500',
          border: 'none',
          boxShadow: '0 4px 16px rgba(89, 74, 63, 0.25)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#3C1E1E',
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
        aria-label="KakaoTalk Inquiry"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.508 1.642 4.717 4.116 5.92-.172.637-.62 2.3-1.072 3.978-.1.37.135.59.395.422.302-.196 3.528-2.39 4.9-3.324.542.067 1.1.103 1.661.103 4.97 0 9-3.185 9-7.11S16.97 3 12 3z"/>
        </svg>
      </button>
    </div>
  );
}
