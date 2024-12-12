export default function Hero() {
    return (
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            AI智能恋爱契合度测试
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
            基于先进AI技术，深入分析性格特征、价值观念和生活方式，
            科学评估两个人的匹配程度。
          </p>
          <div className="mt-10">
            <a
              href="/test"
              className="rounded-full bg-accent hover:bg-foreground text-white px-8 py-4 text-lg font-semibold transition-colors duration-300"
            >
              开始测试
            </a>
          </div>
        </div>
      </section>
    );
  }