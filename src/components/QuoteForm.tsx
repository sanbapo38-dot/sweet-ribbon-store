'use client';

import React, { useState, useTransition } from 'react';
import styles from './QuoteForm.module.css';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const PRODUCT_OPTIONS = [
  { id: 'financier', label: '휘낭시에 (Financier)' },
  { id: 'madeleine', label: '마들렌 (Madeleine)' },
  { id: 'canele', label: '까눌레 (Canelé)' },
  { id: 'sable', label: '버터 사블레 (Sablé)' },
  { id: 'pound', label: '파운드 케이크 (Pound Cake)' },
  { id: 'assorted', label: '모듬 구움과자 선물세트 (Assorted Gift Set)' },
];

const EVENT_OPTIONS = [
  '결혼식 답례품',
  '돌잔치 답례품',
  '기업 행사 답례품',
  '명절 선물',
  '기타 (직접 입력)',
];

export default function QuoteForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });
  const [isPending, startTransition] = useTransition();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [eventType, setEventType] = useState('');
  const [customEvent, setCustomEvent] = useState('');

  const handleProductToggle = (id: string) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Combine product and event selections
    data.set('products', selectedProducts.join(', '));
    data.set('eventType', eventType === '기타 (직접 입력)' ? customEvent : eventType);

    startTransition(async () => {
      setFormState({ status: 'loading', message: '' });
      try {
        const res = await fetch('/api/quote', {
          method: 'POST',
          body: data,
        });
        if (!res.ok) throw new Error('서버 오류가 발생했습니다.');
        setFormState({
          status: 'success',
          message: '견적 문의가 성공적으로 접수되었습니다. 영업일 기준 1~2일 내로 담당자가 연락드리겠습니다.',
        });
        form.reset();
        setSelectedProducts([]);
        setEventType('');
        setCustomEvent('');
      } catch {
        setFormState({
          status: 'error',
          message: '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
        });
      }
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Bulk & Corporate Orders</span>
          <h2 className={styles.title}>단체 견적 문의</h2>
          <p className={styles.description}>
            결혼식 답례품, 돌잔치, 기업 행사 등 단체 주문을 위한 맞춤 견적을 제공해 드립니다.<br />
            수량, 패키지, 리본 커스터마이징 등 세부 사항을 남겨주시면 전담 담당자가 최대한 빠르게 연락드리겠습니다.
          </p>
        </div>

        {/* Info Cards */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📦</span>
            <strong>최소 주문 수량</strong>
            <p>30개 이상부터 단체 견적 적용</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🎀</span>
            <strong>패키지 커스터마이징</strong>
            <p>리본 색상 · 태그 · 포장 선택 가능</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🚚</span>
            <strong>배송 안내</strong>
            <p>전국 배송 · 100개 이상 배송비 협의</p>
          </div>
        </div>

        {/* Form */}
        {formState.status === 'success' ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>문의가 접수되었습니다</h3>
            <p className={styles.successMessage}>{formState.message}</p>
            <button
              className={styles.resetButton}
              onClick={() => setFormState({ status: 'idle', message: '' })}
            >
              새 문의 작성하기
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Row 1: Name & Company */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  담당자 이름 <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="홍길동"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="company">
                  회사 / 단체명
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={styles.input}
                  placeholder="(주)스위트리본 / 개인"
                />
              </div>
            </div>

            {/* Row 2: Phone & Email */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  연락처 <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="010-0000-0000"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  이메일 <span className={styles.required}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            {/* Row 3: Event Type & Date */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="eventType">
                  행사 종류 <span className={styles.required}>*</span>
                </label>
                <select
                  id="eventType"
                  name="eventTypeSelect"
                  className={styles.select}
                  value={eventType}
                  onChange={e => setEventType(e.target.value)}
                  required
                >
                  <option value="">선택해주세요</option>
                  {EVENT_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {eventType === '기타 (직접 입력)' && (
                  <input
                    type="text"
                    className={`${styles.input} ${styles.inputMarginTop}`}
                    placeholder="행사 종류를 직접 입력해주세요"
                    value={customEvent}
                    onChange={e => setCustomEvent(e.target.value)}
                    required
                  />
                )}
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="eventDate">
                  행사 예정일
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Row 4: Quantity */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="quantity">
                  희망 수량 <span className={styles.required}>*</span>
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="30"
                  className={styles.input}
                  placeholder="최소 30개 이상"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="budget">
                  예산 범위 (1개당 단가 기준)
                </label>
                <select id="budget" name="budget" className={styles.select}>
                  <option value="">선택해주세요 (선택사항)</option>
                  <option value="under-3000">3,000원 미만</option>
                  <option value="3000-5000">3,000 ~ 5,000원</option>
                  <option value="5000-8000">5,000 ~ 8,000원</option>
                  <option value="8000-12000">8,000 ~ 12,000원</option>
                  <option value="over-12000">12,000원 이상</option>
                  <option value="flexible">협의 가능</option>
                </select>
              </div>
            </div>

            {/* Product Selection */}
            <div className={styles.fieldFull}>
              <label className={styles.label}>
                희망 상품 <span className={styles.required}>*</span>
                <span className={styles.labelHint}>(복수 선택 가능)</span>
              </label>
              <div className={styles.checkboxGrid}>
                {PRODUCT_OPTIONS.map(({ id, label }) => (
                  <label
                    key={id}
                    className={`${styles.checkboxCard} ${selectedProducts.includes(id) ? styles.checkboxCardActive : ''}`}
                  >
                    <input
                      type="checkbox"
                      className={styles.checkboxHidden}
                      checked={selectedProducts.includes(id)}
                      onChange={() => handleProductToggle(id)}
                    />
                    <span className={styles.checkboxMark}>
                      {selectedProducts.includes(id) ? '✓' : ''}
                    </span>
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Ribbon Customization */}
            <div className={styles.fieldFull}>
              <label className={styles.label} htmlFor="ribbonColor">
                리본 색상 요청
              </label>
              <input
                id="ribbonColor"
                name="ribbonColor"
                type="text"
                className={styles.input}
                placeholder="예: 아이보리, 버건디, 네이비 등 (없을 경우 기본 크림 리본으로 제작됩니다)"
              />
            </div>

            {/* Message */}
            <div className={styles.fieldFull}>
              <label className={styles.label} htmlFor="message">
                추가 요청사항
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows={5}
                placeholder="패키지 태그 문구, 배송 관련 특이사항, 샘플 요청 등 자세한 내용을 남겨주시면 더욱 정확한 견적을 드릴 수 있습니다."
              />
            </div>

            {/* Privacy Agreement */}
            <div className={styles.privacyRow}>
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                className={styles.checkboxSmall}
                required
              />
              <label htmlFor="privacy" className={styles.privacyLabel}>
                개인정보 수집 및 이용에 동의합니다. 수집된 정보는 견적 안내 목적으로만 사용되며, 문의 처리 완료 후 즉시 파기됩니다.
                <span className={styles.required}> *</span>
              </label>
            </div>

            {/* Error Message */}
            {formState.status === 'error' && (
              <p className={styles.errorMessage}>{formState.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isPending || selectedProducts.length === 0}
            >
              {isPending ? (
                <span className={styles.loadingSpinner}>견적 문의 접수 중...</span>
              ) : (
                '견적 문의 보내기'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
