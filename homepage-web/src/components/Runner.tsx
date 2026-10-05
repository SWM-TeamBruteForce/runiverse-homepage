/**
 * 트랙 위를 달리는 러너. 팔다리는 어깨·골반을 축으로 흔들리고,
 * 반대쪽 팔다리(--far)는 옅게 그려 앞뒤 깊이를 줍니다.
 */
export default function Runner() {
  return (
    <span className="runner">
      <svg className="runner__figure" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path className="runner__arm runner__limb--far" d="M13.4 9.5v3.4l2.6-1.3" />
        <path className="runner__leg runner__limb--far" d="M11.5 14v4.2l-1.3 3.8" />
        <path className="runner__body" d="M14 8l-2.5 6" />
        <circle className="runner__head" cx="15" cy="4.6" r="2.4" />
        <path className="runner__arm runner__limb--near" d="M13.4 9.5v3.4l2.6-1.3" />
        <path className="runner__leg runner__limb--near" d="M11.5 14v4.2l-1.3 3.8" />
      </svg>
    </span>
  )
}
