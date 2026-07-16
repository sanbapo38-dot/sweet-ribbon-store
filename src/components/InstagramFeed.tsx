'use client';

import React, { useEffect, useState } from 'react';
import styles from './InstagramFeed.module.css';

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) {
          throw new Error('Failed to fetch instagram feed');
        }
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error('Error loading instagram feed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  // Instagram Icon SVG Component
  const InstagramIcon = () => (
    <svg
      className={styles.instagramIcon}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Sweet Moments</span>
        <h2 className={styles.title}>Daily Sweet Ribbon</h2>
        <p className={styles.description}>
          스위트리본의 따뜻하고 달콤한 일상을 만나보세요. <br />
          정성껏 구워낸 디저트와 선물 패키지에 깃든 디테일을 인스타그램 피드에서 실시간으로 공유합니다.
        </p>
      </div>

      <div className={styles.grid}>
        {loading ? (
          // Skeleton Loader
          Array.from({ length: 8 }).map((_, index) => (
            <div key={`skeleton-${index}`} className={styles.skeleton} />
          ))
        ) : error || posts.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
            <p style={{ color: 'var(--color-brown-700)', fontWeight: 300 }}>
              인스타그램 피드를 로드할 수 없습니다. 잠시 후 다시 시도해 주세요.
            </p>
          </div>
        ) : (
          posts.map((post) => {
            // LINK_CARD 타입 (커스텀 인스타그램 팔로우 유도 카드)
            if (post.media_type === 'LINK_CARD') {
              return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.card} ${styles.linkCard}`}
                >
                  <div className={styles.linkCardContent}>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: 28, height: 28, fill: 'var(--color-brown-700)', marginBottom: 16 }}
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <h3 className={styles.linkCardTitle}>@sweet_ribbon_store</h3>
                    <p className={styles.linkCardText}>
                      스위트리본의 더 깊은 베이킹 스토리와 패키지 소식을 공식 인스타그램에서 만나보세요.
                    </p>
                    <span className={styles.linkCardButton}>Follow Us</span>
                  </div>
                </a>
              );
            }

            // 일반 인스타그램 이미지 카드
            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.media_url}
                    alt={post.caption || 'Sweet Ribbon Instagram Post'}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.overlay}>
                    <InstagramIcon />
                    <p className={styles.caption}>{post.caption}</p>
                  </div>
                </div>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
}
