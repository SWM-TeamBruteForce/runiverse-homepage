import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import { CONTACT_EMAIL } from '../content'

type Props = {
  open: boolean
  onClose: () => void
}

/**
 * 정적 사이트라 서버로 직접 보내지 않고,
 * 작성한 내용을 채운 mailto 링크로 사용자의 메일 앱을 엽니다.
 */
export default function ContactModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const onBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = name ? `보낸 사람: ${name}\n\n${message}` : message
    const params = new URLSearchParams({ subject: `[Runiverse 문의] ${subject}`, body })
    // URLSearchParams는 공백을 +로 바꾸는데, 메일 앱은 %20만 공백으로 읽습니다.
    window.location.href = `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, '%20')}`
  }

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // 클립보드 권한이 없으면 주소가 화면에 그대로 보이므로 무시합니다.
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="contact-title"
      onClose={onClose}
      onClick={onBackdropClick}
    >
      <div className="modal__panel">
        <div className="modal__head">
          <h2 id="contact-title" className="modal__title">
            문의하기
          </h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="닫기">
            ×
          </button>
        </div>

        <p className="modal__address">
          <span>{CONTACT_EMAIL}</span>
          <button type="button" className="link" onClick={onCopy}>
            {copied ? '복사됨' : '주소 복사'}
          </button>
        </p>

        <form className="modal__form" onSubmit={onSubmit}>
          <label className="field">
            <span>이름</span>
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label className="field">
            <span>제목</span>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </label>
          <label className="field">
            <span>내용</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
            />
          </label>

          <p className="modal__hint">보내기를 누르면 메일 앱이 작성한 내용과 함께 열립니다.</p>

          <button type="submit" className="button">
            메일 앱으로 보내기
          </button>
        </form>
      </div>
    </dialog>
  )
}
