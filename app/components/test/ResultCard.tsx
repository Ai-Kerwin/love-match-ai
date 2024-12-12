interface ResultCardProps {
    score: number;
    details?: {
      basicMatch: number;
      personalityMatch: number;
      valueMatch: number;
      lifestyleMatch: number;
    };
  }
  
  export default function ResultCard({ score, details = {
    basicMatch: 85,
    personalityMatch: 75,
    valueMatch: 80,
    lifestyleMatch: 70
  } }: ResultCardProps) {
    const getMatchLevel = (score: number) => {
      if (score >= 90) return { level: "完美匹配", color: "text-rose-500", description: "你们在多个维度都非常契合，有很大的发展潜力！" };
      if (score >= 80) return { level: "非常适合", color: "text-pink-500", description: "你们在重要方面都比较匹配，可以继续深入了解。" };
      if (score >= 70) return { level: "比较合适", color: "text-purple-500", description: "你们有一定的契合度，但某些方面可能需要互相理解。" };
      if (score >= 60) return { level: "一般匹配", color: "text-blue-500", description: "你们存在一些差异，需要更多沟通和包容。" };
      return { level: "需要磨合", color: "text-gray-500", description: "你们在某些重要方面存在较大差异，建议进一步了解对方。" };
    };
  
    const { level, color, description } = getMatchLevel(score);
  
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          匹配度分析报告
        </h1>
        
        <div className="text-center mb-8">
          <div className="text-6xl font-bold mb-4">
            <span className={color}>{score}</span>
            <span className="text-gray-400 text-4xl">分</span>
          </div>
          <div className={`text-xl font-semibold ${color} mb-2`}>
            {level}
          </div>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">基础匹配度</h3>
              <span className="text-accent font-medium">{details.basicMatch}分</span>
            </div>
            <p className="text-gray-600 text-sm">
              包括年龄差异、教育背景、所在地区等基本因素的匹配程度
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">性格匹配度</h3>
              <span className="text-accent font-medium">{details.personalityMatch}分</span>
            </div>
            <p className="text-gray-600 text-sm">
              性格特征的互补性和契合度分析
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">价值观匹配度</h3>
              <span className="text-accent font-medium">{details.valueMatch}分</span>
            </div>
            <p className="text-gray-600 text-sm">
              在人生观、婚恋观等重要价值观方面的一致程度
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">生活方式匹配度</h3>
              <span className="text-accent font-medium">{details.lifestyleMatch}分</span>
            </div>
            <p className="text-gray-600 text-sm">
              日常生活习惯、兴趣爱好等方面的相容程度
            </p>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="text-center">
            <p className="text-gray-600">
              * 本测试结果仅供参考，真实的感情还需要双方在相处中互相了解
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="/"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-foreground transition-colors duration-300"
            >
              返回首页
            </a>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
            >
              保存结果
            </button>
          </div>
        </div>
      </div>
    );
  }