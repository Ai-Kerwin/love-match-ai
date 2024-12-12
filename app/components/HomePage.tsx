'use client';
import React from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    name: "张先生 & 李女士",
    matchScore: 95,
    story: "通过我们的测试，他们发现彼此在性格和价值观上高度契合。现在他们已经结婚一年，生活幸福美满。",
    icon: "💑"  // 使用emoji替代图片
  },
  {
    name: "王先生 & 赵女士",
    matchScore: 92,
    story: "测试显示他们在生活方式和未来规划上非常匹配。经过半年的相处，他们已经订婚了。",
    icon: "💕"
  }
];

const expertOpinions = [
  {
    name: "王教授",
    title: "心理学博士，婚恋心理专家",
    opinion: "这个测试系统基于现代心理学理论，融合了MBTI性格分析和价值观匹配等科学方法，能够有效评估两个人的匹配程度。",
    icon: "👨‍🏫"  // 使用emoji替代头像
  },
  {
    name: "李博士",
    title: "资深婚恋顾问，情感专家",
    opinion: "在多年的婚恋咨询经验中，我发现这套测试系统能够准确反映出双方在性格、价值观等方面的契合度，对寻找合适伴侣很有帮助。",
    icon: "👩‍⚕️"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          找到你的理想伴侣 💘
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          基于科学的匹配算法，帮助你遇见命中注定的那个人
        </p>
        <Link 
          href="/test"
          className="bg-accent text-white px-8 py-3 rounded-lg text-lg hover:bg-foreground transition-colors duration-300"
        >
          开始测试
        </Link>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            成功案例 ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-background rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4 text-center">{caseStudy.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{caseStudy.name}</h3>
                <p className="text-accent mb-4 text-center">匹配度：{caseStudy.matchScore}%</p>
                <p className="text-gray-600">{caseStudy.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Opinions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            专家评价 🎓
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertOpinions.map((expert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{expert.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{expert.name}</h3>
                    <p className="text-gray-600">{expert.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{expert.opinion}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center bg-accent text-white">
        <h2 className="text-3xl font-bold mb-6">
          准备好开始寻找真爱了吗？ 💝
        </h2>
        <p className="text-xl mb-8">
          通过我们的科学测试，找到与你最匹配的另一半
        </p>
        <Link 
          href="/test"
          className="bg-white text-accent px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
        >
          立即测试
        </Link>
      </section>
    </div>
  );
}