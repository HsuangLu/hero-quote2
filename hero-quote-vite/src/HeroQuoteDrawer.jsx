
import { useState } from 'react';

const quotes = [
  "燃燒吧！你的潛力還沒解放呢！",
  "別小看自己，你是SSR等級的存在！",
  "看好了！接下來，是我發光的時刻！",
  "你不是沒能力，只是還沒發動技能！",
  "你不是一個人，你有整班的羈絆之力！",
  "限制解除！全力模式啟動！",
  "Level Up！這就是你進化的瞬間！",
  "別讓猶豫封印了你的光芒。",
  "你就是那個傳說中，打破宿命的人！",
  "今天的你，氣場爆表，請小心使用。"
];

export default function HeroQuoteDrawer() {
  const [quote, setQuote] = useState("點擊下方按鈕抽卡！");
  const draw = () => {
    const r = Math.floor(Math.random() * quotes.length);
    setQuote("「" + quotes[r] + "」");
  };

  return (
    <div style={{
      background: '#fff8f0', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', padding: '2rem'
    }}>
      <img src="/hero_cover.png" alt="封面" style={{ maxWidth: '300px', borderRadius: '1rem', marginBottom: '2rem' }} />
      <div style={{
        background: 'white', padding: '2rem', borderRadius: '1rem',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)', fontSize: '1.25rem', marginBottom: '1rem'
      }}>{quote}</div>
      <button onClick={draw} style={{
        padding: '1rem 2rem', fontSize: '1rem',
        background: '#d63384', color: 'white',
        border: 'none', borderRadius: '2rem', cursor: 'pointer'
      }}>抽卡！</button>
    </div>
  );
}
