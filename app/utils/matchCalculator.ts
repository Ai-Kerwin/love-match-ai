interface BasicInfo {
  age: string;
  gender: string;
  education: string;
  location: string;
  occupation: string;
  relationship: string;
  interests: string;
}

interface Expectation {
  ageRange: {
    min: string;
    max: string;
  };
  gender: string;
  education: string;
  location: string;
  occupation: string;
  relationship: string;
  interests: string;
}

interface TestData {
  self: BasicInfo;
  expectation: Expectation;
  personality: {
    self: Record<number, string>;
    expect: Record<number, string>;
  };
  values: {
    self: Record<number, string>;
    expect: Record<number, string>;
  };
  lifestyle: {
    self: Record<number, string>;
    expect: Record<number, string>;
  };
}

interface MatchResult {
  totalScore: number;
  details: {
    basicMatch: number;
    personalityMatch: number;
    valueMatch: number;
    lifestyleMatch: number;
  };
}

export function calculateMatch(data: TestData): MatchResult {
  // 计算基础匹配度
  const basicMatch = calculateBasicMatch(data.self, data.expectation);
  
  // 计算性格匹配度
  const personalityMatch = calculatePersonalityMatch(data.personality);
  
  // 计算价值观匹配度
  const valueMatch = calculateValueMatch(data.values);
  
  // 计算生活方式匹配度
  const lifestyleMatch = calculateLifestyleMatch(data.lifestyle);
  
  // 计算总分（加权平均）
  const totalScore = Math.round(
    basicMatch * 0.3 +
    personalityMatch * 0.3 +
    valueMatch * 0.2 +
    lifestyleMatch * 0.2
  );

  return {
    totalScore,
    details: {
      basicMatch,
      personalityMatch,
      valueMatch,
      lifestyleMatch
    }
  };
}

function calculateBasicMatch(self: BasicInfo, expectation: Expectation): number {
  let score = 100;
  
  // 年龄匹配度
  const age = parseInt(self.age);
  const minAge = parseInt(expectation.ageRange.min);
  const maxAge = parseInt(expectation.ageRange.max);
  if (age < minAge || age > maxAge) {
    score -= 20;
  }
  
  // 性别匹配度
  if (self.gender !== expectation.gender) {
    score -= 30;
  }
  
  // 教育程度匹配度
  const eduLevels = {
    'highschool': 1,
    'college': 2,
    'bachelor': 3,
    'master': 4,
    'phd': 5
  };
  const selfEduLevel = eduLevels[self.education as keyof typeof eduLevels];
  const expectEduLevel = eduLevels[expectation.education as keyof typeof eduLevels];
  if (selfEduLevel < expectEduLevel) {
    score -= 10;
  }
  
  // 地理位置匹配度
  if (self.location !== expectation.location) {
    score -= 10;
  }
  
  // 感情状况匹配度
  if (self.relationship !== expectation.relationship) {
    score -= 15;
  }
  
  // 兴趣爱好匹配度
  const selfInterests = self.interests.split(',').map(i => i.trim());
  const expectInterests = expectation.interests.split(',').map(i => i.trim());
  const commonInterests = selfInterests.filter(i => expectInterests.includes(i));
  score += Math.min(commonInterests.length * 5, 15);
  
  return Math.max(60, Math.min(100, score));
}

function calculatePersonalityMatch(personality: { self: Record<number, string>, expect: Record<number, string> }): number {
  let score = 80;
  
  // 比较每个性格维度的匹配度
  Object.keys(personality.self).forEach(key => {
    const selfValue = personality.self[key];
    const expectValue = personality.expect[key];
    
    // 如果自己的性格特征符合期望，加分
    if (selfValue === expectValue) {
      score += 5;
    }
  });
  
  return Math.max(60, Math.min(100, score));
}

function calculateValueMatch(values: { self: Record<number, string>, expect: Record<number, string> }): number {
  let score = 80;
  
  // 比较每个价值观维度的匹配度
  Object.keys(values.self).forEach(key => {
    const selfValue = values.self[key];
    const expectValue = values.expect[key];
    
    // 价值观一致性评分
    if (selfValue === expectValue) {
      score += 5;
    } else if (['family', 'balance'].includes(selfValue) && ['family', 'balance'].includes(expectValue)) {
      score += 3; // 相近价值观部分加分
    }
  });
  
  return Math.max(60, Math.min(100, score));
}

function calculateLifestyleMatch(lifestyle: { self: Record<number, string>, expect: Record<number, string> }): number {
  let score = 75;
  
  // 比较每个生活方式维度的匹配度
  Object.keys(lifestyle.self).forEach(key => {
    const selfValue = lifestyle.self[key];
    const expectValue = lifestyle.expect[key];
    
    // 生活方式匹配度评分
    if (selfValue === expectValue) {
      score += 5;
    } else if (
      (selfValue === 'sometimes' && ['regular', 'rarely'].includes(expectValue)) ||
      (expectValue === 'sometimes' && ['regular', 'rarely'].includes(selfValue))
    ) {
      score += 2; // 相近生活方式部分加分
    }
  });
  
  return Math.max(60, Math.min(100, score));
}