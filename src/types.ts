export interface BehaviorCategoryResult {
  categoryId: string;
  categoryName: string;
  detected: boolean;
  level: 'none' | 'low' | 'medium' | 'high';
  explanation: string;
}

export interface NoteworthyQuote {
  quote: string;
  categoryName: string;
  reason: string;
}

export interface SuggestedReply {
  style: string;
  replyText: string;
  note: string;
}

export interface AnalysisResponseData {
  overview: string;
  isEmergency: boolean;
  emergencyNotice?: string;
  categories: BehaviorCategoryResult[];
  noteworthyQuotes: NoteworthyQuote[];
  safeGuidance: string;
  suggestedReplies: SuggestedReply[];
  actionSteps: string[];
  disclaimer: string;
}

export interface LibraryCategory {
  id: string;
  name: string;
  shortTag: string;
  iconName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  psychologicalMechanics: string;
  redFlags: string[];
  healthyVsManipulative: {
    healthy: string;
    manipulative: string;
  }[];
  realWorldScenario: {
    context: string;
    dialogue: { sender: string; text: string; isCaution?: boolean }[];
    analysis: string;
  };
  safeBoundaries: string[];
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  question: string;
  contextTag: string;
  options: {
    text: string;
    isOptimal: boolean;
    feedback: string;
  }[];
  psychologicalInsight: string;
}

export interface SampleConversation {
  id: string;
  title: string;
  tag: string;
  badgeColor: string;
  description: string;
  content: string;
}
