import Section from '../components/Section'
import { TEAM, TEAM_INTRO, avatarUrl, profileUrl } from '../content'

export default function Team() {
  return (
    <Section id="team" title={TEAM_INTRO.title} description={TEAM_INTRO.description}>
      {/* 카드로 감싸지 않고 이름과 얼굴만 나란히 */}
      <ul className="team">
        {TEAM.map((member) => (
          <li key={member.github}>
            <a className="team__person" href={profileUrl(member.github)} target="_blank" rel="noreferrer">
              <img
                className="team__avatar"
                src={avatarUrl(member.github)}
                srcSet={`${avatarUrl(member.github, 120)} 1x, ${avatarUrl(member.github, 240)} 2x`}
                width={120}
                height={120}
                loading="lazy"
                decoding="async"
                alt=""
              />
              <span>
                <span className="team__name">{member.name}</span>
                <span className="team__handle">@{member.github}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
