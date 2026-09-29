// Generates profile/card-<project>[-ko]-<theme>.svg — the project cards in README.md / README.ko.md.
// Run: node scripts/gen-cards.mjs
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'profile');

const THEMES = {
  dark: { bg: '#161B22', border: '#30363D', rule: '#2A313B', accent: '#22B8CF', title: '#E6EDF3', text: '#A3AEBB', muted: '#8B949E', tag: '#C9D1D9' },
  light: { bg: '#FFFFFF', border: '#D0D7DE', rule: '#E6EAEF', accent: '#0B7285', title: '#1F2328', text: '#57606A', muted: '#6E7781', tag: '#424A53' },
};

const MONO = "'JetBrains Mono','SF Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace";
const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI','Apple SD Gothic Neo','Malgun Gothic',Helvetica,Arial,sans-serif";

const PROJECTS = [
  {
    name: 'linkly',
    en: { tagline: 'A language designed for an LLM, not a typist', sub: 'intent in, native binary out', tags: ['264 tests', '8 RFCs', 'MLIR', 'TypeScript'] },
    ko: { tagline: '타이피스트가 아니라 LLM을 위해 설계된 언어', sub: '의도를 넣으면, 네이티브 바이너리가 나옵니다', tags: ['테스트 264', 'RFC 8', 'MLIR', 'TypeScript'] },
  },
  {
    name: 'groundwork',
    en: { tagline: 'The base layer every agent I run sits on', sub: 'guardrails · dev-loop · memory-loop · jev-gate', tags: ['4 plugins', 'hooks', 'Orca-native', 'MIT'] },
    ko: { tagline: '제가 돌리는 모든 에이전트가 올라서는 베이스 레이어', sub: 'guardrails · dev-loop · memory-loop · jev-gate', tags: ['플러그인 4개', '훅', 'Orca 네이티브', 'MIT'] },
  },
  {
    name: 'cliclaw',
    en: { tagline: 'Four coding agents, driven from your phone', sub: 'Claude Code · Codex · Pi · Gemini CLI', tags: ['npm', 'Telegram', 'macOS daemon'] },
    ko: { tagline: '네 개의 코딩 에이전트를, 당신의 폰에서', sub: 'Claude Code · Codex · Pi · Gemini CLI', tags: ['npm', '텔레그램', 'macOS 데몬'] },
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function card(p, lang, themeName) {
  const t = THEMES[themeName];
  const c = p[lang];
  const W = 900, H = 132;
  const tags = c.tags
    .map((tag, i) => `${i ? `<tspan fill="${t.muted}" opacity="0.55">  ·  </tspan>` : ''}<tspan>${esc(tag)}</tspan>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(`${p.name} — ${c.tagline} — ${c.sub}`)}">
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="10" fill="${t.bg}" stroke="${t.border}"/>
<circle cx="36" cy="31" r="4" fill="${t.accent}"/>
<text x="48" y="35" style="font:500 12px ${MONO}" fill="${t.muted}">choiyounggi<tspan fill="${t.border}"> / </tspan><tspan fill="${t.accent}" font-weight="700">${p.name}</tspan></text>
<text x="868" y="35" text-anchor="end" style="font:500 12px ${MONO}" fill="${t.muted}">github ↗</text>
<text x="32" y="68" style="font:700 22px ${MONO}" fill="${t.title}">${esc(c.tagline)}</text>
<text x="32" y="92" style="font:400 14px ${SANS}" fill="${t.text}">${esc(c.sub)}</text>
<line x1="32" y1="105" x2="${W - 32}" y2="105" stroke="${t.rule}"/>
<text x="32" y="122" style="font:500 12px ${MONO}" fill="${t.tag}">${tags}</text>
</svg>
`;
}

for (const p of PROJECTS)
  for (const lang of ['en', 'ko'])
    for (const theme of Object.keys(THEMES)) {
      const file = `card-${p.name}${lang === 'ko' ? '-ko' : ''}-${theme}.svg`;
      writeFileSync(join(out, file), card(p, lang, theme));
      console.log(file);
    }
