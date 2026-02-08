import React, { useState } from 'react';
import { 
  Car, 
  Utensils, 
  Hotel, 
  Moon, 
  Sun, 
  Building, 
  Plane, 
  Search, 
  MapPin, 
  Music, 
  Home,
  Coffee,
  Info,
  Share,
  Check
} from 'lucide-react';

const ScheduleApp = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [copied, setCopied] = useState(false);

  const scheduleData = {
    1: [
      {
        time: "09:30",
        title: "出発",
        description: "楽しい旅の始まり！安全運転で行きましょう。",
        icon: <Car size={20} />,
        color: "bg-blue-500",
        type: "move"
      },
      {
        time: "12:00",
        title: "浜名湖サービスエリア",
        description: "少し早めのランチ休憩。湖の景色を楽しみながら。",
        icon: <Utensils size={20} />,
        color: "bg-orange-500",
        type: "food"
      },
      {
        time: "13:30",
        title: "うなぎパイファクトリー",
        description: "浜松の定番！工場見学とお土産購入。",
        icon: <MapPin size={20} />,
        color: "bg-red-500",
        type: "activity"
      },
      {
        time: "16:00",
        title: "ホテル到着・チェックイン",
        description: "荷物を置いて一休み。",
        icon: <Hotel size={20} />,
        color: "bg-indigo-500",
        type: "stay"
      },
      {
        time: "17:00",
        title: "浜松餃子 🥟",
        description: "夕食は名物の浜松餃子！円形焼きにもやしが特徴。",
        icon: <Utensils size={20} />,
        color: "bg-orange-600",
        type: "food",
        highlight: true
      },
      {
        time: "18:30",
        title: "ホテルでまったり",
        description: "明日に備えてゆっくり過ごしましょう。",
        icon: <Moon size={20} />,
        color: "bg-purple-500",
        type: "relax"
      }
    ],
    2: [
      {
        time: "07:00",
        title: "市役所に向けて出発",
        description: "7:00〜7:30の間に出発。少し早めの行動！",
        icon: <Building size={20} />,
        color: "bg-blue-500",
        type: "move"
      },
      {
        time: "10:00",
        title: "ホテル出発 → 自衛隊基地",
        description: "※もっと早いほうがいいかも？要確認！",
        icon: <Plane size={20} />,
        color: "bg-slate-600",
        type: "activity",
        note: "要時間調整"
      },
      {
        time: "11:00",
        title: "ゆかさん探し",
        description: "無事に会えますように！",
        icon: <Search size={20} />,
        color: "bg-pink-500",
        type: "activity"
      },
      {
        time: "12:00",
        title: "浜名湖へ移動",
        description: "景色を楽しみながらドライブ。",
        icon: <Car size={20} />,
        color: "bg-blue-500",
        type: "move"
      },
      {
        time: "13:00",
        title: "ウェルシーズン浜名湖",
        description: "ランチバイキング🍽️ 今なら空いてます！",
        icon: <Utensils size={20} />,
        color: "bg-orange-500",
        type: "food",
        highlight: true
      },
      {
        time: "14:00",
        title: "まったりタイム",
        description: "温泉、パルパル、オルゴールミュージアムなど。16:30頃まで。",
        icon: <Music size={20} />,
        color: "bg-teal-500",
        type: "relax"
      },
      {
        time: "17:00",
        title: "京都へ帰宅",
        description: "気をつけて帰りましょう〜！",
        icon: <Home size={20} />,
        color: "bg-green-500",
        type: "home"
      }
    ]
  };

  const handleShare = () => {
    // Generate text for sharing
    let text = "🚗 浜松旅行スケジュール 🥟\n\n";
    
    [1, 2].forEach(day => {
      text += `【${day}日目】\n`;
      scheduleData[day].forEach(item => {
        text += `${item.time} ${item.title}\n`;
      });
      text += "\n";
    });

    // Copy to clipboard
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-white/50">
        {/* Header Image Area */}
        <div className="bg-blue-600 h-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-white/20 blur-lg"></div>
          
          <div className="relative z-10 p-6 text-white h-full flex flex-col justify-center">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blue-100 text-sm font-medium tracking-wider mb-1">TRAVEL PLAN</p>
                <h1 className="text-3xl font-bold">浜松旅行 🥟✨</h1>
              </div>
              <button 
                onClick={handleShare}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all active:scale-95"
                title="スケジュールをコピー"
              >
                {copied ? <Check size={20} className="text-green-300" /> : <Share size={20} />}
              </button>
            </div>
            <p className="text-blue-100 text-sm opacity-90 mt-1">Kyoto ⇄ Hamamatsu</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex p-2 bg-slate-50 border-b border-slate-100">
          <button
            onClick={() => setActiveDay(1)}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeDay === 1 
                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Sun size={16} /> 1日目
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeDay === 2 
                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Sun size={16} /> 2日目
          </button>
        </div>

        {/* Timeline Content */}
        <div className="p-6 bg-white min-h-[500px]">
          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-100"></div>

            {scheduleData[activeDay].map((event, index) => (
              <div key={index} className="relative flex group">
                {/* Time & Icon Column */}
                <div className="flex flex-col items-center mr-4 min-w-[56px]">
                  <div className={`w-14 h-14 rounded-2xl ${event.color} text-white flex items-center justify-center shadow-lg shadow-blue-500/20 z-10 transition-transform duration-300 group-hover:scale-110`}>
                    {event.icon}
                  </div>
                  <div className="mt-2 text-xs font-bold text-slate-400 font-mono bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                    {event.time}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1 pt-1 pb-4">
                  <div className={`p-4 rounded-2xl border transition-all duration-300 ${
                    event.highlight 
                      ? 'bg-orange-50 border-orange-100 shadow-sm' 
                      : 'bg-white border-slate-100 hover:border-blue-100 hover:shadow-md'
                  }`}>
                    <h3 className="font-bold text-lg text-slate-800 leading-tight mb-1">
                      {event.title}
                    </h3>
                    
                    {event.note && (
                      <div className="flex items-center gap-1 text-red-500 text-xs font-bold mb-2 bg-red-50 w-fit px-2 py-1 rounded-full">
                        <Info size={12} />
                        {event.note}
                      </div>
                    )}
                    
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* End of Day Decoration */}
            <div className="flex justify-center pt-4">
              <div className="px-4 py-1 bg-slate-100 rounded-full text-xs text-slate-400 font-medium">
                {activeDay === 1 ? '明日も楽しみ！' : 'お疲れ様でした！'}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100 flex flex-col items-center gap-2">
           <p className="text-xs text-slate-400">Have a nice trip to Hamamatsu!</p>
           {copied && <span className="text-xs text-green-500 font-bold bg-green-50 px-2 py-1 rounded-full">スケジュールをコピーしました！</span>}
        </div>
      </div>
    </div>
  );
};

export default ScheduleApp;